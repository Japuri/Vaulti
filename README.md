# Vaulti

A clean, modern marketing landing page for **Vaulti** — a secure open-source personal cloud storage service built on Nextcloud.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** — dev server & build
- **Tailwind CSS v4** — utility-first styling
- **Framer Motion** — animations
- **Lucide React** — icons
- **pnpm workspaces** — monorepo

## Getting Started

```bash
pnpm install
pnpm --filter @workspace/vaulti run dev
```

## Features

- Animated server-side data isolation explainer (5-phase journey)
- Clean light-mode design (bg-slate-50, blue-600, emerald-600 palette)
- Scroll-triggered animations
- Responsive layout
- Pricing, FAQ, and comparison sections

## Project Structure

```
artifacts/
  vaulti/          # Landing page (React + Vite)
  api-server/      # Express API (optional backend)
lib/               # Shared TypeScript libraries
```
