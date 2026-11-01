import React from 'react';
import PageShell from '../components/layout/PageShell';
import { Sparkles, Code, Palette, Shield, Terminal } from 'lucide-react';

export default function About() {
  return (
    <PageShell>
      <div className="container section-spacing">
        {/* Title */}
        <div style={{ maxWidth: '840px', marginBottom: '4.5rem' }}>
          <span className="eyebrow" style={{ color: 'var(--color-crimson)' }}>INDEPENDENT STUDENT CONCEPT</span>
          <h1 className="headline-serif" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', color: 'var(--color-ivory)', marginBottom: '1.5rem' }}>
            A DIFFERENT KIND / OF CITY.
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--color-ivory-dim)', lineHeight: 1.8 }}>
            <strong>NIGHTSHIFT</strong> is a comprehensive full-stack web project conceived and built for the <strong>Advanced Web Development</strong> course, Semester 6. It merges open-world driving cinema, editorial high-contrast photography, and high-performance interactive web engineering.
          </p>
        </div>

        {/* 2-Column Story and Contributor */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '4rem', marginBottom: '5rem', alignItems: 'center' }}>
          <div>
            <h2 className="headline-serif" style={{ fontSize: '2.2rem', color: 'var(--color-ivory)', marginBottom: '1.25rem' }}>
              ORIGINAL CREATIVE DIRECTION
            </h2>
            <p style={{ color: 'var(--color-muted)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Unlike generic neon cyberpunk templates, NIGHTSHIFT draws directly from 2026 luxury automotive editorial aesthetics: deep emerald grounds (`#050907`), architectural crimson accents (`#BF1029`), and the razor-sharp high-contrast vertical strokes of Bodoni Moda serif typography.
            </p>
            <p style={{ color: 'var(--color-muted)', lineHeight: 1.7, marginBottom: '2rem' }}>
              Every vehicle, district, and character is an original concept designed for immersive storytelling. The experience contains no trademarked publisher assets, proprietary game code, or commercial automotive badges.
            </p>
            <div style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--border-delicate)', padding: '1.5rem', borderRadius: '2px' }}>
              <span className="eyebrow" style={{ marginBottom: '0.5rem' }}>ACADEMIC NOTICE</span>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-muted)', margin: 0 }}>
                This is an academic semester portfolio project. All vehicle sales, product orders, and checkout actions are simulated demonstrations without financial transactions.
              </p>
            </div>
          </div>

          {/* Photographic Portrait Credit Card */}
          <div style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--border-delicate)', borderRadius: '2px', overflow: 'hidden' }}>
            <img
              src="/media/Rich_Pearce_from_London___ea06a39a.jpg"
              alt="Editorial portrait credit"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
            <div style={{ padding: '1.75rem' }}>
              <span className="eyebrow" style={{ color: 'var(--color-emerald)' }}>EDITORIAL PHOTOGRAPHY</span>
              <h3 className="headline-serif" style={{ fontSize: '1.5rem', color: 'var(--color-ivory)', marginBottom: '0.5rem' }}>
                RICH PEARCE
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-muted)', margin: 0 }}>
                Visual concept and architectural photographic direction contributor. Captured in London studio lighting.
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack Breakdown */}
        <div style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--border-delicate)', padding: 'clamp(2rem, 5vw, 4rem)', borderRadius: '2px' }}>
          <span className="eyebrow">UNDER THE HOOD</span>
          <h2 className="headline-serif" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--color-ivory)', marginBottom: '2.5rem' }}>
            TECHNOLOGY ARCHITECTURE
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--color-emerald)', marginBottom: '0.75rem' }}>
                <Code size={18} />
                <strong style={{ fontSize: '1rem', letterSpacing: '0.08em' }}>REACT 18 & VITE</strong>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-muted)', lineHeight: 1.6 }}>
                Modular single-page architecture with React Router v6, custom CSS Custom Property tokens, and fluid editorial typography scales.
              </p>
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--color-crimson)', marginBottom: '0.75rem' }}>
                <Terminal size={18} />
                <strong style={{ fontSize: '1rem', letterSpacing: '0.08em' }}>EXPRESS API</strong>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-muted)', lineHeight: 1.6 }}>
                Robust RESTful API with bcrypt password hashing, JWT httpOnly cookies, and input validation.
              </p>
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--color-ivory)', marginBottom: '0.75rem' }}>
                <Shield size={18} />
                <strong style={{ fontSize: '1rem', letterSpacing: '0.08em' }}>SQLITE PERSISTENCE</strong>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-muted)', lineHeight: 1.6 }}>
                Zero-config transactional persistence powered by Node.js built-in SQLite WAL mode, supporting users, products, cart sync, and orders.
              </p>
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--color-emerald)', marginBottom: '0.75rem' }}>
                <Palette size={18} />
                <strong style={{ fontSize: '1rem', letterSpacing: '0.08em' }}>MOTION & MEDIA</strong>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-muted)', lineHeight: 1.6 }}>
                Hardware-accelerated native HTML5 video loops, poster fallbacks, IntersectionObserver viewport pause, and reduced-motion accessibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
