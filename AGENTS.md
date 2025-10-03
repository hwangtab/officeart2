# Repository Guidelines

## Project Structure & Module Organization
OfficeArt runs on Next.js (App Router). Page entries live in `src/app`, reusable UI in `src/components`, and shared data objects in `src/data`. Libraries and helpers belong in `src/lib`, while request/prop contracts sit in `src/types`. Custom font files reside in `src/fonts`, static assets and favicons stay under `public`, and interaction notes or plans are in `docs/`. Jest mocks live in `__mocks__`—mirror component paths when adding fixtures.

## Build, Test & Development Commands
Use `npm run dev` to boot the local dev server with hot reload on port 3000. Ship-ready bundles come from `npm run build`; follow it with `npm run start` to verify production output. Run `npm run lint` before commits—this executes the Next.js ESLint profile with Tailwind rules. Execute `npm run test` for the Jest suite in JSDOM; target a single file with `npm run test -- BackButton` to shorten feedback.

## Coding Style & Naming Conventions
Write React components as typed functions and export them from PascalCase files (`HeroSection.tsx`). Hooks, utils, and data accessors use camelCase (for example, `useScrollTrigger`). Stick to 2-space indentation, trailing commas in multiline literals, and single quotes for strings. Prefer Tailwind utility classes declared inline; update `tailwind.config.js` when introducing new design tokens. Run `npm run lint` after major refactors to catch accessibility and stylistic drifts.

## Testing Guidelines
Jest with React Testing Library is configured via `jest.config.js` and `jest.setup.js`. Co-locate tests near the component they exercise (current convention: `src/components/ComponentName.test.tsx`). Mock browser APIs or network calls by extending `__mocks__`. Describe behaviors in plain language; e.g., `it('reveals the popup banner')`. Add accessibility-focused queries (`getByRole`, `findByLabelText`) to guard critical UI flows. Always re-run `npm run test` and attach screenshots or logs when fixing flaky UI states.

## Commit & Pull Request Guidelines
Recent commits favor the conventional `type: subject` pattern (`feat: ...`, `fix: ...`). Keep the subject in the imperative mood and under 72 characters when possible; elaborate context in the body. For pull requests, include: a concise summary of intent, linked issue or task ID, relevant screenshots for UI adjustments, and a checklist of tests run (`npm run lint`, `npm run test`). Mention any configuration changes and call out manual verification steps to aid reviewers.
