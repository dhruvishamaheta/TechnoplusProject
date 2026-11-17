import { Link } from 'react-router-dom';
import { 
  Building2, 
  Target, 
  Compass, 
  MapPin, 
  Mail, 
  Phone, 
  ArrowRight,
  Award,
  Calendar,
  Sparkles
} from 'lucide-react';
import './CompanyDetails.css';

export default function CompanyDetails() {
  const corporateFacts = [
    { label: 'Legal Entity Name', value: 'Technoplus Solutions Private Limited', icon: Building2 },
    { label: 'Incorporation & Origin', value: 'Founded in 2019 (Rajkot, Gujarat, India)', icon: Calendar },
    { label: 'Industry & Domain', value: 'Enterprise Software, Cloud Systems & AI Architecture', icon: Sparkles },
    { label: 'Operational Headquarters', value: '702-704, Silicon Valley Tech Park, KKV Hall, 150 ft Ring Road, Rajkot, Gujarat, India - 360002', icon: MapPin },
    { label: 'Direct Official Inquiries', value: 'dhruvishamaheta284@gmail.com', icon: Mail },
    { label: 'Official Helpline', value: '+91 91735 89925', icon: Phone }
  ];

  const metrics = [
    { number: '120+', label: 'Delivered Deployments', sub: 'Production systems shipped' },
    { number: '99.9%', label: 'Uptime Reliability', sub: 'Historical SLA standard' },
    { number: '6+ Years', label: 'Continuous Operations', sub: 'Established in 2019' },
    { number: '100%', label: 'Client IP Transfer', sub: 'Full legal ownership' }
  ];

  const journey = [
    {
      year: '2019',
      title: 'Inception & Rajkot HQ',
      desc: 'Technoplus Solutions Private Limited was incorporated in Rajkot, Gujarat by enterprise architects to engineer robust custom web applications and database systems.'
    },
    {
      year: '2021',
      title: 'Cloud Infrastructure & DevOps Practice',
      desc: 'Launched dedicated practices for multi-region Kubernetes clusters, Docker containerization, and automated AWS and GCP cloud migrations.'
    },
    {
      year: '2023',
      title: 'Applied AI & Automation Division',
      desc: 'Established applied engineering capabilities for machine learning workflows, semantic search, vector embeddings, and internal business automation.'
    },
    {
      year: '2024',
      title: 'Global Delivery Expansion',
      desc: 'Scaled operations to provide dedicated engineering squads for enterprise clients across North America, Europe, and Asia-Pacific.'
    },
    {
      year: '2026',
      title: 'Production Scale & Future Systems',
      desc: 'Supporting 120+ active production software platforms with 99.9% uptime track records, modern React 19 / TypeScript stacks, and continuous SLA support.'
    }
  ];

  return (
    <div className="company-page-wrap">
      {/* Hero Header */}
      <section className="company-hero-section">
        <div className="container">
          <div className="company-hero-content">
            <span className="badge">
              <Building2 size={14} />
              Corporate Overview &amp; Profile
            </span>
            <h1 className="company-main-title">
              Technoplus Solutions Private Limited
            </h1>
            <p className="company-description">
              Registered corporate details, operational standards, mission, and growth milestones 
              of our software engineering collective headquartered in Rajkot, Gujarat.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline / Journey */}
      <section className="company-journey-section section-padding">
        <div className="container">
          <div className="section-header-left">
            <span className="badge">
              <Calendar size={14} />
              Evolution Timeline
            </span>
            <h2 className="journey-section-title">Our Growth Journey</h2>
            <p className="section-desc">
              From our inception in Rajkot to delivering software systems across three continents.
            </p>
          </div>

          <div className="journey-list">
            {journey.map((item, idx) => (
              <div key={idx} className="journey-item-card glass-card">
                <div className="journey-year-col">
                  <span className="journey-year">{item.year}</span>
                  <div className="journey-node-dot" />
                </div>
                <div className="journey-content-col">
                  <h3 className="journey-item-title">{item.title}</h3>
                  <p className="journey-item-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision-section section-padding">
        <div className="container">
          <div className="mission-vision-grid">
            {/* Mission */}
            <div className="mission-card glass-card">
              <div className="card-header-row">
                <div className="mission-icon-box">
                  <Target size={22} />
                </div>
                <h2 className="card-section-title">Our Mission</h2>
              </div>
              <p className="card-body-text">
                To engineer dependable, high-performance web systems and cloud infrastructure that help businesses operate with agility, security, and sustained reliability.
              </p>
            </div>

            {/* Vision */}
            <div className="vision-card glass-card">
              <div className="card-header-row">
                <div className="vision-icon-box">
                  <Compass size={22} />
                </div>
                <h2 className="card-section-title">Our Vision</h2>
              </div>
              <p className="card-body-text">
                To be a trusted global technology partner recognized for engineering craftsmanship, transparent client collaboration, and clean, resilient codebases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Official Corporate Facts Card */}
      <section className="company-facts-section section-padding">
        <div className="container">
          <div className="section-header-left">
            <span className="badge">
              <Award size={14} />
              Enterprise Profile
            </span>
            <h2 className="section-title">Official Corporate Credentials</h2>
            <p className="section-desc">
              Key operational parameters, legal entity details, and registered headquarters information.
            </p>
          </div>

          <div className="facts-card glass-card">
            <div className="facts-grid">
              {corporateFacts.map((fact, idx) => {
                const Icon = fact.icon;
                return (
                  <div key={idx} className="fact-item">
                    <div className="fact-icon-box">
                      <Icon size={18} />
                    </div>
                    <div className="fact-text-group">
                      <span className="fact-label">{fact.label}</span>
                      <span className="fact-value">{fact.value}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Grid */}
      <section className="company-metrics-section">
        <div className="container">
          <div className="company-metrics-grid">
            {metrics.map((m, idx) => (
              <div key={idx} className="company-metric-card glass-card">
                <div className="metric-number">{m.number}</div>
                <div className="metric-label">{m.label}</div>
                <div className="metric-sub">{m.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="company-cta-section section-padding">
        <div className="container">
          <div className="company-cta-card glass-card">
            <h2 className="cta-heading">Partner With Our Rajkot Engineering Squad</h2>
            <p className="cta-subtext">
              Have an enterprise project or RFP? Connect directly with our technical leadership.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">
                <span>Contact Engineering</span>
                <ArrowRight size={15} />
              </Link>
              <Link to="/services" className="btn btn-secondary">
                <span>Explore Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
