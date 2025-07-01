# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 website for OfficeArt (오피스아트), a premium co-working space in Seoul, Korea. The site is built with TypeScript, Tailwind CSS, and uses the App Router architecture.

**Current Status & Renewal Plan:**
- Currently features single location (Yeongdeungpo branch)
- Planning expansion to multi-location architecture (Yeongdeungpo + Bulgwang)
- Adding non-resident office services (비상주사무실) for business registration
- Comprehensive renewal plan documented in `docs/officeart_renewal_plan.md`

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
- Jest is configured with jsdom environment
- Run specific tests: `npm test -- --testPathPattern=ComponentName`

## Architecture

### Directory Structure
- `src/app/` - Next.js App Router pages and API routes
- `src/components/` - Reusable React components
- `src/types/` - TypeScript type definitions
- `src/lib/` - Utility libraries and configurations
- `public/` - Static assets including fonts and images

### Key Components Architecture
- **Layout System**: Root layout (`src/app/layout.tsx`) includes Header, Footer, and AIChatWidget
- **Page Structure**: Pages are composed of section components wrapped in `ScrollAnimationWrapper`
- **Form Handling**: Contact forms use `react-hook-form` with EmailJS integration
- **Styling**: Custom Tailwind config with Korean brand colors and Gmarket Sans fonts

### Font Configuration
- Primary: Gmarket Sans (local fonts from `public/fonts/`)
- Secondary: Noto Sans KR (Google Fonts)
- CSS variables: `--font-gmarket-sans` and `--font-noto-sans-kr`

### Color System
- Primary: `#E2690D` (orange)
- Background: `#FFFBF0` (cream) and `#FFFFFF` (white)
- Text: `#424242` (primary), `#757575` (secondary)

## Configuration Files

### Next.js Configuration
- Bundle analyzer enabled with `ANALYZE=true`
- Standalone output for Vercel deployment
- Image optimization disabled for static export
- Server actions allowed for specific origins

### TypeScript
- Path aliases: `@/*` maps to `./src/*`
- Strict mode enabled
- Target: ES2017

### Tailwind
- Custom breakpoint: `xxl` at 1440px
- Korean-specific color palette
- Font family configuration using CSS variables

## API Integration

### Chat API (`/api/chat`)
- Uses OpenRouter API for AI chat functionality
- Requires `OPENROUTER_API_KEY` environment variable
- Comprehensive error handling with Korean messages

### Contact Forms
- EmailJS integration for form submissions
- Type-safe with `ContactFormData` interface
- Validation using react-hook-form

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

## Future Expansion Plan

**Multi-Location Architecture (Planned):**
- Location data model with TypeScript interfaces
- Dynamic routing: `/locations/[locationId]` structure
- Location selector components for branch selection
- Bulgwang branch: 불광역 2분, same pricing as Yeongdeungpo

**New Services Integration:**
- Non-resident office service page (`/services/non-resident`)
- Updated pricing page with 3.3만원/월 non-resident option
- Enhanced contact forms with location selection
- Business registration service highlighting

**Component Development Plan:**
- `LocationCard` and `LocationSelector` components
- Service highlighting with "NEW" badges
- Location-aware content rendering
- Enhanced FAQ section for new services

**Implementation Phases:**
1. Data structure and routing (1 week)
2. Page development with content reuse (2 weeks)
3. Content enhancement and features (1 week)
4. Testing and deployment (1 week)

See `docs/officeart_renewal_plan.md` for detailed implementation specifications.

## Testing Strategy

- Component testing with Jest and React Testing Library
- Mock files for static assets and styles
- Module path mapping matches TypeScript aliases