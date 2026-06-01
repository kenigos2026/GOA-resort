# 🌿 Nature's Harmony — South Goa Resort Website

A luxurious eco-resort website built with **Next.js 14+**, **Tailwind CSS**, **Framer Motion**, **Three.js**, and **Lenis Smooth Scroll**.

Where nature holds you still.

---

## ✨ Features

- **🏠 9 Fully Built Pages** — Home, Rooms, Experiences, Gallery, Dining, Nearby, About, Book, Contact
- **🎨 Biophilic Design System** — Warm ivory, forest greens, gold accents with generous whitespace and organic shapes
- **🎬 Cinematic Animations** — Ken Burns hero, parallax scroll, staggered reveals with Framer Motion
- **🌲 3D Forest Dust** — Subtle floating particles via Three.js / React Three Fiber
- **📱 Fully Responsive** — Mobile-first design with hamburger nav and touch-friendly interactions
- **📋 Booking System** — React Hook Form + Zod validation with WhatsApp quick-book integration
- **🖼️ Gallery Lightbox** — Filterable masonry grid with smooth layout animations
- **📍 Google Maps** — Location embeds and nearby places with distances
- **🤖 Admin Panel** — `/admin` route for managing ad campaigns (Phase 2 ready)
- **🔍 SEO Optimized** — Schema.org LodgingBusiness, Open Graph, Twitter Cards, meta tags

---

## 🚀 Quick Start

### Option 1: One-Click Start (Windows)

Simply double-click **`start.bat`** in the project root.

### Option 2: Terminal

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) ✨

### Production Build

```bash
npm run build   # Build for production
npm start       # Serve production build
```

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 14+ (App Router) |
| **Styling** | Tailwind CSS with custom design tokens |
| **3D** | Three.js + React Three Fiber + Drei |
| **Animation** | Framer Motion + GSAP ScrollTrigger |
| **Smooth Scroll** | Lenis |
| **Forms** | React Hook Form + Zod |
| **Icons** | Lucide React |
| **Fonts** | Cormorant Garamond, Lora, Inter, DM Mono |

---

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Homepage
│   ├── rooms/              # Rooms & Stays
│   ├── experiences/        # Experiences & Activities
│   ├── gallery/            # Photo Gallery
│   ├── dining/             # Dining & Menu
│   ├── nearby/             # Nearby Places
│   ├── about/              # About Us
│   ├── book/               # Booking Page
│   ├── contact/            # Contact Page
│   └── admin/              # Admin Panel (Phase 2)
├── components/
│   ├── layout/             # Navbar, Footer, WhatsApp Button, Smooth Scroll
│   ├── sections/           # Hero, Experience, Rooms, Reviews, Instagram, etc.
│   ├── three/              # Three.js components (Forest Dust particles)
│   └── ui/                 # Reusable UI primitives (SectionHeading, FadeIn, etc.)
├── content/                # Typed content data (rooms, experiences, menu, etc.)
│   ├── rooms.ts
│   ├── experiences.ts
│   ├── nearby.ts
│   ├── gallery.ts
│   ├── menu.ts
│   ├── reviews.ts
│   └── ads.ts
├── lib/
│   ├── schema.ts           # Schema.org structured data
│   └── utils.ts            # Utility functions
├── globals.css             # Global styles + Tailwind theme
└── layout.tsx              # Root layout with fonts, SEO, JSON-LD
```

---

## 🎨 Design System

### Color Palette — Biophilic Luxury

| Token | Hex | Usage |
|---|---|---|
| Warm Ivory | `#FDFAF4` | Primary background |
| Forest Mist | `#F2F5F0` | Secondary background |
| Deep Forest | `#1A2518` | Primary text |
| Warm Stone | `#6B6856` | Secondary text |
| Verdant Green | `#3D7A5C` | Nature accent |
| Warm Gold | `#C9A84C` | Luxury accent |
| Terracotta Blush | `#D4845A` | Warmth accent |

### Typography

- **Headings:** Cormorant Garamond (serif, luxury)
- **Sub-headings:** Lora (readable warmth)
- **Body/UI:** Inter (clean, accessible)
- **Labels:** DM Mono (modern contrast)

---

## 📊 Property Info

- **Name:** Nature's Harmony
- **Location:** Near Cotigao Wildlife Sanctuary, Canacona, South Goa
- **Rating:** 4.7★ on Google (187 reviews)
- **Price:** From ₹827/night
- **Phone:** 072760 72726
- **Instagram:** [@harmony_natures](https://instagram.com/harmony_natures)

---

## 🔮 Phase 2 Roadmap

- [ ] Ad management module (campaigns with start/end dates)
- [ ] Instagram Basic Display API live feed
- [ ] Facebook Page plugin
- [ ] CMS integration (Sanity)
- [ ] Multi-language support
- [ ] Real availability calendar

---

## 📄 License

All rights reserved © 2026 Nature's Harmony

---

*Built with care, caffeine, and a love for the Goan forest.* 🌴
