import React from 'react';
import { Link } from 'react-router-dom';
import PageShell from '../components/layout/PageShell';
import { ArrowRight } from 'lucide-react';

export default function Characters() {
  const characters = [
    {
      slug: 'ace',
      name: 'ACE',
      role: 'THE DRIVER',
      bio: 'Behind the wheel of the mint classic GT. Calculated, fearless, and obsessed with mechanical perfection.',
      image: '/media/Man_standing_beside_sports_coupe_6c0ff4eb.jpg'
    },
    {
      slug: 'nova',
      name: 'NOVA',
      role: 'THE WILDCARD',
      bio: 'Infiltrator and strategist with ties across every underground faction in the tropical core.',
      image: '/media/Woman_standing_in_tropical_city_2bcf9cab.jpg'
    },
    {
      slug: 'victor',
      name: 'VICTOR',
      role: 'THE KINGMAKER',
      bio: 'High-rise syndicate broker pulling financial strings from his glass-walled penthouse high above the city.',
      image: '/media/Man_standing_in_luxury_office_2c6a661c.jpg'
    }
  ];

  return (
    <PageShell>
      <div className="container section-spacing">
        <span className="eyebrow">02 / THE PEOPLE</span>
        <h1 className="headline-serif" style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', color: 'var(--color-ivory)', marginBottom: '1.5rem' }}>
          THREE LIVES. / ONE CITY.
        </h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--color-muted)', maxWidth: '720px', lineHeight: 1.7, marginBottom: '3.5rem' }}>
          Everyone has a past. Not everyone gets to rewrite it. Meet the original protagonists of NIGHTSHIFT.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
          {characters.map(char => (
            <Link
              key={char.slug}
              to={`/characters/${char.slug}`}
              style={{
                textDecoration: 'none',
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--border-delicate)',
                borderRadius: '2px',
                overflow: 'hidden',
                transition: 'all var(--transition-fast)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-crimson)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-delicate)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ height: '420px', overflow: 'hidden' }}>
                <img src={char.image} alt={char.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '2rem' }}>
                <span className="eyebrow" style={{ color: 'var(--color-crimson)' }}>{char.role}</span>
                <h3 className="headline-serif" style={{ fontSize: '2.2rem', color: 'var(--color-ivory)', marginBottom: '0.75rem' }}>
                  {char.name}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {char.bio}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-ivory)', fontSize: '0.8rem', fontWeight: 700 }}>
                  <span>VIEW DOSSIER</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
