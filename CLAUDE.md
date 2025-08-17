# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 personal music website for "David Vincent," a French rock musician from Arles, Provence. The site is built with:
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4 with extensive custom utilities
- **Typography**: Google Fonts (Inter, Oswald, Bebas Neue)
- **UI Components**: Configured for shadcn/ui (New York style)
- **Language**: French (site is in French)

## Development Commands

- `npm run dev --turbopack`: Start development server with Turbopack
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint

## Architecture & Code Organization

### File Structure
```
src/
├── app/
│   ├── globals.css     # Main CSS with extensive custom utilities
│   ├── layout.tsx      # Root layout with font loading
│   └── page.tsx        # Main homepage (single page site)
└── lib/
    └── utils.ts        # Utility functions (cn helper)
```

### Key Design Patterns

**Single Page Application**: The entire site is contained in `src/app/page.tsx` with sections for:
- Hero with video background (`/hero-video.mp4`)
- Music section with track cards
- Bio section
- News/concerts section
- Footer with contact info

**Custom CSS Architecture**: `globals.css` contains extensive custom utilities:
- Rock-themed animations (fire-flicker, lightning, sound-wave)
- Custom gradients and effects (rock-gradient, brutal-text, fire-glow)
- Typography utilities using CSS custom properties for fonts
- Responsive animations and particle effects

**Typography System**:
- Inter: Default sans-serif (`--font-inter`)
- Oswald: Rock/display font (`--font-oswald`) 
- Bebas Neue: Display titles (`--font-bebas`)

### Styling Conventions

- Uses Tailwind v4 with extensive custom utilities in `@layer utilities`
- Color scheme: Black/gray backgrounds with red/orange/yellow accents
- Heavy use of gradients, shadows, and animations for rock aesthetic
- Responsive design with mobile-first approach
- Dark theme ready (CSS custom properties defined)

### Content Management

**Static Content**: All content is hardcoded in French:
- Artist name: "David Vincent"
- Location: Arles, Provence
- YouTube channel: `https://www.youtube.com/@DavidVincent-ts5ex`
- Track names: "THE SWEET CHILD", "LA VILLE", "LA VIE ME VA"

**Assets**: Public folder contains:
- `logo.jpg`: Artist logo/profile image
- `hero-video.mp4`: Background video for hero section
- Various artist photos in `/public/image/` directory

## Development Guidelines

**When editing styles**: Prefer using existing custom utilities from `globals.css` over inline styles. The project has extensive custom animations and effects that should be reused.

**When adding content**: Maintain French language and rock aesthetic. Use existing typography patterns with Oswald for headings and Inter for body text.

**When working with components**: This is a single-page site, so major structural changes should be made in `src/app/page.tsx`.

**Asset optimization**: When adding new media, ensure video/images are optimized for web and placed in appropriate public directories.