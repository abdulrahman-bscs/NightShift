import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageShell from '../components/layout/PageShell';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { Trash2, ArrowRight, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Cart() {
  const { items, removeFromCart, updateQuantity, clearCart, subtotal, totalCount } = useCart();
  const { user, isAuthenticated } = useAuth();
  const [orderConfirmed, setOrderConfirmed] = useState(null);
  const [checkingOut, setCheckingOut] = useState(false);

  const handleDemoCheckout = async () => {
    setCheckingOut(true);
    // Simulated educational checkout confirmation
    setTimeout(() => {
      const confirmation = {
        orderNumber: 'NS-' + Date.now().toString().slice(-6),
        items: [...items],
        total: subtotal,
        date: new Date().toLocaleDateString()
      };
      setOrderConfirmed(confirmation);
      clearCart();
      setCheckingOut(false);
    }, 800);
  };

  return (
    <PageShell>
      <div className="container section-spacing">
        <span className="eyebrow">YOUR GARAGE & ATELIER</span>
        <h1 className="headline-serif" style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.8rem)', color: 'var(--color-ivory)', marginBottom: '2.5rem' }}>
          CURRENT INVENTORY.
        </h1>

        {orderConfirmed ? (
          <div style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-emerald)', padding: '3.5rem 2rem', borderRadius: '2px', textAlign: 'center', maxWidth: '680px', margin: '0 auto' }}>
            <CheckCircle2 size={48} style={{ color: 'var(--color-emerald)', marginBottom: '1.25rem' }} />
            <h2 className="headline-serif" style={{ fontSize: '2.2rem', color: 'var(--color-ivory)', marginBottom: '0.75rem' }}>
              DEMO ORDER CONFIRMED
            </h2>
            <p style={{ color: 'var(--color-muted)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              Order Reference: <strong style={{ color: 'var(--color-ivory)' }}>{orderConfirmed.orderNumber}</strong>
            </p>
            <div style={{ backgroundColor: 'rgba(5,9,7,0.6)', padding: '1.5rem', borderRadius: '2px', marginBottom: '2rem', textAlign: 'left' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ color: 'var(--color-muted)', fontSize: '0.85rem' }}>Total Simulated Amount:</span>
                <span style={{ color: 'var(--color-ivory)', fontWeight: 700 }}>${orderConfirmed.total.toLocaleString()}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--color-muted)', fontSize: '0.85rem' }}>Status:</span>
                <span style={{ color: 'var(--color-emerald)', fontWeight: 600 }}>Simulated Confirmation (No Charge)</span>
              </div>
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--color-muted)', marginBottom: '2rem' }}>
              Independent student concept. No physical items will ship and no payment was collected.
            </p>
            <Link to="/collection" className="btn btn-pill">
              CONTINUE EXPLORING
            </Link>
          </div>
        ) : items.length === 0 ? (
          <div style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--border-delicate)', padding: '5rem 2rem', borderRadius: '2px', textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
            <h2 className="headline-serif" style={{ fontSize: '2.2rem', color: 'var(--color-ivory)', marginBottom: '1rem' }}>
              NOTHING IN THE GARAGE. YET.
            </h2>
            <p style={{ color: 'var(--color-muted)', fontSize: '1rem', marginBottom: '2.5rem' }}>
              Your inventory is currently empty. Explore the collection to acquire original concept vehicles, apparel, and art.
            </p>
            <Link to="/collection" className="btn btn-crimson">
              <span>EXPLORE THE COLLECTION</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'flex-start' }}>
            {/* Items List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {items.map(item => (
                <div
                  key={`${item.id}-${item.variant}`}
                  style={{
                    backgroundColor: 'var(--color-surface)',
                    border: '1px solid var(--border-delicate)',
                    padding: '1.25rem',
                    borderRadius: '2px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.5rem',
                    flexWrap: 'wrap'
                  }}
                >
                  <img src={item.image_url} alt={item.title} style={{ width: '84px', height: '84px', objectFit: 'cover', borderRadius: '2px' }} />

                  <div style={{ flex: 1, minWidth: '180px' }}>
                    <h3 className="headline-serif" style={{ fontSize: '1.25rem', color: 'var(--color-ivory)', marginBottom: '0.25rem' }}>
                      {item.title}
                    </h3>
                    {item.variant && (
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-emerald)', display: 'block', marginBottom: '0.4rem' }}>
                        Spec: {item.variant}
                      </span>
                    )}
                    <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-ivory)' }}>
                      ${item.price.toLocaleString()}
                    </span>
                  </div>

                  {/* Quantity */}
                  <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--border-delicate)', borderRadius: '2px' }}>
                    <button
                      onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                      style={{ background: 'transparent', border: 'none', color: '#fff', padding: '0.4rem 0.8rem', cursor: 'pointer' }}
                    >
                      -
                    </button>
                    <span style={{ padding: '0.4rem 0.6rem', fontSize: '0.85rem', fontWeight: 600 }}>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                      style={{ background: 'transparent', border: 'none', color: '#fff', padding: '0.4rem 0.8rem', cursor: 'pointer' }}
                    >
                      +
                    </button>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => removeFromCart(item.id, item.variant)}
                    aria-label={`Remove ${item.title}`}
                    style={{ background: 'transparent', border: 'none', color: 'var(--color-muted)', cursor: 'pointer', padding: '0.5rem' }}
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>

            {/* Summary & Checkout */}
            <div style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--border-delicate)', padding: '2.5rem', borderRadius: '2px' }}>
              <span className="eyebrow" style={{ marginBottom: '1.25rem' }}>ORDER SUMMARY</span>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', color: 'var(--color-muted)', fontSize: '0.9rem' }}>
                <span>Total Items</span>
                <span>{totalCount}</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', color: 'var(--color-muted)', fontSize: '0.9rem' }}>
                <span>Simulated Taxes & Freight</span>
                <span>$0.00</span>
              </div>

              <div style={{ borderTop: '1px solid var(--border-delicate)', paddingTop: '1.25rem', marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-ivory)' }}>Subtotal</span>
                <span style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--color-ivory)' }}>${subtotal.toLocaleString()}</span>
              </div>

              <button
                onClick={handleDemoCheckout}
                disabled={checkingOut}
                className="btn btn-crimson"
                style={{ width: '100%', marginBottom: '1.5rem' }}
              >
                <span>{checkingOut ? 'PROCESSING DEMO...' : 'CONFIRM SIMULATED CHECKOUT'}</span>
                <ArrowRight size={16} />
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--color-muted)', fontSize: '0.75rem' }}>
                <ShieldCheck size={16} style={{ color: 'var(--color-emerald)', flexShrink: 0 }} />
                <span>Simulated university demonstration checkout. No actual payments or card details accepted.</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </PageShell>
  );
}
