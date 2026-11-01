import React from 'react';
import PageShell from '../components/layout/PageShell';
import { Shield, Compass, Sparkles, AlertCircle } from 'lucide-react';

export default function Missions() {
  const missions = [
    {
      num: 'CHAPTER 01',
      title: 'MIDNIGHT CIRCUIT',
      location: 'DOWNTOWN GRID',
      risk: 'HIGH PRIORITY',
      desc: 'Evade transit drones across rain-soaked grid corridors in a coordinated diversion run through neon alleyways.',
      image: '/media/Cars_racing_through_tropical_city_109f3d8f.jpg'
    },
    {
      num: 'CHAPTER 02',
      title: 'THE COASTAL GAUNTLET',
      location: 'OCEAN BOULEVARD',
      risk: 'EXTREME VELOCITY',
      desc: 'High-speed duel along the multi-level seawall expressway before sunrise breaks over the metropolitan harbor.',
      image: '/media/Sports_cars_racing_on_highway_e191cf42.jpg'
    },
    {
      num: 'CHAPTER 03',
      title: 'THE RIDGE RUN',
      location: 'NORTHERN TIMBER PASS',
      risk: 'TACTICAL EXTRACTION',
      desc: 'Overland switchback navigation through heavy mist and unmapped logging routes to deliver prototype telemetry.',
      image: '/media/SUV_navigating_winding_forest_road_1aa5ce69.jpg'
    }
  ];

  return (
    <PageShell>
      <div className="container section-spacing">
        <span className="eyebrow">04 / THE STORIES</span>
        <h1 className="headline-serif" style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', color: 'var(--color-ivory)', marginBottom: '1.5rem' }}>
          EVERY CHOICE / LEAVES A MARK.
        </h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--color-muted)', maxWidth: '720px', lineHeight: 1.7, marginBottom: '4rem' }}>
          High stakes, midnight runs, and deals that change everything. Original episodic narrative concepts set in the fictional city of NIGHTSHIFT.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
          {missions.map((m, idx) => (
            <div
              key={m.num}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--border-delicate)',
                borderRadius: '2px',
                overflow: 'hidden'
              }}
            >
              <div style={{ height: '380px', overflow: 'hidden' }}>
                <img src={m.image} alt={m.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: 'clamp(2rem, 4vw, 3.5rem)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                  <span className="eyebrow" style={{ margin: 0, color: 'var(--color-crimson)' }}>{m.num}</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-emerald)', fontWeight: 700, letterSpacing: '0.12em' }}>• {m.risk}</span>
                </div>
                <h2 className="headline-serif" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--color-ivory)', marginBottom: '1rem' }}>
                  {m.title}
                </h2>
                <p style={{ fontSize: '1rem', color: 'var(--color-muted)', lineHeight: 1.7, marginBottom: '2rem' }}>
                  {m.desc}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-ivory)', border: '1px solid var(--border-delicate)', padding: '0.4rem 0.8rem', borderRadius: '2px', letterSpacing: '0.1em' }}>
                    LOC: {m.location}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-muted)', fontStyle: 'italic' }}>
                    Concept Story Narrative (Fictional)
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
