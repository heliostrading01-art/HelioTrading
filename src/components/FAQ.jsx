import React, { useState } from 'react';

const FAQ_ITEMS = [
  {
    key: 'f1baa006a42933043284',
    title: 'What charting platform do your products work on?',
    content: 'Currently, it works only on NinjaTrader.'
  },
  {
    key: '6a0073c6a42933043284',
    title: 'Can I set alerts with the Edge Runner?',
    content: 'Yes. You can set alerts for longs and/or shorts and background changes.'
  },
  {
    key: '27ae0b76a42933043284',
    title: 'What securities can I trade?',
    content: 'As long as the instrument is available on NinjaTrader, you are able use our software to start trading.'
  },
  {
    key: 'aa5d5d06a42933043284',
    title: 'Who supports my indicator?',
    content: "We do. Our Support is FREE (via email). We also have instructional videos and many resources in the Discord."
  },
  {
    key: 'b9310326a42933043284',
    title: 'Are there any additional fees once I purchase?',
    content: 'No. After the purchase of the product is complete there will be no more additional fees. The software is yours for life and you will not be charged again.'
  },
  {
    key: 'cc113136a42933043284',
    title: 'May I install these on more than one computer?',
    content: 'We have a 1 to 1, license to computer licensing model. In other words, you are entitled to use one active NinjaTrader machine per license. However, additional licenses are available for laptops, etc. at discounted prices.'
  },
  {
    key: 'a1b3eae6a42933043284',
    title: 'What if I need to replace my Machine ID?',
    content: 'No problem. For a nominal service fee of $10 per indicator, per machine, we will get everything updated for you.'
  },
  {
    key: 'eddd1106a42933043284',
    title: 'What is your Refund Policy?',
    content: 'Please be advised that all sales are final. No returns, refunds, or exchanges, partial or otherwise, for any reason. Once you have placed your order, there is no returns or credit. You may not return the product and demand a refund, as you were supplied intellectual property in the form of software and copyrighted trading material.'
  },
  {
    key: '6f81d446a42933043284',
    title: 'How long does it take to process an order and to send me my new indicator?',
    content: 'Your software will be available for download immediately after you complete your transaction.'
  },
  {
    key: '699957d6a42933043284',
    title: 'Do you offer Trials?',
    content: "No. Short trial times create an artificial pressure to succeed quickly. Trading is hard enough without this added anxiety."
  }
];

export default function FAQ() {
  const [activeKey, setActiveKey] = useState(FAQ_ITEMS[0].key);

  const handleToggle = (e, key) => {
    e.preventDefault();
    if (activeKey === key) {
      setActiveKey(null);
    } else {
      setActiveKey(key);
    }
  };

  return (
    <>
      <div 
        className="elementor-element elementor-element-246a2e4d e-flex e-con-boxed e-con e-parent e-lazyloaded" 
        data-id="246a2e4d" 
        data-element_type="container" 
        data-settings='{"_ha_eqh_enable":false}'
        style={{ padding: '80px 0' }}
        id="faq"
      >
        <div className="e-con-inner">
          <div className="elementor-element elementor-element-563d515 e-con-full e-flex e-con e-child" data-id="563d515">
            <div className="elementor-element elementor-element-4e461187 de_scroll_animation_no elementor-widget elementor-widget-heading" data-id="4e461187" data-element_type="widget">
              <div className="elementor-widget-container">
                <h6 className="elementor-heading-title elementor-size-default">FAQ</h6>
              </div>
            </div>
            <div className="elementor-element elementor-element-570589dd de_scroll_animation_no elementor-widget elementor-widget-heading" data-id="570589dd" data-element_type="widget">
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">Most Popular Questions</h2>
              </div>
            </div>
            <div className="elementor-element elementor-element-4e98e893 de_scroll_animation_no elementor-widget elementor-widget-heading" data-id="4e98e893" data-element_type="widget">
              <div className="elementor-widget-container">
                <div className="elementor-heading-title elementor-size-default">
                  If you can't find the answer to your question here, don't hesitate to contact us. We're always here to help you!
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-a9c97e6 elementor-mobile-align-center de_scroll_animation_no elementor-widget elementor-widget-button" data-id="a9c97e6" data-element_type="widget">
              <div className="elementor-widget-container">
                <div className="elementor-button-wrapper">
                  <a className="elementor-button elementor-button-link elementor-size-sm" href="#contacto">
                    <span className="elementor-button-content-wrapper">
                      <span className="elementor-button-text">contact us</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-57f25c5 de_scroll_animation_no elementor-widget elementor-widget-heading" data-id="57f25c5" data-element_type="widget">
              <div className="elementor-widget-container">
                <div className="elementor-heading-title elementor-size-default">
                  Or join our Discord and reach out to us there. We're always active and happy to help
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-180806e elementor-mobile-align-center de_scroll_animation_no elementor-widget elementor-widget-button" data-id="180806e" data-element_type="widget">
              <div className="elementor-widget-container">
                <div className="elementor-button-wrapper">
                  <a className="elementor-button elementor-button-link elementor-size-sm" href="#" target="_blank" rel="noopener noreferrer">
                    <span className="elementor-button-content-wrapper">
                      <span className="elementor-button-text">Discord</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Acordeón dinámico */}
          <div className="elementor-element elementor-element-6284afc e-con-full e-flex e-con e-child" data-id="6284afc">
            <div className="elementor-element elementor-element-af73593 de_scroll_animation_no elementor-widget elementor-widget-elementskit-accordion" data-id="af73593" data-element_type="widget" data-widget_type="elementskit-accordion.default">
              <div className="elementor-widget-container">
                <div className="ekit-wid-con">
                  <div className="elementskit-accordion accoedion-primary" id="accordion-6a42933043284">
                    {FAQ_ITEMS.map((faq) => {
                      const isActive = activeKey === faq.key;
                      return (
                        <div key={faq.key} className={`elementskit-card ${isActive ? 'active' : ''}`}>
                          <div className="elementskit-card-header" id={`primaryHeading-${faq.key}`}>
                            <a 
                              href={`#collapse-${faq.key}`} 
                              onClick={(e) => handleToggle(e, faq.key)}
                              className={`ekit-accordion--toggler elementskit-btn-link ${isActive ? '' : 'collapsed'}`} 
                              aria-expanded={isActive}
                              aria-controls={`Collapse-${faq.key}`}
                            >
                              <span className="ekit-accordion-title">{faq.title}</span>
                              <div className="ekit_accordion_icon_group">
                                <div className="ekit_accordion_normal_icon">
                                  <i className="icon icon-down-arrow1"></i>
                                </div>
                                <div className="ekit_accordion_active_icon">
                                  <i className="icon icon-up-arrow1"></i>
                                </div>
                              </div>
                            </a>
                          </div>

                          <div 
                            id={`Collapse-${faq.key}`} 
                            className={`collapse ${isActive ? 'show' : ''}`} 
                            style={{ 
                              display: isActive ? 'block' : 'none',
                              transition: 'all 0.3s ease'
                            }}
                          >
                            <div className="elementskit-card-body ekit-accordion--content">
                              <p>{faq.content}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Where Strategy Meets Consistency Section */}
      <div className="elementor-element elementor-element-75e4969f e-flex e-con-boxed e-con e-parent" data-id="75e4969f" data-element_type="container">
        <div className="e-con-inner">
          <div className="elementor-element elementor-element-38b65569 e-flex e-con-boxed e-con e-child" data-id="38b65569" data-settings='{"background_background":"classic"}'>
            <div className="e-con-inner">
              <div className="elementor-element elementor-element-5c14f50c e-flex e-con-boxed e-con e-child" data-id="5c14f50c" data-settings='{"background_background":"gradient"}'>
                <div className="e-con-inner">
                  <div className="elementor-element elementor-element-42702c46 de_scroll_animation_no elementor-widget elementor-widget-heading" data-id="42702c46" data-element_type="widget">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">
                        Where Strategy Meets Consistency. Unlock your trading potential with Pro Edge Trading
                      </h2>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-6b3870bd de_scroll_animation_no elementor-widget elementor-widget-text-editor" data-id="6b3870bd" data-element_type="widget">
                    <div className="elementor-widget-container">
                      <p>
                        Give yourself the tools your need to succeed. Developed by veteran traders and world class developers, identifying winning trades has never been easier. Start trading like the pros and give yourself an edge.
                      </p>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-53dbe393 elementor-align-center de_scroll_animation_no elementor-widget elementor-widget-button" data-id="53dbe393" data-element_type="widget">
                    <div className="elementor-widget-container">
                      <div className="elementor-button-wrapper">
                        <a className="elementor-button elementor-button-link elementor-size-sm" href="#">
                          <span className="elementor-button-content-wrapper">
                            <span className="elementor-button-text">Discover more</span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}