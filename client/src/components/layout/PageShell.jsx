import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useCart } from '../../context/CartContext';
import { CheckCircle2 } from 'lucide-react';

export default function PageShell({ children, noPaddingTop = false }) {
  const { toastMessage } = useCart();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative' }}>
      <Header />

      <main style={{ flex: 1, paddingTop: noPaddingTop ? 0 : '76px' }}>
        {children}
      </main>

      <Footer />

      {/* Global Add-to-Cart Toast */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            backgroundColor: 'var(--color-surface)',
            border: '1px solid var(--color-emerald)',
            color: 'var(--color-ivory)',
            padding: '1rem 1.5rem',
            borderRadius: '9999px',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.6)',
            zIndex: 999,
            animation: 'slideUp 300ms ease-out'
          }}
        >
          <CheckCircle2 size={18} style={{ color: 'var(--color-emerald)' }} />
          <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
