# Evan Persinger - Portfolio

A modern, responsive portfolio website built with Next.js, React, and TypeScript.

## Features

- Responsive design
- Smooth scrolling navigation
- Project showcase
- Skills and experience sections
- Contact form

## Getting Started

This project uses [pnpm](https://pnpm.io/) as its package manager (pinned via the `packageManager` field in `package.json`).

### Enable pnpm

pnpm ships with Node.js via Corepack, no separate install needed:

```bash
corepack enable pnpm
```

### Install Dependencies

```bash
pnpm install
```

### Run Development Server

```bash
pnpm dev
```

The site will be available at `http://localhost:3000`

### Build for Production

```bash
pnpm build
```

### Start Production Server

```bash
pnpm start
```

## Customization

1. Update personal information in the components
2. Add your own projects in `Projects.tsx`
3. Modify skills in `Skills.tsx`
4. Update experience in `Experience.tsx`
5. Change color scheme in `src/index.css` (CSS variables)

## Deployment

This site can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- CSS3
- pnpm (package manager)
