# Neusatz Aqua - Next.js Setup

This document describes the Next.js project setup completed for the Neusatz Aqua website.

## Project Configuration

### Technology Stack
- **Next.js**: 15.5.6 (App Router)
- **React**: 19.2.0
- **TypeScript**: 5.9.3 (strict mode enabled)
- **Tailwind CSS**: 3.4.18
- **Additional Libraries**:
  - react-icons: 5.5.0
  - framer-motion: 12.23.24

### Folder Structure

```
/mnt/g/www/neusatzaqua.com/
├── app/                    # Next.js App Router directory
│   ├── globals.css        # Global styles with Tailwind directives
│   ├── layout.tsx         # Root layout with SEO metadata
│   └── page.tsx           # Home page component
├── components/            # Reusable React components
│   └── README.md          # Component organization guidelines
├── lib/                   # Utility functions and helpers
│   └── README.md          # Library organization guidelines
├── public/                # Static assets
│   ├── neusatz-aqua-logo.png
│   ├── GEP.pdf
│   └── AI-for-Aquaculture-Behavior-Insight.pdf
├── .eslintrc.json        # ESLint configuration
├── next.config.ts        # Next.js configuration
├── postcss.config.mjs    # PostCSS configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project dependencies
```

## Brand Colors (Tailwind)

The following custom colors are configured in `tailwind.config.ts`:

- **Primary (Deep Blue)**: `#253C84` - Available as `primary`, `primary-50` through `primary-900`
- **Secondary (Light Blue)**: `#72C5F0` - Available as `secondary`, `secondary-50` through `secondary-900`
- **Accent (Ukrainian Yellow)**: `#FFD400` - Available as `accent`, `accent-50` through `accent-900`
- **Neutral (White/Gray)**: `#FFFFFF` - Available as `neutral`, `neutral-50` through `neutral-900`

## Typography

- **Font**: Poppins (loaded from Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Fallbacks**: Inter, system-ui, sans-serif

## Available Scripts

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build production bundle
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Custom CSS Utilities

The following custom utility classes are available in `globals.css`:

### Button Styles
- `.btn-primary` - Primary button with deep blue background
- `.btn-secondary` - Secondary button with light blue background
- `.btn-accent` - Accent button with yellow background
- `.btn-outline` - Outlined button with hover fill

### Layout Utilities
- `.card` - Card component with shadow and hover effects
- `.section-padding` - Consistent section padding
- `.container-custom` - Max-width container with responsive padding

### Animations
- `.animate-fade-in` - Fade in animation
- `.animate-slide-up` - Slide up from bottom
- `.animate-slide-down` - Slide down from top

## SEO Configuration

The root layout (`app/layout.tsx`) includes comprehensive SEO metadata:
- Open Graph tags for social sharing
- Twitter Card support
- Structured metadata for search engines
- Canonical URLs
- Robots directives

## Next Steps

1. Create layout components (Header, Footer, Navigation)
2. Build page sections (Hero, Features, Products, CTA)
3. Implement responsive design
4. Add animations with Framer Motion
5. Integrate content from PRD and GEP documents
6. Set up form handling and API routes
7. Optimize images and assets
8. Configure deployment (Vercel/other hosting)

## Development Notes

- TypeScript is configured with strict mode
- ESLint is configured with Next.js recommended rules
- Tailwind CSS v3 is used for better stability with Next.js 15
- All paths use the `@/*` import alias for cleaner imports
- The project uses the Next.js App Router (not Pages Router)
