# PROMPTS.md

# Global Project Context

Use this context for all generations:

This project is a modern engineering-focused portfolio website built with Next.js 15, TypeScript, TailwindCSS, shadcn/ui, and MDX.

The design system follows a Linear-inspired dark interface with:

- Near-black canvas
- Subtle borders
- Minimal accent colors
- Strong typography hierarchy
- Product-oriented layouts
- Dense but readable UI

The website should feel:

- Technical
- Structured
- Calm
- Minimal
- Product-focused
- Engineering-oriented

Avoid:

- Generic startup aesthetics
- Excessive gradients
- Over-animation
- Bright colors
- Template-like sections

Follow:
- DESIGN.md
- BRAND.md
- CONTENT.md
- STRUCTURE.md
- STACK.md

---

# Homepage Generation Prompt

Create a modern portfolio homepage for a software engineering student.

Requirements:

- Next.js App Router
- TypeScript
- TailwindCSS
- Responsive layout
- Dark canvas design
- Minimal animations
- Strong typography hierarchy
- Modular sections
- Reusable components

Homepage sections:

- Hero
- Featured Projects
- Technical Focus
- Writing
- Experience
- Contact

Visual style:

- Inspired by Linear
- Dense product-oriented layout
- Subtle borders
- Large typography
- Minimal accent color usage

Avoid:

- Heavy gradients
- Excessive motion
- Generic portfolio cards
- Bright UI colors

---

# Hero Section Prompt

Generate a hero section for a software engineer portfolio website.

Requirements:

- Large display typography
- Minimal copywriting
- Clear CTA hierarchy
- Dark canvas background
- Subtle motion only

The section should communicate:

- Technical identity
- Engineering mindset
- Modern product thinking

Avoid:

- Marketing-heavy language
- Overly playful UI
- Startup clichés

---

# Project Card Prompt

Generate reusable project card components.

Requirements:

- Compact layout
- Strong hierarchy
- Category labels
- Technical stack display
- Optional links
- Subtle hover interaction

Design direction:

- Linear-inspired
- Minimal borders
- Dense information layout
- Technical product aesthetic

Avoid:

- Dribbble-style showcase cards
- Large glowing shadows
- Excessive gradients

---

# Navigation Prompt

Generate a sticky navigation bar.

Requirements:

- Minimal dark navigation
- Small typography
- Strong spacing consistency
- Responsive mobile menu
- Clean hover states

Include:

- Logo
- Projects
- Writing
- Experience
- Contact

Right side:

- GitHub
- LinkedIn
- Resume button

Avoid:

- Oversized navbar
- Decorative effects
- Transparent blur overload

---

# Typography Prompt

Generate typography styles for a modern engineering portfolio.

Requirements:

- Strong display hierarchy
- Tight letter spacing
- Dense readable body copy
- Technical visual rhythm

Use:

- Inter
- Geist Sans
- SF Pro fallback

Avoid:

- Rounded playful typography
- Oversized paragraphs
- Weak contrast

---

# Motion Prompt

Generate subtle UI animations.

Rules:

- Motion should support hierarchy
- Keep animations short
- Use fade and translate only
- Preserve professional feel

Avoid:

- Infinite loops
- Floating animations
- Heavy parallax
- Aggressive scaling

Preferred:

- Opacity transitions
- Hover elevation
- Soft reveal animations

---

# MDX Blog Prompt

Generate a technical writing page using MDX content.

Requirements:

- Clean reading experience
- Good typography spacing
- Code block styling
- Reading progress indicator
- Dark theme consistency

The page should feel like:

- Developer documentation
- Technical journal
- Engineering notebook

---

# Project Detail Prompt

Generate a detailed project case study page.

Sections:

- Overview
- Problem
- Solution
- Architecture
- Stack
- Challenges
- Learnings
- Screenshots

The page should emphasize:

- Engineering thinking
- Technical depth
- Decision making
- System structure

Avoid:

- Generic showcase format
- Excessive visual effects

---

# Contact Section Prompt

Generate a minimal contact section.

Requirements:

- Calm visual presentation
- Simple form layout
- Strong typography
- Subtle borders
- Dark theme consistency

Avoid:

- Large colorful cards
- Overly friendly marketing copy

---

# Responsive Design Prompt

Ensure the UI is fully responsive.

Requirements:

- Mobile-first
- Preserve spacing hierarchy
- Maintain readability
- Avoid cramped layouts

Breakpoints:

- Desktop
- Tablet
- Mobile

---

# Code Quality Prompt

Requirements for all generated code:

- Reusable components
- Clean architecture
- Strong TypeScript typing
- Accessibility support
- Semantic HTML
- Minimal dependencies

Avoid:

- Monolithic files
- Duplicate logic
- Inline styles
- Unused imports

---

# AI Workflow Rules

Before generating code:

1. Check DESIGN.md
2. Check BRAND.md
3. Check STRUCTURE.md
4. Preserve spacing consistency
5. Preserve typography hierarchy

When generating components:

- Keep components modular
- Use composition
- Avoid excessive abstraction
- Prioritize readability

---

# Visual Rules

The interface should feel:

- Like a modern software product
- Calm and premium
- Technically mature
- Minimal but dense

The interface should NOT feel:

- Like a startup landing page template
- Like a colorful portfolio
- Like a design showcase experiment

---

# Long-Term Direction

Future generations should support:

- Technical writing
- Research documentation
- Interactive demos
- AI-assisted workflows
- Developer-focused experiences
