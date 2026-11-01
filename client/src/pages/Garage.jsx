import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageShell from '../components/layout/PageShell';
import { Play, ArrowRight, Gauge, Zap, Flame, Shield, X } from 'lucide-react';

export default function Garage() {
  const [filter, setFilter] = useState('all');
  const [filmModal, setFilmModal] = useState(false);

  const vehicles = [
    {
      slug: 'mint-green-gt',
      name: 'MINT-GREEN CLASSIC GT',
      type: 'car',
      tag: 'FEATURED SPECIMEN',
      specs: { engine: '4.2L Twin-Turbo Inline-6', hp: '620 HP', topSpeed: '320 km/h', zeroToHundred: '3.1s' },
      image: '/media/Mint-green_classic_coupe_parked_3c9d8928.jpg'
    },
    {
      slug: 'rosso-gt-concept',
      name: 'ROSSO GT CONCEPT',
      type: 'car',
      tag: 'ENDURANCE TRACK',
      specs: { engine: '4.0L Twin-Turbo V8', hp: '720 HP', topSpeed: '335 km/h', zeroToHundred: '2.8s' },
      image: '/media/Crimson_coupe_in_studio_92d98010.jpg'
    },
    {
      slug: 'apex-prototype-x',
      name: 'APEX PROTOTYPE-X',
      type: 'car',
      tag: 'ELECTRIC HYPERCAR',
      specs: { engine: 'Tri-Motor Electric AWD', hp: '1,450 HP', topSpeed: '390 km/h', zeroToHundred: '1.9s' },
      image: '/media/Futuristic_hypercar_in_dark_show…_b265474d.jpg'
    },
    {
      slug: 'corsa-rr-1000',
      name: 'CORSA RR 1000 SUPERBIKE',
      type: 'motorcycle',
      tag: 'CIRCUIT WEAPON',
      specs: { engine: '998cc DOHC Inline-4', hp: '214 HP', topSpeed: '310 km/h', zeroToHundred: '2.6s' },
      image: '/media/Racing_superbike_in_studio_d787fa2b.jpg'
    },
    {
      slug: 'modena-650-cafe-racer',
      name: 'MODENA 650 CAFE RACER',
      type: 'motorcycle',
      tag: 'URBAN RETRO',
      specs: { engine: '648cc Parallel Twin', hp: '65 HP', topSpeed: '185 km/h', zeroToHundred: '4.8s' },
      image: '/media/Modern_café_racer_motorcycle_dis…_0134c533.jpg'
    },
    {
      slug: 'sahara-900-scrambler',
      name: 'SAHARA 900 SCRAMBLER',
      type: 'motorcycle',
      tag: 'ALL-TERRAIN OVERLAND',
      specs: { engine: '895cc High-Torque Twin', hp: '88 HP', topSpeed: '205 km/h', zeroToHundred: '3.9s' },
      image: '/media/Rugged_adventure_scrambler_motor…_abaffd13.jpg'
    }
  ];

  const filtered = filter === 'all' ? vehicles : vehicles.filter(v => v.type === filter);

  return (
    <PageShell>
      <div className="container section-spacing">
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem', marginBottom: '3.5rem' }}>
          <div>
            <span className="eyebrow">03 / THE GARAGE</span>
            <h1 className="headline-serif" style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', color: 'var(--color-ivory)', marginBottom: '1rem' }}>
              MACHINES WITH / AN ATTITUDE.
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-muted)', maxWidth: '640px' }}>
              Built for the long way home. Driven by the need for more. Fictional automotive showcase featuring custom specifications and editorial imagery.
            </p>
          </div>

          <button onClick={() => setFilmModal(true)} className="btn btn-pill">
            <Play size={14} fill="currentColor" />
            <span>HYPERCAR CINEMATIC</span>
          </button>
        </div>

        {/* Filter Tabs */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem', borderBottom: '1px solid var(--border-delicate)', paddingBottom: '1rem' }}>
          {['all', 'car', 'motorcycle'].map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                background: 'transparent',
                border: 'none',
                color: filter === cat ? 'var(--color-ivory)' : 'var(--color-muted)',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                padding: '0.4rem 0.8rem',
                borderBottom: filter === cat ? '2px solid var(--color-crimson)' : '2px solid transparent',
                transition: 'all var(--transition-fast)'
              }}
            >
              {cat === 'all' ? 'ALL SPECIMENS (6)' : cat === 'car' ? 'CARS (3)' : 'MOTORCYCLES (3)'}
            </button>
          ))}
        </div>

        {/* Grid of Vehicles */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2.5rem' }}>
          {filtered.map(veh => (
            <div
              key={veh.slug}
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--border-delicate)',
                borderRadius: '2px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ height: '280px', overflow: 'hidden', position: 'relative' }}>
                <img src={veh.image} alt={veh.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <span
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    backgroundColor: 'rgba(5, 9, 7, 0.85)',
                    padding: '0.35rem 0.75rem',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    color: 'var(--color-emerald)',
                    borderRadius: '2px'
                  }}
                >
                  {veh.tag}
                </span>
              </div>

              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                <div>
                  <h3 className="headline-serif" style={{ fontSize: '1.8rem', color: 'var(--color-ivory)', marginBottom: '1.25rem' }}>
                    {veh.name}
                  </h3>

                  {/* Spec Row */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.5rem', backgroundColor: 'rgba(5,9,7,0.5)', padding: '1rem', borderRadius: '2px' }}>
                    <div>
                      <span style={{ fontSize: '0.7rem', color: 'var(--color-muted)', display: 'block', textTransform: 'uppercase' }}>POWER</span>
                      <strong style={{ fontSize: '0.9rem', color: 'var(--color-ivory)' }}>{veh.specs.hp}</strong>
                    </div>
                    <div>
                      <span style={{ fontSize: '0.7rem', color: 'var(--color-muted)', display: 'block', textTransform: 'uppercase' }}>0-100 KM/H</span>
                      <strong style={{ fontSize: '0.9rem', color: 'var(--color-ivory)' }}>{veh.specs.zeroToHundred}</strong>
                    </div>
                    <div>
                      <span style={{ fontSize: '0.7rem', color: 'var(--color-muted)', display: 'block', textTransform: 'uppercase' }}>TOP SPEED</span>
                      <strong style={{ fontSize: '0.9rem', color: 'var(--color-ivory)' }}>{veh.specs.topSpeed}</strong>
                    </div>
                    <div>
                      <span style={{ fontSize: '0.7rem', color: 'var(--color-muted)', display: 'block', textTransform: 'uppercase' }}>ENGINE</span>
                      <strong style={{ fontSize: '0.8rem', color: 'var(--color-ivory)' }}>{veh.specs.engine.split(' ')[0]}</strong>
                    </div>
                  </div>
                </div>

                <Link to={`/collection/${veh.slug === 'mint-green-gt' ? 'silverline-grand-tourer' : veh.slug}`} className="btn btn-pill" style={{ width: '100%' }}>
                  <span>VIEW CATALOG SPEC</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Film Modal */}
      {filmModal && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 200,
            backgroundColor: 'rgba(5, 9, 7, 0.95)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem'
          }}
          onClick={() => setFilmModal(false)}
        >
          <div style={{ width: '100%', maxWidth: '1000px', backgroundColor: '#000', border: '1px solid var(--border-delicate)', borderRadius: '4px', overflow: 'hidden' }} onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', borderBottom: '1px solid var(--border-delicate)' }}>
              <span className="eyebrow" style={{ margin: 0 }}>HYPERCAR REVEAL</span>
              <button onClick={() => setFilmModal(false)} style={{ background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer' }}><X size={20} /></button>
            </div>
            <video src="/media/Hypercar_reveal_camera_tracking_fb572138_1080p.mp4" controls autoPlay style={{ width: '100%', display: 'block' }} />
          </div>
        </div>
      )}
    </PageShell>
  );
}
