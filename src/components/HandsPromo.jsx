import React from 'react';

export default function HandsPromo() {
  return (
    <div 
      className="elementor-element elementor-element-hands-promo e-flex e-con-boxed e-con e-parent"
      style={{
        background: '#000000',
        minHeight: '600px',
        padding: '0',
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      {/* Background Image spanning full width, completely clean */}
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
      </div>

      <div className="e-con-inner" style={{
        position: 'relative',
        zIndex: 2,
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '60px 48px 0 48px', // Espaciado superior
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'flex-start', // Alinear al borde superior
        justifyContent: 'flex-end', // Alinear a la derecha
        minHeight: '600px'
      }}>
        {/* Right Column - Text directly overlayed, no background card */}
        <div style={{ 
          maxWidth: '560px', 
          width: '100%',
          textAlign: 'left'
        }}>
          <h2 style={{
            fontFamily: 'Rajdhani, sans-serif',
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 700,
            lineHeight: 1.15,
            color: 'var(--white)',
            margin: '0',
            textShadow: '0 2px 15px rgba(0,0,0,0.5)'
          }}>
            Professional trading signals, indicators, and performance tools for serious traders.
          </h2>
        </div>
      </div>
    </div>
  );
}
