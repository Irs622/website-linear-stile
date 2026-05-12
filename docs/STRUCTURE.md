# STRUCTURE.md

# Project Structure

This project follows a modular and content-driven architecture using Next.js App Router.

The structure prioritizes:

- Maintainability
- Scalability
- Reusable components
- Clear separation of concerns
- AI-friendly development workflow

---

# Root Structure

project-root/
├── public/
├── src/
├── content/
├── docs/
├── .env.example
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md

---

# Public Directory

/public

Purpose:
Static assets.

Contents:

- Images
- Icons
- Favicons
- OG images
- Static illustrations
- Resume PDF

Rules:

- Optimize images
- Use descriptive filenames
- Avoid large assets
- Prefer `.webp`

Example:

public/
├── images/
├── icons/
├── og/
└── resume/

---

# Source Directory

/src

Purpose:
Application source code.

Main structure:

src/
├── app/
├── components/
├── content/
├── data/
├── hooks/
├── lib/
├── styles/
├── types/
└── utils/

---

# App Directory

/src/app

Purpose:
Application routing using Next.js App Router.

Rules:

- Use route groups when necessary
- Keep layouts modular
- Prefer Server Components
- Avoid unnecessary client components

Example:

app/
├── layout.tsx
├── page.tsx
├── projects/
├── writing/
├── about/
├── contact/
└── api/

---

# Components Directory

/src/components

Purpose:
Reusable UI components.

Structure:

components/
├── ui/
├── layout/
├── sections/
├── cards/
├── typography/
└── motion/

---

## UI Components

/components/ui

Purpose:
Base reusable UI components.

Examples:

- Button
- Input
- Dialog
- Badge
- Tabs

Rules:

- Keep components generic
- Avoid business logic
- Maintain accessibility

---

## Layout Components

/components/layout

Purpose:
Application layout components.

Examples:

- Navbar
- Footer
- Container
- Sidebar

---

## Section Components

/components/sections

Purpose:
Homepage and page sections.

Examples:

- HeroSection
- ProjectsSection
- ExperienceSection
- ContactSection

Rules:

- Keep sections modular
- Separate content from structure

---

## Card Components

/components/cards

Purpose:
Project and content presentation cards.

Examples:

- ProjectCard
- ExperienceCard
- WritingCard

---

## Typography Components

/components/typography

Purpose:
Typography abstraction.

Examples:

- Heading
- Text
- Eyebrow
- CodeBlock

---

## Motion Components

/components/motion

Purpose:
Reusable motion wrappers.

Examples:

- FadeIn
- StaggerContainer
- HoverReveal

Rules:

- Keep motion subtle
- Reuse animation logic

---

# Content Directory

/content

Purpose:
MDX and markdown content.

Structure:

content/
├── projects/
├── writing/
├── notes/
└── research/

---

## Projects Content

/content/projects

Contains:

- Project case studies
- Technical breakdowns
- Architecture notes

Example:

projects/
├── verilog.mdx
├── sleeptrack.mdx
└── portfolio.mdx

---

## Writing Content

/content/writing

Contains:

- Technical articles
- Development notes
- Research writing

---

# Data Directory

/src/data

Purpose:
Structured static data.

Examples:

- Navigation items
- Social links
- Skills
- Metadata

Example:

data/
├── navigation.ts
├── socials.ts
└── metadata.ts

Rules:

- Store configuration here
- Avoid hardcoded repeated values

---

# Hooks Directory

/src/hooks

Purpose:
Custom React hooks.

Examples:

- useTheme
- useScroll
- useCommandMenu

Rules:

- Keep hooks reusable
- Avoid UI-heavy hooks

---

# Lib Directory

/src/lib

Purpose:
Core libraries and integrations.

Examples:

- mdx.ts
- analytics.ts
- email.ts

Rules:

- External integrations only
- Avoid unrelated utilities

---

# Styles Directory

/src/styles

Purpose:
Global styles and tokens.

Contents:

- globals.css
- typography.css

Rules:

- Tailwind first
- Minimal custom CSS

---

# Types Directory

/src/types

Purpose:
Global TypeScript types.

Examples:

- project.ts
- writing.ts
- navigation.ts

Rules:

- Keep types centralized
- Avoid duplicate interfaces

---

# Utils Directory

/src/utils

Purpose:
Pure utility functions.

Examples:

- formatDate
- slugify
- readingTime

Rules:

- No side effects
- Pure functions only

---

# API Structure

/src/app/api

Purpose:
Server routes and backend handlers.

Examples:

api/
├── contact/
└── analytics/

Rules:

- Keep endpoints minimal
- Avoid heavy backend logic initially

---

# Naming Conventions

Components:
PascalCase

Examples:
- ProjectCard.tsx
- HeroSection.tsx

---

Hooks:
camelCase with `use`

Examples:
- useTheme.ts
- useScroll.ts

---

Utilities:
camelCase

Examples:
- formatDate.ts
- slugify.ts

---

MDX Files:
kebab-case

Examples:
- system-design-notes.mdx
- verilog-audit-engine.mdx

---

# Import Rules

Preferred:

- Absolute imports
- Aliases with `@/`

Example:

import { Button } from "@/components/ui/button"

Avoid:

- Deep relative imports
- "../../../"

---

# Architecture Principles

The project should prioritize:

- Readability
- Reusability
- Modularity
- Content scalability
- Long-term maintainability

Avoid:

- Overengineering
- Massive component files
- Tight coupling
- Unclear folder hierarchy

---

# AI Development Workflow

AI tools should:

- Respect folder boundaries
- Preserve naming conventions
- Create reusable components
- Avoid duplicate logic
- Keep architecture modular

---

# Scalability Direction

The structure should support future additions:

- Blog system
- Technical writing platform
- CMS integration
- Project case studies
- Research documentation
- Interactive demos

Without major restructuring.

---

# Final Principle

The structure should feel:

- Organized
- Predictable
- Engineering-oriented
- Minimal but scalable

Not:

- Enterprise-heavy
- Overly abstract
- Template-generated
- Randomly organized
