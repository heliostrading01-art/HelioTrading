import React, { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient.js';

export default function Dashboard({ session }) {
  // User info
  const [fullName, setFullName] = useState('');
  const [activePlan, setActivePlan] = useState(localStorage.getItem('activePlan') || 'None');

  // Modals state
  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);

  // Fetch profile
  useEffect(() => {
    const userMetadata = session?.user?.user_metadata;
    if (userMetadata?.full_name) {
      setFullName(userMetadata.full_name);
    } else {
      setFullName(session?.user?.email || 'Trader');
    }
  }, [session]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    window.location.hash = '#';
  };

  const handlePurchasePlan = (planName) => {
    setActivePlan(planName);
    localStorage.setItem('activePlan', planName);
    setIsBuyModalOpen(false);
    alert(`Thank you! The ${planName} package has been successfully activated.`);
  };

  // Dinamizar los textos de las tarjetas en función del plan activo para rellenar el espacio de forma útil
  const getPlanDetails = () => {
    switch (activePlan) {
      case 'One Time Purchase':
        return {
          status: 'Lifetime Active',
          statusColor: 'green',
          indicators: 'Price Level + Webhook',
          indicatorsColor: 'green',
          community: 'Locked (Starter Req.)',
          communityColor: 'red',
          subLabel: 'Single Payment License'
        };
      case 'Starter':
        return {
          status: 'Monthly Active',
          statusColor: 'green',
          indicators: 'All Core Indicators',
          indicatorsColor: 'green',
          community: 'Discord + Livestream',
          communityColor: 'green',
          subLabel: 'Next Renewal in 30 days'
        };
      case 'Pro':
        return {
          status: 'Pro VIP Active',
          statusColor: 'green',
          indicators: 'Core + Coaching + Live Signals',
          indicatorsColor: 'green',
          community: 'VIP Discord + Live Coaching',
          communityColor: 'green',
          subLabel: 'Priority Support Enabled'
        };
      default:
        return {
          status: 'Subscription Inactive',
          statusColor: 'red',
          indicators: 'No Indicators Unlocked',
          indicatorsColor: 'red',
          community: 'No Community Access',
          communityColor: 'red',
          subLabel: 'Upgrade to download scripts'
        };
    }
  };

  const details = getPlanDetails();

  return (
    <div id="page-dashboard">
      {/* Cabecera del Dashboard */}
      <div className="dashboard-header">
        <div className="dash-welcome">
          Welcome back, <span>{fullName}</span> | Active Plan: <span style={{ color: 'var(--gold)' }}>{activePlan}</span>
        </div>
        <div className="dash-actions">
          <button className="dash-btn dash-btn-new" onClick={() => setIsBuyModalOpen(true)}>
            Buy
          </button>
          <button className="dash-btn dash-btn-out" onClick={handleSignOut}>
            Log Out
          </button>
        </div>
      </div>

      <div className="dashboard-body">
        {/* Fila de Tarjetas Informativas del Plan del Cliente (Rellenan y embellecen la sección) */}
        <div className="stats-row" style={{ marginBottom: '32px' }}>
          {/* Tarjeta 1: Plan Activo */}
          <div className="stat-card gold">
            <div className="stat-card-label">Active Plan</div>
            <div className="stat-card-value" style={{ color: 'var(--gold)', fontSize: '24px', fontWeight: 700, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {activePlan}
            </div>
            <div className="stat-card-sub">
              {details.subLabel}
            </div>
          </div>

          {/* Tarjeta 2: Estado del Plan */}
          <div className={`stat-card ${details.statusColor}`}>
            <div className="stat-card-label">Plan Status</div>
            <div className={`stat-card-value ${details.statusColor === 'green' ? 'pos' : 'neg'}`} style={{ fontSize: '24px' }}>
              {details.status}
            </div>
            <div className="stat-card-sub">
              License verified on Supabase Auth
            </div>
          </div>

          {/* Tarjeta 3: Indicadores Incluidos */}
          <div className={`stat-card ${details.indicatorsColor}`}>
            <div className="stat-card-label">Unlocked Indicators</div>
            <div className={`stat-card-value ${details.indicatorsColor === 'green' ? 'pos' : 'neg'}`} style={{ fontSize: '20px', fontWeight: 600 }}>
              {details.indicators}
            </div>
            <div className="stat-card-sub">
              Available for NinjaTrader / TV
            </div>
          </div>

          {/* Tarjeta 4: Soporte y Comunidad */}
          <div className={`stat-card ${details.communityColor}`}>
            <div className="stat-card-label">Ecosystem Access</div>
            <div className={`stat-card-value ${details.communityColor === 'green' ? 'pos' : 'neg'}`} style={{ fontSize: '20px', fontWeight: 600 }}>
              {details.community}
            </div>
            <div className="stat-card-sub">
              Discord & Livestream access
            </div>
          </div>
        </div>

        {/* Sección de Recursos de Descarga */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1.5px solid var(--border)',
          borderRadius: '12px',
          padding: '32px',
          marginBottom: '40px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
        }}>
          <h3 style={{
            fontFamily: 'Rajdhani, sans-serif',
            fontSize: '22px',
            fontWeight: 700,
            color: 'var(--white)',
            margin: '0 0 12px 0'
          }}>Descargar Indicadores</h3>
          <p style={{
            color: 'var(--white-80)',
            fontSize: '14px',
            margin: '0 0 20px 0',
            lineHeight: 1.6
          }}>
            Download your premium indicators and automated trading scripts. Run them inside TradingView, NinjaTrader, or MetaTrader according to setup parameters.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
            {activePlan === 'None' ? (
              <span style={{ color: '#f59e0b', fontSize: '14px', fontWeight: 600 }}>
                ⚠️ You don't have an active plan. Click "Buy" above to purchase a package and unlock downloads.
              </span>
            ) : (
              <a 
                href="/assets/downloads/Helios_Indicators_v3.zip" 
                download
                className="dash-btn dash-btn-new"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}
              >
                📥 Download Indicators Package (ZIP)
              </a>
            )}
          </div>
        </div>
      </div>

      {/* MODAL: COMPRA DE PAQUETES (BUY MODAL) */}
      {isBuyModalOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 999999,
          background: 'rgba(8, 16, 28, 0.85)',
          backdropFilter: 'blur(6px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px',
          boxSizing: 'border-box'
        }} onClick={() => setIsBuyModalOpen(false)}>
          <div className="trade-modal" style={{ maxWidth: '980px', width: '100%' }} onClick={(e) => e.stopPropagation()}>
            <button style={{
              position: 'absolute', top: '16px', right: '20px',
              background: 'none', border: 'none', color: 'rgba(255,255,255,0.5)',
              fontSize: '20px', cursor: 'pointer', lineHeight: 1, outline: 'none'
            }} onClick={() => setIsBuyModalOpen(false)}>✕</button>

            <h2 style={{ fontFamily: 'Rajdhani, sans-serif', color: '#fff', fontSize: '28px', textAlign: 'center', margin: '0 0 8px 0' }}>
              Purchase Helios Packages
            </h2>
            <p style={{ color: 'var(--white-50)', textAlign: 'center', fontSize: '14px', margin: '0 0 32px 0' }}>
              Select a package to upgrade your trading capabilities and download premium tools.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
              marginBottom: '16px'
            }}>
              {/* Card 1: One Time Purchase */}
              <div style={{
                background: '#0c1530',
                border: activePlan === 'One Time Purchase' ? '2px solid #5ba3f5' : '1px solid var(--border)',
                borderRadius: '10px',
                padding: '32px 24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}>
                <div>
                  <h3 style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '18px', fontWeight: 700, color: 'var(--white)', margin: '0 0 8px 0' }}>
                    One Time Purchase
                  </h3>
                  <div style={{ fontSize: '32px', fontWeight: 700, color: 'var(--white)', margin: '0 0 20px 0' }}>
                    $20
                  </div>
                  <ul style={{ paddingLeft: '16px', margin: '0 0 24px 0', color: 'var(--white-80)', fontSize: '13px', lineHeight: '1.8' }}>
                    <li>Price Level Indicator</li>
                    <li>Webhook Automation (NinjaTrader)</li>
                    <li>Trading Journal</li>
                  </ul>
                </div>
                <button 
                  className="dash-btn"
                  style={{
                    width: '100%',
                    background: activePlan === 'One Time Purchase' ? 'transparent' : 'var(--blue)',
                    color: '#fff',
                    border: activePlan === 'One Time Purchase' ? '1px solid var(--white-50)' : 'none',
                    cursor: activePlan === 'One Time Purchase' ? 'default' : 'pointer'
                  }}
                  onClick={() => activePlan !== 'One Time Purchase' && handlePurchasePlan('One Time Purchase')}
                  disabled={activePlan === 'One Time Purchase'}
                >
                  {activePlan === 'One Time Purchase' ? 'Active Plan' : 'Buy Now'}
                </button>
              </div>

              {/* Card 2: Starter */}
              <div style={{
                background: '#0c1530',
                border: activePlan === 'Starter' ? '2px solid #5ba3f5' : '1px solid var(--border)',
                borderRadius: '10px',
                padding: '32px 24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}>
                <div>
                  <h3 style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '18px', fontWeight: 700, color: 'var(--white)', margin: '0 0 8px 0' }}>
                    Starter
                  </h3>
                  <div style={{ fontSize: '32px', fontWeight: 700, color: 'var(--white)', margin: '0 0 4px 0' }}>
                    $49
                  </div>
                  <div style={{ color: 'var(--white-50)', fontSize: '12px', margin: '0 0 20px 0' }}>per month</div>
                  <ul style={{ paddingLeft: '16px', margin: '0 0 24px 0', color: 'var(--white-80)', fontSize: '13px', lineHeight: '1.8' }}>
                    <li>Free Price Level Indicator</li>
                    <li>Free Webhook Automation</li>
                    <li>Free Trading Journal</li>
                    <li>Automated Signal Livestream</li>
                    <li>Community Access</li>
                  </ul>
                </div>
                <button 
                  className="dash-btn"
                  style={{
                    width: '100%',
                    background: activePlan === 'Starter' ? 'transparent' : 'var(--blue)',
                    color: '#fff',
                    border: activePlan === 'Starter' ? '1px solid var(--white-50)' : 'none',
                    cursor: activePlan === 'Starter' ? 'default' : 'pointer'
                  }}
                  onClick={() => activePlan !== 'Starter' && handlePurchasePlan('Starter')}
                  disabled={activePlan === 'Starter'}
                >
                  {activePlan === 'Starter' ? 'Active Plan' : 'Subscribe'}
                </button>
              </div>

              {/* Card 3: Pro */}
              <div style={{
                background: '#0c1530',
                border: activePlan === 'Pro' ? '2px solid #5ba3f5' : '1px solid var(--border)',
                borderRadius: '10px',
                padding: '32px 24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)',
                  background: '#2e6fce', color: '#fff', fontSize: '10px', fontWeight: 700,
                  letterSpacing: '1px', padding: '4px 12px', borderRadius: '100px', textTransform: 'uppercase'
                }}>
                  Popular
                </div>
                <div>
                  <h3 style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '18px', fontWeight: 700, color: 'var(--white)', margin: '0 0 8px 0' }}>
                    Pro
                  </h3>
                  <div style={{ fontSize: '32px', fontWeight: 700, color: 'var(--white)', margin: '0 0 4px 0' }}>
                    $99
                  </div>
                  <div style={{ color: 'var(--white-50)', fontSize: '12px', margin: '0 0 20px 0' }}>per month</div>
                  <ul style={{ paddingLeft: '16px', margin: '0 0 24px 0', color: 'var(--white-80)', fontSize: '13px', lineHeight: '1.8' }}>
                    <li>Everything in Starter</li>
                    <li>Unlimited strategies</li>
                    <li>Live Coaching Sessions</li>
                    <li>Signal Livestream Sessions</li>
                  </ul>
                </div>
                <button 
                  className="dash-btn"
                  style={{
                    width: '100%',
                    background: activePlan === 'Pro' ? 'transparent' : 'var(--blue)',
                    color: '#fff',
                    border: activePlan === 'Pro' ? '1px solid var(--white-50)' : 'none',
                    cursor: activePlan === 'Pro' ? 'default' : 'pointer'
                  }}
                  onClick={() => activePlan !== 'Pro' && handlePurchasePlan('Pro')}
                  disabled={activePlan === 'Pro'}
                >
                  {activePlan === 'Pro' ? 'Active Plan' : 'Subscribe'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
