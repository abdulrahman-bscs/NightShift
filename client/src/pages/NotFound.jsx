import React from 'react';
import { Link } from 'react-router-dom';
import PageShell from '../components/layout/PageShell';
import { ArrowLeft, Navigation } from 'lucide-react';

export default function NotFound() {
  return (
    <PageShell>
      <div
        className="container section-spacing"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '65vh',
          textAlign: 'center'
        }}
      >
        <span className="eyebrow" style={{ color: 'var(--color-crimson)', fontSize: '1rem', marginBottom: '1rem' }}>
          404 — DEAD END
        </span>
        <h1
          className="headline-serif"
          style={{
            fontSize: 'clamp(2.5rem, 6.5vw, 5.5rem)',
            color: 'var(--color-ivory)',
            lineHeight: 0.95,
            marginBottom: '1.5rem',
            maxWidth: '820px'
          }}
        >
          WRONG TURN. / THE CITY'S THIS WAY.
        </h1>
        <p style={{ color: 'var(--color-muted)', fontSize: '1.1rem', maxWidth: '540px', lineHeight: 1.6, marginBottom: '2.5rem' }}>
          You've drifted beyond the patrolled district perimeter. Return to the main grid to continue exploring.
        </p>

        <Link to="/" className="btn btn-crimson">
          <ArrowLeft size={16} />
          <span>RETURN TO HIGHWAY 01</span>
        </Link>
      </div>
    </PageShell>
  );
}
