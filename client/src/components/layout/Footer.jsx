import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Compass, ShieldAlert, Sparkles } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: 'var(--color-base-dark)',
        borderTop: '1px solid var(--border-delicate)',
        paddingTop: 'clamp(4rem, 8vw, 6.5rem)',
        paddingBottom: '3.5rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        {/* Top Editorial Row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '3rem',
            marginBottom: '4.5rem'
          }}
        >
          {/* Brand Column */}
          <div style={{ maxWidth: '340px' }}>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 800,
                fontSize: '1.4rem',
                letterSpacing: '0.22em',
                color: 'var(--color-ivory)',
                display: 'block',
                marginBottom: '1rem'
              }}
            >
              NIGHTSHIFT
            </span>
            <p
              style={{
                fontSize: '0.9rem',
                color: 'var(--color-muted)',
                lineHeight: 1.7,
                marginBottom: '1.5rem'
              }}
            >
              WHERE THE CITY NEVER SLEEPS. An independent university exploration of high-contrast automotive cinema, fictional street narrative, and interactive editorial design.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--color-emerald)', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.12em' }}>
              <Sparkles size={14} />
              <span>SEMESTER 6 ADVANCED WEB DEV</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <span className="eyebrow">EXPERIENCE</span>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <Link to="/" className="btn-ghost" style={{ fontSize: '0.85rem' }}>Home</Link>
              </li>
              <li>
                <Link to="/world" className="btn-ghost" style={{ fontSize: '0.85rem' }}>The World</Link>
              </li>
              <li>
                <Link to="/characters" className="btn-ghost" style={{ fontSize: '0.85rem' }}>Characters</Link>
              </li>
              <li>
                <Link to="/garage" className="btn-ghost" style={{ fontSize: '0.85rem' }}>The Garage</Link>
              </li>
              <li>
                <Link to="/missions" className="btn-ghost" style={{ fontSize: '0.85rem' }}>Story Missions</Link>
              </li>
            </ul>
          </div>

          {/* Fictional Store Links */}
          <div>
            <span className="eyebrow">THE COLLECTION</span>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <Link to="/collection?category=cars" className="btn-ghost" style={{ fontSize: '0.85rem' }}>Vehicles & Concepts</Link>
              </li>
              <li>
                <Link to="/collection?category=motorcycles" className="btn-ghost" style={{ fontSize: '0.85rem' }}>Two-Wheel Motorcycles</Link>
              </li>
              <li>
                <Link to="/collection?category=apparel" className="btn-ghost" style={{ fontSize: '0.85rem' }}>Streetwear Apparel</Link>
              </li>
              <li>
                <Link to="/collection?category=art" className="btn-ghost" style={{ fontSize: '0.85rem' }}>Framed Art Prints</Link>
              </li>
              <li>
                <Link to="/collection?category=collectibles" className="btn-ghost" style={{ fontSize: '0.85rem' }}>Monographs & Collectibles</Link>
              </li>
            </ul>
          </div>

          {/* Utilities & Meta */}
          <div>
            <span className="eyebrow">PROJECT & ACCESS</span>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <Link to="/about" className="btn-ghost" style={{ fontSize: '0.85rem' }}>About & Credits</Link>
              </li>
              <li>
                <Link to="/prayer-times" className="btn-ghost" style={{ fontSize: '0.85rem' }}>Prayer Times Utility</Link>
              </li>
              <li>
                <Link to="/cart" className="btn-ghost" style={{ fontSize: '0.85rem' }}>Garage Cart</Link>
              </li>
              <li>
                <Link to="/login" className="btn-ghost" style={{ fontSize: '0.85rem' }}>Member Portal</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Oversized Cinematic Wordmark */}
        <div
          style={{
            borderTop: '1px solid var(--border-delicate)',
            borderBottom: '1px solid var(--border-delicate)',
            padding: '2.5rem 0',
            margin: '2rem 0',
            textAlign: 'center',
            userSelect: 'none'
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(3.5rem, 13vw, 12rem)',
              fontWeight: 800,
              letterSpacing: '0.04em',
              lineHeight: 0.82,
              color: 'rgba(240, 238, 231, 0.05)',
              display: 'block',
              textTransform: 'uppercase'
            }}
          >
            NIGHTSHIFT
          </span>
        </div>

        {/* Bottom Disclaimer & Back-to-Top */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
            paddingTop: '1rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', maxWidth: '720px' }}>
            <ShieldAlert size={18} style={{ color: 'var(--color-crimson)', flexShrink: 0 }} />
            <p style={{ fontSize: '0.78rem', color: 'var(--color-muted)', lineHeight: 1.5 }}>
              © 2026 NIGHTSHIFT — Independent student concept. Not affiliated with any game publisher or vehicle manufacturer. Advanced Web Development, Semester 6. All vehicle sales and orders are simulated demonstrations.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="btn btn-pill"
            style={{ padding: '0.6rem 1.25rem', fontSize: '0.75rem' }}
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
