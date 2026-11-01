import React from 'react';
import PageShell from '../components/layout/PageShell';

export default function World() {
  return (
    <PageShell>
      <div className="container section-spacing">
        <span className="eyebrow">01 / THE WORLD</span>
        <h1 className="headline-serif" style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', color: 'var(--color-ivory)', marginBottom: '1.5rem' }}>
          EVERY STREET / TELLS A STORY.
        </h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--color-muted)', maxWidth: '720px', lineHeight: 1.7, marginBottom: '3rem' }}>
          From sun-soaked coastlines to neon-soaked backstreets, the city never stands still. Explore three distinct districts forged under the midnight skyline.
        </p>

        {/* 3 District Previews */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          <div style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--border-delicate)', borderRadius: '2px', overflow: 'hidden' }}>
            <img src="/media/Cars_driving_along_coastal_metro…_3bdb0c79.jpg" alt="Coastline" style={{ width: '100%', height: '260px', objectFit: 'cover' }} />
            <div style={{ padding: '2rem' }}>
              <span className="eyebrow">DISTRICT 01</span>
              <h3 className="headline-serif" style={{ fontSize: '1.8rem', color: 'var(--color-ivory)', marginBottom: '0.5rem' }}>THE COASTLINE</h3>
              <p style={{ color: 'var(--color-muted)', fontSize: '0.9rem' }}>Oceanfront highways, sea-mist apexes, and endless high-speed straights.</p>
            </div>
          </div>

          <div style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--border-delicate)', borderRadius: '2px', overflow: 'hidden' }}>
            <img src="/media/Tropical_metropolis_view_from_ro…_d239fe77.jpg" alt="Downtown" style={{ width: '100%', height: '260px', objectFit: 'cover' }} />
            <div style={{ padding: '2rem' }}>
              <span className="eyebrow">DISTRICT 02</span>
              <h3 className="headline-serif" style={{ fontSize: '1.8rem', color: 'var(--color-ivory)', marginBottom: '0.5rem' }}>DOWNTOWN</h3>
              <p style={{ color: 'var(--color-muted)', fontSize: '0.9rem' }}>Towering penthouses, corporate bastions, and neon-drenched grid canyons.</p>
            </div>
          </div>

          <div style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--border-delicate)', borderRadius: '2px', overflow: 'hidden' }}>
            <img src="/media/SUV_navigating_winding_forest_road_1aa5ce69.jpg" alt="The Outskirts" style={{ width: '100%', height: '260px', objectFit: 'cover' }} />
            <div style={{ padding: '2rem' }}>
              <span className="eyebrow">DISTRICT 03</span>
              <h3 className="headline-serif" style={{ fontSize: '1.8rem', color: 'var(--color-ivory)', marginBottom: '0.5rem' }}>THE OUTSKIRTS</h3>
              <p style={{ color: 'var(--color-muted)', fontSize: '0.9rem' }}>Misty pine switchbacks, industrial depots, and midnight hideouts.</p>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
