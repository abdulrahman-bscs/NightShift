import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageShell from '../components/layout/PageShell';
import { useAuth } from '../context/AuthContext';
import { User, LogOut, Package, Shield, Calendar, Loader2 } from 'lucide-react';

export default function Account() {
  const { user, logout, loading } = useAuth();
  const [orders, setOrders] = useState([]);
  const [ordersLoading, setOrdersLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      const fetchOrders = async () => {
        setOrdersLoading(true);
        try {
          const res = await fetch('/api/orders', { credentials: 'include' });
          if (res.ok) {
            const data = await res.json();
            setOrders(data.orders || []);
          }
        } catch (e) {
          console.warn('Could not load orders', e);
        } finally {
          setOrdersLoading(false);
        }
      };
      fetchOrders();
    }
  }, [user]);

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  if (loading) {
    return (
      <PageShell>
        <div className="container section-spacing" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
          <Loader2 className="animate-spin" size={32} style={{ color: 'var(--color-crimson)' }} />
        </div>
      </PageShell>
    );
  }

  if (!user) {
    return (
      <PageShell>
        <div className="container section-spacing" style={{ textAlign: 'center', maxWidth: '580px', margin: '0 auto' }}>
          <User size={48} style={{ color: 'var(--color-crimson)', margin: '0 auto 1.5rem auto' }} />
          <h1 className="headline-serif" style={{ fontSize: '2.5rem', color: 'var(--color-ivory)', marginBottom: '1rem' }}>
            AUTHENTICATION REQUIRED
          </h1>
          <p style={{ color: 'var(--color-muted)', marginBottom: '2.5rem' }}>
            Please sign in to view your operator account, inventory, and simulated orders.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link to="/login" className="btn btn-crimson">SIGN IN</Link>
            <Link to="/register" className="btn btn-pill">REGISTER</Link>
          </div>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <div className="container section-spacing">
        {/* Header with Logout */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '2rem', marginBottom: '3.5rem', borderBottom: '1px solid var(--border-delicate)', paddingBottom: '2rem' }}>
          <div>
            <span className="eyebrow" style={{ color: 'var(--color-crimson)' }}>OPERATOR PROFILE</span>
            <h1 className="headline-serif" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', color: 'var(--color-ivory)', marginBottom: '0.5rem' }}>
              {user.name}
            </h1>
            <p style={{ color: 'var(--color-muted)', fontSize: '0.95rem' }}>
              {user.email} • <span style={{ color: 'var(--color-emerald)', textTransform: 'uppercase', fontWeight: 600 }}>{user.role}</span>
            </p>
          </div>

          <button onClick={handleLogout} className="btn btn-pill">
            <LogOut size={16} />
            <span>DISCONNECT SESSION</span>
          </button>
        </div>

        {/* Orders Section */}
        <div>
          <span className="eyebrow">SIMULATED ACQUISITION LOGS</span>
          <h2 className="headline-serif" style={{ fontSize: '2rem', color: 'var(--color-ivory)', marginBottom: '2rem' }}>
            RECENT ORDERS
          </h2>

          {ordersLoading ? (
            <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--color-muted)' }}>
              <Loader2 className="animate-spin" size={24} style={{ margin: '0 auto 0.5rem auto' }} />
              <span>Loading order telemetry...</span>
            </div>
          ) : orders.length === 0 ? (
            <div style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--border-delicate)', padding: '3rem 2rem', borderRadius: '2px', textAlign: 'center' }}>
              <Package size={32} style={{ color: 'var(--color-muted)', margin: '0 auto 1rem auto' }} />
              <h3 className="headline-serif" style={{ fontSize: '1.4rem', color: 'var(--color-ivory)', marginBottom: '0.5rem' }}>
                NO SIMULATED ORDERS RECORDED
              </h3>
              <p style={{ color: 'var(--color-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                Items acquired through the demo checkout will be logged here in your profile.
              </p>
              <Link to="/collection" className="btn btn-pill">VISIT THE COLLECTION</Link>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {orders.map(ord => (
                <div key={ord.id} style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--border-delicate)', padding: '1.75rem', borderRadius: '2px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', borderBottom: '1px solid rgba(240,238,231,0.08)', paddingBottom: '1rem', marginBottom: '1rem' }}>
                    <div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-muted)', display: 'block' }}>ORDER NUMBER</span>
                      <strong style={{ fontSize: '1rem', color: 'var(--color-ivory)' }}>{ord.order_number}</strong>
                    </div>
                    <div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-muted)', display: 'block' }}>SIMULATED TOTAL</span>
                      <strong style={{ fontSize: '1.1rem', color: 'var(--color-emerald)' }}>${ord.subtotal.toLocaleString()}</strong>
                    </div>
                    <div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-muted)', display: 'block' }}>DATE</span>
                      <span style={{ fontSize: '0.85rem', color: 'var(--color-ivory)' }}>{new Date(ord.created_at).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {ord.items.map((it, idx) => (
                      <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--color-muted)' }}>
                        <span>{it.quantity}x {it.title} {it.variant ? `(${it.variant})` : ''}</span>
                        <span style={{ color: 'var(--color-ivory)' }}>${(it.price * it.quantity).toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </PageShell>
  );
}
