import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import PageShell from '../components/layout/PageShell';
import { Search, SlidersHorizontal, ArrowRight, Loader2, AlertCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Collection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCategory = searchParams.get('category') || 'all';

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('featured');
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const query = new URLSearchParams();
        if (currentCategory && currentCategory !== 'all') query.set('category', currentCategory);
        if (search) query.set('search', search);
        if (sort) query.set('sort', sort);

        const res = await fetch(`/api/products?${query.toString()}`);
        if (!res.ok) throw new Error('Could not fetch catalogue items');
        const data = await res.json();
        setProducts(data.products || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [currentCategory, search, sort]);

  const categories = [
    { id: 'all', label: 'ALL ITEMS (15)' },
    { id: 'cars', label: 'CARS (3)' },
    { id: 'motorcycles', label: 'MOTORCYCLES (3)' },
    { id: 'apparel', label: 'APPAREL (4)' },
    { id: 'art', label: 'FRAMED ART (3)' },
    { id: 'collectibles', label: 'COLLECTIBLES (2)' }
  ];

  return (
    <PageShell>
      <div className="container section-spacing">
        {/* Header */}
        <div style={{ maxWidth: '820px', marginBottom: '3.5rem' }}>
          <span className="eyebrow">05 / THE COLLECTION</span>
          <h1 className="headline-serif" style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', color: 'var(--color-ivory)', marginBottom: '1.25rem' }}>
            TAKE THE CITY / WITH YOU.
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--color-muted)', lineHeight: 1.7 }}>
            Original automotive concepts, streetwear, framed art, and collectible monographs. All vehicle and merchandise purchases are simulated demonstrations.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
          {/* Category Tabs */}
          <div style={{ display: 'flex', gap: '0.75rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSearchParams(cat.id === 'all' ? {} : { category: cat.id })}
                style={{
                  background: currentCategory === cat.id ? 'var(--color-ivory)' : 'var(--color-surface)',
                  color: currentCategory === cat.id ? 'var(--color-base)' : 'var(--color-ivory)',
                  border: '1px solid var(--border-delicate)',
                  borderRadius: '9999px',
                  padding: '0.6rem 1.25rem',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all var(--transition-fast)'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search & Sort Controls */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: '360px' }}>
              <Search size={16} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-muted)' }} />
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  width: '100%',
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid var(--border-delicate)',
                  color: 'var(--color-ivory)',
                  padding: '0.75rem 1rem 0.75rem 2.8rem',
                  borderRadius: '2px',
                  fontSize: '0.85rem'
                }}
              />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--color-muted)' }}>SORT:</span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                style={{
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid var(--border-delicate)',
                  color: 'var(--color-ivory)',
                  padding: '0.65rem 1rem',
                  borderRadius: '2px',
                  fontSize: '0.8rem',
                  cursor: 'pointer'
                }}
              >
                <option value="featured">Featured First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="title-asc">Title: A-Z</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px', gap: '1rem', color: 'var(--color-muted)' }}>
            <Loader2 className="animate-spin" size={24} />
            <span>Loading catalogue...</span>
          </div>
        ) : error ? (
          <div style={{ backgroundColor: 'var(--color-surface)', padding: '2rem', textAlign: 'center', border: '1px solid var(--color-crimson)' }}>
            <AlertCircle size={24} style={{ color: 'var(--color-crimson)', marginBottom: '0.5rem' }} />
            <p style={{ color: 'var(--color-ivory)' }}>{error}</p>
          </div>
        ) : products.length === 0 ? (
          <div style={{ backgroundColor: 'var(--color-surface)', padding: '4rem 2rem', textAlign: 'center', border: '1px solid var(--border-delicate)' }}>
            <h3 className="headline-serif" style={{ fontSize: '1.8rem', color: 'var(--color-ivory)', marginBottom: '0.5rem' }}>
              NO MATCHING ITEMS FOUND
            </h3>
            <p style={{ color: 'var(--color-muted)', fontSize: '0.9rem' }}>Try clearing your search or category filter.</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
            {products.map(p => (
              <div
                key={p.id}
                style={{
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid var(--border-delicate)',
                  borderRadius: '2px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'border-color var(--transition-fast)'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--color-crimson)')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-delicate)')}
              >
                <Link to={`/collection/${p.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div style={{ aspectRatio: '1/1', overflow: 'hidden', backgroundColor: '#071713', position: 'relative' }}>
                    <img
                      src={p.image_url}
                      alt={p.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      loading="lazy"
                    />
                    <span
                      style={{
                        position: 'absolute',
                        top: '0.75rem',
                        left: '0.75rem',
                        backgroundColor: 'rgba(5, 9, 7, 0.85)',
                        padding: '0.25rem 0.6rem',
                        fontSize: '0.65rem',
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        color: 'var(--color-emerald)',
                        borderRadius: '2px',
                        textTransform: 'uppercase'
                      }}
                    >
                      {p.category}
                    </span>
                  </div>
                </Link>

                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                  <div>
                    <Link to={`/collection/${p.slug}`} style={{ textDecoration: 'none' }}>
                      <h3 className="headline-serif" style={{ fontSize: '1.35rem', color: 'var(--color-ivory)', marginBottom: '0.5rem' }}>
                        {p.title}
                      </h3>
                    </Link>
                    <p style={{ fontSize: '0.8rem', color: 'var(--color-muted)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                      {p.description.slice(0, 95)}...
                    </p>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-delicate)', paddingTop: '1rem' }}>
                    <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-ivory)' }}>
                      ${p.price.toLocaleString()}
                    </span>
                    <Link
                      to={`/collection/${p.slug}`}
                      className="btn btn-pill"
                      style={{ padding: '0.45rem 1rem', fontSize: '0.72rem' }}
                    >
                      <span>DETAILS</span>
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </PageShell>
  );
}
