import React, { useState } from 'react';
import { supabase } from '../utils/supabaseClient.js';

export default function AuthModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('login'); // 'login' | 'signup'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleClose = () => {
    setErrorMsg('');
    setSuccessMsg('');
    setEmail('');
    setPassword('');
    setFullName('');
    onClose();
  };

  const handleAuthAction = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');
    setLoading(true);

    if (activeTab === 'login') {
      // Iniciar sesión
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim().toLowerCase(),
        password,
      });

      if (error) {
        setErrorMsg(error.message);
        setLoading(false);
      } else {
        setSuccessMsg('¡Inicio de sesión exitoso! Redirigiendo...');
        setTimeout(() => {
          setLoading(false);
          handleClose();
          window.location.hash = '#/dashboard';
        }, 1000);
      }
    } else {
      // Registrarse
      if (!fullName.trim()) {
        setErrorMsg('Please enter your full name.');
        setLoading(false);
        return;
      }

      const { data, error } = await supabase.auth.signUp({
        email: email.trim().toLowerCase(),
        password,
        options: {
          data: {
            full_name: fullName.trim()
          }
        }
      });

      if (error) {
        setErrorMsg(error.message);
        setLoading(false);
      } else {
        setSuccessMsg('¡Cuenta creada exitosamente! Iniciando sesión...');
        // Opcional: Crear registro en profiles usando rpc o trigger
        // Si Supabase autoconfirma correos, el inicio de sesión será inmediato
        setTimeout(() => {
          setLoading(false);
          handleClose();
          window.location.hash = '#/dashboard';
        }, 1000);
      }
    }
  };

  // Estilos inline exactos basados en la guía de diseño
  const overlayStyle = {
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
  };

  const modalStyle = {
    background: '#071a38',
    border: '1px solid rgba(46, 111, 206, 0.25)',
    borderRadius: '14px',
    padding: '48px 40px',
    width: '100%',
    maxWidth: '440px',
    position: 'relative',
    boxShadow: '0 40px 80px rgba(0,0,0,0.6)',
    boxSizing: 'border-box'
  };

  const topBar = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '2.5px',
    background: 'linear-gradient(90deg, transparent, #2e6fce, transparent)',
    borderRadius: '14px 14px 0 0'
  };

  const closeBtn = {
    position: 'absolute',
    top: '16px',
    right: '20px',
    background: 'none',
    border: 'none',
    color: 'rgba(255,255,255,0.5)',
    fontSize: '20px',
    cursor: 'pointer',
    lineHeight: 1,
    outline: 'none'
  };

  const logoContainer = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '24px'
  };

  const logoImg = {
    height: '36px',
    display: 'block'
  };

  const titleStyle = {
    fontFamily: 'Rajdhani, sans-serif',
    fontSize: '28px',
    fontWeight: 700,
    color: '#fff',
    textAlign: 'center',
    marginBottom: '6px',
    letterSpacing: '-0.5px'
  };

  const subtitleStyle = {
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: '14px',
    fontFamily: 'Inter, sans-serif',
    marginBottom: '28px'
  };

  const tabSwitch = {
    display: 'flex',
    background: 'rgba(255,255,255,0.05)',
    borderRadius: '8px',
    padding: '4px',
    marginBottom: '28px'
  };

  const getTabBtnStyle = (active) => ({
    flex: 1,
    padding: '10px',
    border: 'none',
    background: active ? '#2e6fce' : 'transparent',
    fontFamily: 'Rajdhani, sans-serif',
    fontSize: '14px',
    fontWeight: 700,
    letterSpacing: '1px',
    textTransform: 'uppercase',
    cursor: 'pointer',
    color: active ? '#white' : 'rgba(255,255,255,0.5)',
    borderRadius: '6px',
    transition: 'all 0.2s',
    outline: 'none'
  });

  const formGroup = {
    marginBottom: '18px'
  };

  const formLabel = {
    display: 'block',
    fontFamily: 'Rajdhani, sans-serif',
    fontSize: '12px',
    fontWeight: 600,
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.5)',
    marginBottom: '8px'
  };

  const formInput = {
    width: '100%',
    padding: '13px 16px',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(46, 111, 206, 0.25)',
    borderRadius: '6px',
    color: '#fff',
    fontSize: '15px',
    fontFamily: 'Inter, sans-serif',
    boxSizing: 'border-box',
    outline: 'none',
    transition: 'border-color 0.2s'
  };

  const formBtn = {
    width: '100%',
    padding: '15px',
    background: '#2e6fce',
    color: '#white',
    border: 'none',
    borderRadius: '6px',
    fontFamily: 'Rajdhani, sans-serif',
    fontSize: '15px',
    fontWeight: 700,
    letterSpacing: '2px',
    textTransform: 'uppercase',
    cursor: 'pointer',
    transition: 'all 0.2s',
    marginTop: '8px',
    outline: 'none'
  };

  const errorBox = {
    background: 'rgba(239, 68, 68, 0.1)',
    border: '1px solid rgba(239, 68, 68, 0.3)',
    borderRadius: '6px',
    padding: '10px 14px',
    fontSize: '13px',
    color: '#fca5a5',
    marginBottom: '16px',
    fontFamily: 'Inter, sans-serif'
  };

  const successBox = {
    background: 'rgba(34, 197, 94, 0.1)',
    border: '1px solid rgba(34, 197, 94, 0.3)',
    borderRadius: '6px',
    padding: '10px 14px',
    fontSize: '13px',
    color: '#86efac',
    marginBottom: '16px',
    fontFamily: 'Inter, sans-serif'
  };

  return (
    <div style={overlayStyle} onClick={handleClose}>
      <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
        <div style={topBar} />
        <button style={closeBtn} onClick={handleClose}>✕</button>

        <div style={logoContainer}>
          <img src="/assets/logo/Logo.jpg" alt="Logo" style={logoImg} />
        </div>

        <h2 style={titleStyle}>
          {activeTab === 'login' ? 'Welcome Back' : 'Create Free Account'}
        </h2>
        <p style={subtitleStyle}>
          {activeTab === 'login' 
            ? 'Sign in to access your trading tools and journal.' 
            : 'Start logging your trades and discover your edge today.'}
        </p>

        {/* Cambiar de Pestaña */}
        <div style={tabSwitch}>
          <button 
            style={getTabBtnStyle(activeTab === 'login')} 
            onClick={() => { setActiveTab('login'); setErrorMsg(''); }}
          >
            Log In
          </button>
          <button 
            style={getTabBtnStyle(activeTab === 'signup')} 
            onClick={() => { setActiveTab('signup'); setErrorMsg(''); }}
          >
            Register
          </button>
        </div>

        {/* Alertas */}
        {errorMsg && <div style={errorBox}>{errorMsg}</div>}
        {successMsg && <div style={successBox}>{successMsg}</div>}

        {/* Formulario */}
        <form onSubmit={handleAuthAction}>
          {activeTab === 'signup' && (
            <div style={formGroup}>
              <label style={formLabel}>Full Name</label>
              <input 
                type="text" 
                style={formInput} 
                placeholder="Enter your name" 
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
          )}

          <div style={formGroup}>
            <label style={formLabel}>Email Address</label>
            <input 
              type="email" 
              style={formInput} 
              placeholder="name@example.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div style={formGroup}>
            <label style={formLabel}>Password</label>
            <input 
              type="password" 
              style={formInput} 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" style={formBtn} disabled={loading}>
            {loading ? 'Processing...' : activeTab === 'login' ? 'Sign In' : 'Get Started'}
          </button>
        </form>
      </div>
    </div>
  );
}
