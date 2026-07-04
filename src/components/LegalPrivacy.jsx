import React, { useState } from 'react';

export default function LegalPrivacy() {
  const [activeTab, setActiveTab] = useState('tos');

  const termsOfService = [
    {
      title: "1. User's Acknowledgment and Acceptance of Terms",
      content: "Helios Trading Systems LLC (\"Helios Trading Systems\", \"Us\", or \"We\") provides the Helios Trading Systems site and various related services (collectively, the \"site\") to you, the user, subject to your compliance with all the terms, conditions, and notices contained or referenced herein (the \"Terms of Service\"), as well as any other written agreement between us and you. BY USING THIS SITE, YOU AGREE TO BE BOUND BY THESE TERMS OF SERVICE. YOUR AGREEMENT WITH US REGARDING COMPLIANCE WITH THESE TERMS OF SERVICE BECOMES EFFECTIVE IMMEDIATELY UPON COMMENCEMENT OF YOUR USE OF THIS SITE."
    },
    {
      title: "2. Description of Services",
      content: "We make various services available on this site including, but not limited to, trade journaling, trade analysis, sharing or publishing of trades, and other like services. You are responsible for providing, at your own expense, all equipment necessary to use the services, including a computer and Internet access. We reserve the sole right to either modify or discontinue the site, including any of the site's features, at any time with or without notice to you."
    },
    {
      title: "3. Registration Data and Privacy",
      content: "In order to access some of the services on this site, you will be required to use an account and password. By registering, you agree that all information provided in the Registration Data is true and accurate and that you will maintain and update this information as required. You also grant us the right to disclose to third parties certain Registration Data about you, but only as specifically listed in our Privacy Policy."
    },
    {
      title: "4. Conduct on Site",
      content: "Your use of the site is subject to all applicable laws and regulations. You agree that you will not upload, share, post, or otherwise distribute or facilitate distribution of any content that is unlawful, threatening, abusive, harassing, defamatory, libelous, deceptive, fraudulent, invasive of another's privacy, tortious, or infringes on any patent, trademark, trade secret, copyright, or other proprietary right of any party."
    },
    {
      title: "5. Third Party Sites and Information",
      content: "This site may link you to other sites on the Internet or otherwise include references to information, documents, software, materials and/or services provided by other parties. These other sites and parties are not under our control, and you acknowledge that we are not responsible for the accuracy, copyright compliance, legality, decency, or any other aspect of the content of such sites."
    },
    {
      title: "6. Intellectual Property Information",
      content: "Copyright © 2026 Helios Trading Systems LLC, All Rights Reserved. All custom graphics, icons, logos and service names are registered trademarks, trademarks or service marks of Helios Trading Systems. All other trademarks or service marks are property of their respective owners. Nothing in these Terms of Service grants you any right to use any trademark, service mark, logo, and/or the name of Helios Trading Systems or its Affiliates."
    },
    {
      title: "7. Accuracy of Information",
      content: "All of the information on this website is for entertainment and educational purposes only. While the information is believed to be accurate, none of the information on this site should be considered solely reliable for use in making actual investment decisions. Helios Trading Systems and its third-party providers do not warrant or guarantee such accuracy, completeness, usefulness or timeliness."
    },
    {
      title: "8. Investment Decisions",
      content: "You assume all risk associated with investment decisions made on the basis of information contained on this web site. It is our policy to never advocate the purchase or sale of any individual investment vehicle. Helios Trading Systems, its third-party providers, and/or content partners shall have no liability for investment decisions based upon information found on this web site."
    },
    {
      title: "9. Shared Trades",
      content: "By posting and sharing your Content using the Services, you are granting an unrestricted, irrevocable, non-exclusive, royalty-free, perpetual, worldwide, and fully transferable right and license to use, copy, reproduce, modify, distribute, and display your Content. You represent and warrant that the content you supply does not violate these Terms and that you will not knowingly provide material and misleading false information."
    },
    {
      title: "10. Disclaimer of Warranties",
      content: "ALL MATERIALS AND SERVICES ON THIS SITE ARE PROVIDED ON AN \"AS IS\" AND \"AS AVAILABLE\" BASIS WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE, OR THE WARRANTY OF NON-INFRINGEMENT. WE MAKE NO WARRANTY THAT THE SERVICES AND MATERIALS WILL MEET YOUR REQUIREMENTS."
    }
  ];

  const privacyPolicy = [
    {
      title: "Information Collection, Use, and Sharing",
      content: "We are the sole owners of the information collected on this site. We only have access to/collect information that you voluntarily give us when using the site. We will not sell or rent this information to anyone. We will not share your information with any third party outside of our organization, other than as necessary to fulfill your request."
    },
    {
      title: "Your Access to and Control Over Information",
      content: "You may opt out of any future contacts from us at any time. You can do the following at any time by contacting us via email at support@heliostradingsystems.com to request that we delete any data we have about you or express any concern you have about our use of your data."
    },
    {
      title: "Security",
      content: "We take precautions to protect your information. When you submit sensitive information via the website, your information is protected both online and offline. Wherever we collect sensitive information (such as your trade data), that information is encrypted and transmitted to us in a secure way."
    },
    {
      title: "Policy Compliance",
      content: "If you feel that we are not abiding by this privacy policy, please contact us immediately via email at support@heliostradingsystems.com so we can address your concerns immediately."
    }
  ];

  return (
    <div style={{
      background: 'var(--navy)',
      minHeight: '100vh',
      padding: '160px 24px 100px 24px',
      color: 'var(--white)',
      position: 'relative'
    }}>
      <div className="grid-lines" style={{ opacity: 0.05, zIndex: 1 }} />

      <div style={{
        maxWidth: '850px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 2
      }}>
        {/* Navigation Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '16px',
          marginBottom: '48px',
          borderBottom: '1.5px solid rgba(255,255,255,0.08)',
          paddingBottom: '20px'
        }}>
          <button
            onClick={() => setActiveTab('tos')}
            style={{
              background: activeTab === 'tos' ? 'rgba(91, 163, 245, 0.12)' : 'transparent',
              border: activeTab === 'tos' ? '1px solid rgba(91, 163, 245, 0.4)' : '1px solid transparent',
              borderRadius: '20px',
              padding: '8px 24px',
              fontFamily: 'Rajdhani, sans-serif',
              fontSize: '15px',
              fontWeight: 700,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              color: activeTab === 'tos' ? 'var(--blue-bright)' : 'rgba(255,255,255,0.55)',
              cursor: 'pointer',
              transition: 'all 0.25s ease'
            }}
          >
            Terms of Service & Disclaimer
          </button>
          <button
            onClick={() => setActiveTab('privacy')}
            style={{
              background: activeTab === 'privacy' ? 'rgba(91, 163, 245, 0.12)' : 'transparent',
              border: activeTab === 'privacy' ? '1px solid rgba(91, 163, 245, 0.4)' : '1px solid transparent',
              borderRadius: '20px',
              padding: '8px 24px',
              fontFamily: 'Rajdhani, sans-serif',
              fontSize: '15px',
              fontWeight: 700,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              color: activeTab === 'privacy' ? 'var(--blue-bright)' : 'rgba(255,255,255,0.55)',
              cursor: 'pointer',
              transition: 'all 0.25s ease'
            }}
          >
            Privacy Policy
          </button>
        </div>

        {/* Content Box */}
        <div style={{
          background: 'rgba(255,255,255,0.02)',
          border: '1.5px solid rgba(255,255,255,0.06)',
          borderRadius: '8px',
          padding: '48px',
          marginBottom: '56px',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.2)'
        }}>
          {activeTab === 'tos' ? (
            <div>
              <h2 style={{
                fontFamily: 'Rajdhani, sans-serif',
                fontSize: '32px',
                fontWeight: 700,
                color: 'var(--white)',
                marginBottom: '8px'
              }}>Terms of Service</h2>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '13px',
                color: 'rgba(255,255,255,0.4)',
                marginBottom: '32px'
              }}>Last updated: July 2026 · Support: support@HeliosTradingSystems.com</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                {termsOfService.map((section, idx) => (
                  <div key={idx} style={{ borderBottom: idx < termsOfService.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none', paddingBottom: idx < termsOfService.length - 1 ? '32px' : '0' }}>
                    <h3 style={{
                      fontFamily: 'Rajdhani, sans-serif',
                      fontSize: '18px',
                      fontWeight: 700,
                      color: 'var(--blue-bright)',
                      margin: '0 0 12px 0',
                      letterSpacing: '0.5px'
                    }}>{section.title}</h3>
                    <p style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '14.5px',
                      color: 'rgba(255,255,255,0.7)',
                      lineHeight: 1.7,
                      margin: 0
                    }}>{section.content}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <h2 style={{
                fontFamily: 'Rajdhani, sans-serif',
                fontSize: '32px',
                fontWeight: 700,
                color: 'var(--white)',
                marginBottom: '8px'
              }}>Privacy Policy</h2>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '13px',
                color: 'rgba(255,255,255,0.4)',
                marginBottom: '32px'
              }}>Last updated: July 2026 · Helios Trading Systems LLC</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                {privacyPolicy.map((section, idx) => (
                  <div key={idx} style={{ borderBottom: idx < privacyPolicy.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none', paddingBottom: idx < privacyPolicy.length - 1 ? '32px' : '0' }}>
                    <h3 style={{
                      fontFamily: 'Rajdhani, sans-serif',
                      fontSize: '18px',
                      fontWeight: 700,
                      color: 'var(--blue-bright)',
                      margin: '0 0 12px 0',
                      letterSpacing: '0.5px'
                    }}>{section.title}</h3>
                    <p style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '14.5px',
                      color: 'rgba(255,255,255,0.7)',
                      lineHeight: 1.7,
                      margin: 0
                    }}>{section.content}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Back Link */}
        <div style={{ textAlign: 'center' }}>
          <a
            href="#"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: 'var(--blue-bright)',
              fontFamily: 'Rajdhani, sans-serif',
              fontSize: '15px',
              fontWeight: 700,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={e => e.currentTarget.style.color = '#fff'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--blue-bright)'}
          >
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
