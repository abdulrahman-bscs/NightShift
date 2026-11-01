# NIGHTSHIFT — Verified Asset Manifest

**Project:** NIGHTSHIFT — Cinematic Automotive & City Narrative Experience  
**Course:** Advanced Web Development (Semester 6)  
**Verification Date:** October 30, 2026  
**Environment:** Windows (PowerShell / Node.js v24.12.0 / ffmpeg 8.1.1)  
**Original Asset Preservation Status:** 100% Unmodified & Preserved in original directories (`Picutures/` and `Vidoes/`).

---

## 1. Directory & Reference Discovery Status

- **Visual Direction Reference:** Checked `References/visual-direction.png`. **Status: NOT PRESENT**.  
  *Adherence Note:* As specified in the master prompt, the detailed visual brief (glossy mint-green sports coupe, deep emerald-dark studio, giant crimson and ivory editorial serif typography, Bodoni Moda / Cormorant Garamond, Manrope/Inter, restrained nav) is the authoritative design foundation. No nonexistent reference file is assumed.
- **Original Source Directories on Disk:**
  - `Picutures/` (35 image files, total size ~26.2 MB)
  - `Vidoes/` (4 video files, total size ~17.1 MB)
- **Deployment Asset Target:** `client/public/media/` (original files will be copied non-destructively; web-optimized derivatives generated where beneficial).

---

## 2. Video Assets Inventory (Verified via ffprobe 8.1.1)

All 4 video files present in `Vidoes/` were inspected and verified with exact frame rates, bitrates, audio channels, and duration.

| # | Filename (Exact filesystem name) | Codec | Resolution | Aspect Ratio | FPS | Duration | File Size | Audio | Intended UI Placement & Behavior |
|---|---|---|---|---|---|---|---|---|---|
| **V1** | `Mint_green_car_camera_dolly_e2e57846_1080p.mp4` | H.264 (avc1) | 1920 × 1080 | 16:9 Landscape | 24 | 7.98s | 5,245,125 B (5.00 MB) | AAC stereo | **Desktop Homepage Hero:** Full-bleed 90–100svh loop background, muted, playsinline, overlay gradient for text safety, pauses offscreen. Posters/fallbacks to mint coupe still. |
| **V2** | `Animate_tropical_coastal_metropo…_c9061560_t1.7-6_1080p.mp4` | H.264 (avc1) | 1920 × 1080 | 16:9 Landscape | 24 | 4.22s | 3,934,217 B (3.75 MB) | AAC stereo | **World Section & The World Page:** Full-width cinematic transition banner, establishing tropical coastal city atmosphere. |
| **V3** | `Animate_male_protagonist_portrait_4f35bc4f_1080p.mp4` | H.264 (avc1) | 1080 × 1920 | 9:16 Portrait | 24 | 5.97s | 4,566,385 B (4.35 MB) | AAC stereo | **Character ACE Spotlight:** Preserved in native vertical 9:16 ratio (never stretched to widescreen), active card hover/click spotlight with play/pause interaction. |
| **V4** | `Hypercar_reveal_camera_tracking_fb572138_1080p.mp4` | H.264 (avc1) | 1920 × 1080 | 16:9 Landscape | 24 | 5.97s | 4,235,966 B (4.03 MB) | AAC stereo | **Cinematic Video Modal:** Triggered by "WATCH THE FILM" hero CTA and Garage Hypercar reveal modal with focus trap, Escape key handling, and playback controls. |

---

## 3. Image Assets Inventory (35 Files Verified)

All 35 JPEG files were decoded to extract exact pixel dimensions, byte lengths, and file encodings.

### A. Fictional Vehicle Showcase & Garage Assets (8 Images)

| # | Filename (Exact filesystem name) | Dimensions | Aspect Ratio | Size (KB) | Intended UI Usage |
|---|---|---|---|---|---|
| 1 | `Mint-green_classic_coupe_parked_3c9d8928.jpg` | 1376 × 768 | 16:9 | 662.1 KB | **Hero GT Featured Vehicle:** Primary static editorial still on Home & Garage hero banner. |
| 2 | `Crimson_coupe_in_studio_92d98010.jpg` | 1024 × 1024 | 1:1 | 724.4 KB | **Store Catalog & Garage Fleet:** Rosso GT Concept product listing and vehicle spec card. |
| 3 | `Futuristic_hypercar_in_dark_show…_b265474d.jpg` | 1024 × 1024 | 1:1 | 615.9 KB | **Store Catalog & Garage Fleet:** Apex Prototype-X concept vehicle product card. |
| 4 | `Sports_coupe_in_showroom_64970a43.jpg` | 1024 × 1024 | 1:1 | 579.3 KB | **Store Catalog & Garage Fleet:** Silverline Grand Tourer product card. |
| 5 | `Futuristic_hypercar_in_undergrou…_a578e3d9.jpg` | 1376 × 768 | 16:9 | 684.6 KB | **Login Screen & Underground Works:** Left-split cinematic backdrop on Login page & Garage gallery. |
| 6 | `Custom_cars_parked_in_garage_1f654057.jpg` | 1376 × 768 | 16:9 | 878.8 KB | **Garage Section & Register Screen:** Split editorial photography for garage workspace & register view. |
| 7 | `Sports_coupe_parked_in_garage_507e0cba.jpg` | 1376 × 768 | 16:9 | 748.0 KB | **Home 3-Frame Car Editorial:** Frame 2 in homepage automotive editorial sequence. |
| 8 | `Vintage_sports_coupe_on_asphalt_0d2e5f2d.jpg` | 1376 × 768 | 16:9 | 658.2 KB | **Home 3-Frame Car Editorial:** Frame 3 in homepage automotive editorial sequence. |

### B. Two-Wheel Motorcycle Fleet (4 Images)

| # | Filename (Exact filesystem name) | Dimensions | Aspect Ratio | Size (KB) | Intended UI Usage |
|---|---|---|---|---|---|
| 9 | `Racing_superbike_in_studio_d787fa2b.jpg` | 1024 × 1024 | 1:1 | 634.1 KB | **Store Catalog & Garage Showcase:** Corsa RR 1000 Superbike product card & specifications. |
| 10 | `Modern_café_racer_motorcycle_dis…_0134c533.jpg` | 1024 × 1024 | 1:1 | 619.4 KB | **Store Catalog & Garage Showcase:** Modena 650 Cafe Racer product card & specifications. |
| 11 | `Rugged_adventure_scrambler_motor…_abaffd13.jpg` | 1024 × 1024 | 1:1 | 685.6 KB | **Store Catalog & Garage Showcase:** Sahara 900 Scrambler product card & specifications. |
| 12 | `Sport_motorcycle_parked_on_asphalt_8d11cd18.jpg` | 1376 × 768 | 16:9 | 826.3 KB | **Garage Editorial Banner:** Full-bleed landscape motorcycle editorial in Garage page. |

### C. Characters & Protagonists (5 Images)

| # | Filename (Exact filesystem name) | Dimensions | Aspect Ratio | Size (KB) | Intended UI Usage |
|---|---|---|---|---|---|
| 13 | `Man_standing_beside_sports_coupe_6c0ff4eb.jpg` | 896 × 1200 | 3:4 | 818.4 KB | **Character ACE:** "THE DRIVER" portrait card, modal bio, and dedicated character route. |
| 14 | `Woman_standing_in_tropical_city_2bcf9cab.jpg` | 896 × 1200 | 3:4 | 918.3 KB | **Character NOVA:** "THE WILDCARD" portrait card, modal bio, and dedicated character route. |
| 15 | `Man_standing_in_luxury_office_2c6a661c.jpg` | 896 × 1200 | 3:4 | 715.1 KB | **Character VICTOR:** "THE KINGMAKER" portrait card, modal bio, and dedicated character route. |
| 16 | `Woman_leaning_beside_sports_car_c47f8a59.jpg` | 1376 × 768 | 16:9 | 883.0 KB | **Characters Editorial Banner:** Wide-screen narrative shot for `/characters` header. |
| 17 | `Figures_walking_toward_sports_car_c64dbb03.jpg` | 1376 × 768 | 16:9 | 845.9 KB | **Home Story Teaser / Register Backdrop:** Atmospheric cinematic shot of crew assembling. |

### D. The World & City Districts (6 Images)

| # | Filename (Exact filesystem name) | Dimensions | Aspect Ratio | Size (KB) | Intended UI Usage |
|---|---|---|---|---|---|
| 18 | `Cars_driving_along_coastal_metro…_3bdb0c79.jpg` | 1376 × 768 | 16:9 | 1,164.5 KB | **The World (Coastline District):** Daylight coastal highway establishing spread. |
| 19 | `Car_driving_on_coastal_highway_19be6d95.jpg` | 1376 × 768 | 16:9 | 806.8 KB | **The World (Ocean Boulevard):** Alternating editorial story block on `/world`. |
| 20 | `Tropical_metropolis_view_from_ro…_d239fe77.jpg` | 1376 × 768 | 16:9 | 778.1 KB | **The World (Downtown Skyline):** Rooftop panoramic view of the high-rise core. |
| 21 | `Penthouse_overlooking_tropical_m…_22f503f2.jpg` | 1376 × 768 | 16:9 | 819.1 KB | **The World (High Life / Penthouse):** Luxury interior overlooking nocturnal city lights. |
| 22 | `Cars_on_rain-soaked_street_32d1aaad.jpg` | 1376 × 768 | 16:9 | 904.3 KB | **The World (The Backstreets / Rain):** Wet pavement reflections and neon atmosphere. |
| 23 | `SUV_navigating_winding_forest_road_1aa5ce69.jpg` | 1376 × 768 | 16:9 | 781.5 KB | **The World (The Outskirts / Dark Timber):** Misty ridge terrain and mountain passes. |

### E. Missions & Narrative Chapters (2 Images)

| # | Filename (Exact filesystem name) | Dimensions | Aspect Ratio | Size (KB) | Intended UI Usage |
|---|---|---|---|---|---|
| 24 | `Cars_racing_through_tropical_city_109f3d8f.jpg` | 1024 × 1024 | 1:1 | 695.0 KB | **Mission Chapter 01:** "Midnight Circuit" (High-speed downtown getaway narrative). |
| 25 | `Sports_cars_racing_on_highway_e191cf42.jpg` | 1376 × 768 | 16:9 | 832.3 KB | **Mission Chapter 02:** "The Coastal Gauntlet" (Nighttime expressway pursuit). |

*(Note: Mission Chapter 03 "The Ridge Run" is paired with `SUV_navigating_winding_forest_road_1aa5ce69.jpg` listed above).*

### F. Store Collection: Apparel, Art & Collectibles (9 Images)

| # | Filename (Exact filesystem name) | Dimensions | Aspect Ratio | Size (KB) | Intended UI Usage |
|---|---|---|---|---|---|
| 26 | `Black_baseball_cap_on_surface_a5ef95f7.jpg` | 1024 × 1024 | 1:1 | 599.2 KB | **Product #7:** Nightshift Signature Cap (Streetwear Apparel). |
| 27 | `Black_streetwear_hoodie_product_…_c2c6c481.jpg` | 1024 × 1024 | 1:1 | 580.6 KB | **Product #8:** Midnight Stealth Heavyweight Hoodie (Streetwear Apparel). |
| 28 | `Charcoal_streetwear_T-shirt_disp…_c2c7ff06.jpg` | 1024 × 1024 | 1:1 | 623.4 KB | **Product #9:** Atelier 01 Raw Hem Tee (Streetwear Apparel). |
| 29 | `Luxury_varsity_jacket_displayed_a72c6992.jpg` | 1024 × 1024 | 1:1 | 642.9 KB | **Product #10:** Emerald Club Wool Varsity Jacket (Streetwear Apparel). |
| 30 | `Framed_art_poster_showing_sports…_0b31e2ce.jpg` | 1024 × 1024 | 1:1 | 722.1 KB | **Product #11:** "Apex Stance" 24x36 Framed Poster (Framed Art). |
| 31 | `Framed_automotive_art_print_disp…_250bd757.jpg` | 1024 × 1024 | 1:1 | 615.9 KB | **Product #12:** "Monochrome Velocity" Archival Print (Framed Art). |
| 32 | `Framed_vintage_car_painting_disp…_74c579d6.jpg` | 1024 × 1024 | 1:1 | 784.8 KB | **Product #13:** "Heritage 1974" Oil Painting Reproduction (Framed Art). |
| 33 | `Concept_artbook_product_photography_376e7d16.jpg` | 1024 × 1024 | 1:1 | 690.2 KB | **Product #14:** Nightshift Vol. 01 Hardcover Concept Artbook (Collectibles). |
| 34 | `Shopping_bag_on_pedestal_eb733b30.jpg` | 1024 × 1024 | 1:1 | 571.1 KB | **Product #15:** Atelier Heavyweight Studio Bag (Collectibles). |

### G. Editorial & Production Credits (1 Image)

| # | Filename (Exact filesystem name) | Dimensions | Aspect Ratio | Size (KB) | Intended UI Usage |
|---|---|---|---|---|---|
| 35 | `Rich_Pearce_from_London___ea06a39a.jpg` | 2400 × 2400 | 1:1 | 560.6 KB | **About Page:** Photographic Direction & Visual Concept Contributor credit card. |

---

## 4. The 15 Seeded Catalog Products Mapping

| Product ID | Title | Category | Slug | Exact Image File | Price (Demo) | Stock | Variants |
|---|---|---|---|---|---|---|---|
| `prod_001` | Rosso GT Concept | Vehicles (Cars) | `rosso-gt-concept` | `Crimson_coupe_in_studio_92d98010.jpg` | $185,000 | 1 | Demo Spec Only |
| `prod_002` | Apex Prototype-X | Vehicles (Cars) | `apex-prototype-x` | `Futuristic_hypercar_in_dark_show…_b265474d.jpg` | $2,400,000 | 1 | Demo Spec Only |
| `prod_003` | Silverline Grand Tourer | Vehicles (Cars) | `silverline-grand-tourer` | `Sports_coupe_in_showroom_64970a43.jpg` | $142,000 | 2 | Demo Spec Only |
| `prod_004` | Corsa RR 1000 Superbike | Motorcycles | `corsa-rr-1000` | `Racing_superbike_in_studio_d787fa2b.jpg` | $28,500 | 3 | Racing / Track Trim |
| `prod_005` | Modena 650 Cafe Racer | Motorcycles | `modena-650-cafe-racer` | `Modern_café_racer_motorcycle_dis…_0134c533.jpg` | $16,800 | 4 | Midnight Black / Emerald |
| `prod_006` | Sahara 900 Scrambler | Motorcycles | `sahara-900-scrambler` | `Rugged_adventure_scrambler_motor…_abaffd13.jpg` | $19,200 | 2 | Matte Olive / Desert Sand |
| `prod_007` | Nightshift Signature Cap | Apparel | `nightshift-signature-cap` | `Black_baseball_cap_on_surface_a5ef95f7.jpg` | $65 | 50 | One Size (Adjustable) |
| `prod_008` | Midnight Stealth Heavy Hoodie | Apparel | `midnight-stealth-hoodie` | `Black_streetwear_hoodie_product_…_c2c6c481.jpg` | $145 | 35 | S, M, L, XL, XXL |
| `prod_009` | Atelier 01 Raw Hem Tee | Apparel | `atelier-01-raw-hem-tee` | `Charcoal_streetwear_T-shirt_disp…_c2c7ff06.jpg` | $75 | 45 | S, M, L, XL |
| `prod_010` | Emerald Club Wool Varsity Jacket | Apparel | `emerald-club-varsity-jacket` | `Luxury_varsity_jacket_displayed_a72c6992.jpg` | $380 | 15 | M, L, XL |
| `prod_011` | "Apex Stance" 24x36 Framed Poster | Art Prints | `apex-stance-framed-poster` | `Framed_art_poster_showing_sports…_0b31e2ce.jpg` | $210 | 20 | Matte Black Oak Frame |
| `prod_012` | "Monochrome Velocity" Art Print | Art Prints | `monochrome-velocity-print` | `Framed_automotive_art_print_disp…_250bd757.jpg` | $190 | 25 | Walnut Frame / Unframed |
| `prod_013` | "Heritage 1974" Oil Reproduction | Art Prints | `heritage-1974-framed-painting` | `Framed_vintage_car_painting_disp…_74c579d6.jpg` | $260 | 12 | Gallery Canvas Wrap |
| `prod_014` | Nightshift Vol. 01 Concept Book | Collectibles | `nightshift-vol-01-artbook` | `Concept_artbook_product_photography_376e7d16.jpg` | $120 | 40 | Standard / Foil Slipcase |
| `prod_015` | Atelier Heavyweight Studio Bag | Collectibles | `atelier-heavyweight-tote` | `Shopping_bag_on_pedestal_eb733b30.jpg` | $85 | 60 | Natural Canvas / Noir |

---

## 5. Media Pipeline Strategy
- Original assets in `Picutures/` and `Vidoes/` remain untouched.
- At Phase 1, assets are copied to `client/public/media/` with sanitized web-safe aliases (e.g. `media/products/black-cap.jpg`, `media/videos/hero-mint-car.mp4`) alongside preservation of original filenames in an alias map so both direct references and semantic references resolve seamlessly.
- Responsive image sets and WebP derivatives can be optionally created with `ffmpeg` without disturbing originals.
- Native video elements use `playsinline`, `muted`, `loop`, `preload="metadata"`, with IntersectionObserver pausing when offscreen.
