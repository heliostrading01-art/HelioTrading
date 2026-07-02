import React, { useEffect } from 'react';

export default function Hero() {
  useEffect(() => {
    // Si Swiper o Elementor necesitan inicializarse para este widget
    if (window.jQuery && window.elementorFrontend) {
      setTimeout(() => {
        window.elementorFrontend.init();
      }, 100);
    }
  }, []);

  return (
    <>
      <div 
        className="elementor-element elementor-element-7bade208 e-flex e-con-boxed e-con e-parent e-lazyloaded" 
        data-id="7bade208" 
        data-element_type="container" 
        data-e-type="container" 
        data-settings='{"background_background":"video","background_video_start":1,"background_video_link":"/media/215698_small.mp4","background_play_on_mobile":"yes"}'
      >
        {/* BANNER IMAGEN DEL CLIENTE (overlay sobre el video a ancho completo) */}
        <div id="cliente-banner-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }}>
          <img src="/assets/banners/Hands2.png" alt="Banner del cliente" loading="eager" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div className="elementor-background-video-container" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, overflow: 'hidden' }}>
          <video className="elementor-background-video-hosted" role="presentation" autoPlay muted playsInline loop src="/media/215698_small.mp4#t=1" style={{ width: '100%', height: '100%', objectFit: 'cover' }}></video>
        </div>
        
        <div className="e-con-inner">
          <div className="elementor-element elementor-element-1c0d9e41 e-con-full e-flex e-con e-child" data-id="1c0d9e41" data-element_type="container" data-settings='{"background_background":"classic"}'>
            <div className="elementor-element elementor-element-48a59a88 animated-slow de_scroll_animation_no elementor-widget elementor-widget-heading animated fadeInDown" data-id="48a59a88" data-element_type="widget" data-settings='{"_animation":"fadeInDown"}' data-widget_type="heading.default">
              <div className="elementor-widget-container">
                <h6 className="elementor-heading-title elementor-size-default"><span className="welcome-text">WELCOME TO</span> <span className="brand-text">PRO EDGE TRADING</span></h6>
              </div>
            </div>
            <div className="elementor-element elementor-element-efa8cc3 animated-slow de_scroll_animation_no ha-has-bg-overlay elementor-widget elementor-widget-heading animated fadeInDown" data-id="efa8cc3" data-element_type="widget" data-settings='{"_animation":"fadeInDown"}' data-widget_type="heading.default">
              <div className="elementor-widget-container">
                <h6 className="elementor-heading-title elementor-size-default">Tools that actually deliver</h6>
              </div>
            </div>
          </div>
          
          <div className="elementor-element elementor-element-ff42937 elementor--h-position-left elementor-widget__width-initial elementor--v-position-middle elementor-pagination-position-inside de_scroll_animation_no elementor-widget elementor-widget-slides e-widget-swiper" data-id="ff42937" data-element_type="widget" data-settings='{"navigation":"dots","transition":"fade","autoplay":"yes","pause_on_hover":"yes","pause_on_interaction":"yes","autoplay_speed":5000,"infinite":"yes","transition_speed":500}' data-widget_type="slides.default">
            <div className="elementor-widget-container">
              <div className="elementor-swiper">
                <div className="elementor-slides-wrapper elementor-main-swiper swiper swiper-fade swiper-initialized swiper-horizontal swiper-pointer-events swiper-watch-progress swiper-backface-hidden" role="region" aria-roledescription="carousel" aria-label="Slides" dir="ltr" data-animation="fadeInLeft">
                  <div className="swiper-wrapper elementor-slides" id="swiper-wrapper-f010fe5bcc09d113c" aria-live="off" style={{ cursor: 'grab', transitionDuration: '0ms' }}>
                    
                    <div className="elementor-repeater-item-6e0a584 swiper-slide" role="group" aria-roledescription="slide" data-swiper-slide-index="0" aria-label="1 / 3" style={{ width: '100%', transitionDuration: '0ms', opacity: 1 }}>
                      <div className="swiper-slide-bg"></div>
                      <div className="swiper-slide-inner">
                        <div className="swiper-slide-contents animated fadeInLeft" style={{ display: 'block' }}>
                          <div className="elementor-slide-heading">Stop Second-Guessing Every Trade.</div>
                          <div className="elementor-slide-description">EdgeRunner delivers precision buy/sell signals and automated execution—so you never miss an opportunity or exit too late.</div>
                        </div>
                      </div>
                    </div>

                    <div className="elementor-repeater-item-3540c94 swiper-slide" role="group" aria-roledescription="slide" data-swiper-slide-index="1" aria-label="2 / 3" style={{ width: '100%', transitionDuration: '0ms', opacity: 0 }}>
                      <div className="swiper-slide-bg elementor-ken-burns--active"></div>
                      <div className="swiper-slide-inner">
                        <div className="swiper-slide-contents animated fadeInLeft" style={{ display: 'block' }}>
                          <div className="elementor-slide-heading">Automate Your Advantage.</div>
                          <div className="elementor-slide-description">Professional trading bots and precision indicators for NinjaTrader 8—built on backtest-proven strategies that deliver consistent results.</div>
                        </div>
                      </div>
                    </div>

                    <div className="elementor-repeater-item-fa56034 swiper-slide" role="group" aria-roledescription="slide" data-swiper-slide-index="2" aria-label="3 / 3" style={{ width: '100%', transitionDuration: '0ms', opacity: 0 }}>
                      <div className="swiper-slide-bg"></div>
                      <div className="swiper-slide-inner">
                        <div className="swiper-slide-contents animated fadeInLeft" style={{ display: 'block' }}>
                          <div className="elementor-slide-heading">From struggling to consistent.</div>
                          <div className="elementor-slide-description">Professional algorithms that identify high-probability setups, execute with precision, and help you build the trading account you've always wanted.</div>
                        </div>
                      </div>
                    </div>

                  </div>
                  
                  <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                    <span className="swiper-pagination-bullet" tabIndex={0} role="button" aria-label="Go to slide 1"></span>
                    <span className="swiper-pagination-bullet swiper-pagination-bullet-active" tabIndex={0} role="button" aria-label="Go to slide 2" aria-current="true"></span>
                    <span className="swiper-pagination-bullet" tabIndex={0} role="button" aria-label="Go to slide 3"></span>
                  </div>
                  <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                </div>
              </div>
            </div>
          </div>

          <div className="elementor-element elementor-element-9c382c9 e-con-full e-flex e-con e-child" data-id="9c382c9" data-element_type="container" data-settings='{"background_background":"classic"}'>
            <div className="elementor-element elementor-element-9474c95 animated-slow de_scroll_animation_no elementor-widget elementor-widget-heading animated fadeInDown" data-id="9474c95" data-element_type="widget" data-settings='{"_animation":"fadeInDown"}' data-widget_type="heading.default">
              <div className="elementor-widget-container">
                <h6 className="elementor-heading-title elementor-size-default">No hype. Just results.</h6>
              </div>
            </div>
            
            <div className="elementor-element elementor-element-496a646 elementor-view-default de_scroll_animation_no elementor-widget elementor-widget-icon" data-id="496a646" data-element_type="widget" data-widget_type="icon.default">
              <div className="elementor-widget-container">
                <div className="elementor-icon-wrapper">
                  <div className="elementor-icon">
                    <svg aria-hidden="true" className="e-font-icon-svg e-fas-star" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-604f632 elementor-view-default de_scroll_animation_no elementor-widget elementor-widget-icon" data-id="604f632" data-element_type="widget" data-widget_type="icon.default">
              <div className="elementor-widget-container">
                <div className="elementor-icon-wrapper">
                  <div className="elementor-icon">
                    <svg aria-hidden="true" className="e-font-icon-svg e-fas-star" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-97272ef elementor-view-default de_scroll_animation_no elementor-widget elementor-widget-icon" data-id="97272ef" data-element_type="widget" data-widget_type="icon.default">
              <div className="elementor-widget-container">
                <div className="elementor-icon-wrapper">
                  <div className="elementor-icon">
                    <svg aria-hidden="true" className="e-font-icon-svg e-fas-star" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-310ba38 elementor-view-default de_scroll_animation_no elementor-widget elementor-widget-icon" data-id="310ba38" data-element_type="widget" data-widget_type="icon.default">
              <div className="elementor-widget-container">
                <div className="elementor-icon-wrapper">
                  <div className="elementor-icon">
                    <svg aria-hidden="true" className="e-font-icon-svg e-fas-star" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-4f84bb5 elementor-view-default de_scroll_animation_no elementor-widget elementor-widget-icon" data-id="4f84bb5" data-element_type="widget" data-widget_type="icon.default">
              <div className="elementor-widget-container">
                <div className="elementor-icon-wrapper">
                  <div className="elementor-icon">
                    <svg aria-hidden="true" className="e-font-icon-svg e-fas-star" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="elementor-element elementor-element-04d8531 de_scroll_animation_no elementor-widget elementor-widget-heading" data-id="04d8531" data-element_type="widget" data-widget_type="heading.default">
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">4.9 </h2>
              </div>
            </div>
            <div className="elementor-element elementor-element-cb5b165 de_scroll_animation_no elementor-widget elementor-widget-heading" data-id="cb5b165" data-element_type="widget" data-widget_type="heading.default">
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">rating</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Divisor visual — barra de la paleta Helios */}
      <div className="helios-divider" aria-hidden="true"></div>
    </>
  );
}