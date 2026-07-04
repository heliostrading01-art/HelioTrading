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
            src="/assets/banners/Hands2.png"
            alt="Helios Trading — tecnología y precisión"
            loading="eager"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center right' }}
          />
        </div>

        {/* Capa 2: Video de partículas encima del banner — se mezcla con screen blend */}
        <div
          className="elementor-background-video-container"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, overflow: 'hidden', mixBlendMode: 'screen' }}
        >
          <video
            className="elementor-background-video-hosted"
            role="presentation"
            autoPlay
            muted
            playsInline
            loop
            src="/media/215698_small.mp4#t=1"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Capa 3: Cuadrícula de trading */}
        <div className="grid-lines" style={{ zIndex: 2 }} />

        {/* Capa 4: Gradiente oscuro sobre el lado izquierdo para legibilidad del texto */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 3, pointerEvents: 'none',
          background: 'linear-gradient(90deg, rgba(8,15,36,0.82) 0%, rgba(8,15,36,0.55) 55%, rgba(8,15,36,0.15) 100%)',
        }} />

        {/* Contenido principal del hero */}
        <div className="e-con-inner" style={{ position: 'relative', zIndex: 4, width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 48px', boxSizing: 'border-box' }}>

          {/* Badge de credibilidad */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            background: 'rgba(46,111,206,0.12)', border: '1px solid rgba(46,111,206,0.35)',
            borderRadius: '20px', padding: '6px 16px', marginBottom: '28px',
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 8px #4ade80', flexShrink: 0 }} />
            <span style={{
              fontFamily: 'Rajdhani, sans-serif', fontSize: '12px', fontWeight: 700,
              letterSpacing: '2.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)',
            }}>
              Algorithmic Trading · Automated Strategies
            </span>
          </div>

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
            Trade Smarter.<br />
            <span style={{
              background: 'linear-gradient(90deg, #5ba3f5 0%, #2e6fce 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Win Consistently.</span>
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
              href="#products"
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

            <a
              href="#features"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: 'transparent', color: 'rgba(255,255,255,0.8)',
                fontFamily: 'Rajdhani, sans-serif', fontSize: '14px', fontWeight: 700,
                letterSpacing: '2px', textTransform: 'uppercase',
                padding: '15px 36px', borderRadius: '4px', textDecoration: 'none',
                border: '1.5px solid rgba(255,255,255,0.22)', transition: 'all 0.2s ease', cursor: 'pointer',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)';
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.22)';
                e.currentTarget.style.color = 'rgba(255,255,255,0.8)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              See How It Works
            </a>
          </div>

          {/* Trust stats */}
          <div style={{
            display: 'flex', gap: '40px', marginTop: '56px', flexWrap: 'wrap',
          }}>
            {[
              { num: '500+', label: 'Active Traders' },
              { num: '4.9★', label: 'Avg. Rating' },
              { num: '98%', label: 'Uptime SLA' },
            ].map(({ num, label }) => (
              <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span style={{
                  fontFamily: 'Rajdhani, sans-serif', fontSize: '28px', fontWeight: 700,
                  color: '#fff', letterSpacing: '-0.5px',
                }}>{num}</span>
                <span style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 400,
                  color: 'rgba(255,255,255,0.45)', letterSpacing: '1.5px', textTransform: 'uppercase',
                }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Divisor visual Helios */}
      <div className="helios-divider" aria-hidden="true" />
    </>
  );
}
