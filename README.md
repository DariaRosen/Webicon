# Webicon - Website

A modern, responsive website built with Next.js 15 and SCSS, featuring dark mode and bilingual support (English/Hebrew).

## Features

- 🌓 **Dark Mode Toggle** - Switch between light and dark themes
- 🌐 **Bilingual Support** - English and Hebrew with RTL support
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- ⚡ **Next.js 15** - Built with the latest Next.js features
- 🎨 **SCSS Modules** - Modular styling with SCSS
- 📧 **Contact Form** - Functional contact form with Resend email integration
- 🗄️ **MongoDB Storage** - Optional database storage for contact submissions
- 🛡️ **Rate Limiting** - Protection against spam and abuse
- ✅ **Input Validation** - Comprehensive client and server-side validation

## Pages

- Home
- About Us
- Our Projects
- Our Products
- Reviews
- Our Clients
- Contact Us

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- MongoDB database (optional, for contact form submissions)
- Resend API key (for email functionality)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env.local` file in the root directory with the following variables:
```bash
# Resend Email Service (Required)
RESEND_API_KEY=your_resend_api_key_here
RESEND_FROM_EMAIL=contact@webicon.com  # Optional, defaults to onboarding@resend.dev
RESEND_TO_EMAIL=your-email@gmail.com   # Optional, defaults to daria.sk135@gmail.com

# MongoDB (Optional - contact form will work without it)
# You can use either MONGO_URL or MONGODB_URI
# Get your connection string from MongoDB Atlas dashboard
MONGO_URL=your_mongodb_connection_string_here
# OR
MONGODB_URI=your_mongodb_connection_string_here
MONGODB_DB_NAME=webicon  # Optional, defaults to 'webicon'
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### MongoDB Setup

The contact form can save submissions to MongoDB for record-keeping. To enable this:

1. Create a MongoDB Atlas account at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas) (free tier available)
2. Create a new cluster and database
3. Get your connection string (MongoDB URI)
4. Add it to your `.env.local` file as `MONGODB_URI`

**Note:** The contact form will work without MongoDB - submissions will still be sent via email. MongoDB is optional and only used for storing submission records.

## Build

To create a production build:

```bash
npm run build
npm start
```

## Project Structure

```
├── app/              # Next.js app directory
│   ├── about/        # About page
│   ├── clients/      # Clients page
│   ├── contact/      # Contact page
│   ├── products/     # Products page
│   ├── projects/     # Projects page
│   ├── reviews/      # Reviews page
│   ├── layout.tsx    # Root layout
│   └── page.tsx      # Home page
├── components/        # React components
│   ├── Footer/       # Footer component
│   ├── Header/       # Header component
│   ├── LanguageToggle/  # Language switcher
│   └── ThemeToggle/  # Theme switcher
├── contexts/         # React contexts
│   ├── LanguageContext.tsx
│   └── ThemeContext.tsx
├── styles/           # SCSS files
│   ├── _mixins.scss
│   └── _variables.scss
└── public/           # Static assets
```

## Technologies

- Next.js 15
- React 19
- TypeScript
- SCSS Modules
- CSS Variables for theming


