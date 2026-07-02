import React from 'react';

export default function Header() {
  return (
    <header 
      data-elementor-type="header" 
      data-elementor-id="998" 
      className="elementor elementor-998 elementor-location-header" 
      data-elementor-settings='{"ha_cmc_init_switcher":"no"}' 
      data-elementor-post-type="elementor_library"
    >
      <div 
        className="elementor-element elementor-element-f74cca4 e-con-full e-flex e-con e-parent elementor-sticky elementor-section--handles-inside elementor-sticky--effects e-lazyloaded" 
        data-id="f74cca4" 
        data-element_type="container" 
        data-e-type="container" 
        data-settings='{"background_background":"gradient","sticky":"top","sticky_on":["desktop","tablet","mobile"],"sticky_offset":0,"sticky_effects_offset":0}'
        style={{ position: 'fixed', width: '100%', top: 0, zIndex: 9999 }}
      >
        <div className="elementor-element elementor-element-6950c56e e-flex e-con-boxed e-con e-child" data-id="6950c56e" data-element_type="container" data-e-type="container">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-3f04dfe e-con-full e-flex e-con e-child" data-id="3f04dfe" data-element_type="container" data-e-type="container">
              <div className="elementor-element elementor-element-c443eb1 elementor-widget-tablet__width-initial de_scroll_animation_no elementor-widget elementor-widget-image" data-id="c443eb1" data-element_type="widget" data-widget_type="image.default">
                <div className="elementor-widget-container">
                  <a href="#">
                    <img 
                      src="/assets/logo/Logo.jpg" 
                      title="Logo del cliente" 
                      alt="Logo" 
                      loading="lazy" 
                      style={{ maxHeight: '60px', width: 'auto' }} 
                    />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="elementor-element elementor-element-78a3456a e-con-full e-flex e-con e-child" data-id="78a3456a" data-element_type="container" data-e-type="container">
              <div 
                className="elementor-element elementor-element-5211ffac elementor-nav-menu--stretch elementor-widget__width-initial elementor-nav-menu__align-end elementor-widget-tablet__width-initial elementor-nav-menu--dropdown-tablet elementor-nav-menu__text-align-aside elementor-nav-menu--toggle elementor-nav-menu--burger de_scroll_animation_no elementor-widget elementor-widget-nav-menu" 
                data-id="5211ffac" 
                data-element_type="widget" 
                data-widget_type="nav-menu.default"
              >
                <div className="elementor-widget-container">
                  <nav aria-label="Menu" className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-none">
                    <ul id="menu-1-5211ffac" className="elementor-nav-menu">

                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6392"><a href="#" className="elementor-item">Products</a></li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2649"><a href="#" className="elementor-item">Ninjatrader</a></li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3425"><a href="#faq" className="elementor-item">FAQ</a></li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4414"><a href="#contacto" className="elementor-item">Support</a></li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1831"><a href="#" className="elementor-item">Account</a></li>
                    </ul>
                  </nav>
                  
                  <div className="elementor-menu-toggle" role="button" tabIndex={0} aria-label="Menu Toggle" aria-expanded="false">
                    <i aria-hidden="true" role="presentation" className="elementor-menu-toggle__icon--open ti-menu"></i>
                    <svg aria-hidden="true" role="presentation" className="elementor-menu-toggle__icon--close e-font-icon-svg e-fas-minus" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                    </svg>
                  </div>
                  
                  <nav className="elementor-nav-menu--dropdown elementor-nav-menu__container" aria-hidden="true">
                    <ul id="menu-2-5211ffac" className="elementor-nav-menu">

                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6392"><a href="#" className="elementor-item" tabIndex={-1}>Products</a></li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2649"><a href="#" className="elementor-item" tabIndex={-1}>Ninjatrader</a></li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3425"><a href="#faq" className="elementor-item" tabIndex={-1}>FAQ</a></li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4414"><a href="#contacto" className="elementor-item" tabIndex={-1}>Support</a></li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1831"><a href="#" className="elementor-item" tabIndex={-1}>Account</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}