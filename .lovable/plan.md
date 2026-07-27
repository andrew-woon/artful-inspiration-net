
# DriveOS — Foundation Phase

Transform the remixed Inspo project into the DriveOS product foundation. Reuse the existing design system (Albert Sans + JetBrains Mono, oklch tokens, card/backdrop-blur aesthetic, Konva canvas), and only change what's needed to reposition the product. No new modules built out — just the skeleton.

## 1. Landing page (`src/routes/index.tsx`)

Keep the Konva canvas, images, dot grid, zoom, and drag behavior exactly as-is. Only change copy and metadata:

- Title card: "Inspo" → **"DriveOS"**
- Tagline: "Your visual thinking space." → **"The operating system for modern automotive businesses."**
- CTA "Get Started" → **"Request access"** (keeps `/signup` link)
- Add a small secondary link "Sign in" → `/login`
- Route `head()`: update title/description to DriveOS positioning
- Remove the dev-only "Copy positions" button (not production-appropriate)

## 2. Root metadata (`src/routes/__root.tsx`)

Update all title/description/og/twitter tags from Inspo → DriveOS. Leave the existing og:image in place (revisit later — user said imagery stays for now).

Copy direction: "DriveOS — Operating system for automotive businesses" / "Run inventory, leads, sales, workshop, and finance from one dashboard. Built for dealerships in Malaysia and Singapore."

## 3. Auth pages (`src/routes/login.tsx`, `src/routes/signup.tsx`)

Preserve layout, form fields, and Supabase auth flow. Update:
- Brand mark "Inspo" → "DriveOS"
- Signup subhead: mention dealership/team context ("Set up your dealership workspace")
- Login subhead: "Sign in to your DriveOS workspace"
- Route `head()` titles

## 4. App shell — replace dashboard with sidebar layout

Currently `_authenticated/dashboard.tsx` is a single page and `_authenticated/boards/$boardId.tsx` is the canvas. The shell needs to become a proper SaaS layout.

**New structure:**

```text
src/routes/
  _authenticated.tsx              → renders <AppShell><Outlet /></AppShell>
  _authenticated/dashboard.tsx    → placeholder page
  _authenticated/inventory.tsx    → placeholder page (new)
  _authenticated/leads.tsx        → placeholder (new)
  _authenticated/customers.tsx    → placeholder (new)
  _authenticated/pipeline.tsx     → placeholder (new)
  _authenticated/workshop.tsx     → placeholder (new)
  _authenticated/finance.tsx      → placeholder (new)
  _authenticated/reports.tsx      → placeholder (new)
  _authenticated/settings.tsx     → placeholder (new)
  _authenticated/boards/$boardId.tsx  → LEFT UNTOUCHED (per "leave DB as-is")
```

Redirect `/_authenticated` index to `/dashboard`.

**AppShell layout** (new: `src/components/app/AppShell.tsx` + `AppSidebar.tsx`):
- Shadcn `SidebarProvider` + `Sidebar` (collapsible="icon") on the left
- Top bar: `SidebarTrigger`, breadcrumb/page title slot, user menu (email + sign out) on the right
- Sidebar sections:
  - Brand: "DriveOS" wordmark (Albert Sans, tracking-tight, matches landing title style)
  - **Overview**: Dashboard
  - **Sales**: Inventory, Leads, Customers, Pipeline
  - **Operations**: Workshop, Finance
  - **Insights**: Reports
  - **Settings** (footer of sidebar)
- Active-route highlighting via `useRouterState`
- Icons from lucide-react (Gauge, Car, UserPlus, Users, GitBranch, Wrench, Wallet, BarChart3, Settings)

**Placeholder page pattern** — a shared `<ModulePlaceholder title description icon />` component rendering a centered card ("Coming soon — this module is part of the DriveOS roadmap") using existing Card styling from the landing page. Each route has its own `head()` metadata.

## 5. Files touched

- Edit: `src/routes/index.tsx`, `src/routes/__root.tsx`, `src/routes/login.tsx`, `src/routes/signup.tsx`, `src/routes/_authenticated.tsx`, `src/routes/_authenticated/dashboard.tsx`
- Create: `src/components/app/AppShell.tsx`, `src/components/app/AppSidebar.tsx`, `src/components/app/ModulePlaceholder.tsx`, `src/components/app/UserMenu.tsx`, 8 new module route files
- Leave alone: styles.css tokens, canvas components, supabase integration files, database, storage bucket, boards route

## Out of scope (per user)

- No new database tables or migrations
- No real module functionality (inventory CRUD, leads pipeline, etc.)
- No imagery swap on landing canvas
- No design system overhaul — reuse existing tokens and typography as-is
