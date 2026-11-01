import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import PageShell from '../components/layout/PageShell';
import { ArrowLeft, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ResetPassword() {
  const { token } = useParams();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, password })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Reset failed');
      setSuccess(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageShell>
      <div className="container section-spacing" style={{ maxWidth: '580px', margin: '0 auto' }}>
        <div style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--border-delicate)', padding: 'clamp(2rem, 5vw, 3.5rem)', borderRadius: '2px' }}>
          <span className="eyebrow" style={{ color: 'var(--color-crimson)' }}>SECURITY CREDENTIAL UPDATE</span>
          <h1 className="headline-serif" style={{ fontSize: 'clamp(2.2rem, 5vw, 3rem)', color: 'var(--color-ivory)', marginBottom: '1rem' }}>
            NEW ACCESS KEY.
          </h1>

          {error && (
            <div style={{ backgroundColor: 'rgba(191,16,41,0.15)', border: '1px solid var(--color-crimson)', padding: '0.85rem 1.25rem', borderRadius: '2px', marginBottom: '1.5rem', color: 'var(--color-ivory)', fontSize: '0.85rem' }}>
              {error}
            </div>
          )}

          {success ? (
            <div>
              <div style={{ backgroundColor: 'rgba(59,141,112,0.15)', border: '1px solid var(--color-emerald)', padding: '1.25rem', borderRadius: '2px', marginBottom: '1.5rem', textAlign: 'center' }}>
                <CheckCircle2 size={32} style={{ color: 'var(--color-emerald)', margin: '0 auto 0.75rem auto' }} />
                <h3 className="headline-serif" style={{ fontSize: '1.4rem', color: 'var(--color-ivory)', marginBottom: '0.5rem' }}>
                  ACCESS KEY UPDATED
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-muted)' }}>
                  Your password has been changed. You can now log into your account.
                </p>
              </div>
              <Link to="/login" className="btn btn-crimson" style={{ width: '100%' }}>
                SIGN IN NOW
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--color-muted)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                  NEW PASSWORD (MIN. 6 CHARACTERS)
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  style={{ width: '100%', backgroundColor: 'var(--color-base)', border: '1px solid var(--border-delicate)', color: 'var(--color-ivory)', padding: '0.85rem 1rem', borderRadius: '2px', fontSize: '0.9rem' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--color-muted)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                  CONFIRM NEW PASSWORD
                </label>
                <input
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  style={{ width: '100%', backgroundColor: 'var(--color-base)', border: '1px solid var(--border-delicate)', color: 'var(--color-ivory)', padding: '0.85rem 1rem', borderRadius: '2px', fontSize: '0.9rem' }}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn btn-crimson"
                style={{ width: '100%', marginTop: '0.5rem', padding: '0.95rem' }}
              >
                <span>{loading ? 'UPDATING...' : 'UPDATE PASSWORD'}</span>
                <ArrowRight size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </PageShell>
  );
}
