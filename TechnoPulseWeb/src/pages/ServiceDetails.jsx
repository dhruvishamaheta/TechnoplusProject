import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  Layers,
  Sparkles,
  Terminal,
  ShieldCheck,
  Compass,
  Clock,
  HelpCircle
} from 'lucide-react';
import { servicesData, getServiceById } from '../data/servicesData';
import './ServiceDetails.css';

export default function ServiceDetails() {
  const { id } = useParams();
  const service = getServiceById(id);

  const [openFaq, setOpenFaq] = useState(0);

  // If service is not found
  if (!service) {
    return (
      <div className="service-details-wrap">
        <div className="container">
          <div className="not-found-card glass-card">
            <h1 className="not-found-title">Service Not Found</h1>
            <p className="not-found-desc">
              The requested service domain could not be located or may have been reorganized.
            </p>
            <div className="not-found-actions">
              <Link to="/services" className="btn btn-primary">
                <ArrowLeft size={16} />
                <span>Return to Services Overview</span>
              </Link>
            </div>
            <div className="not-found-suggestions">
              <span className="suggestions-label">Explore available engineering services:</span>
              <div className="suggestions-grid">
                {servicesData.map((s) => (
                  <Link key={s.id} to={`/services/${s.id}`} className="suggestion-link">
                    <span>{s.title}</span>
                    <ArrowRight size={14} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const IconComponent = service.icon;
  const otherServices = servicesData.filter((s) => s.id !== service.id);

  return (
    <div className="service-details-wrap">
      {/* Top Breadcrumb Bar */}
      <div className="container">
        <div className="breadcrumb-nav">
          <Link to="/services" className="back-link">
            <ArrowLeft size={16} />
            <span>All Services</span>
          </Link>
          <span className="breadcrumb-sep">/</span>
          <span className="breadcrumb-current">{service.title}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="service-hero-section">
        <div className="container">
          <div className="service-hero-inner">
            <div className="service-hero-badge">
              <span className="service-hero-badge-dot" />
              <span>{service.badge}</span>
            </div>

            <div className="service-hero-header">
              <div className="service-hero-icon-box">
                <IconComponent size={28} />
              </div>
              <h1 className="service-hero-title">{service.title}</h1>
            </div>

            <p className="service-hero-tagline">{service.tagline}</p>
            <p className="service-hero-full-desc">{service.fullDesc}</p>

            <div className="service-hero-actions">
              <Link
                to={`/contact?service=${service.id}`}
                className="btn btn-primary hero-action-btn"
              >
                <span>Consult With Our Architects</span>
                <ArrowUpRight size={16} />
              </Link>
              <a href="#capabilities" className="btn btn-secondary hero-action-btn">
                <span>View Capabilities</span>
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Metrics Bar */}
            {service.stats && service.stats.length > 0 && (
              <div className="service-stats-grid">
                {service.stats.map((stat, idx) => (
                  <div key={idx} className="service-stat-card glass-card">
                    <div className="service-stat-val">{stat.value}</div>
                    <div className="service-stat-lbl">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Core Capabilities Section */}
      <section id="capabilities" className="service-capabilities-section">
        <div className="container">
          <div className="section-head">
            <div className="badge">
              <Layers size={14} />
              <span>Comprehensive Scope</span>
            </div>
            <h2 className="section-title">Core Capabilities &amp; Engineering Focus</h2>
            <p className="section-subtitle">
              Engineered with modern architectural patterns to ensure high performance, maintainability, and enterprise compliance.
            </p>
          </div>

          <div className="capabilities-grid">
            {service.capabilities.map((cap, idx) => (
              <div key={idx} className="capability-card glass-card">
                <div className="capability-index">0{idx + 1}</div>
                <h3 className="capability-title">{cap.title}</h3>
                <p className="capability-desc">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Process Workflow */}
      <section className="service-process-section">
        <div className="container">
          <div className="section-head">
            <div className="badge">
              <Compass size={14} />
              <span>Disciplined Execution</span>
            </div>
            <h2 className="section-title">Our Delivery Methodology</h2>
            <p className="section-subtitle">
              A predictable four-phase execution lifecycle designed to remove technical ambiguity and ship production-grade code on schedule.
            </p>
          </div>

          <div className="process-grid">
            {service.process.map((step, idx) => (
              <div key={idx} className="process-step-card glass-card">
                <div className="process-step-header">
                  <span className="process-step-badge">Step {step.step}</span>
                  <Clock size={16} className="process-clock-icon" />
                </div>
                <h3 className="process-step-title">{step.title}</h3>
                <p className="process-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables & Technology Stack Section */}
      <section className="service-deliverables-tech-section">
        <div className="container">
          <div className="two-column-grid">
            {/* What You Receive */}
            <div className="column-card glass-card">
              <div className="column-card-header">
                <div className="column-icon-box">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h3 className="column-card-title">Production Deliverables</h3>
                  <p className="column-card-subtitle">Tangible outcomes transferred to your organization upon project completion.</p>
                </div>
              </div>

              <div className="deliverables-list">
                {service.deliverables.map((item, idx) => (
                  <div key={idx} className="deliverable-item">
                    <CheckCircle2 size={18} className="deliverable-check-icon" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technology Stack & Tooling */}
            <div className="column-card glass-card">
              <div className="column-card-header">
                <div className="column-icon-box">
                  <Terminal size={20} />
                </div>
                <div>
                  <h3 className="column-card-title">Technology &amp; Tooling Ecosystem</h3>
                  <p className="column-card-subtitle">Battle-tested frameworks, libraries, and cloud platforms leveraged for this domain.</p>
                </div>
              </div>

              <div className="tech-ecosystem-grid">
                {service.tech.map((t, idx) => (
                  <div key={idx} className="tech-badge-item">
                    <span className="tech-badge-dot" />
                    <span className="tech-badge-name">{t}</span>
                  </div>
                ))}
              </div>

              <div className="tech-note-box">
                <Sparkles size={16} className="tech-note-icon" />
                <p className="tech-note-text">
                  Have a specific technology constraint or internal infrastructure requirement? We tailor our architecture stack to integrate seamlessly with your existing systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="service-faq-section">
          <div className="container">
            <div className="section-head">
              <div className="badge">
                <HelpCircle size={14} />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="section-title">Common Questions About This Service</h2>
              <p className="section-subtitle">
                Clear insights regarding scope, architectural handoff, code ownership, and timelines.
              </p>
            </div>

            <div className="service-faq-list">
              {service.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className={`service-faq-item glass-card ${isOpen ? 'open' : ''}`}
                  >
                    <button
                      type="button"
                      className="service-faq-question"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        size={18}
                        className={`faq-chevron ${isOpen ? 'rotated' : ''}`}
                      />
                    </button>
                    {isOpen && (
                      <div className="service-faq-answer">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Bottom Service CTA */}
      <section className="service-bottom-cta-section">
        <div className="container">
          <div className="service-bottom-cta-box glass-card">
            <div className="service-bottom-cta-content">
              <h2 className="service-bottom-cta-title">
                Ready to build or scale your {service.title.toLowerCase()}?
              </h2>
              <p className="service-bottom-cta-desc">
                Schedule a direct technical consultation with our engineering architects to discuss requirements, feasibility, and deployment schedules.
              </p>
            </div>
            <div className="service-bottom-cta-actions">
              <Link
                to={`/contact?service=${service.id}`}
                className="btn btn-primary service-cta-primary-btn"
              >
                <span>Initiate Engineering Discussion</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services Navigation */}
      <section className="service-other-section">
        <div className="container">
          <div className="other-services-head">
            <div>
              <h3 className="other-services-title">Explore Other Engineering Services</h3>
              <p className="other-services-desc">Discover our comprehensive software engineering and cloud capabilities.</p>
            </div>
            <Link to="/services" className="btn btn-secondary">
              <span>View All Services</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="other-services-grid">
            {otherServices.slice(0, 3).map((item) => {
              const OtherIcon = item.icon;
              return (
                <Link
                  key={item.id}
                  to={`/services/${item.id}`}
                  className="other-service-card glass-card"
                >
                  <div className="other-service-icon-box">
                    <OtherIcon size={20} />
                  </div>
                  <h4 className="other-service-card-title">{item.title}</h4>
                  <p className="other-service-card-desc">{item.shortDesc}</p>
                  <div className="other-service-card-footer">
                    <span>Learn More</span>
                    <ArrowRight size={14} className="other-service-arrow" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
