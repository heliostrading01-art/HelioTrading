import React from 'react';

/**
 * Hero — Propuesta Rediseño 2026
 * - Banner + video partículas con mix-blend-mode screen
 * - Cuadrícula terminal en capa superior
 * - Headline con gradiente en palabra clave
 * - Stats de credibilidad + CTA doble
 */
export default function Hero() {
  return (
    <>
      <div
        className="elementor-element elementor-element-7bade208 e-flex e-con-boxed e-con e-parent e-lazyloaded"
        data-id="7bade208"
        data-element_type="container"
        data-e-type="container"
      >
        {/* Capa 1: Banner del cliente — base del fondo */}
        <div
          id="cliente-banner-overlay"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}
        >
          <img
            src="/assets/banners/Hands2-1.png"
            alt="Helios Trading — tecnología y precisión"
            loading="eager"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center right' }}
          />
        </div>

        {/* Capa 2: Gradiente oscuro sobre el lado izquierdo para legibilidad del texto */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
          background: 'linear-gradient(90deg, rgba(8,15,36,0.85) 0%, rgba(8,15,36,0.55) 55%, rgba(8,15,36,0.15) 100%)',
        }} />

        {/* Contenido principal del hero */}
        <div className="e-con-inner" style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 48px', boxSizing: 'border-box' }}>

          {/* Headline principal */}
          <h1 style={{
            fontFamily: 'Rajdhani, sans-serif',
            fontSize: 'clamp(40px, 6.5vw, 76px)',
            fontWeight: 700,
            lineHeight: 1.02,
            letterSpacing: '-1px',
            color: 'var(--white)',
            margin: '0 0 24px 0',
            maxWidth: '700px',
          }}>
            Trade With<br />
            <span style={{
              background: 'linear-gradient(90deg, #5ba3f5 0%, #2e6fce 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Precision.</span>
          </h1>

          {/* Subtítulo */}
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '17px',
            fontWeight: 400,
            lineHeight: 1.75,
            color: 'rgba(255,255,255,0.72)',
            margin: '0 0 44px 0',
            maxWidth: '500px',
          }}>
            Precision algorithms and automated execution — built on backtest‑proven strategies that deliver consistent, real‑time results.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
            <a
              href="#/pricing"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                background: 'var(--blue)', color: 'var(--white)',
                fontFamily: 'Rajdhani, sans-serif', fontSize: '14px', fontWeight: 700,
                letterSpacing: '2px', textTransform: 'uppercase',
                padding: '16px 38px', borderRadius: '4px',
                textDecoration: 'none', transition: 'all 0.22s ease', cursor: 'pointer', border: 'none',
                boxShadow: '0 4px 20px rgba(46,111,206,0.35)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--blue-light)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(46,111,206,0.5)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'var(--blue)';
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(46,111,206,0.35)';
              }}
            >
              Explore Products
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Divisor visual Helios */}
      <div className="helios-divider" aria-hidden="true" />
    </>
  );
}
