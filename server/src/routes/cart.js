import express from 'express';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import db from '../db/database.js';

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'nightshift_default_jwt_secret_dev';

// Middleware to extract user if token present
const getAuthUserId = (req) => {
  const token = req.cookies?.nightshift_token || req.headers.authorization?.replace('Bearer ', '');
  if (!token) return null;
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded.id;
  } catch {
    return null;
  }
};

// GET /api/cart
router.get('/', (req, res) => {
  const userId = getAuthUserId(req);
  if (!userId) {
    return res.json({ success: true, items: [], subtotal: 0, count: 0 });
  }

  try {
    const rows = db.prepare(`
      SELECT 
        c.id as cart_item_id,
        c.quantity,
        c.variant,
        p.id as product_id,
        p.title,
        p.slug,
        p.price,
        p.category,
        p.image_url,
        p.stock
      FROM cart_items c
      JOIN products p ON c.product_id = p.id
      WHERE c.user_id = ?
    `).all(userId);

    const subtotal = rows.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const count = rows.reduce((sum, item) => sum + item.quantity, 0);

    res.json({ success: true, items: rows, subtotal, count });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// POST /api/cart/items (Add or increment item)
router.post('/items', (req, res) => {
  const userId = getAuthUserId(req);
  if (!userId) {
    return res.status(401).json({ success: false, message: 'Please log in to persist cart items.' });
  }

  const { productId, variant, quantity = 1 } = req.body;
  if (!productId) {
    return res.status(400).json({ success: false, message: 'Product ID is required.' });
  }

  try {
    const product = db.prepare('SELECT id, stock FROM products WHERE id = ?').get(productId);
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found.' });
    }

    const existing = db.prepare(`
      SELECT id, quantity FROM cart_items 
      WHERE user_id = ? AND product_id = ? AND (variant = ? OR (variant IS NULL AND ? IS NULL))
    `).get(userId, productId, variant || null, variant || null);

    if (existing) {
      const newQty = existing.quantity + quantity;
      db.prepare('UPDATE cart_items SET quantity = ? WHERE id = ?').run(newQty, existing.id);
    } else {
      const cartItemId = 'crt_' + crypto.randomUUID().slice(0, 8);
      db.prepare(`
        INSERT INTO cart_items (id, user_id, product_id, variant, quantity)
        VALUES (?, ?, ?, ?, ?)
      `).run(cartItemId, userId, productId, variant || null, quantity);
    }

    res.json({ success: true, message: 'Item added to cart.' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// DELETE /api/cart/items/:id
router.delete('/items/:id', (req, res) => {
  const userId = getAuthUserId(req);
  if (!userId) {
    return res.status(401).json({ success: false, message: 'Authentication required.' });
  }

  try {
    db.prepare('DELETE FROM cart_items WHERE id = ? AND user_id = ?').run(req.params.id, userId);
    res.json({ success: true, message: 'Item removed from cart.' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// POST /api/cart/sync (Merge guest localStorage cart items on login)
router.post('/sync', (req, res) => {
  const userId = getAuthUserId(req);
  if (!userId) {
    return res.status(401).json({ success: false, message: 'Authentication required.' });
  }

  const { guestItems = [] } = req.body;

  try {
    for (const item of guestItems) {
      if (!item.product_id && !item.productId) continue;
      const pid = item.product_id || item.productId;
      const variant = item.variant || null;
      const qty = item.quantity || 1;

      const product = db.prepare('SELECT id FROM products WHERE id = ?').get(pid);
      if (!product) continue;

      const existing = db.prepare(`
        SELECT id, quantity FROM cart_items 
        WHERE user_id = ? AND product_id = ? AND (variant = ? OR (variant IS NULL AND ? IS NULL))
      `).get(userId, pid, variant, variant);

      if (existing) {
        db.prepare('UPDATE cart_items SET quantity = quantity + ? WHERE id = ?').run(qty, existing.id);
      } else {
        const id = 'crt_' + crypto.randomUUID().slice(0, 8);
        db.prepare(`
          INSERT INTO cart_items (id, user_id, product_id, variant, quantity)
          VALUES (?, ?, ?, ?, ?)
        `).run(id, userId, pid, variant, qty);
      }
    }

    res.json({ success: true, message: 'Cart synchronized.' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
