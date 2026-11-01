import db from './database.js';
import crypto from 'crypto';

console.log('[Seed] Seeding NIGHTSHIFT database...');

// Clear existing products
db.exec('DELETE FROM products;');

const products = [
  {
    id: 'prod_' + crypto.randomUUID().slice(0, 8),
    title: 'Rosso GT Concept',
    slug: 'rosso-gt-concept',
    category: 'cars',
    price: 185000,
    description: 'Sculpted crimson silhouette forged for midnight endurance and private collections. Powered by a twin-turbocharged 4.0L V8 architecture delivering 720hp with active aero dynamics and bespoke emerald contrast stitching.',
    specs: JSON.stringify({
      powertrain: '4.0L Twin-Turbocharged V8',
      output: '720 HP / 770 Nm',
      acceleration: '0-100 km/h in 2.8s',
      topSpeed: '335 km/h',
      transmission: '8-Speed Dual Clutch',
      chassis: 'Carbon Monocoque with Aluminum Subframes',
      status: 'Fictional Concept Prototype (Simulated Showcase)'
    }),
    image_url: '/media/Crimson_coupe_in_studio_92d98010.jpg',
    stock: 1,
    variants: JSON.stringify(['Obsidian Crimson / Emerald Trim', 'Stealth Carbon / Ivory Trim']),
    is_featured: 1
  },
  {
    id: 'prod_' + crypto.randomUUID().slice(0, 8),
    title: 'Apex Prototype-X',
    slug: 'apex-prototype-x',
    category: 'cars',
    price: 2400000,
    description: 'An uncompromising experimental track weapon engineered for aerodynamic superiority under midnight skyline conditions. Tri-motor electric torque vectoring chassis with regenerative active aero wings.',
    specs: JSON.stringify({
      powertrain: 'Tri-Motor Electric AWD',
      output: '1,450 HP / 1,600 Nm',
      acceleration: '0-100 km/h in 1.9s',
      topSpeed: '390 km/h',
      battery: '92 kWh Liquid-Cooled 800V Architecture',
      chassis: 'Full Dry Carbon Fiber Aerobody',
      status: 'Fictional Concept Prototype (Simulated Showcase)'
    }),
    image_url: '/media/Futuristic_hypercar_in_dark_show…_b265474d.jpg',
    stock: 1,
    variants: JSON.stringify(['Night Vision Carbon', 'Emerald Spec']),
    is_featured: 1
  },
  {
    id: 'prod_' + crypto.randomUUID().slice(0, 8),
    title: 'Silverline Grand Tourer',
    slug: 'silverline-grand-tourer',
    category: 'cars',
    price: 142000,
    description: 'Pure continental grand touring excellence. Liquid silver coachwork encasing a hand-stitched Connolly leather cabin with soundproof acoustic glass and quad-exit sport titanium exhaust.',
    specs: JSON.stringify({
      powertrain: '4.4L Twin-Power Turbocharged V8',
      output: '600 HP / 750 Nm',
      acceleration: '0-100 km/h in 3.4s',
      topSpeed: '315 km/h',
      interior: 'Full Grain Warm Ivory & Dark Oak',
      status: 'Fictional Concept Prototype (Simulated Showcase)'
    }),
    image_url: '/media/Sports_coupe_in_showroom_64970a43.jpg',
    stock: 2,
    variants: JSON.stringify(['Silverline Metallic', 'Deep Forest Green']),
    is_featured: 0
  },
  {
    id: 'prod_' + crypto.randomUUID().slice(0, 8),
    title: 'Corsa RR 1000 Superbike',
    slug: 'corsa-rr-1000',
    category: 'motorcycles',
    price: 28500,
    description: 'Bred on the coastal apex. High-revving inline four-cylinder superbike tuned for rapid lean-angle transitions, Brembo Stylema calipers, and IMU-governed traction control.',
    specs: JSON.stringify({
      engine: '998cc DOHC 16V Inline-4',
      power: '214 HP @ 14,500 RPM',
      weight: '175 kg (Dry)',
      suspension: 'Öhlins Smart EC 2.0 Semi-Active',
      exhaust: 'Full Titanium Akrapovič System',
      status: 'Fictional Concept Showcase'
    }),
    image_url: '/media/Racing_superbike_in_studio_d787fa2b.jpg',
    stock: 3,
    variants: JSON.stringify(['Factory Racing Red', 'Stealth Matte Noir']),
    is_featured: 1
  },
  {
    id: 'prod_' + crypto.randomUUID().slice(0, 8),
    title: 'Modena 650 Cafe Racer',
    slug: 'modena-650-cafe-racer',
    category: 'motorcycles',
    price: 16800,
    description: 'Minimalist street purity. Hand-fabricated fuel tank with brushed nickel accents, clip-on handlebars, retro analog-digital gauge cluster, and twin megaphone exhaust.',
    specs: JSON.stringify({
      engine: '648cc Parallel Twin Air/Oil-Cooled',
      power: '65 HP @ 7,200 RPM',
      chassis: 'Tubular Steel Double Cradle',
      seat: 'Hand-Pleated Cognac Leather',
      status: 'Fictional Concept Showcase'
    }),
    image_url: '/media/Modern_café_racer_motorcycle_dis…_0134c533.jpg',
    stock: 4,
    variants: JSON.stringify(['Brushed Nickel / Emerald', 'Midnight Black / Ivory']),
    is_featured: 0
  },
  {
    id: 'prod_' + crypto.randomUUID().slice(0, 8),
    title: 'Sahara 900 Scrambler',
    slug: 'sahara-900-scrambler',
    category: 'motorcycles',
    price: 19200,
    description: 'Built for the transition from neon boulevard to misty mountain ridge. Long-travel suspension, spoked tubeless wheels, high-mount exhaust, and bash plate protection.',
    specs: JSON.stringify({
      engine: '895cc High-Torque Parallel Twin',
      power: '88 HP @ 8,000 RPM',
      clearance: '230 mm Ground Clearance',
      tires: 'Pirelli Scorpion Rally STR',
      status: 'Fictional Concept Showcase'
    }),
    image_url: '/media/Rugged_adventure_scrambler_motor…_abaffd13.jpg',
    stock: 2,
    variants: JSON.stringify(['Dakar Sand / Matte Olive', 'Monochrome Noir']),
    is_featured: 0
  },
  {
    id: 'prod_' + crypto.randomUUID().slice(0, 8),
    title: 'Nightshift Signature Cap',
    slug: 'nightshift-signature-cap',
    category: 'apparel',
    price: 65,
    description: 'Structured low-profile 6-panel silhouette in heavyweight Japanese cotton twill. Features precision tonal 3D embroidery of the NIGHTSHIFT insignia and brushed brass closure buckle.',
    specs: JSON.stringify({
      material: '100% Heavyweight Cotton Twill (380 GSM)',
      construction: '6-Panel Unstructured Crown with Curved Brim',
      hardware: 'Custom Embossed Antique Brass Slider',
      origin: 'Bespoke Atelier Production'
    }),
    image_url: '/media/Black_baseball_cap_on_surface_a5ef95f7.jpg',
    stock: 50,
    variants: JSON.stringify(['One Size (Adjustable)']),
    is_featured: 1
  },
  {
    id: 'prod_' + crypto.randomUUID().slice(0, 8),
    title: 'Midnight Stealth Heavy Hoodie',
    slug: 'midnight-stealth-hoodie',
    category: 'apparel',
    price: 145,
    description: 'Ultra-heavy 500 GSM custom-knit French terry hoodie. Architectural drop-shoulder fit, blind-stitched hems, double-layered hood without drawstrings, and concealed side-seam pockets.',
    specs: JSON.stringify({
      fabric: '500 GSM 100% Organic Cotton French Terry',
      cut: 'Boxy Relaxed Silhouette with Dropped Shoulders',
      details: 'Blind Seam Construction, Reinforced Cuffs',
      care: 'Cold Machine Wash Inside Out, Dry Flat'
    }),
    image_url: '/media/Black_streetwear_hoodie_product_…_c2c6c481.jpg',
    stock: 35,
    variants: JSON.stringify(['S', 'M', 'L', 'XL', 'XXL']),
    is_featured: 1
  },
  {
    id: 'prod_' + crypto.randomUUID().slice(0, 8),
    title: 'Atelier 01 Raw Hem Tee',
    slug: 'atelier-01-raw-hem-tee',
    category: 'apparel',
    price: 75,
    description: 'Pre-shrunk vintage-washed 280 GSM combed jersey. Designed with an intentional raw edge at sleeve cuffs and waist hem for effortless drape over low-slung denim or track pants.',
    specs: JSON.stringify({
      fabric: '280 GSM Vintage-Washed Combed Cotton',
      collar: 'Thick 1.2-inch Ribbed Neckline',
      finish: 'Silicone Softener Enzyme Wash',
      color: 'Charcoal Asphalt Wash'
    }),
    image_url: '/media/Charcoal_streetwear_T-shirt_disp…_c2c7ff06.jpg',
    stock: 45,
    variants: JSON.stringify(['S', 'M', 'L', 'XL']),
    is_featured: 0
  },
  {
    id: 'prod_' + crypto.randomUUID().slice(0, 8),
    title: 'Emerald Club Wool Varsity Jacket',
    slug: 'emerald-club-varsity-jacket',
    category: 'apparel',
    price: 380,
    description: 'Heavy Melton wool body in deep forest emerald paired with supple full-grain ivory cowhide sleeves. Custom chenille typography patches and quilted satin diamond lining.',
    specs: JSON.stringify({
      body: '800 GSM 100% Melton Wool in Forest Emerald',
      sleeves: '100% Full-Grain Natural Cowhide Leather',
      lining: 'Quilted Emerald Bemberg Satin (100g Thermal Fill)',
      closure: 'Matte Black Heavyweight Snap Fasteners'
    }),
    image_url: '/media/Luxury_varsity_jacket_displayed_a72c6992.jpg',
    stock: 15,
    variants: JSON.stringify(['M', 'L', 'XL']),
    is_featured: 1
  },
  {
    id: 'prod_' + crypto.randomUUID().slice(0, 8),
    title: '"Apex Stance" 24x36 Framed Poster',
    slug: 'apex-stance-framed-poster',
    category: 'art',
    price: 210,
    description: 'Archival museum giclée print depicting the Rosso GT in dramatic low-key studio lighting. Encased in a custom-milled matte black solid oak frame with non-reflective UV glass.',
    specs: JSON.stringify({
      dimensions: '24 x 36 inches (61 x 91 cm)',
      paper: 'Hahnemühle Photo Rag 308 GSM (100% Cotton)',
      frame: 'Custom Solid Oak with Matte Black Lacquer',
      glazing: '99% UV-Shielding Museum Non-Glare Glass',
      edition: 'Hand-Numbered Edition of 100'
    }),
    image_url: '/media/Framed_art_poster_showing_sports…_0b31e2ce.jpg',
    stock: 20,
    variants: JSON.stringify(['Matte Black Oak Frame', 'Raw Natural Oak Frame']),
    is_featured: 1
  },
  {
    id: 'prod_' + crypto.randomUUID().slice(0, 8),
    title: '"Monochrome Velocity" Art Print',
    slug: 'monochrome-velocity-print',
    category: 'art',
    price: 190,
    description: 'High-contrast black-and-white architectural automotive study capturing light trails along the coastal overpass. Archival silver-gelatin emulsion look with ivory passe-partout matting.',
    specs: JSON.stringify({
      dimensions: '20 x 28 inches (50 x 70 cm)',
      paper: 'Canson Infinity Platine Fibre Rag 310 GSM',
      mat: '4-ply Warm Ivory Archival Museum Board',
      frame: 'Slimline Anodized Aluminum Noir'
    }),
    image_url: '/media/Framed_automotive_art_print_disp…_250bd757.jpg',
    stock: 25,
    variants: JSON.stringify(['Framed in Noir Aluminum', 'Print Only (Rolled Tube)']),
    is_featured: 0
  },
  {
    id: 'prod_' + crypto.randomUUID().slice(0, 8),
    title: '"Heritage 1974" Oil Painting Reproduction',
    slug: 'heritage-1974-framed-painting',
    category: 'art',
    price: 260,
    description: 'Textured canvas giclée capturing the golden era of endurance racing. Coated with archival matte varnish replicating tactile brushstrokes and rich impasto highlights.',
    specs: JSON.stringify({
      dimensions: '28 x 40 inches (71 x 101 cm)',
      medium: 'Stretched 400 GSM Heavy Cotton Artist Canvas',
      frame: 'Deep Floater Frame in Smoked Walnut',
      finish: 'Hand-Applied Protective UV Varnish'
    }),
    image_url: '/media/Framed_vintage_car_painting_disp…_74c579d6.jpg',
    stock: 12,
    variants: JSON.stringify(['Smoked Walnut Floater Frame', 'Raw Gallery Canvas Wrap']),
    is_featured: 0
  },
  {
    id: 'prod_' + crypto.randomUUID().slice(0, 8),
    title: 'Nightshift Vol. 01 Concept Book',
    slug: 'nightshift-vol-01-artbook',
    category: 'collectibles',
    price: 120,
    description: '240-page cloth-bound monograph documenting the automotive sketches, district world-building, typography studies, and photographic essays behind the NIGHTSHIFT universe.',
    specs: JSON.stringify({
      format: 'Hardcover with Debossed Crimson Foil Lettering',
      pages: '240 Pages on 170 GSM Munken Lynx Arctic Paper',
      binding: 'Swiss Open-Spine Exposed Stitch Binding',
      includes: 'Numbered Certificate & Two Archival Contact Prints'
    }),
    image_url: '/media/Concept_artbook_product_photography_376e7d16.jpg',
    stock: 40,
    variants: JSON.stringify(['Standard Monograph Edition', 'Collector Slipcase Edition']),
    is_featured: 1
  },
  {
    id: 'prod_' + crypto.randomUUID().slice(0, 8),
    title: 'Atelier Heavyweight Studio Bag',
    slug: 'atelier-heavyweight-tote',
    category: 'collectibles',
    price: 85,
    description: 'Architectural structural carryall crafted from 24oz paraffin-waxed canvas. Reinforced bridle leather handles, brass foot studs, and internal padded laptop compartment.',
    specs: JSON.stringify({
      material: '24oz Heavy Scottish Waxed Duck Canvas',
      handles: 'Vegetable-Tanned Saddle Leather (28mm width)',
      hardware: 'Solid Cast Brass Rivets & Base Studs',
      capacity: '26 Liters with Structured Base'
    }),
    image_url: '/media/Shopping_bag_on_pedestal_eb733b30.jpg',
    stock: 60,
    variants: JSON.stringify(['Natural Canvas / Noir Handles', 'All Noir Monolith']),
    is_featured: 0
  }
];

const insertStmt = db.prepare(`
  INSERT INTO products (
    id, title, slug, category, price, description, specs, image_url, stock, variants, is_featured
  ) VALUES (
    ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?
  )
`);

for (const p of products) {
  insertStmt.run(
    p.id,
    p.title,
    p.slug,
    p.category,
    p.price,
    p.description,
    p.specs,
    p.image_url,
    p.stock,
    p.variants,
    p.is_featured
  );
}

const count = db.prepare('SELECT COUNT(*) as count FROM products').get().count;
console.log(`[Seed] Successfully seeded ${count} catalog products across 5 categories.`);
