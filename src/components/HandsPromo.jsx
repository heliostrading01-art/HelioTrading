import React from 'react';

export default function HandsPromo() {
  return (
    <div 
      className="elementor-element elementor-element-hands-promo e-flex e-con-boxed e-con e-parent"
      style={{
        background: '#020612',
        minHeight: '520px',
        padding: '120px 0',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        width: '100%'
      }}
    >
      {/* Background Image spanning full width */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
        pointerEvents: 'none'
      }}>
        <img 
          src="/assets/banners/Hands2-1.png" 
          alt="Hands Promo Background"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center left'
          }}
        />
        {/* Dark overlay for readability on mobile/text areas */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, rgba(2,6,18,0.2) 0%, rgba(2,6,18,0.65) 50%, rgba(2,6,18,0.85) 100%)',
        }} />
      </div>

      <div className="e-con-inner" style={{
        position: 'relative',
        zIndex: 2,
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 48px',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end', // Aligns content to the right
      }}>
        {/* Right Column - Content */}
        <div style={{ 
          maxWidth: '520px', 
          width: '100%',
          background: 'rgba(2, 6, 18, 0.75)',
          padding: '40px',
          borderRadius: '12px',
          border: '1.5px solid rgba(255,255,255,0.06)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)'
        }}>
          {/* Tagline label */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(91, 163, 245, 0.08)',
            border: '1px solid rgba(91, 163, 245, 0.25)',
            borderRadius: '4px',
            padding: '6px 12px',
            marginBottom: '20px'
          }}>
            <span style={{
              fontFamily: 'Rajdhani, sans-serif',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: 'var(--blue-bright)'
            }}>Professional Edge</span>
          </div>

          <h2 style={{
            fontFamily: 'Rajdhani, sans-serif',
            fontSize: 'clamp(28px, 4.5vw, 42px)',
            fontWeight: 700,
            lineHeight: 1.1,
            color: 'var(--white)',
            margin: '0 0 20px 0'
          }}>
            Professional trading signals, indicators, and performance tools for serious traders.
          </h2>

          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '15px',
            lineHeight: 1.6,
            color: 'var(--white-80)',
            margin: '0 0 24px 0'
          }}>
            Get real-time execution signals and professional tools specifically built for futures contracts.
          </p>

          <div>
            <a 
              href="#pricing"
              className="elementor-button"
              style={{
                display: 'inline-block',
                textDecoration: 'none',
                textAlign: 'center'
              }}
            >
              Get Started Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
