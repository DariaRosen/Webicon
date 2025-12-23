# Webicon - Website

A modern, responsive website built with Next.js 15 and SCSS, featuring dark mode and bilingual support (English/Hebrew).

## Features

- 🌓 **Dark Mode Toggle** - Switch between light and dark themes
- 🌐 **Bilingual Support** - English and Hebrew with RTL support
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- ⚡ **Next.js 15** - Built with the latest Next.js features
- 🎨 **SCSS Modules** - Modular styling with SCSS

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

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

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

