import React, { useState } from 'react';

export default function HeliosAffiliates() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('5JHFT');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const accounts = [
    { name: '$25,000 Account', details: 'Up to 3 Contracts' },
    { name: '$50,000 Account', details: 'Up to 7 Contracts' },
    { name: '$100,000 Account', details: 'Up to 12 Contracts' },
    { name: '$150,000 Account', details: 'Up to 15 Contracts' }
  ];

  return (
    <div style={{
      background: 'var(--navy)',
      minHeight: 'auto',
      padding: '80px 24px',
      color: 'var(--white)',
      position: 'relative',
      boxSizing: 'border-box'
    }}>
      <div className="grid-lines" style={{ opacity: 0.04, zIndex: 1 }} />

      <div style={{
        maxWidth: '1100px',
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
          fontSize: 'clamp(36px, 5.5vw, 54px)',
          fontWeight: 700,
          color: 'var(--white)',
          marginBottom: '16px',
          textAlign: 'center',
          letterSpacing: '-0.5px'
        }}>
          Affiliates
        </h1>
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '15px',
          color: 'rgba(255,255,255,0.6)',
          textAlign: 'center',
          maxWidth: '580px',
          lineHeight: 1.6,
          marginBottom: '56px'
        }}>
          Helios partners with top funding prop firms to secure exclusive discounts for our trading community.
        </p>

        {/* Promo Banner Box */}
        <div style={{
          width: '100%',
          background: '#0c1530',
          border: '1.5px solid rgba(255, 255, 255, 0.06)',
          borderRadius: '12px',
          padding: '40px',
          boxSizing: 'border-box',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '32px',
          boxShadow: '0 15px 40px rgba(0, 0, 0, 0.4)'
        }}>
          {/* Left Column: Logo */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            flex: '1 1 200px'
          }}>
            {/* Custom SVG Bulenox Logo Circle */}
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: '#042340',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid #5ba3f5',
              boxShadow: '0 0 15px rgba(91, 163, 245, 0.25)',
              flexShrink: 0
            }}>
              <span style={{
                fontFamily: 'Rajdhani, sans-serif',
                fontSize: '28px',
                fontWeight: 700,
                color: '#5ba3f5',
                fontStyle: 'italic',
                transform: 'skewX(-6deg)'
              }}>b</span>
            </div>

            {/* Bulenox brand text */}
            <span style={{
              fontFamily: 'Rajdhani, sans-serif',
              fontSize: '32px',
              fontWeight: 700,
              letterSpacing: '1px',
              color: '#fff'
            }}>
              Bulenox
            </span>
          </div>

          {/* Middle Column: Options list */}
          <div style={{
            flex: '2 1 350px',
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '8px',
            padding: '24px',
            position: 'relative',
            boxSizing: 'border-box'
          }}>
            {/* Discount Badge */}
            <div style={{
              position: 'absolute',
              top: '16px',
              right: '20px',
              color: '#4ade80',
              fontFamily: 'Rajdhani, sans-serif',
              fontSize: '18px',
              fontWeight: 700,
              letterSpacing: '0.5px'
            }}>
              89.00% OFF
            </div>

            <h4 style={{
              fontFamily: 'Rajdhani, sans-serif',
              fontSize: '14px',
              color: 'rgba(255,255,255,0.4)',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              margin: '0 0 16px 0'
            }}>
              Eligible Accounts (Option 1)
            </h4>

            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '10px'
            }}>
              {accounts.map((acc, idx) => (
                <li
                  key={idx}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '13.5px',
                    color: 'rgba(255,255,255,0.85)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    borderBottom: idx !== accounts.length - 1 ? '1px dashed rgba(255, 255, 255, 0.04)' : 'none',
                    paddingBottom: idx !== accounts.length - 1 ? '8px' : '0'
                  }}
                >
                  <span style={{ fontWeight: 600 }}>{acc.name}</span>
                  <span style={{ color: 'rgba(255,255,255,0.5)' }}>{acc.details}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Code & Actions */}
          <div style={{
            flex: '1 1 220px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            gap: '16px'
          }}>
            <div style={{
              fontFamily: 'Rajdhani, sans-serif',
              fontSize: '28px',
              fontWeight: 700,
              color: '#fff',
              letterSpacing: '1px'
            }}>
              CODE: <span style={{ color: '#5ba3f5' }}>5JHFT</span>
            </div>

            <button
              onClick={handleCopy}
              style={{
                width: '100%',
                background: copied ? 'rgba(74, 222, 128, 0.1)' : 'rgba(255,255,255,0.03)',
                color: copied ? '#4ade80' : 'rgba(255,255,255,0.8)',
                border: copied ? '1px solid #4ade80' : '1px solid rgba(255,255,255,0.15)',
                borderRadius: '8px',
                padding: '12px 20px',
                fontFamily: 'Rajdhani, sans-serif',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              {copied ? (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Copied!
                </>
              ) : (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                  Copy Promo Code
                </>
              )}
            </button>

            <a
              href="https://bulenox.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '100%',
                background: 'var(--blue)',
                color: '#fff',
                borderRadius: '8px',
                padding: '12px 20px',
                fontFamily: 'Rajdhani, sans-serif',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                textDecoration: 'none',
                boxShadow: '0 4px 15px rgba(46, 111, 206, 0.3)',
                transition: 'all 0.22s ease',
                display: 'block',
                boxSizing: 'border-box'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--blue-light)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(46, 111, 206, 0.5)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'var(--blue)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(46, 111, 206, 0.3)';
              }}
            >
              Get Discount
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
