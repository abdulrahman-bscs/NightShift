import express from 'express';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import db from '../db/database.js';

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'nightshift_default_jwt_secret_dev';

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

// POST /api/orders/checkout (Simulated educational demo checkout)
router.post('/checkout', (req, res) => {
  const userId = getAuthUserId(req);
  if (!userId) {
    return res.status(401).json({ success: false, message: 'Authentication required to checkout.' });
  }

  try {
    // Read cart items from database to verify prices securely
    const cartItems = db.prepare(`
      SELECT 
        c.quantity,
        c.variant,
        p.id as product_id,
        p.title,
        p.price
      FROM cart_items c
      JOIN products p ON c.product_id = p.id
      WHERE c.user_id = ?
    `).all(userId);

    if (cartItems.length === 0) {
      return res.status(400).json({ success: false, message: 'Your cart is empty.' });
    }

    const calculatedSubtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const orderNumber = 'NS-' + Date.now().toString().slice(-6) + '-' + Math.floor(100 + Math.random() * 900);
    const orderId = 'ord_' + crypto.randomUUID().slice(0, 8);

    db.prepare(`
      INSERT INTO orders (id, user_id, order_number, items_json, subtotal, status)
      VALUES (?, ?, ?, ?, ?, 'confirmed')
    `).run(orderId, userId, orderNumber, JSON.stringify(cartItems), calculatedSubtotal);

    // Empty cart
    db.prepare('DELETE FROM cart_items WHERE user_id = ?').run(userId);

    res.json({
      success: true,
      message: 'Demo order confirmed.',
      order: {
        id: orderId,
        orderNumber,
        items: cartItems,
        subtotal: calculatedSubtotal,
        status: 'confirmed',
        createdAt: new Date().toISOString()
      },
      disclaimer: 'Independent student concept. This is a simulated demonstration checkout; no payment was charged and no physical goods will ship.'
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// GET /api/orders
router.get('/', (req, res) => {
  const userId = getAuthUserId(req);
  if (!userId) {
    return res.status(401).json({ success: false, message: 'Authentication required.' });
  }

  try {
    const orders = db.prepare(`
      SELECT id, order_number, items_json, subtotal, status, created_at
      FROM orders
      WHERE user_id = ?
      ORDER BY created_at DESC
    `).all(userId);

    const parsedOrders = orders.map(o => ({
      ...o,
      items: JSON.parse(o.items_json)
    }));

    res.json({ success: true, orders: parsedOrders });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
