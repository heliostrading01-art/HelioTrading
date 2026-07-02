import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus('error');
      return;
    }

    setStatus('submitting');

    setTimeout(() => {
      try {
        const emailDestino = "kenbarrett333@gmail.com"; 
        const emailSubject = encodeURIComponent("[Contact Form] " + formData.subject);
        const emailBody = encodeURIComponent(
          "Name: " + formData.name + "\n" +
          "Email: " + formData.email + "\n\n" +
          "Message:\n" + formData.message
        );
        
        window.location.href = "mailto:" + emailDestino + "?subject=" + emailSubject + "&body=" + emailBody;
        
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } catch (err) {
        setStatus('error');
      }
    }, 500);
  };

  return (
    <section id="contacto" className="cliente-contacto-section">
      <div className="contacto-container">
        <div className="contacto-header">
          <h2>Get in Touch</h2>
          <p>Have questions or ready to automate your trading edge? Drop us a message below and our team will get back to you shortly.</p>
        </div>
        
        <form id="cliente-contact-form" className="contacto-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="contact-name">Full Name</label>
              <input 
                type="text" 
                id="contact-name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe" 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-email">Email Address</label>
              <input 
                type="email" 
                id="contact-email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com" 
                required 
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="contact-subject">Subject</label>
            <input 
              type="text" 
              id="contact-subject" 
              name="subject" 
              value={formData.subject}
              onChange={handleChange}
              placeholder="How can we help you?" 
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="contact-message">Message</label>
            <textarea 
              id="contact-message" 
              name="message" 
              rows="5" 
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..." 
              required
            ></textarea>
          </div>
          
          <button type="submit" id="contact-submit-btn" className="contacto-submit-btn" disabled={status === 'submitting'}>
            <span>{status === 'submitting' ? 'Opening Mail Client...' : 'Send Email'}</span>
          </button>
          
          {status === 'success' && (
            <div className="form-status-message success-message" style={{ display: 'block', marginTop: '15px' }}>
              <strong>Success!</strong> Your email client has been opened. Please check it to send the message.
            </div>
          )}
          
          {status === 'error' && (
            <div className="form-status-message error-message" style={{ display: 'block', marginTop: '15px', color: '#ff4b4b' }}>
              <strong>Error!</strong> Please fill out all required fields correctly.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}