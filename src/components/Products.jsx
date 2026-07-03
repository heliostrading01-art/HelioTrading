import React from 'react';

const PRODUCTS_DATA = [
  {
    id: 5630,
    title: 'PROEDGE Bundle',
    description: 'Professional trading ecosystem: strategies, indicators, & tools working together for maximum edge.',
    rating: '4.9',
    price: '$298.00',
    suffix: '/ month for 3 months',
    image: '/images/price-card-image-6.png',
    checkoutLink: 'https://proedgetrading.com?add-to-cart=5630&quantity=1'
  },
  {
    id: 5629,
    title: 'Torque Flip Auto',
    description: 'Professional momentum reversal strategy capturing high-probability turning points.',
    rating: '4.9',
    price: '$148.00',
    suffix: '/ month for 3 months',
    image: '/images/price-card-image-2.5.png',
    checkoutLink: 'https://proedgetrading.com?add-to-cart=5629&quantity=1'
  },
  {
    id: 5628,
    title: 'Torque Trend Auto',
    description: 'Professional trend-following strategy capturing momentum at inception.',
    rating: '4.9',
    price: '$148.00',
    suffix: '/ month for 3 months',
    image: '/images/price-card-image-2.7.png',
    checkoutLink: 'https://proedgetrading.com?add-to-cart=5628&quantity=1'
  },
  {
    id: 5611,
    title: 'Guardian Pro',
    description: 'Automated account protection: locks trading and exits positions at limits.',
    rating: '5.0',
    price: '$298.00',
    suffix: 'one time payment',
    image: '/images/price-card-image-4.2.png',
    checkoutLink: 'https://proedgetrading.com?add-to-cart=5611&quantity=1'
  },
  {
    id: 5404,
    title: 'Trade Tracker',
    description: 'Professional trade planning tool with risk-reward calculation and outcome tracking features.',
    rating: '5.0',
    price: '$98.00',
    suffix: 'one time payment',
    image: '/images/price-card-image-2.4.png',
    checkoutLink: 'https://proedgetrading.com?add-to-cart=5404&quantity=1'
  },
  {
    id: 4035,
    title: 'Edge Runner Auto',
    description: 'Fully automated EdgeRunner trading system with intelligent execution controls.',
    rating: '4.9',
    price: '$198.00',
    suffix: '/ month for 3 months',
    image: '/images/price-card-image-2.2.png',
    checkoutLink: 'https://proedgetrading.com?add-to-cart=4035&quantity=1'
  },
  {
    id: 1778,
    title: 'Edge Runner',
    description: 'Comprehensive market analysis indicator featuring intelligent signals.',
    rating: '4.9',
    price: '$98.00',
    suffix: '/ month for 3 months',
    image: '/images/price-card-image-1.1-1.png',
    checkoutLink: 'https://proedgetrading.com?add-to-cart=1778&quantity=1'
  }
];

export default function Products() {
  return (
    <section 
      className="elementor-element elementor-element-8ebc919 e-flex e-con-boxed e-con e-parent e-lazyloaded" 
      data-id="8ebc919" 
      data-element_type="container" 
      data-e-type="container" 
      data-settings='{"background_background":"gradient"}'
      style={{ padding: '80px 0' }}
    >
      <div className="e-con-inner">
        {/* Cabecera Sección de Productos */}
        <div 
          className="elementor-element elementor-element-61ceff1 content-align-cta-center de_scroll_animation_no elementor-widget elementor-widget-eael-cta-box" 
          data-id="61ceff1" 
          data-element_type="widget" 
          data-widget_type="eael-cta-box.default"
        >
          <div className="elementor-widget-container">
            <div className="eael-call-to-action cta-basic bg-lite cta-preset-1">
              <h4 className="sub-title">Trading Tools</h4>
              <h2 className="title eael-cta-heading">
                <span className="eael-cta-title-text elementor-repeater-item-5319c45">Your</span>{" "}
                <span className="eael-cta-title-text elementor-repeater-item-62ca4ea">Trading </span>{" "}
                <span className="eael-cta-title-text elementor-repeater-item-2e3b043 eael-cta-gradient-text">Edge</span>
              </h2>
              <p>Precision tools engineered for reliability. Trusted by thousands of dedicated traders worldwide.</p>
              <a className="cta-button cta-preset-1" href="#contact"></a>
            </div>
          </div>
        </div>

        {/* Grid de Productos */}
        <div 
          className="woocommerce elementor-element elementor-element-140ff40 elementor-grid-4 elementor-grid-tablet-2 elementor-grid-mobile-1 de_scroll_animation_no elementor-widget elementor-widget-loop-grid" 
          data-id="140ff40" 
          data-element_type="widget" 
          data-settings='{"_skin":"product","template_id":5924,"columns":4,"columns_tablet":"2","columns_mobile":"1"}' 
          data-widget_type="loop-grid.product"
        >
          <div className="elementor-widget-container">
            <div className="elementor-loop-container elementor-grid" role="list">
              {PRODUCTS_DATA.map((product) => (
                <div 
                  key={product.id} 
                  data-elementor-type="loop-item" 
                  data-elementor-id="5924" 
                  className={`elementor elementor-5924 e-loop-item e-loop-item-${product.id} post-${product.id} product type-product status-publish has-post-thumbnail instock downloadable virtual purchasable product-type-subscription`}
                  data-custom-edit-handle="1"
                >
                  <div 
                    className="elementor-element elementor-element-a20f096 product-card e-flex e-con-boxed e-con e-parent e-lazyloaded" 
                    data-id="a20f096" 
                    data-element_type="container" 
                    data-settings='{"background_background":"gradient"}'
                  >
                    <div className="e-con-inner">
                      {/* Imagen destacada */}
                      <div className="elementor-element elementor-element-a06760d de_scroll_animation_no elementor-widget elementor-widget-theme-post-featured-image elementor-widget-image" data-id="a06760d" data-element_type="widget" data-widget_type="theme-post-featured-image.default">
                        <div className="elementor-widget-container">
                          <a href="#">
                            <img 
                              decoding="async" 
                              src={product.image} 
                              alt={product.title} 
                              className="attachment-1536x1536 size-1536x1536"
                              style={{ width: '100%', height: 'auto', borderRadius: '15px 15px 0px 0px' }}
                            />
                          </a>
                        </div>
                      </div>

                      {/* Contenedor de Texto y Metadatos */}
                      <div className="elementor-element elementor-element-0885d55 e-con-full e-flex e-con e-child" data-id="0885d55" data-element_type="container">
                        
                        {/* Título de Producto */}
                        <div className="elementor-element elementor-element-fce62d7 product-title de_scroll_animation_no elementor-widget elementor-widget-woocommerce-product-title elementor-page-title elementor-widget-heading" data-id="fce62d7" data-element_type="widget" data-widget_type="woocommerce-product-title.default">
                          <div className="elementor-widget-container">
                            <h2 className="product_title entry-title elementor-heading-title elementor-size-default">
                              <a href="#">{product.title}</a>
                            </h2>
                          </div>
                        </div>

                        {/* Descripción corta */}
                        <div className="elementor-element elementor-element-45c84e1 de_scroll_animation_no elementor-widget elementor-widget-woocommerce-product-short-description" data-id="45c84e1" data-element_type="widget" data-widget_type="woocommerce-product-short-description.default">
                          <div className="elementor-widget-container">
                            <div className="woocommerce-product-details__short-description">
                              <p>{product.description}</p>
                            </div>
                          </div>
                        </div>

                        {/* Rating */}
                        <div className="elementor-element elementor-element-3389ca4 e-con-full e-flex e-con e-child" data-id="3389ca4" data-element_type="container">
                          <div style={{ display: 'flex', gap: '4px', alignItems: 'center', marginBottom: '8px' }}>
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} width="12" height="12" viewBox="0 0 576 512" fill="var(--gold)">
                                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/>
                              </svg>
                            ))}
                            <span style={{
                              fontFamily: 'Rajdhani, sans-serif',
                              fontSize: '13px',
                              fontWeight: 700,
                              color: 'var(--white-50)',
                              marginLeft: '8px',
                              lineHeight: 1
                            }}>
                              {product.rating}
                            </span>
                          </div>
                        </div>

                        {/* Contenedor de Precio */}
                        <div className="elementor-element elementor-element-e9ae233 e-con-full product-price-container e-flex e-con e-child" data-id="e9ae233" data-element_type="container">
                          <div className="elementor-element elementor-element-42e8f3a de_scroll_animation_no elementor-widget elementor-widget-woocommerce-product-price" data-id="42e8f3a" data-element_type="widget" data-widget_type="woocommerce-product-price.default">
                            <div className="elementor-widget-container">
                              <p className="price">
                                <span className="woocommerce-Price-amount amount">
                                  <bdi>
                                    <span className="woocommerce-Price-currencySymbol" translate="no">$</span>
                                    {product.price.replace('$', '')}
                                  </bdi>
                                </span>
                              </p>
                            </div>
                          </div>

                          <div className="elementor-element elementor-element-911a9cd de_scroll_animation_no elementor-widget elementor-widget-text-editor" data-id="911a9cd" data-element_type="widget" data-widget_type="text-editor.default">
                            <div className="elementor-widget-container">
                              {product.suffix}
                            </div>
                          </div>
                        </div>

                        {/* Botón de compra */}
                        <div className="elementor-element elementor-element-c378d8d elementor-add-to-cart--align-center product-button de_scroll_animation_no elementor-widget elementor-widget-wc-add-to-cart" data-id="c378d8d" data-element_type="widget" data-widget_type="wc-add-to-cart.default">
                          <div className="elementor-widget-container">
                            <div className="elementor-button-wrapper">
                              <a rel="nofollow" href={product.checkoutLink} className="product_type_subscription add_to_cart_button ajax_add_to_cart elementor-button elementor-size-sm" role="button">
                                <span className="elementor-button-content-wrapper">
                                  <span className="elementor-button-icon">
                                    <svg aria-hidden="true" className="e-font-icon-svg e-fas-shopping-cart" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path></svg>
                                  </span>
                                  <span className="elementor-button-text">Add to Cart</span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}