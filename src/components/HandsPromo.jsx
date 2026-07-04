import React from 'react';

export default function HandsPromo() {
  return (
    <div 
      className="elementor-element elementor-element-hands-promo e-flex e-con-boxed e-con e-parent"
      style={{
        background: 'var(--navy-dark, #050a18)',
        padding: '100px 0',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        width: '100%'
      }}
    >
      {/* Decorative radial blur for high-end look */}
      <div style={{
        position: 'absolute',
        top: '50%',
        right: '-10%',
        transform: 'translateY(-50%)',
        width: '450px',
        height: '450px',
        background: 'radial-gradient(circle, rgba(46, 111, 206, 0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 1
      }} />

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
        justifyContent: 'space-between',
        gap: '80px',
        flexWrap: 'wrap'
      }}>
        {/* Left Column - Image (now on the left) */}
        <div style={{
          flex: '1 1 420px',
          maxWidth: '480px',
          display: 'flex',
          justifyContent: 'center',
          position: 'relative'
        }}>
          {/* Card Frame */}
          <div style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '1.25',
            borderRadius: '8px',
            border: '1.5px solid rgba(255, 255, 255, 0.08)',
            background: 'rgba(255, 255, 255, 0.02)',
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4)'
          }}>
            <img 
              src="/assets/banners/Hands2.png" 
              alt="Hands Promo Helios"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block'
              }}
            />
            {/* Dark gradient overlay on image */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(8,15,36,0) 50%, rgba(8,15,36,0.6) 100%)',
              pointerEvents: 'none'
            }} />
          </div>
        </div>

        {/* Right Column - Content (now on the right) */}
        <div style={{ flex: '1 1 420px', maxWidth: '500px' }}>
          {/* Tagline label */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(91, 163, 245, 0.08)',
            border: '1px solid rgba(91, 163, 245, 0.25)',
            borderRadius: '4px',
            padding: '6px 12px',
            marginBottom: '28px'
          }}>
            <span style={{
              fontFamily: 'Rajdhani, sans-serif',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: 'var(--blue-bright)'
            }}>
              Professional Trading Arsenal
            </span>
          </div>

          {/* Quote Title */}
          <h2 style={{
            fontFamily: 'Rajdhani, sans-serif',
            fontSize: 'clamp(28px, 4.5vw, 46px)',
            fontWeight: 700,
            lineHeight: 1.15,
            color: 'var(--white)',
            margin: '0 0 24px 0',
            letterSpacing: '-0.5px'
          }}>
            Professional trading signals, indicators, and performance tools for serious traders.
          </h2>

          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '15.5px',
            fontWeight: 400,
            lineHeight: 1.7,
            color: 'rgba(255,255,255,0.65)',
            margin: '0 0 36px 0',
            maxWidth: '520px'
          }}>
            Helios Trading Systems empowers your chart logic with institutional-grade data. Our tools are optimized for maximum efficiency, speed, and real-time validation across active instruments.
          </p>

          {/* Check points */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              'Advanced market structure analysis',
              'Backtest-proven signals & triggers',
              'High-fidelity performance metrics'
            ].map((text) => (
              <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  background: 'rgba(91, 163, 245, 0.15)',
                  border: '1px solid rgba(91, 163, 245, 0.35)',
                  flexShrink: 0
                }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--blue-bright)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span style={{
                  fontFamily: 'Rajdhani, sans-serif',
                  fontSize: '14.5px',
                  fontWeight: 600,
                  color: 'rgba(255,255,255,0.85)',
                  letterSpacing: '1px',
                  textTransform: 'uppercase'
                }}>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
