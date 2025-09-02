# Edestory - Corporate Landing Page

> AI-powered SaaS platform for direct sales, freeing manufacturers from marketplace dependency

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Git

### Installation

```bash
# Clone the repository
git clone <YOUR_GIT_URL>
cd edestory-landing

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

The application will be available at `http://localhost:8080`

## 🛠 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run build:dev    # Build for development
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

### Tech Stack

- **Framework:** Vite + React 18
- **Styling:** Tailwind CSS + CSS Variables
- **TypeScript:** Strict mode enabled
- **UI Components:** Radix UI + shadcn/ui
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod
- **SEO:** React Helmet Async

### Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Base UI components (shadcn/ui)
│   ├── sections/       # Page sections
│   └── forms/          # Form components
├── pages/              # Page components
├── lib/                # Utilities and helpers
│   ├── seo.ts         # SEO utilities
│   └── utils.ts       # General utilities
├── hooks/              # Custom React hooks
├── contexts/           # React contexts
└── assets/             # Static assets
```

## 🌐 Internationalization

The site supports multiple languages:
- **Russian (ru)** - Primary language
- **English (en)** - International market

Language switching is available in the header navigation.

## 🎨 Design System

### Colors
- **Graphite:** `#3d3d3d` - Main banners and headings
- **Black:** `#171717` - Body text
- **Gold:** `#E6A853` - Accents and buttons
- **Burgundy:** `#8B2635` - Negative accents

### Typography
- **Font:** Montserrat (300, 400, 500, 600, 700)
- **Display:** `font-display: swap` for performance
- **Fallback:** system-ui, sans-serif

## 📈 SEO & Performance

### SEO Features
- Meta tags optimization
- Open Graph and Twitter Cards
- JSON-LD structured data
- Sitemap generation
- Multi-language hreflang tags

### Performance Targets
- Lighthouse Performance: ≥95
- Accessibility: ≥95
- Best Practices: ≥95
- SEO: ≥95

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Environment Variables
Copy `.env.example` to `.env.local` and configure:
- Analytics tracking IDs
- API endpoints
- Contact form webhooks
- Social media links

### Deployment Platforms
Ready for deployment on:
- Vercel (recommended)
- Netlify
- Google Cloud Platform
- Any static hosting service

## 📋 Features

### Core Pages
- **Home** - Main landing page with value proposition
- **Product** - AI modules and features overview
- **Pricing** - 20% profit-sharing model details
- **Solutions** - Industry-specific solutions
- **Cases** - Customer success stories
- **Resources** - Blog, guides, and templates
- **Contact** - Contact forms and company info

### Key Components
- Responsive hero sections
- Interactive calculator
- AI agent modules showcase
- Customer testimonials
- Multi-language support
- Contact forms with validation
- SEO-optimized structure

## 🔧 Configuration

### TypeScript
Strict mode enabled with comprehensive type checking.

### ESLint
Configured with React and TypeScript rules for code quality.

### Tailwind CSS
Custom design system with CSS variables for consistent theming.

## 📞 Support

For technical questions or issues:
- **Email:** support@ede-story.com
- **Documentation:** Check this README and inline code comments

## 📄 License

Copyright © 2025 Edestory. All rights reserved.

---

**Built with ❤️ for manufacturers seeking marketplace independence**