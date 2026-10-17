# PulseOps — Phase: Foundations (Next.js App Router)

Day-one production scaffold built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS v4**. Designed for continuous preview deployments on Vercel with zero secrets in the repository.

---

## Screen Specification & Routed Pages

Every screen in the product specification is implemented as a routed page under `app/`:

| Route | Screen Name | Component Type | Purpose |
| :--- | :--- | :--- | :--- |
| `/` | **Home** (`app/page.tsx`) | Server Component | Screen directory, route links, and architecture summary |
| `/dashboard` | **Dashboard** (`app/dashboard/page.tsx`) | Server Component | Operational KPI cards, telemetry chart placeholder, activity feed |
| `/profile` | **Profile** (`app/profile/page.tsx`) | Server Component | User identity, workspace role, and connected integrations |
| `/settings` | **Settings** (`app/settings/page.tsx`) | Server Component | Workspace preferences and notification channel placeholders |
| `/about` | **About** (`app/about/page.tsx`) | Server Component | Product specification and live Tailwind design token catalog |
| `/health` | **Health Check** (`app/health/page.tsx`) | Async Server Component | Fetches live data on the server (`no-store`), measures latency, and checks env config |
| `/api/health` | **Health API** (`app/api/health/route.ts`) | Route Handler | Returns JSON health status, environment, and timestamp |

### Server vs. Client Component Strategy
- **Server Components by default**: `app/layout.tsx`, all route `page.tsx` files, `components/PageContainer.tsx`, and `components/PageHeader.tsx`.
- **Client Component only for interactivity**: `components/Navbar.tsx` (`"use client"`) handles the mobile drawer toggle (`useState`) and active route highlighting (`usePathname`).

---

## Base Design Tokens (`app/globals.css`)

Defined using CSS custom properties in `:root` and mapped via `@theme inline`:
- **Surfaces & Text**: `--background` (`#f8fafc`), `--surface` (`#ffffff`), `--surface-muted` (`#f1f5f9`), `--foreground` (`#0f172a`), `--muted` (`#64748b`), `--border` (`#e2e8f0`)
- **Brand & Status**: `--primary` (`#2563eb`), `--primary-foreground` (`#ffffff`), `--success` (`#16a34a`), `--warning` (`#d97706`)
- **Responsive Breakpoints**: Tested at **375px** (mobile) and **1280px** (desktop).

---

## Environment Variable Structure

1. Copy `.env.example` to `.env.local` for local development:
   ```bash
   cp .env.example .env.local
   ```
2. Variables used:
   - `NEXT_PUBLIC_APP_NAME`: Public application display name (default: `PulseOps`)
   - `NEXT_PUBLIC_APP_ENV`: Public environment label (`development`, `preview`, `production`)
   - `HEALTH_CHECK_API_URL`: Server-only upstream endpoint fetched by `/health` (default: `https://jsonplaceholder.typicode.com/todos/1`)
3. `.gitignore` blocks `.env*` while explicitly allowing `!.env.example` so no secrets are ever committed.

---

## Local Development & Verification

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # Verify production build passes with 0 errors
npm run lint     # Verify ESLint passes cleanly
```
