import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import healthRoutes from '../src/routes/health.js';
import productRoutes from '../src/routes/products.js';
import authRoutes from '../src/routes/auth.js';
import cartRoutes from '../src/routes/cart.js';
import ordersRoutes from '../src/routes/orders.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser('test_secret'));

const mediaPath = path.resolve(__dirname, '../../client/public/media');
app.use('/media', express.static(mediaPath));

app.use('/api/health', healthRoutes);
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', ordersRoutes);

const server = app.listen(5099, async () => {
  console.log('[Smoke Test] Test server running on port 5099');
  let passed = 0;
  let failed = 0;

  async function check(name, fn) {
    try {
      await fn();
      console.log(`  ✓ ${name}`);
      passed++;
    } catch (e) {
      console.error(`  x ${name}:`, e.message);
      failed++;
    }
  }

  // Test 1: Health endpoint
  await check('/api/health returns 200 and database connected', async () => {
    const res = await fetch('http://localhost:5099/api/health');
    if (!res.ok) throw new Error(`Status ${res.status}`);
    const data = await res.json();
    if (data.status !== 'ok' || !data.database.connected) {
      throw new Error(`Unexpected payload: ${JSON.stringify(data)}`);
    }
  });

  // Test 2: Products endpoint
  await check('/api/products returns exactly 15 seeded products', async () => {
    const res = await fetch('http://localhost:5099/api/products');
    if (!res.ok) throw new Error(`Status ${res.status}`);
    const data = await res.json();
    if (data.count !== 15 || data.products.length !== 15) {
      throw new Error(`Expected 15 products, got ${data.count}`);
    }
  });

  // Test 3: Product filter by category
  await check('/api/products?category=cars returns 3 items', async () => {
    const res = await fetch('http://localhost:5099/api/products?category=cars');
    const data = await res.json();
    if (data.count !== 3) throw new Error(`Expected 3 cars, got ${data.count}`);
  });

  // Test 4: Product detail by slug
  await check('/api/products/rosso-gt-concept returns correct product', async () => {
    const res = await fetch('http://localhost:5099/api/products/rosso-gt-concept');
    const data = await res.json();
    if (data.product.title !== 'Rosso GT Concept') throw new Error(`Wrong title: ${data.product.title}`);
  });

  // Test 5: Static Image served with 200
  await check('Static image asset returns HTTP 200 and image mime', async () => {
    const res = await fetch('http://localhost:5099/media/Mint-green_classic_coupe_parked_3c9d8928.jpg');
    if (!res.ok) throw new Error(`Status ${res.status}`);
    const ct = res.headers.get('content-type');
    if (!ct || !ct.includes('image')) throw new Error(`Unexpected content-type: ${ct}`);
  });

  // Test 6: Static Video served with 200
  await check('Static video asset returns HTTP 200 and video mime', async () => {
    const res = await fetch('http://localhost:5099/media/Mint_green_car_camera_dolly_e2e57846_1080p.mp4');
    if (!res.ok) throw new Error(`Status ${res.status}`);
    const ct = res.headers.get('content-type');
    if (!ct || !ct.includes('video')) throw new Error(`Unexpected content-type: ${ct}`);
  });

  // Test 7: Registration flow
  await check('POST /api/auth/register creates operator and returns token', async () => {
    const testEmail = `operator_${Date.now()}@nightshift.city`;
    const res = await fetch('http://localhost:5099/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'Night Driver', email: testEmail, password: 'password123' })
    });
    if (!res.ok) throw new Error(`Status ${res.status}`);
    const data = await res.json();
    if (!data.token || data.user.email !== testEmail) throw new Error('Registration failed');
  });

  // Test 8: Forgot password flow
  await check('POST /api/auth/forgot-password generates expiring token link', async () => {
    const res = await fetch('http://localhost:5099/api/auth/forgot-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'driver@nightshift.city' })
    });
    if (!res.ok) throw new Error(`Status ${res.status}`);
    const data = await res.json();
    if (!data.success) throw new Error('Forgot password failed');
  });

  console.log(`\n[Smoke Test Summary] ${passed} passed, ${failed} failed.`);
  server.close(() => {
    process.exit(failed > 0 ? 1 : 0);
  });
});
