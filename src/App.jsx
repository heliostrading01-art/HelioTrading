import React, { useEffect } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Products from './components/Products.jsx';
import Features from './components/Features.jsx';
import Testimonials from './components/Testimonials.jsx';
import FAQ from './components/FAQ.jsx';
import ContactForm from './components/ContactForm.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  useEffect(() => {
    // Si Elementor frontend necesita reinicializarse tras montar el DOM
    if (window.jQuery && window.elementorFrontend) {
      setTimeout(() => {
        window.elementorFrontend.init();
      }, 200);
    }
  }, []);

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
        <Hero />
        <Products />
        <Features />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </div>

      {/* Pie de Página original */}
      <Footer />
    </div>
  );
}