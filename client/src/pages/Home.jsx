import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play, ArrowRight, X, Sparkles, Compass, Shield, ArrowUpRight } from 'lucide-react';
import PageShell from '../components/layout/PageShell';

export default function Home() {
  const [filmModalOpen, setFilmModalOpen] = useState(false);
  const videoRef = useRef(null);
  const modalVideoRef = useRef(null);

  // Pause background video when offscreen
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  // Modal Escape key handling
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && filmModalOpen) {
        setFilmModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [filmModalOpen]);

  const openFilmModal = () => {
    setFilmModalOpen(true);
  };

  const closeFilmModal = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
    }
    setFilmModalOpen(false);
  };

  return (
    <PageShell noPaddingTop={true}>
      {/* 1. HERO SECTION (90-100svh Full-Bleed Video) */}
      <section
        style={{
          position: 'relative',
          height: '100svh',
          minHeight: '680px',
          display: 'flex',
          alignItems: 'flex-end',
          paddingBottom: 'clamp(3rem, 7vw, 6.5rem)',
          overflow: 'hidden'
        }}
      >
        {/* Full-Bleed Video Background */}
        <video
          ref={videoRef}
          src="/media/Mint_green_car_camera_dolly_e2e57846_1080p.mp4"
          poster="/media/Mint-green_classic_coupe_parked_3c9d8928.jpg"
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0
          }}
        />

        {/* Cinematic Film Overlay Gradient for Text Readability */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(5, 9, 7, 0.4) 0%, rgba(5, 9, 7, 0.7) 60%, #050907 100%)',
            zIndex: 1
          }}
        />

        {/* Ambient Radial Gradient Accent */}
        <div
          style={{
            position: 'absolute',
            bottom: '10%',
            left: '5%',
            width: '45vw',
            height: '45vw',
            background: 'radial-gradient(circle, rgba(191, 16, 41, 0.18) 0%, transparent 70%)',
            filter: 'blur(60px)',
            pointerEvents: 'none',
            zIndex: 1
          }}
        />

        {/* Hero Content Area */}
        <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
          <div style={{ maxWidth: '980px' }}>
            {/* Eyebrow */}
            <div style={{ marginBottom: '1.25rem' }}>
              <span className="eyebrow" style={{ color: 'var(--color-crimson)', margin: 0 }}>
                SAME CITY.
              </span>
              <span className="eyebrow" style={{ color: 'var(--color-ivory)', margin: 0 }}>
                DIFFERENT RULES.
              </span>
            </div>

            {/* Giant Editorial Headlines */}
            <h1
              className="headline-serif"
              style={{
                fontSize: 'clamp(3.8rem, 9.5vw, 9.2rem)',
                marginBottom: '1.5rem',
                letterSpacing: '-0.03em'
              }}
            >
              <span style={{ color: 'var(--color-crimson)', display: 'block' }}>
                MADE FOR
              </span>
              <span style={{ color: 'var(--color-ivory)', display: 'block' }}>
                THE STREETS.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p
              style={{
                fontSize: 'clamp(1rem, 1.6vw, 1.25rem)',
                color: 'var(--color-ivory-dim)',
                maxWidth: '560px',
                lineHeight: 1.6,
                marginBottom: '2.5rem'
              }}
            >
              A city of fast machines, restless nights, and stories waiting to happen.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
              <Link to="/world" className="btn btn-crimson">
                <span>EXPLORE THE CITY</span>
                <ArrowRight size={16} />
              </Link>

              <button
                onClick={openFilmModal}
                className="btn btn-pill"
                aria-label="Watch the film trailer"
              >
                <Play size={14} fill="currentColor" />
                <span>WATCH THE FILM</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FOUNDATION SUMMARY & PILLARS SECTION */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--color-base)' }}>
        <div className="container">
          {/* Section Eyebrow */}
          <div style={{ maxWidth: '780px', marginBottom: '4rem' }}>
            <span className="eyebrow">01 / THE FOUNDATION</span>
            <h2 className="headline-serif" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', color: 'var(--color-ivory)', marginBottom: '1.25rem' }}>
              EVERY STREET TELLS A STORY.
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-muted)', lineHeight: 1.7 }}>
              From sun-soaked coastlines to neon-soaked backstreets, the city never stands still. Explore original automotive showcases, character backstories, and curated collectibles.
            </p>
          </div>

          {/* 3 Pillar Editorial Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem'
            }}
          >
            {/* Pillar 1: The World */}
            <Link
              to="/world"
              style={{
                textDecoration: 'none',
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--border-delicate)',
                borderRadius: '2px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'border-color var(--transition-fast), transform var(--transition-fast)'
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
              <div style={{ position: 'relative', height: '260px', overflow: 'hidden' }}>
                <img
                  src="/media/Tropical_metropolis_view_from_ro…_d239fe77.jpg"
                  alt="Tropical metropolis skyline"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  loading="lazy"
                />
                <span
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    backgroundColor: 'rgba(5, 9, 7, 0.85)',
                    padding: '0.35rem 0.75rem',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    color: 'var(--color-emerald)',
                    borderRadius: '2px'
                  }}
                >
                  DISTRICTS & LORE
                </span>
              </div>
              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                <div>
                  <h3 className="headline-serif" style={{ fontSize: '1.6rem', color: 'var(--color-ivory)', marginBottom: '0.75rem' }}>
                    THE WORLD
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-muted)', lineHeight: 1.6 }}>
                    Travel through the Coastline, Downtown high-rises, and misty mountain Outskirts.
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-ivory)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.12em', marginTop: '1.5rem' }}>
                  <span>DISCOVER DISTRICTS</span>
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </Link>

            {/* Pillar 2: The Garage */}
            <Link
              to="/garage"
              style={{
                textDecoration: 'none',
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--border-delicate)',
                borderRadius: '2px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'border-color var(--transition-fast), transform var(--transition-fast)'
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
              <div style={{ position: 'relative', height: '260px', overflow: 'hidden' }}>
                <img
                  src="/media/Mint-green_classic_coupe_parked_3c9d8928.jpg"
                  alt="Mint-green classic coupe parked"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  loading="lazy"
                />
                <span
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    backgroundColor: 'rgba(5, 9, 7, 0.85)',
                    padding: '0.35rem 0.75rem',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    color: 'var(--color-emerald)',
                    borderRadius: '2px'
                  }}
                >
                  6 CONCEPT SPECIMENS
                </span>
              </div>
              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                <div>
                  <h3 className="headline-serif" style={{ fontSize: '1.6rem', color: 'var(--color-ivory)', marginBottom: '0.75rem' }}>
                    THE GARAGE
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-muted)', lineHeight: 1.6 }}>
                    Fictional bespoke machines engineered with high-octane attitude and technical concept telemetry.
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-ivory)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.12em', marginTop: '1.5rem' }}>
                  <span>ENTER THE GARAGE</span>
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </Link>

            {/* Pillar 3: The Collection */}
            <Link
              to="/collection"
              style={{
                textDecoration: 'none',
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--border-delicate)',
                borderRadius: '2px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'border-color var(--transition-fast), transform var(--transition-fast)'
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
              <div style={{ position: 'relative', height: '260px', overflow: 'hidden' }}>
                <img
                  src="/media/Luxury_varsity_jacket_displayed_a72c6992.jpg"
                  alt="Luxury varsity jacket"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  loading="lazy"
                />
                <span
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    backgroundColor: 'rgba(5, 9, 7, 0.85)',
                    padding: '0.35rem 0.75rem',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    color: 'var(--color-emerald)',
                    borderRadius: '2px'
                  }}
                >
                  15 SEEDED ITEMS
                </span>
              </div>
              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                <div>
                  <h3 className="headline-serif" style={{ fontSize: '1.6rem', color: 'var(--color-ivory)', marginBottom: '0.75rem' }}>
                    THE COLLECTION
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-muted)', lineHeight: 1.6 }}>
                    Original automotive concepts, streetwear apparel, framed art, and collectible monographs.
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-ivory)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.12em', marginTop: '1.5rem' }}>
                  <span>SHOP CATALOGUE</span>
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. CINEMATIC VIDEO MODAL */}
      {filmModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Nightshift Cinematic Film"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 200,
            backgroundColor: 'rgba(5, 9, 7, 0.95)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem'
          }}
          onClick={closeFilmModal}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '1100px',
              backgroundColor: '#000',
              border: '1px solid var(--border-delicate)',
              borderRadius: '4px',
              overflow: 'hidden'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1rem 1.5rem',
                borderBottom: '1px solid var(--border-delicate)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span className="eyebrow" style={{ margin: 0 }}>CINEMATIC TRAILER</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-ivory)' }}>HYPERCAR REVEAL</span>
              </div>

              <button
                onClick={closeFilmModal}
                aria-label="Close film modal"
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--color-ivory)',
                  cursor: 'pointer',
                  padding: '0.4rem',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <X size={22} />
              </button>
            </div>

            {/* Video Player */}
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9' }}>
              <video
                ref={modalVideoRef}
                src="/media/Hypercar_reveal_camera_tracking_fb572138_1080p.mp4"
                controls
                autoPlay
                playsInline
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      )}
    </PageShell>
  );
}
