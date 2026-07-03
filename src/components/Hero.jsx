import React from 'react';

/**
 * Hero — Propuesta Rediseño 2026
 * - Estilo visual alineado al 100% con helios_trading.html
 * - Cuadrícula terminal (.grid-lines) y gradiente radial de fondo
 * - Headline en tipografía Rajdhani de estilo geométrico
 * - Botones estilo .btn-primary y .btn-secondary (esquinas de 4px)
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
        {/* Cuadrícula visual de trading (grid-lines) */}
        <div className="grid-lines" />

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
            gap: '12px',
            marginBottom: '20px',
          }}>
            <span style={{
              display: 'block',
              width: '32px',
              height: '1.5px',
              background: 'var(--blue-bright)',
            }} />
            <span style={{
              fontFamily: 'Rajdhani, sans-serif',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: 'var(--blue-bright)',
              opacity: 0.95,
            }}>
              Helios Trading Systems
            </span>
          </div>

          {/* Headline principal — Estilo Rajdhani 72px */}
          <h1 style={{
            fontFamily: 'Rajdhani, sans-serif',
            fontSize: 'clamp(38px, 6.2vw, 72px)',
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: '-1px',
            color: 'var(--white)',
            margin: '0 0 24px 0',
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
            lineHeight: 1.7,
            color: 'var(--white-80)',
            margin: '0 0 44px 0',
            maxWidth: '480px',
          }}>
            Precision algorithms and automated execution for NinjaTrader 8—built on backtest-proven strategies that deliver consistent results.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
            {/* Primario: btn-primary de la maqueta */}
            <a
              href="#products"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'var(--blue)',
                color: 'var(--white)',
                fontFamily: 'Rajdhani, sans-serif',
                fontSize: '14px',
                fontWeight: 700,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                padding: '16px 36px',
                borderRadius: '4px',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                cursor: 'pointer',
                border: 'none',
              }}
              onMouseEnter={e => { 
                e.currentTarget.style.background = 'var(--blue-light)'; 
                e.currentTarget.style.transform = 'translateY(-1px)'; 
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(46,111,206,0.4)'; 
              }}
              onMouseLeave={e => { 
                e.currentTarget.style.background = 'var(--blue)'; 
                e.currentTarget.style.transform = 'none'; 
                e.currentTarget.style.boxShadow = 'none'; 
              }}
            >
              Ver Productos
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            {/* Secundario: btn-secondary de la maqueta */}
            <a
              href="#features"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'transparent',
                color: 'var(--white-80)',
                fontFamily: 'Rajdhani, sans-serif',
                fontSize: '14px',
                fontWeight: 700,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                padding: '16px 36px',
                borderRadius: '4px',
                textDecoration: 'none',
                border: '1.5px solid rgba(255,255,255,0.2)',
                transition: 'all 0.2s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={e => { 
                e.currentTarget.style.borderColor = 'var(--white-50)'; 
                e.currentTarget.style.color = 'var(--white)'; 
              }}
              onMouseLeave={e => { 
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; 
                e.currentTarget.style.color = 'var(--white-80)'; 
              }}
            >
              Saber Más
            </a>
          </div>

          {/* Social proof — rating (estilo stats sutil) */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginTop: '48px',
          }}>
            <div style={{ display: 'flex', gap: '3px' }}>
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 576 512" fill="var(--gold)">
                  <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/>
                </svg>
              ))}
            </div>
            <span style={{ 
              fontFamily: 'Rajdhani, sans-serif', 
              fontSize: '13px', 
              fontWeight: 600, 
              color: 'var(--white-50)', 
              letterSpacing: '1.5px',
              textTransform: 'uppercase'
            }}>
              <strong style={{ color: 'var(--white)', fontWeight: 700 }}>4.9 RATING</strong> · No hype. Just results.
            </span>
          </div>
        </div>
      </div>

      {/* Divisor visual Helios */}
      <div className="helios-divider" aria-hidden="true" />
    </>
  );
}