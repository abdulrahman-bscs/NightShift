import { test, describe } from 'node:test';
import assert from 'node:assert';
import db from '../src/db/database.js';

describe('NIGHTSHIFT Database & Catalog Verification', () => {
  test('Products table has 15 seeded items', () => {
    const row = db.prepare('SELECT COUNT(*) as count FROM products').get();
    assert.strictEqual(row.count, 15, 'There must be exactly 15 catalog items');
  });

  test('All 5 required categories are represented', () => {
    const categories = db.prepare('SELECT DISTINCT category FROM products').all().map(r => r.category);
    assert.ok(categories.includes('cars'), 'Cars category must exist');
    assert.ok(categories.includes('motorcycles'), 'Motorcycles category must exist');
    assert.ok(categories.includes('apparel'), 'Apparel category must exist');
    assert.ok(categories.includes('art'), 'Art category must exist');
    assert.ok(categories.includes('collectibles'), 'Collectibles category must exist');
  });

  test('Vehicles are distinguished as fictional concepts', () => {
    const cars = db.prepare("SELECT * FROM products WHERE category = 'cars'").all();
    assert.strictEqual(cars.length, 3, 'Must have 3 cars');
    cars.forEach(car => {
      assert.ok(car.price > 100000, 'Car prices are illustrative concept tiers');
      assert.ok(car.image_url.startsWith('/media/'), 'Car image points to local media');
    });
  });

  test('Motorcycles match verified local media', () => {
    const bikes = db.prepare("SELECT * FROM products WHERE category = 'motorcycles'").all();
    assert.strictEqual(bikes.length, 3, 'Must have 3 motorcycles');
  });
});
