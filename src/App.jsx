import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import HandsPromo from './components/HandsPromo.jsx';
import Testimonials from './components/Testimonials.jsx';
import FAQ from './components/FAQ.jsx';
import ContactForm from './components/ContactForm.jsx';
import Footer from './components/Footer.jsx';
import SetupGuides from './components/SetupGuides.jsx';
import LegalPrivacy from './components/LegalPrivacy.jsx';
import PlatformShowcase from './components/PlatformShowcase.jsx';
import ClientResourcePage from './components/ClientResourcePage.jsx';
import PricingPlans from './components/PricingPlans.jsx';
import HeliosFeatures from './components/HeliosFeatures.jsx';
import HeliosAffiliates from './components/HeliosAffiliates.jsx';

export default function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      setCurrentHash(hash);
      
      if (hash === '#/setup-guides' || hash === '#/legal-privacy') {
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === '#/features') {
        setTimeout(() => {
          const el = document.getElementById('features');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 120);
      } else if (hash === '#/pricing') {
        setTimeout(() => {
          const el = document.getElementById('pricing');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 120);
      } else if (hash === '#/affiliates') {
        setTimeout(() => {
          const el = document.getElementById('affiliates');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 120);
      } else if (hash === '' || hash === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Ejecutar scroll inicial si carga con hash
    setTimeout(() => {
      handleHashChange();
    }, 250);

    if (window.jQuery && window.elementorFrontend) {
      setTimeout(() => {
        window.elementorFrontend.init();
      }, 200);
    }

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  let mainContent;
  if (currentHash === '#/setup-guides') {
    mainContent = <SetupGuides />;
  } else if (currentHash === '#/legal-privacy') {
    mainContent = <LegalPrivacy />;
  } else {
    mainContent = (
      <>
        <HandsPromo />
        <PlatformShowcase />
        <div id="features">
          <HeliosFeatures />
        </div>
        <div id="pricing">
          <PricingPlans />
        </div>
        <div id="affiliates">
          <HeliosAffiliates />
        </div>
        <Testimonials />
        <FAQ />
        <ContactForm />
      </>
    );
  }

  return (
    <div className="theme-hello-elementor">
      {/* Barra de navegación adhesiva original */}
      <Header />

      {/* Contenedor del Cuerpo de Elementor */}
      <div 
        data-elementor-type="wp-page" 
        data-elementor-id="5531" 
        className="elementor elementor-5531"
        style={{ width: '100%', overflow: 'hidden' }}
      >
        {mainContent}
      </div>

      {/* Pie de Página original */}
      <Footer />
    </div>
  );
}