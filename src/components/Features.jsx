import React from 'react';

export default function Features() {
  return (
    <div 
      className="elementor-element elementor-element-37306c63 e-con-full e-flex e-con e-parent e-lazyloaded" 
      data-id="37306c63" 
      data-element_type="container" 
      data-e-type="container" 
      data-settings='{"_ha_eqh_enable":false}'
    >
      {/* Caja de Imagen: Logo de Helios */}
      <div 
        className="elementor-element elementor-element-60d0f06b elementor-widget__width-initial elementor-widget-mobile__width-inherit de_scroll_animation_no ha-has-bg-overlay elementor-widget elementor-widget-image animated fadeInLeft" 
        data-id="60d0f06b" 
        data-element_type="widget" 
        data-settings='{"_animation":"fadeInLeft"}' 
        data-widget_type="image.default"
      >
        <div className="elementor-widget-container">
          <img 
            loading="lazy" 
            decoding="async" 
            src="/assets/logo/Logo.jpg" 
            className="attachment-2048x2048 size-2048x2048 wp-image-6225 features-logo-img" 
            alt="Helios Logo" 
          />
        </div>
      </div>

      {/* Caja de Texto */}
      <div 
        className="elementor-element elementor-element-211fe9b4 e-con-full e-flex e-con e-child animated fadeInLeft" 
        data-id="211fe9b4" 
        data-element_type="container" 
        data-e-type="container" 
        data-settings='{"animation":"fadeInLeft","_ha_eqh_enable":false}'
      >
        <div className="elementor-element elementor-element-62512949 de_scroll_animation_no elementor-widget elementor-widget-heading" data-id="62512949" data-element_type="widget" data-widget_type="heading.default">
          <div className="elementor-widget-container">
            <h2 className="elementor-heading-title elementor-size-default">
              Experience the Precision of the Pro Edge Trading. Start trading with confidence today.
            </h2>
          </div>
        </div>
        
        <div className="elementor-element elementor-element-bdf388b de_scroll_animation_no elementor-widget elementor-widget-text-editor" data-id="bdf388b" data-element_type="widget" data-widget_type="text-editor.default">
          <div className="elementor-widget-container">
            <p>
              Gain an edge in the markets with our cutting-edge software, designed for accuracy, speed, and consistency. EdgeRunner helps you spot high-probability setups, manage risk, and maximize results—all in real-time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}