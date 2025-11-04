# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 website for OfficeArt (오피스아트), a premium co-working space in Seoul, Korea. The site is built with TypeScript, Tailwind CSS, and uses the App Router architecture.

**Current Status:**
- Single location operation (Yeongdeungpo branch only)
- Bulgwang location has been closed
- Non-resident office services (비상주 사무실) available for business registration

**Key Services:**
- Monthly desk rental (25만원/월) with premium chairs and L-shaped desks
- Non-resident office service (3.3만원/월) for business registration
- Meeting rooms, unlimited coffee, 24/7 access

## Development Commands

### Core Commands
- `npm run dev` - Start development server at http://localhost:3000
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm test` - Run Jest tests
- `npm run analyze` - Analyze bundle size (sets ANALYZE=true)

### Testing
- Test files are located alongside components with `.test.tsx` extension
- Jest is configured with jsdom environment and React Testing Library
- Mock files available: `__mocks__/fileMock.js` and `__mocks__/styleMock.js`
- Run specific tests: `npm test -- --testPathPattern=ComponentName`
- Jest setup includes module path mapping that matches TypeScript aliases
- Test setup file: `jest.setup.js` imports `@testing-library/jest-dom` for DOM assertions

## Architecture

### Directory Structure
- `src/app/` - Next.js App Router pages and API routes
- `src/components/` - Reusable React components
- `src/types/` - TypeScript type definitions
- `src/lib/` - Utility libraries and configurations
- `public/` - Static assets including fonts and images

### Key Components Architecture
- **Layout System**: Root layout (`src/app/layout.tsx`) includes Header, Footer, AIChatWidget, ErrorBoundary, and PerformanceMetrics
- **Page Structure**: Pages are composed of section components wrapped in `ScrollAnimationWrapper`
- **Form Handling**: Contact forms use `react-hook-form` with EmailJS integration and TypeScript interfaces
- **Multi-location Support**: Location data model (`src/types/location.ts`) with comprehensive facility information
- **Styling**: Custom Tailwind config with Korean brand colors, extensive typography system, and Gmarket Sans fonts
- **Data Layer**: Structured location data in `src/data/locations.ts` with utility functions

### Font Configuration
- Primary: Gmarket Sans (local fonts from `public/fonts/`)
- Secondary: Noto Sans KR (Google Fonts)
- CSS variables: `--font-gmarket-sans` and `--font-noto-sans-kr`

### Color System
- Primary: `#2563EB` (blue) with dark variant `#1D4ED8`
- Accent: `#059669` (green) for success and secondary actions
- Background: `#FFFFFF` (main) and `#F8FAFC` (section backgrounds)
- Text: `#424242` (primary), `#757575` (secondary)
- Extended color palette with grays, state colors, and brand integrations

## Configuration Files

### Next.js Configuration (`next.config.mjs`)
- Bundle analyzer enabled with `ANALYZE=true`
- Standalone output for Vercel deployment
- Image optimization disabled for static export compatibility
- Server actions allowed for specific origins (`officeart.co.kr`, `localhost:3000`)
- Remote image patterns configured for placeholder services
- ESLint builds ignored for faster deployment

### TypeScript (`tsconfig.json`)
- Path aliases: `@/*` maps to `./src/*`
- Strict mode enabled with comprehensive type checking
- Target: ES2017 for broad browser compatibility
- Module path mapping matches Jest configuration

### Tailwind (`tailwind.config.js`)
- Custom navigation breakpoints: `nav` (1280px), `nav-full` (1440px), `xxl` (1440px)
- Updated modern color system with primary `#2563EB` (blue) and accent green `#059669`
- Extended typography tokens optimized for Korean text with responsive scaling
- Enhanced shadow system with card-specific shadows
- CSS variable integration for Next.js fonts (`--font-gmarket-sans`, `--font-noto-sans-kr`)
- Background gradients and enhanced visual system

## API Integration

### Chat API (`/api/chat`)
- Uses OpenRouter API with Google Gemini 2.0 Flash model for AI chat functionality
- Requires `OPENROUTER_API_KEY` environment variable
- Korean-language AI assistant with embedded OfficeArt business knowledge
- Comprehensive error handling with Korean messages
- Client helper: `src/lib/openrouter.ts` provides `queryOpenRouter(prompt: string)`

### Contact Forms
- EmailJS integration for form submissions (`@emailjs/browser`)
- Type-safe with `ContactFormData` interface in `src/types/contactForm.ts`
- Supports multiple service types: desk rental, non-resident office, general inquiries
- Location automatically set to Yeongdeungpo (single location)
- Validation using react-hook-form with custom error messages

## Deployment Notes

- Configured for Vercel deployment with standalone output
- Static export compatibility (images unoptimized)
- Custom domain: officeart.co.kr
- SEO optimized with structured data (JSON-LD)

## Korean Localization

- All content in Korean language
- Korean font optimization (Gmarket Sans)
- Korean SEO metadata and structured data
- Locale set to `ko_KR` for Open Graph

## Architecture Notes

**Single Location Implementation:**
- Location data maintained in array format for potential future expansion
- All location references default to Yeongdeungpo
- Removed multi-location selection UI components
- Redirects from old `/locations` and `/location` routes to `/contact`

## Testing Strategy

- Component testing with Jest and React Testing Library
- Mock files for static assets and styles (`__mocks__/fileMock.js`, `__mocks__/styleMock.js`)
- Module path mapping matches TypeScript aliases
- Jest setup file: `jest.setup.js` imports `@testing-library/jest-dom` for DOM assertions

# important-instruction-reminders
Do what has been asked; nothing more, nothing less.
NEVER create files unless they're absolutely necessary for achieving your goal.
ALWAYS prefer editing an existing file to creating a new one.
NEVER proactively create documentation files (*.md) or README files. Only create documentation files if explicitly requested by the User.