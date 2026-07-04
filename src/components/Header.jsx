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
                <div className="elementor-widget-container" style={{ display: 'flex', alignItems: 'center', height: '84px', padding: 0, margin: 0 }}>
                  <div style={{ height: '84px', display: 'flex', alignItems: 'center' }}>
                    <a href="#" className="header-logo-link">
                      <img
                        src="/assets/logo/Logo.jpg"
                        title="Helios Trading Systems"
                        alt="Logo"
                        loading="lazy"
                        style={{ maxHeight: '68px', width: 'auto', display: 'block' }}
                      />
                    </a>
                  </div>
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
                      <li className="menu-item"><a href="#/features" className="elementor-item">Features</a></li>
                      <li className="menu-item"><a href="#/pricing" className="elementor-item">Pricing</a></li>
                      <li className="menu-item"><a href="#/affiliates" className="elementor-item">Affiliates</a></li>
                      <li className="menu-item"><a href="#/setup-guides" className="elementor-item">Setup Guides</a></li>
                      <li className="menu-item"><a href="#/legal-privacy" className="elementor-item">Legal & Privacy</a></li>
                      <li className="menu-item"><a href="#" className="elementor-item btn-login-outline">Log In</a></li>
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
                      <li className="menu-item"><a href="#/features" className="elementor-item" tabIndex={-1}>Features</a></li>
                      <li className="menu-item"><a href="#/pricing" className="elementor-item" tabIndex={-1}>Pricing</a></li>
                      <li className="menu-item"><a href="#/affiliates" className="elementor-item" tabIndex={-1}>Affiliates</a></li>
                      <li className="menu-item"><a href="#/setup-guides" className="elementor-item" tabIndex={-1}>Setup Guides</a></li>
                      <li className="menu-item"><a href="#/legal-privacy" className="elementor-item" tabIndex={-1}>Legal & Privacy</a></li>
                      <li className="menu-item"><a href="#" className="elementor-item btn-login-outline" tabIndex={-1}>Log In</a></li>
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