import React from 'react';

export default function HeliosFeatures() {
  const features = [
    {
      title: 'Trade Journal',
      desc: 'Log every trade with full detail — symbol, direction, entry/exit, P&L, notes, and more. Never lose track of a position again.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5ba3f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      )
    },
    {
      title: 'Performance Analytics',
      desc: 'Visualize your win rate, risk-reward ratio, drawdown, and expectancy across any time frame with rich dashboards.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      )
    },
    {
      title: 'Secure & Private',
      desc: 'Your trading data stays yours. Account-based access ensures only you can view your journal and statistics.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      )
    },
    {
      title: 'Autonomous Execution',
      desc: 'Deploy sophisticated strategies that execute automatically with built-in risk controls.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M21 9H3M21 15H3M12 3v18" />
        </svg>
      )
    },
    {
      title: 'Intelligent Risk Management',
      desc: 'Dynamic position sizing, stop-loss optimization, and portfolio protection with advanced algorithms.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )
    },
    {
      title: 'Edge Discovery',
      desc: "Filter trades by strategy, asset class, or session to pinpoint exactly where your edge lives — and where it doesn't.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      )
    }
  ];

  return (
    <div style={{
      background: 'var(--navy)',
      minHeight: '100vh',
      padding: '160px 24px 100px 24px',
      color: 'var(--white)',
      position: 'relative',
      boxSizing: 'border-box'
    }}>
      <div className="grid-lines" style={{ opacity: 0.04, zIndex: 1 }} />

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 2
      }}>
        {/* Subtitle / Header info */}
        <div style={{ textAlign: 'left', marginBottom: '64px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '16px'
          }}>
            <span style={{
              width: '16px',
              height: '1.5px',
              background: 'var(--blue-bright)',
              display: 'inline-block'
            }} />
            <span style={{
              fontFamily: 'Rajdhani, sans-serif',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '2.5px',
              textTransform: 'uppercase',
              color: 'var(--blue-bright)'
            }}>
              What We Offer
            </span>
          </div>

          <h1 style={{
            fontFamily: 'Rajdhani, sans-serif',
            fontSize: 'clamp(36px, 5.5vw, 54px)',
            fontWeight: 700,
            color: 'var(--white)',
            margin: 0,
            letterSpacing: '-0.5px'
          }}>
            Built for Serious Traders
          </h1>
        </div>

        {/* Features 3-Column Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px',
          marginBottom: '64px'
        }}>
          {features.map((feat, idx) => (
            <div
              key={idx}
              style={{
                background: '#0c1530',
                border: '1.5px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '8px',
                padding: '36px',
                boxSizing: 'border-box',
                transition: 'transform 0.22s ease, border-color 0.22s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = 'rgba(91, 163, 245, 0.3)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
              }}
            >
              {/* Icon Box */}
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1.5px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '28px'
              }}>
                {feat.icon}
              </div>

              {/* Title */}
              <h3 style={{
                fontFamily: 'Rajdhani, sans-serif',
                fontSize: '22px',
                fontWeight: 700,
                color: 'var(--white)',
                margin: '0 0 14px 0'
              }}>
                {feat.title}
              </h3>

              {/* Description */}
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '14.5px',
                lineHeight: 1.6,
                color: 'rgba(255, 255, 255, 0.65)',
                margin: 0
              }}>
                {feat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Back Link */}
        <div style={{ textAlign: 'center' }}>
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
    </div>
  );
}
