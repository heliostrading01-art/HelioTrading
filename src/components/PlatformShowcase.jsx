import React, { useState } from 'react';

export default function PlatformShowcase() {
  const [activeImage, setActiveImage] = useState(null);

  const charts = [
    {
      src: '/assets/recursos/MES4.png',
      title: 'Micro E-mini S&P 500 (MES) Signal',
      desc: 'Real-time momentum reversal and entry trigger verification.'
    },
    {
      src: '/assets/recursos/MNQ.jpg',
      title: 'Micro E-mini Nasdaq (MNQ) Execution',
      desc: 'Scalping setup with automated strategy controls.'
    }
  ];

  return (
    <div 
      className="elementor-element elementor-element-platform-showcase e-flex e-con-boxed e-con e-parent"
      style={{
        background: 'var(--navy)',
        padding: '100px 0',
        position: 'relative',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        width: '100%'
      }}
    >
      <div className="grid-lines" style={{ opacity: 0.04, zIndex: 1 }} />

      <div className="e-con-inner" style={{
        position: 'relative',
        zIndex: 2,
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 48px',
        boxSizing: 'border-box'
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(91, 163, 245, 0.08)', border: '1px solid rgba(91, 163, 245, 0.25)',
            borderRadius: '4px', padding: '6px 12px', marginBottom: '20px'
          }}>
            <span style={{
              fontFamily: 'Rajdhani, sans-serif', fontSize: '11px', fontWeight: 700,
              letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--blue-bright)'
            }}>
              Live Performance & Screenshots
            </span>
          </div>

          <h2 style={{
            fontFamily: 'Rajdhani, sans-serif',
            fontSize: 'clamp(28px, 4.5vw, 42px)',
            fontWeight: 700,
            lineHeight: 1.15,
            color: 'var(--white)',
            margin: '0 0 16px 0',
            letterSpacing: '-0.5px'
          }}>
            Indicators in Action
          </h2>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '15.5px',
            color: 'rgba(255,255,255,0.65)',
            maxWidth: '560px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Review actual chart screenshots showing Helios indicators, trade alerts, and algorithm execution signals on live markets.
          </p>
        </div>

        {/* Large Stacked Layout (One full-width chart below another) */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '48px',
          width: '100%'
        }}>
          {charts.map((chart, idx) => (
            <div
              key={idx}
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1.5px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '12px',
                padding: '24px',
                transition: 'all 0.25s ease',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 15px 40px rgba(0, 0, 0, 0.35)'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(91, 163, 245, 0.3)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                e.currentTarget.style.transform = 'none';
              }}
              onClick={() => setActiveImage(chart)}
            >
              {/* Image Box - Enlarged to display full layout details */}
              <div style={{
                width: '100%',
                borderRadius: '6px',
                overflow: 'hidden',
                background: '#080f24',
                position: 'relative',
                marginBottom: '20px'
              }}>
                <img
                  src={chart.src}
                  alt={chart.title}
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block'
                  }}
                />
                {/* Hover overlay with zoom icon */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(8, 15, 36, 0.4)',
                  opacity: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'opacity 0.2s ease'
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = 1}
                onMouseLeave={e => e.currentTarget.style.opacity = 0}
                >
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                  </svg>
                </div>
              </div>

              {/* Title & Description */}
              <h4 style={{
                fontFamily: 'Rajdhani, sans-serif',
                fontSize: '22px',
                fontWeight: 700,
                color: 'var(--white)',
                margin: '0 0 8px 0'
              }}>{chart.title}</h4>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                color: 'rgba(255,255,255,0.6)',
                lineHeight: 1.6,
                margin: 0
              }}>{chart.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal for zoom */}
      {activeImage && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(5, 10, 24, 0.95)',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px'
          }}
          onClick={() => setActiveImage(null)}
        >
          {/* Close button */}
          <button 
            style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              background: 'rgba(255,255,255,0.1)',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              color: '#fff',
              fontSize: '20px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onClick={() => setActiveImage(null)}
          >
            ✕
          </button>
          
          <div 
            style={{
              maxWidth: '95%',
              maxHeight: '90%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '16px'
            }}
            onClick={e => e.stopPropagation()}
          >
            <img 
              src={activeImage.src} 
              alt={activeImage.title} 
              style={{
                maxWidth: '100%',
                maxHeight: '80vh',
                borderRadius: '8px',
                border: '1.5px solid rgba(255,255,255,0.12)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.8)',
                display: 'block'
              }}
            />
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '24px', color: '#fff', margin: '0 0 4px 0' }}>{activeImage.title}</h3>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: 'rgba(255,255,255,0.6)', margin: 0 }}>{activeImage.desc}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
