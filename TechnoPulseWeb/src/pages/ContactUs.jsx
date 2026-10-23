import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2, AlertCircle, Sparkles } from 'lucide-react';
import { getServiceById } from '../data/servicesData';
import './ContactUs.css';

export default function ContactUs() {
  const [searchParams] = useSearchParams();
  const serviceParam = searchParams.get('service');
  const matchedService = serviceParam ? getServiceById(serviceParam) : null;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (matchedService) {
      setFormData((prev) => ({
        ...prev,
        message: prev.message || `Hi Technoplus team,\n\nI would like to inquire about your ${matchedService.title} services. Please get in touch with me to discuss our requirements.`
      }));
    }
  }, [matchedService]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setLoading(true);

    try {
      const endpoint = import.meta.env.VITE_API_BASE_URL
        ? `${import.meta.env.VITE_API_BASE_URL.replace(/\/$/, '')}/api/contact`
        : '/api/contact';

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to send message. Please ensure the backend server is running.');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Contact submission error:', err);
      setErrorMessage(
        err.message || 'Unable to connect to the backend server. Please verify the server is running on port 5000.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page-wrap">
      <div className="container">
        {/* Header */}
        <div className="contact-header">
          <h1 className="contact-main-title">Contact Us</h1>
          <p className="contact-description">
            Get in touch with our engineering team directly.
          </p>
        </div>

        <div className="contact-content-grid">
          {/* Direct Contact Info */}
          <div className="contact-info-card">
            <h2 className="contact-card-title">Office &amp; Inquiries</h2>

            <div className="contact-info-list">
              <div className="contact-info-row">
                <MapPin size={18} className="contact-icon" style={{ marginTop: '3px' }} />
                <div>
                  <strong className="contact-label-title">Address:</strong>
                  <span className="contact-text-detail">
                    Technoplus Solutions Private Limited<br />
                    702-704, Silicon Valley, KKV Hall,  150 ft Ring Road,<br />
                    Rajkot, Gujarat, India - 360002
                  </span>
                </div>
              </div>

              <div className="contact-info-row center">
                <Mail size={18} className="contact-icon" />
                <div>
                  <strong className="contact-label-title">Email:</strong>
                  <a href="mailto:dhruvishamaheta284@gmail.com" className="contact-email-link">
                    dhruvishamaheta284@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-info-row center">
                <Phone size={18} className="contact-icon" />
                <div>
                  <strong className="contact-label-title">Phone:</strong>
                  <span className="contact-text-detail">+91 91735 89925</span>
                </div>
              </div>
            </div>
          </div>

          {/* Minimal Form */}
          <div className="contact-form-card">
            {submitted ? (
              <div className="contact-success-box">
                <CheckCircle2 size={36} className="success-icon" />
                <h3 className="success-title">Message Received</h3>
                <p className="success-desc">
                  Thank you! Your message has been sent to our team. We will get back to you within 24 business hours.
                </p>
                <button
                  type="button"
                  className="btn btn-secondary reset-form-btn"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', message: '' });
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                {matchedService && (
                  <div className="contact-service-selected-pill">
                    <Sparkles size={14} className="service-pill-icon" />
                    <span>Inquiring about: <strong>{matchedService.title}</strong></span>
                  </div>
                )}

                {errorMessage && (
                  <div className="contact-alert-box contact-alert-error">
                    <AlertCircle size={18} className="contact-alert-icon" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="form-field-group">
                  <label className="form-field-label">Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="form-text-input"
                    disabled={loading}
                  />
                </div>

                <div className="form-field-group">
                  <label className="form-field-label">Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="form-text-input"
                    disabled={loading}
                  />
                </div>

                <div className="form-field-group">
                  <label className="form-field-label">Message *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Briefly describe your project or inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-textarea"
                    disabled={loading}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary form-submit-btn"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 size={15} className="spin-icon" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
