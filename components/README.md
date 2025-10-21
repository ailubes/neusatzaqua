# Components Directory

This directory contains reusable React components for the Neusatz Aqua website.

## Components

### Header.tsx
Responsive navigation header component with sticky positioning.

**Features:**
- Logo with Neusatz Aqua branding
- Desktop horizontal navigation menu
- Mobile hamburger menu with slide-in animation
- Sticky header that stays at top on scroll
- Framer Motion animations for smooth transitions
- Hover effects with aqua gradient accents
- Brand colors: Primary (#253C84), Secondary (#72C5F0)

**Navigation Links:**
- Home (/)
- About Us (/about)
- Our Hatchery (/hatchery)
- Innovation & Research (/innovation)
- Sustainability (/sustainability)
- Gender Equality (/gender-equality)
- Partnerships (/partnerships)
- News (/news)
- Contact (/contact)

**Technical Details:**
- Client-side component ('use client')
- Uses React hooks for state management
- Prevents body scroll when mobile menu is open
- Responsive breakpoint: lg (1024px)
- Includes backdrop blur effect on mobile menu

## Structure

- `layout/` - Layout components (Header, Footer, Navigation)
- `ui/` - Reusable UI components (Buttons, Cards, Forms)
- `sections/` - Page section components (Hero, Features, CTA)
- `shared/` - Shared utility components

## Usage

All components should be created as TypeScript React components with proper type definitions.
