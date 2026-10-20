# NetCore Solutions

A modern, responsive marketing website for **NetCore Solutions**, an enterprise network infrastructure and IT solutions company based in Dubai, UAE. The site showcases services, industries, projects, and insights, and provides a lead-generation contact experience.

Built as a single-page application (SPA) with React 19, Vite 8, and Tailwind CSS 4. All content is front-end driven from a central data module, so the site can be re-branded or extended without a backend.

> **Note:** This is a presentation/demo application. The contact form and newsletter are currently UI-only and do not send data to a server or email service.

---

## Core Capabilities

### Pages and routes

| Route | Page | Purpose |
| --- | --- | --- |
| `/` | Home | Hero, services, differentiators, industries, process, projects, technologies, testimonials, blog, CTA |
| `/about` | About | Mission, vision, values, founder message, company timeline and stats |
| `/services` | Services | Searchable grid of all services |
| `/services/:id` | Service detail | Included features, approach, related services, quote CTA |
| `/industries` | Industries | Industries served with descriptions |
| `/projects` | Projects | Case-study portfolio |
| `/projects/:id` | Project detail | Overview, challenge, solution, results, technologies |
| `/blog` | Blog | Featured article plus article grid |
| `/blog/:id` | Blog post | Article header, excerpt, tags |
| `/contact` | Contact | Validated inquiry form, contact details, OpenStreetMap map, FAQs |
| `*` | 404 | Not-found page |

All routes are lazy-loaded and wrapped in animated page transitions.

### User experience

- **Responsive layout** from mobile to desktop.
- **Dark mode** toggle with system preference detection and `localStorage` persistence.
- **Mega menu** for services on desktop and a collapsible mobile menu.
- **Animated network canvas** in the home hero (custom HTML5 Canvas, not Three.js).
- **Scroll-triggered animations** via Framer Motion.
- **Animated stat counters** in the hero (custom implementation).
- **Scroll progress bar**, **back-to-top button**, and floating **WhatsApp** button.
- **Testimonial carousel** with autoplay and pagination via Swiper.
- **Interactive map** on the contact page via React Leaflet / OpenStreetMap.
- **Dynamic document metadata** per page via React Helmet Async.
- **Form validation** with React Hook Form and Zod.
- **Search/filter** on the services page.

### Centralized content

Nearly all site content lives in `src/data/index.js`:

- Company details and social links
- Statistics
- Services and their feature lists
- Industries
- Technology partners
- Delivery process steps
- Projects/case studies
- Testimonials
- Blog posts
- FAQs

Update this file to change the content shown across the entire site.

---

## Tech Stack

### Core

- **React 19** – UI library
- **Vite 8** – dev server and build tool
- **React Router 7** – client-side routing
- **Tailwind CSS 4** – utility-first styling via `@tailwindcss/vite`

### UI and interaction

- **Framer Motion** – page transitions, entrance animations, interactive elements
- **Lucide React** and **React Icons** – icon sets
- **Swiper** – testimonial carousel
- **React Leaflet / Leaflet** – contact-page map
- **React Helmet Async** – per-page titles and meta tags

### Forms

- **React Hook Form** – form state and submission handling
- **Zod** + **@hookform/resolvers** – schema validation

### Fonts and assets

- Google Fonts: **Inter**, **Manrope**, **Space Grotesk**
- Project/blog images from Unsplash
- Testimonial avatars from Pravatar
- Map tiles from OpenStreetMap

These external resources require an internet connection at runtime.

### Dependencies present but not currently used

The following packages are declared in `package.json` but are not imported by the application at this time:

`three`, `@react-three/fiber`, `@react-three/drei`, `gsap`, `lenis`, `@studio-freight/lenis`, `@emailjs/browser`, `recharts`, `react-countup`, `react-intersection-observer`.

They can be removed to reduce install size, or used in future features.

---

## Getting Started

### Prerequisites

- **Node.js 20.19+ or 22.12+** (required by Vite 8)
- **npm** (a `package-lock.json` is included)

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Vite starts a local dev server with hot module replacement. Open the URL printed in the terminal (typically `http://localhost:5173`).

### Production build

```bash
npm run build
```

The optimized output is written to `dist/`.

### Preview the production build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

Lints all JavaScript/JSX files using ESLint with the React Hooks and React Refresh plugins.

---

## Project Structure

```text
netcore-solutions/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/                  # Local images (hero, logos)
│   ├── components/
│   │   ├── home/                # Home-page sections
│   │   ├── layout/              # Navbar, Footer
│   │   ├── three/               # NetworkBackground (canvas animation)
│   │   └── ui/                  # Shared UI (headings, scroll tools, WhatsApp)
│   ├── context/
│   │   └── ThemeContext.jsx     # Dark-mode provider
│   ├── data/
│   │   └── index.js             # All site content and domain data
│   ├── pages/                   # Route-level page components
│   ├── App.jsx                  # Providers, routes, layout shell
│   ├── App.css
│   ├── index.css                # Tailwind import, theme tokens, utilities
│   └── main.jsx                 # React entry point
├── eslint.config.js
├── index.html                   # HTML shell and global metadata
├── package.json
└── vite.config.js
```

---

## Customization Guide

### Company information

Edit `COMPANY` in `src/data/index.js` to update the name, tagline, phone, email, WhatsApp number, address, website, and social links. These values are reused by the navbar, footer, hero, contact page, service pages, and floating WhatsApp button.

### Services, projects, blog, and other content

Edit the corresponding exported arrays in `src/data/index.js`:

- `SERVICES` – service cards and detail pages keyed by `id`
- `PROJECTS` – project cards and case studies keyed by `id`
- `BLOG_POSTS` – blog cards and posts keyed by `id`
- `INDUSTRIES`, `TECHNOLOGIES`, `PROCESS_STEPS`, `STATS`, `WHY_CHOOSE_US`, `TESTIMONIALS`, `FAQS`

IDs become URL segments (for example, `/services/data-center`), so keep them unique and URL-safe.

### Theme and branding

Design tokens are defined in the `@theme` block of `src/index.css`:

- `--color-primary`, `--color-primary-dark`, `--color-primary-light`
- `--color-secondary`, `--color-accent`, `--color-success`, `--color-warning`, `--color-danger`
- `--color-bg`, `--color-dark-bg`, `--color-text`, `--color-muted`
- Font families: `--font-sans`, `--font-heading`, `--font-display`

Changing these values updates the color system across the site. Shared utilities such as `.section-padding`, `.card-hover`, `.gradient-text`, `.glass`, and `.network-grid` are also defined there.

### Navigation

Desktop and mobile navigation links are defined in the `NAV_LINKS` array in `src/components/layout/Navbar.jsx`. Footer links are in `src/components/layout/Footer.jsx`.

### Contact form

The contact form schema, fields, and service options are in `src/pages/ContactPage.jsx`. Validation is defined with Zod:

- Name: minimum 2 characters
- Email: valid email format
- Phone: minimum 7 characters
- Company: optional
- Service: required
- Message: minimum 10 characters

Submission is currently simulated:

```js
await new Promise(r => setTimeout(r, 1000));
console.log('Form data:', data);
setSubmitted(true);
reset();
```

To make it functional, replace this block with a call to your API or an email service (for example, EmailJS is already listed as a dependency but is not wired up). Add error handling and user feedback for failed submissions.

The newsletter form in `Footer.jsx` also only calls `preventDefault()` and does not submit data.

---

## Deployment

The app builds to static files and can be hosted on any static host (Netlify, Vercel, GitHub Pages, Cloudflare Pages, S3/CloudFront, Nginx, etc.).

Because it uses `BrowserRouter`, the host must rewrite unknown paths to `index.html` so client-side routes work on refresh or direct navigation.

Example for Netlify (`public/_redirects`):

```text
/*    /index.html   200
```

Example for Vercel (`vercel.json`):

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

Example for Nginx:

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

Build command: `npm run build`  
Output directory: `dist`

---

## Known Limitations

- The contact and newsletter forms do not send data anywhere yet.
- Blog post pages use a shared placeholder body rather than full article content.
- Footer links to `/privacy`, `/terms`, and `/sitemap` have no matching routes and fall through to the 404 page.
- Project, blog, and testimonial images are loaded from third-party services.
- Several installed dependencies are currently unused.
- There is no test suite or continuous integration configuration.

---

## License

No license file is included in this repository. Add one if the project will be distributed or open-sourced.
