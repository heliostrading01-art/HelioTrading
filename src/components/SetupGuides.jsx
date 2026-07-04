import React from 'react';

export default function SetupGuides() {
  const steps = [
    {
      num: '01',
      title: 'Prepare Your Platform',
      desc: 'Ensure you have the latest version of your trading terminal installed. A clean workspace and fully updated platform ensure optimal performance for all indicators.',
      badge: 'Prerequisite'
    },
    {
      num: '02',
      title: 'Import Helios Indicators',
      desc: 'Download your purchased indicator files from your account dashboard. Open your platform\'s assembly or script import section (e.g., Tools > Import > Add-On) and load the downloaded files.',
      badge: 'Installation'
    },
    {
      num: '03',
      title: 'License Activation',
      desc: 'Go to your account dashboard to copy your unique machine license key. Enter this key when prompted on your platform to link and authorize your device.',
      badge: 'Authorization'
    },
    {
      num: '04',
      title: 'Load Onto Your Charts',
      desc: 'Open a fresh chart, right-click and select Indicators. Find Helios from the list, apply your preferred settings, and start trading with precision metrics.',
      badge: 'Ready'
    }
  ];

  return (
    <div style={{
      background: 'var(--navy)',
      minHeight: '100vh',
      padding: '160px 24px 100px 24px',
      color: 'var(--white)',
      position: 'relative'
    }}>
      {/* Grid line background overlay */}
      <div className="grid-lines" style={{ opacity: 0.05, zIndex: 1 }} />

      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 2
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(46,111,206,0.1)', border: '1px solid rgba(46,111,206,0.25)',
            borderRadius: '20px', padding: '6px 16px', marginBottom: '20px'
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--blue-bright)', flexShrink: 0 }} />
            <span style={{
              fontFamily: 'Rajdhani, sans-serif', fontSize: '12px', fontWeight: 700,
              letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--blue-bright)'
            }}>
              Step-by-Step Setup
            </span>
          </div>

          <h1 style={{
            fontFamily: 'Rajdhani, sans-serif',
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: 700,
            lineHeight: 1.1,
            color: 'var(--white)',
            margin: '0 0 16px 0'
          }}>
            Indicator Setup Guides
          </h1>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '16px',
            color: 'rgba(255,255,255,0.65)',
            maxWidth: '560px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Follow these instructions to quickly install, activate, and configure your Helios Trading Systems tools on your platform.
          </p>
        </div>

        {/* Steps Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '24px',
          marginBottom: '56px'
        }}>
          {steps.map((step) => (
            <div
              key={step.num}
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1.5px solid rgba(255,255,255,0.06)',
                borderRadius: '8px',
                padding: '32px',
                position: 'relative',
                transition: 'all 0.25s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.2)'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(91, 163, 245, 0.3)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                  <span style={{
                    fontFamily: 'Rajdhani, sans-serif',
                    fontSize: '44px',
                    fontWeight: 700,
                    color: 'rgba(91, 163, 245, 0.45)',
                    lineHeight: 1
                  }}>{step.num}</span>

                  <span style={{
                    fontFamily: 'Rajdhani, sans-serif',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    color: 'var(--blue-bright)',
                    background: 'rgba(91, 163, 245, 0.08)',
                    padding: '4px 10px',
                    borderRadius: '4px',
                    border: '1px solid rgba(91, 163, 245, 0.25)'
                  }}>{step.badge}</span>
                </div>

                <h3 style={{
                  fontFamily: 'Rajdhani, sans-serif',
                  fontSize: '22px',
                  fontWeight: 700,
                  color: 'var(--white)',
                  margin: '0 0 12px 0'
                }}>{step.title}</h3>

                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14.5px',
                  color: 'rgba(255,255,255,0.65)',
                  lineHeight: 1.65,
                  margin: 0
                }}>{step.desc}</p>
              </div>
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
