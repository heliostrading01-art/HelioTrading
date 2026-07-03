import React from 'react';

/**
 * Hero — Propuesta Rediseño 2026
 * - Sin carousel/slider: mensaje único, directo y contundente
 * - Headline estático con tipografía Syne 800
 * - 2 CTAs: primario (relleno) + secundario (outline)
 * - Video + imagen de fondo se mantienen de la versión base
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
        {/* Imagen del cliente como overlay — integrada con blend-mode */}
        <div
          id="cliente-banner-overlay"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }}
        >
          <img
            src="/assets/banners/Hands2.png"
            alt="Helios Trading — tecnología y precisión"
            loading="eager"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Video de fondo */}
        <div
          className="elementor-background-video-container"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, overflow: 'hidden' }}
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

        {/* Contenido principal del hero */}
        <div className="e-con-inner" style={{ position: 'relative', zIndex: 3, width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 48px', boxSizing: 'border-box' }}>
          
          {/* Eyebrow label */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '24px',
          }}>
            <span style={{
              display: 'inline-block',
              width: '24px',
              height: '2px',
              background: 'var(--c-primary)',
              borderRadius: '2px',
            }} />
            <span style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '2.5px',
              textTransform: 'uppercase',
              color: 'var(--c-primary)',
              opacity: 0.9,
            }}>
              Helios Trading Systems
            </span>
          </div>

          {/* Headline principal */}
          <h1 style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(38px, 5.5vw, 70px)',
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: '-2px',
            color: '#ffffff',
            margin: '0 0 20px 0',
            maxWidth: '680px',
            textShadow: 'none',
          }}>
            Stop Second&#8209;Guessing<br />Every Trade.
          </h1>

          {/* Subtítulo */}
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '17px',
            fontWeight: 400,
            lineHeight: 1.65,
            color: 'rgba(239, 240, 242, 0.72)',
            margin: '0 0 36px 0',
            maxWidth: '480px',
          }}>
            Precision algorithms and automated execution for NinjaTrader 8—built on backtest-proven strategies that deliver consistent results.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
            {/* Primario: relleno sólido */}
            <a
              href="#products"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'var(--c-primary)',
                color: '#ffffff',
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                fontWeight: 600,
                letterSpacing: '0.2px',
                padding: '14px 28px',
                borderRadius: '8px',
                textDecoration: 'none',
                border: '1.5px solid var(--c-primary)',
                transition: 'background 0.2s ease, box-shadow 0.2s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#5aa0e0'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(63,140,215,0.35)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--c-primary)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              Ver Productos
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            {/* Secundario: outline */}
            <a
              href="#features"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'transparent',
                color: 'rgba(239,240,242,0.85)',
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                fontWeight: 500,
                letterSpacing: '0.2px',
                padding: '14px 28px',
                borderRadius: '8px',
                textDecoration: 'none',
                border: '1.5px solid rgba(239,240,242,0.25)',
                transition: 'border-color 0.2s ease, color 0.2s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--c-primary)'; e.currentTarget.style.color = 'var(--c-primary)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(239,240,242,0.25)'; e.currentTarget.style.color = 'rgba(239,240,242,0.85)'; }}
            >
              Saber Más
            </a>
          </div>

          {/* Social proof — rating */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginTop: '48px',
          }}>
            <div style={{ display: 'flex', gap: '3px' }}>
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 576 512" fill={i < 5 ? '#fbbf24' : 'rgba(255,255,255,0.2)'}>
                  <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/>
                </svg>
              ))}
            </div>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'rgba(239,240,242,0.55)', letterSpacing: '0.2px' }}>
              <strong style={{ color: 'rgba(239,240,242,0.9)', fontWeight: 600 }}>4.9</strong> · No hype. Just results.
            </span>
          </div>
        </div>
      </div>

      {/* Divisor visual Helios */}
      <div className="helios-divider" aria-hidden="true" />
    </>
  );
}