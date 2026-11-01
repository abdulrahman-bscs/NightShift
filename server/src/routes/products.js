import express from 'express';
import db from '../db/database.js';

const router = express.Router();

// GET /api/products (supports category, search, sort)
router.get('/', (req, res) => {
  try {
    const { category, search, sort } = req.query;
    let query = 'SELECT * FROM products WHERE 1=1';
    const params = [];

    if (category && category !== 'all') {
      query += ' AND category = ?';
      params.push(category);
    }

    if (search && search.trim() !== '') {
      query += ' AND (title LIKE ? OR description LIKE ?)';
      const term = `%${search.trim()}%`;
      params.push(term, term);
    }

    if (sort === 'price-asc') {
      query += ' ORDER BY price ASC';
    } else if (sort === 'price-desc') {
      query += ' ORDER BY price DESC';
    } else if (sort === 'title-asc') {
      query += ' ORDER BY title ASC';
    } else {
      query += ' ORDER BY is_featured DESC, created_at ASC';
    }

    const rows = db.prepare(query).all(...params);

    // Parse JSON specs and variants safely
    const products = rows.map(p => ({
      ...p,
      specs: p.specs ? JSON.parse(p.specs) : {},
      variants: p.variants ? JSON.parse(p.variants) : []
    }));

    // Category breakdown counts
    const categoryCounts = db.prepare(`
      SELECT category, COUNT(*) as count FROM products GROUP BY category
    `).all();

    res.json({
      success: true,
      count: products.length,
      categories: categoryCounts,
      products
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// GET /api/products/featured
router.get('/featured', (req, res) => {
  try {
    const rows = db.prepare('SELECT * FROM products WHERE is_featured = 1 LIMIT 6').all();
    const products = rows.map(p => ({
      ...p,
      specs: p.specs ? JSON.parse(p.specs) : {},
      variants: p.variants ? JSON.parse(p.variants) : []
    }));
    res.json({ success: true, products });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// GET /api/products/:slug
router.get('/:slug', (req, res) => {
  try {
    const product = db.prepare('SELECT * FROM products WHERE slug = ?').get(req.params.slug);
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    product.specs = product.specs ? JSON.parse(product.specs) : {};
    product.variants = product.variants ? JSON.parse(product.variants) : [];

    // Related products in same category
    const related = db.prepare('SELECT * FROM products WHERE category = ? AND id != ? LIMIT 3')
      .all(product.category, product.id)
      .map(p => ({
        ...p,
        specs: p.specs ? JSON.parse(p.specs) : {},
        variants: p.variants ? JSON.parse(p.variants) : []
      }));

    res.json({ success: true, product, related });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
