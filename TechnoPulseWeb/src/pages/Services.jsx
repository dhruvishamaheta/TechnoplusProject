import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, CheckCircle2, Sparkles, X } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import './Services.css';

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedService(null);
      }
    };

    if (selectedService) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedService]);

  return (
    <div className="services-page-wrap">
      <div className="container">
        {/* Header */}
        <div className="services-header">
          <div className="badge">
            <Sparkles size={14} />
            <span>Engineering Capabilities</span>
          </div>
          <h1 className="services-main-title">Our Services</h1>
          <p className="services-description">
            Comprehensive software engineering, cloud infrastructure, and technical advisory built for enterprise scalability and reliability.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {servicesData.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedService(item)}
                className="service-card glass-card"
                aria-label={`View details for ${item.title}`}
              >
                <div className="service-card-top">
                  <div className="service-card-badge-row">
                    <div className="service-icon-box">
                      <Icon size={20} />
                    </div>
                    {item.badge && (
                      <span className="service-mini-badge">{item.badge}</span>
                    )}
                  </div>

                  <h2 className="service-card-title">{item.title}</h2>
                  <p className="service-card-desc">{item.shortDesc}</p>
                </div>

                <div className="service-card-bottom">
                  <div className="service-tags-row">
                    {item.tech.slice(0, 4).map((t, tIdx) => (
                      <span key={tIdx} className="service-tag">
                        {t}
                      </span>
                    ))}
                    {item.tech.length > 4 && (
                      <span className="service-tag service-tag-more">
                        +{item.tech.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="service-explore-cta">
                    <span>View Service Details</span>
                    <ArrowRight size={15} className="service-explore-arrow" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="services-bottom-cta glass-card">
          <div>
            <h3 className="services-bottom-title">Need a tailored technical solution?</h3>
            <p className="services-bottom-desc">
              Let’s discuss your technical specifications, architecture blueprints, and delivery timelines.
            </p>
          </div>
          <Link to="/contact" className="btn btn-primary services-cta-btn">
            <span>Contact Us</span>
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>

      {selectedService && (
        <div
          className="service-modal-backdrop"
          onClick={() => setSelectedService(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
        >
          <div
            className="service-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="service-modal-header">
              <div>
                <span className="service-modal-badge">{selectedService.badge}</span>
                <h2 id="service-modal-title">{selectedService.title}</h2>
              </div>
              <button
                type="button"
                className="service-modal-close"
                onClick={() => setSelectedService(null)}
                aria-label="Close service details"
              >
                <X size={20} />
              </button>
            </div>

            <div className="service-modal-body">
              <p className="service-modal-tagline">{selectedService.tagline}</p>
              <p className="service-modal-description">{selectedService.fullDesc}</p>

              <div className="service-modal-stats">
                {selectedService.stats.map((stat) => (
                  <div key={stat.label} className="service-modal-stat">
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>

              <h3>Key capabilities</h3>
              <div className="service-modal-capabilities">
                {selectedService.capabilities.slice(0, 4).map((capability) => (
                  <div key={capability.title} className="service-modal-capability">
                    <CheckCircle2 size={17} />
                    <div>
                      <strong>{capability.title}</strong>
                      <p>{capability.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="service-modal-tech">
                {selectedService.tech.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>

            <div className="service-modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setSelectedService(null)}
              >
                Close
              </button>
              <Link to={`/services/${selectedService.id}`} className="btn btn-primary">
                View Full Service Page
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
