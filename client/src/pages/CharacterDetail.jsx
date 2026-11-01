import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PageShell from '../components/layout/PageShell';
import { ArrowLeft, Shield, Compass, Sparkles } from 'lucide-react';

const characterData = {
  ace: {
    name: 'ACE',
    role: 'THE DRIVER',
    image: '/media/Man_standing_beside_sports_coupe_6c0ff4eb.jpg',
    video: '/media/Animate_male_protagonist_portrait_4f35bc4f_1080p.mp4',
    story: 'Raised around illegal coastal time trials, Ace possesses an uncanny instinct for tire grip, speed telemetry, and vanishing into the neon night when authorities arrive. His signature drive is the mint classic GT coupe, heavily customized with modern twin-turbo internals.',
    specs: {
      affinity: 'High-Speed Getaways & Mountain Pursuits',
      weaponOfChoice: 'Mint-Green Classic Coupe GT',
      status: 'Wanted by Department of Transit Taskforce',
      allegiance: 'Autonomous'
    }
  },
  nova: {
    name: 'NOVA',
    role: 'THE WILDCARD',
    image: '/media/Woman_standing_in_tropical_city_2bcf9cab.jpg',
    story: 'Nova moves between luxury VIP penthouses and subterranean chop shops with seamless elegance. A master of surveillance counter-measures, encrypted logistics, and high-stakes street negotiations.',
    specs: {
      affinity: 'Surveillance & Syndicate Infiltration',
      weaponOfChoice: 'Corsa RR 1000 Superbike',
      status: 'Active Field Operative',
      allegiance: 'Independent Contractor'
    }
  },
  victor: {
    name: 'VICTOR',
    role: 'THE KINGMAKER',
    image: '/media/Man_standing_in_luxury_office_2c6a661c.jpg',
    story: 'From his glass aerie high above the financial district, Victor maneuvers the flow of vehicles, contraband, and private security contracts across the city. Unforgiving, calculating, and always two moves ahead.',
    specs: {
      affinity: 'Syndicate Capital & Covert Operations',
      weaponOfChoice: 'Armored Silverline Grand Tourer',
      status: 'High Net-Worth Target',
      allegiance: 'The Apex Syndicate'
    }
  }
};

export default function CharacterDetail() {
  const { slug } = useParams();
  const char = characterData[slug] || characterData.ace;

  return (
    <PageShell>
      <div className="container section-spacing">
        <Link to="/characters" className="btn-ghost" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2.5rem' }}>
          <ArrowLeft size={16} />
          <span>BACK TO CHARACTERS</span>
        </Link>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          {/* Portrait Image / Video */}
          <div style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--border-delicate)', borderRadius: '2px', overflow: 'hidden' }}>
            {slug === 'ace' && char.video ? (
              <video
                src={char.video}
                autoPlay
                muted
                loop
                playsInline
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            ) : (
              <img src={char.image} alt={char.name} style={{ width: '100%', height: 'auto', display: 'block' }} />
            )}
          </div>

          {/* Dossier Information */}
          <div>
            <span className="eyebrow" style={{ color: 'var(--color-crimson)' }}>{char.role}</span>
            <h1 className="headline-serif" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', color: 'var(--color-ivory)', marginBottom: '1.5rem' }}>
              {char.name}
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-muted)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              {char.story}
            </p>

            <div style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--border-delicate)', padding: '2rem', borderRadius: '2px' }}>
              <span className="eyebrow" style={{ marginBottom: '1rem' }}>OPERATIONAL TELEMETRY</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {Object.entries(char.specs).map(([key, val]) => (
                  <div key={key} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(240, 238, 231, 0.08)', paddingBottom: '0.6rem' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{key}</span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--color-ivory)', fontWeight: 600 }}>{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
