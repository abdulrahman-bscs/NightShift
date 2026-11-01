import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, User, Menu, X, ArrowUpRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { totalCount, setIsDrawerOpen } = useCart();
  const { user, isAuthenticated } = useAuth();

  // Handle scroll state for header transparency transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change & manage body scroll lock
  useEffect(() => {
    setMobileMenuOpen(false);
    document.body.style.overflow = '';
  }, [location.pathname]);

  // Handle Escape key to dismiss mobile overlay
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
        document.body.style.overflow = '';
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    if (!mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      setMobileMenuOpen(true);
    } else {
      document.body.style.overflow = '';
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: 'HOME', path: '/' },
    { label: 'THE WORLD', path: '/world' },
    { label: 'CHARACTERS', path: '/characters' },
    { label: 'GARAGE', path: '/garage' },
    { label: 'MISSIONS', path: '/missions' },
    { label: 'COLLECTION', path: '/collection' },
    { label: 'ABOUT', path: '/about' }
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: 'background-color 300ms ease, border-color 300ms ease, backdrop-filter 300ms ease',
          backgroundColor: scrolled ? 'rgba(5, 9, 7, 0.92)' : 'rgba(5, 9, 7, 0.35)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: `1px solid ${scrolled ? 'var(--border-delicate)' : 'rgba(240, 238, 231, 0.08)'}`
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '76px'
          }}
        >
          {/* Brand Wordmark */}
          <Link
            to="/"
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem'
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 800,
                fontSize: '1.25rem',
                letterSpacing: '0.24em',
                color: 'var(--color-ivory)',
                textTransform: 'uppercase'
              }}
            >
              NIGHTSHIFT
            </span>
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-crimson)',
                display: 'inline-block'
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'clamp(1rem, 2vw, 2.2rem)'
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{
                    textDecoration: 'none',
                    fontSize: '0.78rem',
                    fontWeight: active ? 700 : 500,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: active ? 'var(--color-ivory)' : 'var(--color-muted)',
                    position: 'relative',
                    padding: '0.4rem 0',
                    transition: 'color var(--transition-fast)'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-ivory)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = active ? 'var(--color-ivory)' : 'var(--color-muted)')}
                >
                  {link.label}
                  {active && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        backgroundColor: 'var(--color-crimson)',
                        borderRadius: '1px'
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Icons & Auth */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            {/* Search Link */}
            <Link
              to="/collection"
              aria-label="Search collection"
              style={{
                color: 'var(--color-muted)',
                display: 'flex',
                alignItems: 'center',
                transition: 'color var(--transition-fast)'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-ivory)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-muted)')}
            >
              <Search size={18} />
            </Link>

            {/* Cart Trigger with Counter */}
            <Link
              to="/cart"
              aria-label={`Garage cart, ${totalCount} items`}
              style={{
                color: 'var(--color-muted)',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                transition: 'color var(--transition-fast)'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-ivory)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-muted)')}
            >
              <ShoppingBag size={18} />
              {totalCount > 0 && (
                <span
                  style={{
                    position: 'absolute',
                    top: '-7px',
                    right: '-9px',
                    backgroundColor: 'var(--color-crimson)',
                    color: 'var(--color-ivory)',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    lineHeight: 1
                  }}
                >
                  {totalCount}
                </span>
              )}
            </Link>

            {/* Account / Login Action */}
            <Link
              to={isAuthenticated ? '/account' : '/login'}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--color-ivory)',
                textDecoration: 'none',
                padding: '0.45rem 0.9rem',
                border: '1px solid var(--border-delicate)',
                borderRadius: '9999px',
                transition: 'all var(--transition-fast)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-ivory)';
                e.currentTarget.style.backgroundColor = 'rgba(240, 238, 231, 0.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-delicate)';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <User size={14} />
              <span className="account-text">{isAuthenticated ? 'ACCOUNT' : 'LOGIN'}</span>
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={toggleMobileMenu}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
              className="mobile-toggle"
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--color-ivory)',
                cursor: 'pointer',
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.4rem'
              }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Height Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99,
            backgroundColor: 'rgba(5, 9, 7, 0.98)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '6.5rem 2rem 2.5rem 2rem',
            animation: 'fadeIn 200ms ease-out'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <span className="eyebrow">NAVIGATION DIRECTORY</span>
            {navLinks.map((link, idx) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => {
                    document.body.style.overflow = '';
                    setMobileMenuOpen(false);
                  }}
                  style={{
                    textDecoration: 'none',
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(2rem, 7vw, 2.75rem)',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: active ? 'var(--color-crimson)' : 'var(--color-ivory)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderBottom: '1px solid var(--border-delicate)',
                    paddingBottom: '0.8rem',
                    transition: 'color var(--transition-fast)'
                  }}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight size={24} style={{ opacity: 0.6 }} />
                </Link>
              );
            })}
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              paddingTop: '2rem',
              borderTop: '1px solid var(--border-delicate)'
            }}
          >
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link
                to={isAuthenticated ? '/account' : '/login'}
                onClick={() => {
                  document.body.style.overflow = '';
                  setMobileMenuOpen(false);
                }}
                className="btn btn-crimson"
                style={{ flex: 1 }}
              >
                {isAuthenticated ? 'ACCOUNT DASHBOARD' : 'LOGIN / REGISTER'}
              </Link>
              <Link
                to="/cart"
                onClick={() => {
                  document.body.style.overflow = '';
                  setMobileMenuOpen(false);
                }}
                className="btn btn-pill"
                style={{ flex: 1 }}
              >
                GARAGE ({totalCount})
              </Link>
            </div>
            <p style={{ fontSize: '0.75rem', color: 'var(--color-muted)', textAlign: 'center' }}>
              © 2026 NIGHTSHIFT — University Portfolio Concept
            </p>
          </div>
        </div>
      )}

      {/* Responsive Styles for Header */}
      <style>{`
        @media (max-width: 960px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
          .account-text {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
