import React from 'react';

export default function PricingPlans() {
  const plans = [
    {
      title: 'One Time Purchase',
      price: '$20',
      period: '',
      features: [
        'Price Level Indicator',
        'Webhook Automation (NinjaTrader)',
        'Trading Journal'
      ],
      popular: false,
      popularLabel: ''
    },
    {
      title: 'STARTER',
      price: '$49',
      period: 'per month',
      features: [
        'Free Price Level Indicator',
        'Free Webhook Automation (NinjaTrader)',
        'Free Trading Journal',
        'Automated Signal Livestream',
        'Community Access'
      ],
      popular: false,
      popularLabel: ''
    },
    {
      title: 'PRO',
      price: '$99',
      period: 'per month',
      features: [
        'Everything in Starter',
        'Unlimited strategies',
        'Live Coaching Sessions',
        'Signal Livestream Sessions'
      ],
      popular: true,
      popularLabel: 'MOST POPULAR'
    }
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
        maxWidth: '1200px',
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
          fontSize: 'clamp(36px, 5vw, 54px)',
          fontWeight: 700,
          color: 'var(--white)',
          marginBottom: '64px',
          textAlign: 'center',
          letterSpacing: '-0.5px'
        }}>
          Pricing Plans
        </h1>

        {/* Pricing Cards Grid */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'stretch',
          gap: '32px',
          flexWrap: 'wrap',
          width: '100%',
          marginBottom: '64px'
        }}>
          {plans.map((plan, idx) => (
            <div
              key={idx}
              style={{
                flex: '1 1 320px',
                maxWidth: '380px',
                background: '#0c1530',
                border: plan.popular 
                  ? '1.5px solid #2e6fce' 
                  : '1.5px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '12px',
                padding: '48px 32px 40px 32px',
                boxSizing: 'border-box',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: plan.popular 
                  ? '0 15px 40px rgba(46, 111, 206, 0.25)' 
                  : '0 10px 30px rgba(0, 0, 0, 0.3)',
                transition: 'transform 0.25s ease, border-color 0.25s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                if (!plan.popular) e.currentTarget.style.borderColor = 'rgba(46, 111, 206, 0.4)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'none';
                if (!plan.popular) e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
              }}
            >
              {/* Popular Tag sitting on top border */}
              {plan.popular && (
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: '#2e6fce',
                  color: '#fff',
                  fontFamily: 'Rajdhani, sans-serif',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '1.5px',
                  padding: '6px 16px',
                  borderRadius: '100px',
                  boxShadow: '0 4px 10px rgba(46, 111, 206, 0.4)',
                  whiteSpace: 'nowrap'
                }}>
                  {plan.popularLabel}
                </div>
              )}

              <div>
                {/* Title */}
                <h3 style={{
                  fontFamily: 'Rajdhani, sans-serif',
                  fontSize: '15px',
                  fontWeight: 700,
                  color: plan.popular ? '#5ba3f5' : '#8c9ab3',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  textAlign: 'center',
                  margin: '0 0 24px 0'
                }}>
                  {plan.title}
                </h3>

                {/* Price Display */}
                <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                  <span style={{
                    fontFamily: 'Rajdhani, sans-serif',
                    fontSize: '64px',
                    fontWeight: 700,
                    color: '#fff',
                    lineHeight: 1
                  }}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <div style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '13px',
                      color: 'rgba(255, 255, 255, 0.45)',
                      marginTop: '8px'
                    }}>
                      {plan.period}
                    </div>
                  )}
                </div>

                {/* Features Divider */}
                <div style={{
                  height: '1px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  width: '100%',
                  marginBottom: '32px'
                }} />

                {/* Features List */}
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '0 0 40px 0',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '18px'
                }}>
                  {plan.features.map((feature, fIdx) => (
                    <li
                      key={fIdx}
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '14px',
                        color: 'rgba(255, 255, 255, 0.8)',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        lineHeight: 1.4
                      }}
                    >
                      <span style={{ color: '#4ade80', fontWeight: 'bold' }}>✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Get Started Button */}
              <a
                href="#contacto"
                style={{
                  display: 'block',
                  textAlign: 'center',
                  background: 'var(--blue)',
                  color: 'var(--white)',
                  fontFamily: 'Rajdhani, sans-serif',
                  fontSize: '14px',
                  fontWeight: 700,
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  padding: '16px 20px',
                  borderRadius: '100px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 15px rgba(46, 111, 206, 0.3)',
                  transition: 'all 0.22s ease',
                  border: 'none',
                  cursor: 'pointer'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'var(--blue-light)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(46, 111, 206, 0.5)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'var(--blue)';
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(46, 111, 206, 0.3)';
                }}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
