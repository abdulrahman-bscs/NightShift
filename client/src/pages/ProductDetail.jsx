import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageShell from '../components/layout/PageShell';
import { ArrowLeft, ShoppingBag, Check, Shield, AlertTriangle, Loader2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/products/${slug}`);
        if (!res.ok) throw new Error('Product not found');
        const data = await res.json();
        setProduct(data.product);
        setRelated(data.related || []);
        if (data.product.variants && data.product.variants.length > 0) {
          setSelectedVariant(data.product.variants[0]);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  if (loading) {
    return (
      <PageShell>
        <div className="container section-spacing" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
          <Loader2 className="animate-spin" size={32} style={{ color: 'var(--color-crimson)' }} />
        </div>
      </PageShell>
    );
  }

  if (error || !product) {
    return (
      <PageShell>
        <div className="container section-spacing" style={{ textAlign: 'center' }}>
          <h1 className="headline-serif" style={{ fontSize: '3rem', marginBottom: '1rem' }}>PRODUCT NOT FOUND</h1>
          <p style={{ color: 'var(--color-muted)', marginBottom: '2rem' }}>The requested item does not exist in the collection archive.</p>
          <Link to="/collection" className="btn btn-pill">BACK TO COLLECTION</Link>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <div className="container section-spacing">
        {/* Back Link */}
        <Link to="/collection" className="btn-ghost" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2.5rem' }}>
          <ArrowLeft size={16} />
          <span>BACK TO COLLECTION</span>
        </Link>

        {/* 2-Column Product Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '4rem', marginBottom: '5rem' }}>
          {/* Left: Image Canvas */}
          <div style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--border-delicate)', borderRadius: '2px', overflow: 'hidden' }}>
            <img
              src={product.image_url}
              alt={product.title}
              style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
            />
          </div>

          {/* Right: Details & Purchase Simulation */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
              <span className="eyebrow" style={{ margin: 0, color: 'var(--color-crimson)' }}>
                {product.category.toUpperCase()}
              </span>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-emerald)', fontWeight: 700, letterSpacing: '0.1em' }}>
                • IN STOCK ({product.stock} DEMO UNITS)
              </span>
            </div>

            <h1 className="headline-serif" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', color: 'var(--color-ivory)', marginBottom: '1rem' }}>
              {product.title}
            </h1>

            <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-ivory)', marginBottom: '1.75rem' }}>
              ${product.price.toLocaleString()}
              <span style={{ fontSize: '0.85rem', color: 'var(--color-muted)', fontWeight: 400, marginLeft: '0.75rem' }}>
                (Simulated Demo Price)
              </span>
            </div>

            <p style={{ fontSize: '1.05rem', color: 'var(--color-muted)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              {product.description}
            </p>

            {/* Variants Selector */}
            {product.variants && product.variants.length > 0 && (
              <div style={{ marginBottom: '2rem' }}>
                <span className="eyebrow" style={{ marginBottom: '0.75rem' }}>SELECT SPECIFICATION / SIZE</span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                  {product.variants.map(v => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      style={{
                        backgroundColor: selectedVariant === v ? 'var(--color-ivory)' : 'var(--color-surface)',
                        color: selectedVariant === v ? 'var(--color-base)' : 'var(--color-ivory)',
                        border: '1px solid var(--border-delicate)',
                        padding: '0.6rem 1.2rem',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        borderRadius: '2px',
                        cursor: 'pointer'
                      }}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity and Add to Cart */}
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--border-delicate)', backgroundColor: 'var(--color-surface)', borderRadius: '2px' }}>
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  style={{ background: 'transparent', border: 'none', color: '#fff', padding: '0.8rem 1.2rem', cursor: 'pointer' }}
                >
                  -
                </button>
                <span style={{ padding: '0.8rem 1rem', fontSize: '0.9rem', fontWeight: 700 }}>{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  style={{ background: 'transparent', border: 'none', color: '#fff', padding: '0.8rem 1.2rem', cursor: 'pointer' }}
                >
                  +
                </button>
              </div>

              <button
                onClick={() => addToCart(product, selectedVariant, quantity)}
                className="btn btn-crimson"
                style={{ flex: 1, padding: '0.95rem 2rem' }}
              >
                <ShoppingBag size={18} />
                <span>ADD TO GARAGE</span>
              </button>
            </div>

            {/* Technical Specifications Table */}
            {product.specs && Object.keys(product.specs).length > 0 && (
              <div style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--border-delicate)', padding: '2rem', borderRadius: '2px' }}>
                <span className="eyebrow" style={{ marginBottom: '1rem' }}>TECHNICAL SPECIFICATIONS</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  {Object.entries(product.specs).map(([key, val]) => (
                    <div key={key} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(240, 238, 231, 0.08)', paddingBottom: '0.5rem' }}>
                      <span style={{ fontSize: '0.78rem', color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{key}</span>
                      <span style={{ fontSize: '0.85rem', color: 'var(--color-ivory)', fontWeight: 600 }}>{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
