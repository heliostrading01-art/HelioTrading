import React from 'react';

export default function ClientResourcePage({ type }) {
  const config = {
    features: {
      title: 'Helios Features',
      src: '/assets/recursos/FEATURES.png',
      alt: 'Helios Trading Systems Features Info'
    },
    pricing: {
      title: 'Helios Pricing & Packages',
      src: '/assets/recursos/Pricing.png',
      alt: 'Helios Trading Systems Pricing Info'
    },
    affiliates: {
      title: 'Affiliate Program',
      src: '/assets/recursos/Affiliates.png',
      alt: 'Helios Trading Systems Affiliates Info'
    }
  };

  const current = config[type] || config.features;

  return (
    <div style={{
      background: 'var(--navy)',
      minHeight: '100vh',
      padding: '160px 24px 100px 24px',
      color: 'var(--white)',
      position: 'relative'
    }}>
      <div className="grid-lines" style={{ opacity: 0.04, zIndex: 1 }} />

      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        {/* Header */}
        <h1 style={{
          fontFamily: 'Rajdhani, sans-serif',
          fontSize: 'clamp(32px, 4.5vw, 48px)',
          fontWeight: 700,
          color: 'var(--white)',
          marginBottom: '32px',
          textAlign: 'center'
        }}>{current.title}</h1>

        {/* Image Card Container */}
        <div style={{
          width: '100%',
          borderRadius: '8px',
          border: '1.5px solid rgba(255, 255, 255, 0.08)',
          background: 'rgba(255, 255, 255, 0.02)',
          padding: '24px',
          boxSizing: 'border-box',
          display: 'flex',
          justifyContent: 'center',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4)',
          marginBottom: '48px'
        }}>
          <img
            src={current.src}
            alt={current.alt}
            style={{
              maxWidth: '100%',
              height: 'auto',
              borderRadius: '4px',
              display: 'block'
            }}
          />
        </div>

        {/* Back Link */}
        <a
          href="#"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: 'var(--blue-bright)',
            fontFamily: 'Rajdhani, sans-serif',
            fontSize: '15px',
            fontWeight: 700,
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            textDecoration: 'none',
            transition: 'color 0.2s ease'
          }}
          onMouseEnter={e => e.currentTarget.style.color = '#fff'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--blue-bright)'}
        >
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </a>
      </div>
    </div>
  );
}
