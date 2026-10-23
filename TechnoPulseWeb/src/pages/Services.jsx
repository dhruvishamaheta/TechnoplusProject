import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import './Services.css';

export default function Services() {
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
              <Link
                key={item.id}
                to={`/services/${item.id}`}
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
              </Link>
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
    </div>
  );
}
