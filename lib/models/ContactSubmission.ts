export interface ContactSubmission {
  _id?: string;
  name: string;
  email: string;
  message: string;
  ipAddress?: string;
  userAgent?: string;
  createdAt: Date;
  emailSent: boolean;
  emailId?: string;
}

