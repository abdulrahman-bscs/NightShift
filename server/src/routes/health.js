import express from 'express';
import db from '../db/database.js';

const router = express.Router();

router.get('/', (req, res) => {
  try {
    const productCount = db.prepare('SELECT COUNT(*) as count FROM products').get()?.count || 0;
    const userCount = db.prepare('SELECT COUNT(*) as count FROM users').get()?.count || 0;

    res.json({
      status: 'ok',
      service: 'NIGHTSHIFT API',
      timestamp: new Date().toISOString(),
      database: {
        engine: 'SQLite (node:sqlite WAL)',
        connected: true,
        productsCount: productCount,
        usersCount: userCount
      },
      environment: process.env.NODE_ENV || 'development'
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: 'Database check failed',
      error: err.message
    });
  }
});

export default router;
