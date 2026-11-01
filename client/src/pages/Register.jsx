import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageShell from '../components/layout/PageShell';
import { useAuth } from '../context/AuthContext';
import { Eye, EyeOff, ArrowRight, AlertCircle, Shield } from 'lucide-react';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
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
      await register(name, email, password);
      navigate('/account');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageShell>
      <div style={{ minHeight: 'calc(100vh - 76px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))' }}>
        {/* Left: Cinematic Scene */}
        <div style={{ position: 'relative', overflow: 'hidden', minHeight: '360px', backgroundColor: 'var(--color-base-dark)' }}>
          <img
            src="/media/Figures_walking_toward_sports_car_c64dbb03.jpg"
            alt="Crew walking toward sports car"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(5,9,7,0.3) 0%, rgba(5,9,7,0.85) 100%)' }} />
          <div style={{ position: 'absolute', bottom: '3rem', left: '3rem', right: '3rem' }}>
            <span className="eyebrow" style={{ color: 'var(--color-crimson)' }}>JOIN THE SYNDICATE</span>
            <h2 className="headline-serif" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--color-ivory)', marginBottom: '0.75rem' }}>
              THE NIGHT IS YOURS.
            </h2>
            <p style={{ color: 'var(--color-muted)', fontSize: '0.9rem' }}>
              Create your account to unlock simulated orders, inventory reservation, and custom automotive specs.
            </p>
          </div>
        </div>

        {/* Right: Registration Form */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'clamp(2rem, 6vw, 5rem)', backgroundColor: 'var(--color-base)' }}>
          <div style={{ width: '100%', maxWidth: '420px' }}>
            <span className="eyebrow">NEW OPERATOR DOSSIER</span>
            <h1 className="headline-serif" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', color: 'var(--color-ivory)', marginBottom: '1rem' }}>
              MAKE YOUR MARK.
            </h1>
            <p style={{ color: 'var(--color-muted)', fontSize: '0.9rem', marginBottom: '2.5rem' }}>
              Enter your details to create an account in the NIGHTSHIFT registry.
            </p>

            {error && (
              <div style={{ backgroundColor: 'rgba(191,16,41,0.15)', border: '1px solid var(--color-crimson)', padding: '0.85rem 1.25rem', borderRadius: '2px', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-ivory)', fontSize: '0.85rem' }}>
                <AlertCircle size={16} style={{ color: 'var(--color-crimson)', flexShrink: 0 }} />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--color-muted)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                  CALLSIGN / FULL NAME
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Dominic Rossi"
                  style={{ width: '100%', backgroundColor: 'var(--color-surface)', border: '1px solid var(--border-delicate)', color: 'var(--color-ivory)', padding: '0.85rem 1rem', borderRadius: '2px', fontSize: '0.9rem' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--color-muted)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="driver@nightshift.city"
                  style={{ width: '100%', backgroundColor: 'var(--color-surface)', border: '1px solid var(--border-delicate)', color: 'var(--color-ivory)', padding: '0.85rem 1rem', borderRadius: '2px', fontSize: '0.9rem' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--color-muted)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                  PASSWORD (MIN. 6 CHARACTERS)
                </label>
                <div style={{ position: 'relative' }}>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    style={{ width: '100%', backgroundColor: 'var(--color-surface)', border: '1px solid var(--border-delicate)', color: 'var(--color-ivory)', padding: '0.85rem 2.5rem 0.85rem 1rem', borderRadius: '2px', fontSize: '0.9rem' }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label="Toggle password visibility"
                    style={{ position: 'absolute', right: '0.85rem', top: '50%', transform: 'translateY(-50%)', background: 'transparent', border: 'none', color: 'var(--color-muted)', cursor: 'pointer' }}
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--color-muted)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                  CONFIRM PASSWORD
                </label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  style={{ width: '100%', backgroundColor: 'var(--color-surface)', border: '1px solid var(--border-delicate)', color: 'var(--color-ivory)', padding: '0.85rem 1rem', borderRadius: '2px', fontSize: '0.9rem' }}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn btn-crimson"
                style={{ width: '100%', marginTop: '1rem', padding: '0.95rem' }}
              >
                <span>{loading ? 'CREATING DOSSIER...' : 'REGISTER ACCOUNT'}</span>
                <ArrowRight size={16} />
              </button>
            </form>

            <div style={{ marginTop: '2.5rem', textAlign: 'center', borderTop: '1px solid var(--border-delicate)', paddingTop: '1.5rem' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--color-muted)' }}>Already registered? </span>
              <Link to="/login" style={{ fontSize: '0.85rem', color: 'var(--color-ivory)', fontWeight: 700, textDecoration: 'underline' }}>
                Sign in to the night.
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
