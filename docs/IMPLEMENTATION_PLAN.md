# NIGHTSHIFT — Master Implementation Plan

**Project Title:** NIGHTSHIFT — Cinematic Automotive & City Narrative Experience  
**Course:** Advanced Web Development (Semester 6)  
**Workspace:** `e:\HARRY THE GREAT\University OF Centeral Punjab\WEB DEV PROJECT`  
**Current Phase:** Phase 0 (Planning & Asset Discovery)  
**Authoritative Brief:** 2026 Premium Automotive Editorial (Bodoni Moda / Manrope, Mint Coupe, Emerald & Crimson Studio)

---

## 1. Executive Architecture

```
WEB DEV PROJECT/
├── Picutures/               # Original 35 downloaded images (PRESERVED UNCHANGED)
├── Vidoes/                  # Original 4 downloaded videos (PRESERVED UNCHANGED)
├── docs/                    # Architectural documentation & manifests
│   ├── ASSET_MANIFEST.md
│   ├── DESIGN_SYSTEM.md
│   ├── IMPLEMENTATION_PLAN.md
│   └── API_SPECIFICATION.md
├── client/                  # Vite + React 18+ (ES Modules)
│   ├── public/
│   │   └── media/           # App-served non-destructive asset copies & web aliases
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── layout/      # Header, Footer, NavigationOverlay, PageShell
│   │   │   ├── ui/          # Button, Modal, Drawer, Toast, Input, Badge
│   │   │   ├── media/       # VideoBackground, FilmModal, LazyImage
│   │   │   └── store/       # ProductCard, CartDrawer, VariantSelector, FilterBar
│   │   ├── context/         # AuthContext, CartContext, MediaContext
│   │   ├── hooks/           # useMediaQuery, useScrollHeader, useReducedMotion
│   │   ├── pages/           # Home, World, Characters, Garage, Missions, Collection, etc.
│   │   ├── styles/          # design-tokens.css, typography.css, globals.css
│   │   ├── lib/             # api.js, utils.js, prayerCalc.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
├── server/                  # Node.js + Express API
│   ├── data/
│   │   ├── dev.db           # Persistent SQLite database
│   │   └── seed-data.js     # 15 catalog items, default demo users, stories
│   ├── src/
│   │   ├── controllers/     # authController, productController, cartController, orderController
│   │   ├── middleware/      # authMiddleware, validate, errorHandler, securityHeaders
│   │   ├── models/          # db.js (SQLite schema & prepared queries via better-sqlite3)
│   │   ├── routes/          # authRoutes, productRoutes, cartRoutes, orderRoutes, healthRoutes
│   │   └── server.js        # Express app configuration & server entry
│   ├── .env.example
│   └── package.json
├── package.json             # Root workspace scripts (npm run dev, build, seed, test)
├── .gitignore
└── README.md
```

---

## 2. Technology Stack & Intended Dependencies

### Frontend (`client/`)
- **Runtime & Build:** Vite, React 18/19, React DOM
- **Routing:** `react-router-dom` v6+
- **Motion & Interaction:** `motion` (or `framer-motion`) for viewport-driven stagger, modal reveals, and smooth page transitions
- **Icons:** `lucide-react` (featherweight SVG icons for search, cart, user, chevron, play, close)
- **Styling:** Custom CSS Custom Properties (`design-tokens.css`) paired with modern utility classes or Tailwind CSS to enforce 100% adherence to the editorial design tokens
- **Typography:** Webfont loader / local font face configuration for `Bodoni Moda` (Editorial display serif) and `Manrope` (Precision sans UI)

### Backend (`server/`)
- **Runtime:** Node.js v24+
- **Framework:** Express 4/5
- **Database:** `better-sqlite3` (lightweight, zero external server requirement, single-file ACID persistence in `server/data/dev.db`, prepared statements, fast synchronous execution ideal for university demonstrations)
- **Security & Auth:**
  - `bcryptjs` (password hashing)
  - `jsonwebtoken` / signed session cookies (`httpOnly`, `sameSite: 'lax'`, `secure: false` in dev)
  - `cors` (configured with strict origin credentials)
  - `helmet` (content security policy & HTTP protection)
  - Rate limiting for auth endpoints (`express-rate-limit`)
- **Validation:** Standard schema validation / validator helpers for request sanitation

---

## 3. Route Map & Page Inventory

| Route | Purpose | Key Content & Media |
|---|---|---|
| `/` | **Homepage** | Full-bleed video hero (`Mint_green_car_camera_dolly_...mp4`), giant Bodoni serif typography, World reveal, 3-frame car editorial, Character spotlight cards, Missions teaser, Collection teaser, Join CTA, Footer. |
| `/world` | **The World** | 3 Districts (`Coastline`, `Downtown`, `The Outskirts`), coastal video (`Animate_tropical_coastal_...mp4`), alternating photographic grids, district lore. |
| `/characters` | **Characters Hub** | Ace ("The Driver"), Nova ("The Wildcard"), Victor ("The Kingmaker"), interactive video spotlight for Ace (`Animate_male_protagonist_portrait_...mp4` in native 9:16 vertical frame). |
| `/characters/:slug` | **Character Deep Dive** | Concept biography, role narrative, vehicle affinity, high-res portrait card, back navigation. |
| `/garage` | **Automotive Showcase** | Mint-green vintage GT hero still, 3 concept cars + 3 motorcycles interactive selector, technical concept specs, "WATCH THE FILM" hypercar video modal. |
| `/garage/:slug` | **Vehicle Detail** | Concept powertrain, acceleration, top speed, design philosophy, gallery view, simulated inquiry/save action. |
| `/missions` | **Missions & Stories** | 3 Narrative chapters: "Midnight Circuit" (downtown heist), "The Coastal Gauntlet" (high-speed pursuit), "The Ridge Run" (mountain road). |
| `/collection` | **Store Catalogue** | 15 seeded items in 5 categories (3 Cars, 3 Motorcycles, 4 Apparel, 3 Art Prints, 2 Collectibles), category tabs, search input, price sorting, stock indicator. |
| `/collection/:slug` | **Product Detail** | High-res gallery, size/variant selectors, price display, stock status, Add to Cart with animated feedback toast. |
| `/cart` | **Cart & Checkout** | Persistent line items, quantity controls, server-verified subtotal, guest-to-account cart merging, demo simulated checkout. |
| `/login` | **Authentication** | Split layout with underground hypercar scene (`Futuristic_hypercar_in_undergrou...jpg`), email/password, toggle visibility, validation, error/success toast. |
| `/register` | **Registration** | Split layout with crew scene (`Figures_walking_toward...jpg`), full name, email, password strength, confirm password. |
| `/forgot-password` | **Password Recovery** | Educational token generation: generates timed hash token and displays one-click development reset link with explanation. |
| `/reset-password/:token`| **Password Reset** | Verifies token validity from database, updates hashed password securely. |
| `/account` | **User Profile** | Auth-protected dashboard, user details, order history (demo transactions), active cart view, logout. |
| `/about` | **Project Editorial** | Independent university project premise, creative direction credit (`Rich_Pearce_from_London...jpg`), technology stack showcase, semester 6 context. |
| `/prayer-times` | **Utility Route** | Accessible prayer time calculation using accurate astronomical calculation (Karachi/ISNA/MWL formulas or reliable public endpoint) with city selection, timezone, and countdown indicator. |
| `*` | **Custom 404** | "WRONG TURN. THE CITY'S THIS WAY." cinematic dark background with navigation back to safety. |

---

## 4. API Endpoints Contract

### Health
- `GET /api/health` → `{ status: "ok", timestamp: string, database: "connected" }`

### Authentication
- `POST /api/auth/register` → `{ user: { id, email, name, role }, token }`
- `POST /api/auth/login` → `{ user: { id, email, name, role }, token }`
- `GET /api/auth/me` → `{ user: { id, email, name, role } }`
- `POST /api/auth/logout` → `{ message: "Logged out successfully" }`
- `POST /api/auth/forgot-password` → `{ message: "Reset token generated", resetUrl: string }`
- `POST /api/auth/reset-password` → `{ message: "Password updated successfully" }`

### Products & Garage
- `GET /api/products` (supports `?category=...&search=...&sort=...`) → `{ products: [...], total: number }`
- `GET /api/products/:slug` → `{ product: { ... } }`
- `GET /api/garage` → `{ vehicles: [...] }`
- `GET /api/garage/:slug` → `{ vehicle: { ... } }`

### Cart & Orders
- `GET /api/cart` → `{ items: [...], subtotal: number, count: number }`
- `POST /api/cart/items` → Add/update cart line item `{ productId, quantity, variant }`
- `DELETE /api/cart/items/:id` → Remove line item
- `POST /api/orders/checkout` → Demo simulated order confirmation `{ orderId, items, total, status: "confirmed", demoNotice: true }`
- `GET /api/orders` → List authenticated user orders

---

## 5. Database Schema (SQLite `dev.db`)

```sql
-- Users
CREATE TABLE users (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  role TEXT DEFAULT 'member',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Password Reset Tokens
CREATE TABLE password_resets (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  token_hash TEXT NOT NULL,
  expires_at DATETIME NOT NULL,
  used INTEGER DEFAULT 0,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Products (15 seeded items)
CREATE TABLE products (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  category TEXT NOT NULL, -- 'cars', 'motorcycles', 'apparel', 'art', 'collectibles'
  price REAL NOT NULL,
  description TEXT NOT NULL,
  specs TEXT,            -- JSON string of specifications/materials
  image_url TEXT NOT NULL,
  stock INTEGER DEFAULT 10,
  variants TEXT,         -- JSON array of available sizes/finishes
  is_featured INTEGER DEFAULT 0
);

-- Cart Items
CREATE TABLE cart_items (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  product_id TEXT NOT NULL,
  variant TEXT,
  quantity INTEGER DEFAULT 1,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (product_id) REFERENCES products(id)
);

-- Orders (Simulated Demo Checkout)
CREATE TABLE orders (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  order_number TEXT UNIQUE NOT NULL,
  items_json TEXT NOT NULL,
  subtotal REAL NOT NULL,
  status TEXT DEFAULT 'confirmed',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
```

---

## 6. Phased Execution Roadmap

- **Phase 0 — Planning & Manifest (Current):**
  - Verify all 35 images and 4 videos with exact dimensions and audio/video codecs.
  - Verify that `References/visual-direction.png` is absent; formalize design system tokens based on authoritative brief.
  - Deliver `docs/ASSET_MANIFEST.md`, `docs/DESIGN_SYSTEM.md`, and `docs/IMPLEMENTATION_PLAN.md`.
  - STOP for user approval ("PROCEED PHASE 1").

- **Phase 1 — Foundation & Media Pipeline:**
  - Initialize root `package.json` with npm workspaces or concurrent execution.
  - Scaffold `server/` with Express, SQLite database, seed script for all 15 catalog items, and `/api/health`.
  - Scaffold `client/` with Vite + React, React Router, CSS variable tokens, Google Fonts (`Bodoni Moda` + `Manrope`).
  - Copy original assets non-destructively to `client/public/media/`.
  - Implement Global Header (frosted glass on scroll, active indicator, mobile slide drawer) and Footer (editorial wordmark, disclaimer, links).
  - Verify live server and client connectivity.

- **Phase 2 — Immersive Homepage:**
  - Build full-bleed video hero with `Mint_green_car_camera_dolly_...mp4` and huge Bodoni serif typography (`MADE FOR` / `THE STREETS.`).
  - Implement World Reveal section with coastal video banner (`Animate_tropical_coastal_...mp4`).
  - Implement 3-card Character showcase (Ace, Nova, Victor) with interactive spotlight and Ace vertical video preview (`Animate_male_protagonist_portrait_...mp4`).
  - Implement 3-frame Automotive Editorial sequence with hover reveals.
  - Implement Mission Stories teaser split blocks.
  - Implement Collection highlight grid with real local product photography.
  - Implement "Join the Night" CTA and full footer.
  - Verify mobile and reduced-motion states.

- **Phase 3 — Editorial Pages:**
  - `/world`: District showcases (Coastline, Downtown, Outskirts) with narrative blocks.
  - `/characters`: Full character roster with bio modals and dedicated slug routes.
  - `/garage`: Featured Mint GT hero, 3 cars + 3 motorcycles interactive selector, spec panels, and "WATCH THE FILM" video modal (`Hypercar_reveal_...mp4`).
  - `/missions`: 3 Mission chapters with dramatic layout and fictional difficulty tags.
  - `/about`: Project premise, university context, technology stack breakdown, photographic credit card (`Rich_Pearce_from_London...jpg`).
  - `*`: Custom 404 page.

- **Phase 4 — Commerce & Store (`/collection` & `/cart`):**
  - Seed and serve all 15 catalog items across 5 categories.
  - Filter bar (All, Cars, Motorcycles, Apparel, Art, Collectibles), real-time search, price sorting.
  - Dedicated product detail page (`/collection/:slug`) with variant selector, stock validation, and Add-to-Cart toast.
  - Persistent Cart: Cart Drawer + dedicated `/cart` route, guest localStorage cart, line item editing, server-verified subtotals.
  - Demo Checkout modal with simulated order generation and confirmation screen.

- **Phase 5 — Auth & User Account Experience:**
  - Split-screen `/login` and `/register` with local background imagery and animated field focus.
  - Password hashing with bcrypt, httpOnly cookie token storage, CSRF mitigation.
  - Local `/forgot-password` token generator and `/reset-password/:token` form.
  - Protected `/account` dashboard displaying user credentials, order history, and logout.
  - Guest cart merging into user account upon authentication.

- **Phase 6 — Prayer Times Utility & QA Optimization:**
  - Accessible `/prayer-times` utility page with city selection, timezone display, astronomical calculation, and next prayer countdown.
  - Performance audit: lazy loading, image dimension bounds to prevent CLS, video pause offscreen.
  - Accessibility audit: keyboard focus trapping in modals, semantic landmarks, aria labels, reduced motion overrides.

- **Phase 7 — Documentation & Git Packaging:**
  - Comprehensive root `README.md` with setup, environment variables, startup instructions, and semester 6 disclaimer.
  - Initialize clean Git repository, verify `.gitignore` (excludes `node_modules`, `dist`, local `.db`), test build and end-to-end execution.
