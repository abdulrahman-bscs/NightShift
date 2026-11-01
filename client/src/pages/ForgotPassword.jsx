import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageShell from '../components/layout/PageShell';
import { ArrowLeft, ArrowRight, KeyRound, AlertCircle, CheckCircle2, Sparkles } from 'lucide-react';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Request failed');
      setResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageShell>
      <div className="container section-spacing" style={{ maxWidth: '580px', margin: '0 auto' }}>
        <Link to="/login" className="btn-ghost" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2.5rem' }}>
          <ArrowLeft size={16} />
          <span>BACK TO LOGIN</span>
        </Link>

        <div style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--border-delicate)', padding: 'clamp(2rem, 5vw, 3.5rem)', borderRadius: '2px' }}>
          <span className="eyebrow" style={{ color: 'var(--color-crimson)' }}>SECURITY ACCESS RECOVERY</span>
          <h1 className="headline-serif" style={{ fontSize: 'clamp(2.2rem, 5vw, 3rem)', color: 'var(--color-ivory)', marginBottom: '1rem' }}>
            RESET ACCESS KEY.
          </h1>
          <p style={{ color: 'var(--color-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '2rem' }}>
            Enter your registered operator email to generate an authorized credential recovery token.
          </p>

          {error && (
            <div style={{ backgroundColor: 'rgba(191,16,41,0.15)', border: '1px solid var(--color-crimson)', padding: '0.85rem 1.25rem', borderRadius: '2px', marginBottom: '1.5rem', color: 'var(--color-ivory)', fontSize: '0.85rem' }}>
              {error}
            </div>
          )}

          {result ? (
            <div>
              <div style={{ backgroundColor: 'rgba(59,141,112,0.15)', border: '1px solid var(--color-emerald)', padding: '1.25rem', borderRadius: '2px', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--color-emerald)', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                  <CheckCircle2 size={18} />
                  <span>TOKEN GENERATED</span>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-ivory)', marginBottom: '1rem' }}>
                  {result.devNotice}
                </p>
                {result.resetUrl && (
                  <div style={{ backgroundColor: 'rgba(5,9,7,0.7)', padding: '0.85rem', borderRadius: '2px', wordBreak: 'break-all' }}>
                    <span style={{ fontSize: '0.72rem', color: 'var(--color-muted)', display: 'block', marginBottom: '0.3rem' }}>ONE-CLICK TEST LINK:</span>
                    <a href={result.resetUrl} style={{ color: 'var(--color-emerald)', fontSize: '0.85rem' }}>
                      {result.resetUrl}
                    </a>
                  </div>
                )}
              </div>
              <Link to="/login" className="btn btn-pill" style={{ width: '100%' }}>
                RETURN TO LOGIN
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--color-muted)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                  REGISTERED OPERATOR EMAIL
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="driver@nightshift.city"
                  style={{ width: '100%', backgroundColor: 'var(--color-base)', border: '1px solid var(--border-delicate)', color: 'var(--color-ivory)', padding: '0.85rem 1rem', borderRadius: '2px', fontSize: '0.9rem' }}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn btn-crimson"
                style={{ width: '100%', marginTop: '0.5rem', padding: '0.95rem' }}
              >
                <span>{loading ? 'GENERATING TOKEN...' : 'GENERATE RECOVERY TOKEN'}</span>
                <ArrowRight size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </PageShell>
  );
}
