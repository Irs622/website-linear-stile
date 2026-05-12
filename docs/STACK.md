# STACK.md

# Core Stack

## Frontend Framework

### Next.js 15

Purpose:
Primary application framework for routing, rendering, SEO, and server-side features.

Why:

- Excellent Vercel integration
- App Router support
- Server Components
- Strong ecosystem
- AI-friendly architecture
- Scalable structure

Rules:

- Use App Router only
- Prefer Server Components
- Use Server Actions when possible
- Avoid legacy Pages Router

---

## Language

### TypeScript

Purpose:
Primary language for type safety and maintainability.

Rules:

- Strict mode enabled
- Avoid `any`
- Create reusable types
- Use interface/type consistently

---

# Styling System

## TailwindCSS

Purpose:
Primary styling system.

Why:

- Fast iteration
- Consistent spacing
- AI-friendly utility system
- Easy responsive design

Rules:

- Avoid inline CSS
- Avoid custom CSS unless necessary
- Use utility-first workflow
- Preserve spacing consistency

---

## shadcn/ui

Purpose:
Reusable UI component system.

Why:

- Accessible components
- Modern architecture
- Easy customization
- Works well with Tailwind

Rules:

- Customize components carefully
- Maintain dark theme consistency
- Avoid unnecessary component libraries

---

## Framer Motion

Purpose:
Subtle interaction and motion system.

Rules:

- Use minimal animations
- Avoid excessive motion
- Prioritize UX clarity
- Motion should support hierarchy

Preferred Motion:

- Fade
- Opacity transition
- Soft translate
- Hover transitions

Avoid:

- Floating animation
- Infinite loops
- Aggressive parallax

---

# Content System

## MDX

Purpose:
Content rendering for technical writing, notes, and documentation.

Why:

- Markdown flexibility
- React component support
- Structured content workflow

Rules:

- Keep content modular
- Separate content from UI
- Use reusable content layouts

---

# Deployment

## Vercel

Purpose:
Hosting and deployment platform.

Why:

- Native Next.js support
- Fast deployment workflow
- Excellent developer experience
- Automatic CI/CD

Rules:

- Production branch: main
- Preview deployments enabled
- Optimize image delivery
- Use environment variables properly

---

# Fonts

## Primary Fonts

- Inter
- Geist Sans
- SF Pro Display fallback

---

## Mono Fonts

- Geist Mono
- JetBrains Mono

---

# Icons

## Lucide React

Purpose:
Primary icon system.

Rules:

- Use minimal icons
- Avoid decorative icon overload
- Keep icon sizes consistent

---

# Database

## Current Database Strategy

Portfolio version:
No heavy database required initially.

Preferred options if needed:

- PostgreSQL
- Supabase
- Firebase

Use database only when necessary.

Avoid premature complexity.

---

# Analytics

## Recommended

- Vercel Analytics
- Plausible Analytics

Avoid:

- Heavy tracking systems
- Excessive third-party scripts

---

# Forms & Contact

## Recommended Options

- Resend
- Formspree
- Server Actions

Rules:

- Keep forms minimal
- Avoid complex backend initially

---

# File Structure

Preferred structure:

src/
├── app/
├── components/
├── content/
├── lib/
├── hooks/
├── types/
├── styles/
└── data/

---

# Architecture Principles

Preferred Architecture:

- Modular
- Reusable
- Maintainable
- Content-driven
- Component-based

Avoid:

- Monolithic components
- Deep nesting
- Overengineering
- Unnecessary abstractions

---

# Performance Rules

Prioritize:

- Fast initial load
- SEO optimization
- Minimal client-side JavaScript
- Optimized images
- Accessibility

Avoid:

- Heavy animation libraries
- Large dependencies
- Excessive state management
- Unoptimized assets

---

# State Management

Preferred:

- React state
- Context API (small scope)

Avoid initially:

- Redux
- MobX
- Complex global stores

Only introduce advanced state management if necessary.

---

# AI Coding Rules

When generating code:

- Follow DESIGN.md
- Follow BRAND.md
- Follow CONTENT.md
- Use reusable components
- Preserve spacing consistency
- Preserve typography hierarchy
- Keep code readable
- Prefer composition over complexity

Avoid:

- Random libraries
- Inconsistent styling
- Overly abstract architecture
- Large single-file components

---

# Dependency Philosophy

Before adding dependencies:

Ask:

1. Is this truly necessary?
2. Can this be solved natively?
3. Does this increase maintenance cost?
4. Is this compatible with long-term scalability?

Preferred approach:

- Fewer dependencies
- Higher maintainability
- Stable ecosystem tools

---

# Long-Term Technical Direction

The portfolio should evolve toward:

- Technical writing platform
- Product engineering showcase
- Research documentation
- AI-assisted workflow experimentation
- Developer-focused digital identity
