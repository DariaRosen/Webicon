import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { ObjectId } from 'mongodb';
import { getDatabase } from '@/lib/mongodb';
import { ContactSubmission } from '@/lib/models/ContactSubmission';

const resendApiKey = process.env.RESEND_API_KEY;
if (!resendApiKey) {
  console.warn('RESEND_API_KEY is not set in environment variables');
}

const resend = new Resend(resendApiKey);

// Rate limiting: Simple in-memory store (for production, use Redis or database)
interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();

// Rate limit configuration
const RATE_LIMIT_MAX_REQUESTS = 3; // Max 3 submissions
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // Per hour (in milliseconds)

// Helper function to get client IP
function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  return forwarded?.split(',')[0] || realIP || 'unknown';
}

// Rate limiting check
function checkRateLimit(ip: string): { allowed: boolean; remaining: number; resetAt: number } {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);

  if (!entry || now > entry.resetTime) {
    // Create new entry or reset expired one
    rateLimitStore.set(ip, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW_MS,
    });
    return {
      allowed: true,
      remaining: RATE_LIMIT_MAX_REQUESTS - 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    };
  }

  if (entry.count >= RATE_LIMIT_MAX_REQUESTS) {
    return {
      allowed: false,
      remaining: 0,
      resetAt: entry.resetTime,
    };
  }

  entry.count++;
  return {
    allowed: true,
    remaining: RATE_LIMIT_MAX_REQUESTS - entry.count,
    resetAt: entry.resetTime,
  };
}

// Clean up old entries periodically (simple cleanup)
setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of rateLimitStore.entries()) {
    if (now > entry.resetTime) {
      rateLimitStore.delete(ip);
    }
  }
}, RATE_LIMIT_WINDOW_MS);

// Input sanitization
function sanitizeInput(input: string, maxLength: number): string {
  return input
    .trim()
    .slice(0, maxLength)
    .replace(/[<>]/g, ''); // Remove potential HTML tags
}

// Enhanced email validation
function isValidEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegex.test(email) && email.length <= 254;
}

export async function POST(request: NextRequest) {
  try {
    if (!resendApiKey) {
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact the administrator.' },
        { status: 500 }
      );
    }

    // Rate limiting check
    const clientIP = getClientIP(request);
    const rateLimit = checkRateLimit(clientIP);

    if (!rateLimit.allowed) {
      const resetDate = new Date(rateLimit.resetAt);
      return NextResponse.json(
        {
          error: `Too many requests. Please try again after ${resetDate.toLocaleTimeString()}.`,
          retryAfter: Math.ceil((rateLimit.resetAt - Date.now()) / 1000),
        },
        {
          status: 429,
          headers: {
            'Retry-After': Math.ceil((rateLimit.resetAt - Date.now()) / 1000).toString(),
            'X-RateLimit-Limit': RATE_LIMIT_MAX_REQUESTS.toString(),
            'X-RateLimit-Remaining': rateLimit.remaining.toString(),
            'X-RateLimit-Reset': rateLimit.resetAt.toString(),
          },
        }
      );
    }

    const body = await request.json();
    let { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Sanitize and validate inputs
    name = sanitizeInput(name, 100);
    email = sanitizeInput(email, 254);
    message = sanitizeInput(message, 5000);

    if (name.length < 2) {
      return NextResponse.json(
        { error: 'Name must be at least 2 characters long' },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    if (message.length < 10) {
      return NextResponse.json(
        { error: 'Message must be at least 10 characters long' },
        { status: 400 }
      );
    }

    if (message.length > 5000) {
      return NextResponse.json(
        { error: 'Message must be less than 5000 characters' },
        { status: 400 }
      );
    }

    // Prepare submission data for MongoDB
    const userAgent = request.headers.get('user-agent') || undefined;
    const submissionData: Omit<ContactSubmission, '_id'> = {
      name,
      email,
      message,
      ipAddress: clientIP !== 'unknown' ? clientIP : undefined,
      userAgent,
      createdAt: new Date(),
      emailSent: false,
    };

    // Save to MongoDB first (even if email fails, we have the submission)
    let submissionId: ObjectId | undefined;
    let emailId: string | undefined;
    let emailSent = false;

    try {
      const db = await getDatabase();
      if (db) {
        const collection = db.collection<ContactSubmission>('contact_submissions');
        const result = await collection.insertOne(submissionData as any);
        submissionId = result.insertedId;
        console.log('Contact submission saved to MongoDB:', submissionId.toString());
      } else {
        console.warn('MongoDB not available. Skipping database save.');
      }
    } catch (dbError) {
      console.error('Error saving to MongoDB:', dbError);
      // Continue even if DB save fails - we still want to try sending the email
    }

    // Send email using Resend
    // Use custom domain email if configured, otherwise fallback to Resend's default
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
    const toEmail = process.env.RESEND_TO_EMAIL || 'daria.sk135@gmail.com';

    try {
      const emailResult = await resend.emails.send({
        from: fromEmail,
        to: toEmail,
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <hr>
          <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
        `,
        replyTo: email,
      });

      emailId = emailResult.id;
      emailSent = true;

      // Update MongoDB record with email status
      if (submissionId) {
        try {
          const db = await getDatabase();
          if (db) {
            const collection = db.collection<ContactSubmission>('contact_submissions');
            await collection.updateOne(
              { _id: submissionId },
              {
                $set: {
                  emailSent: true,
                  emailId: emailId,
                },
              }
            );
          }
        } catch (updateError) {
          console.error('Error updating MongoDB with email status:', updateError);
          // Non-critical error, continue
        }
      }

      console.log('Contact form submission processed:', {
        submissionId,
        name,
        email,
        emailId,
        timestamp: new Date().toISOString(),
      });
    } catch (emailError) {
      console.error('Error sending email:', emailError);
      
      // Update MongoDB record to indicate email failed
      if (submissionId) {
        try {
          const db = await getDatabase();
          if (db) {
            const collection = db.collection<ContactSubmission>('contact_submissions');
            await collection.updateOne(
              { _id: submissionId },
              {
                $set: {
                  emailSent: false,
                },
              }
            );
          }
        } catch (updateError) {
          console.error('Error updating MongoDB with email failure:', updateError);
        }
      }

      // Still return success if saved to DB, but log the email error
      // In production, you might want to return an error here
      if (!submissionId) {
        throw emailError; // Only throw if we also failed to save to DB
      }
    }

    return NextResponse.json(
      { message: 'Message sent successfully!' },
      {
        status: 200,
        headers: {
          'X-RateLimit-Limit': RATE_LIMIT_MAX_REQUESTS.toString(),
          'X-RateLimit-Remaining': rateLimit.remaining.toString(),
          'X-RateLimit-Reset': rateLimit.resetAt.toString(),
        },
      }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}

