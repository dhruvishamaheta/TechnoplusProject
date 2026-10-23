import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Zap, 
  Users, 
  Code2, 
  Award, 
  Globe2, 
  CheckCircle, 
  ArrowRight,
  TrendingUp,
  Cpu
} from 'lucide-react';
import './AboutUs.css';

export default function AboutUs() {
  const stats = [
    { number: '120+', label: 'Delivered Systems', detail: 'Shipped to production across global industries' },
    { number: '99.9%', label: 'Uptime Reliability', detail: 'Engineered for zero unexpected downtime' },
    { number: '40+', label: 'Senior Engineers', detail: 'Cloud architects, developers, and QA leads' },
    { number: '8+', label: 'Global Markets', detail: 'Serving clients in NA, Europe, and Asia-Pacific' }
  ];

  const pillars = [
    {
      icon: Code2,
      title: 'Architectural Rigor',
      desc: 'We don\'t just write code; we design resilient systems with clean separation of concerns, strict type safety, and comprehensive testing suites.'
    },
    {
      icon: Zap,
      title: 'Accelerated Delivery',
      desc: 'Using battle-tested modular frameworks and continuous deployment pipelines, we turn complex project scopes into usable software in bi-weekly sprints.'
    },
    {
      icon: ShieldCheck,
      title: 'Enterprise Security',
      desc: 'Security isn\'t an afterthought. Every layer from identity management to database encryption follows strict industry best practices.'
    },
    {
      icon: Users,
      title: 'Dedicated Partnership',
      desc: 'You collaborate directly with the engineers building your software. No layers of non-technical middlemen, ensuring transparent feedback loops.'
    }
  ];

  const technologies = [
    'React 19', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB',
    'PostgreSQL', 'Kubernetes', 'Docker', 'AWS Cloud', 'GraphQL',
    'Redis', 'Python & AI'
  ];

  return (
    <div className="about-page-wrap">
      {/* Hero Section */}
      <section className="about-hero-section">
        <div className="container">
          <div className="about-hero-content">
            <span className="badge">
              <Award size={14} />
              About Technoplus Solutions
            </span>
            <h1 className="about-hero-title">
              Engineering High-Performance Digital Systems for the Modern Enterprise
            </h1>
            <p className="about-hero-desc">
              Founded by passionate enterprise architects, Technoplus Solutions Private Limited transforms 
              ambitious ideas into mission-critical web applications, cloud infrastructure, and intelligent automation platforms.
            </p>

            <div className="about-hero-actions">
              <Link to="/contact" className="btn btn-primary">
                <span>Start a Project</span>
                <ArrowRight size={15} />
              </Link>
              <Link to="/services" className="btn btn-secondary">
                <span>Explore Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-stats-section">
        <div className="container">
          <div className="about-stats-grid">
            {stats.map((item, idx) => (
              <div key={idx} className="about-stat-card glass-card">
                <div className="stat-number">{item.number}</div>
                <div className="stat-label">{item.label}</div>
                <p className="stat-detail">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="about-story-section section-padding">
        <div className="container">
          <div className="about-story-grid">
            <div className="about-story-text">
              <span className="badge">
                <TrendingUp size={14} />
                Our Story &amp; Philosophy
              </span>
              <h2 className="section-title">Built on Precision, Driven by Impact</h2>
              <p className="story-paragraph">
                Headquartered in Rajkot, Gujarat, Technoplus Solutions was born from a fundamental 
                observation: enterprises often face a choice between slow legacy IT consultancies and high-churn 
                outsourcing agencies.
              </p>
              <p className="story-paragraph">
                We pioneered a third path: a high-caliber engineering collective that acts as an extension 
                of your internal product team. We pair deep domain expertise in cloud systems and modern frontend architectures 
                with agile, transparent delivery standards.
              </p>

              <div className="story-checkmarks">
                <div className="check-item">
                  <CheckCircle size={18} className="check-icon" />
                  <span>100% intellectual property ownership transferred to clients</span>
                </div>
                <div className="check-item">
                  <CheckCircle size={18} className="check-icon" />
                  <span>Bi-weekly live demonstrations and production deployments</span>
                </div>
                <div className="check-item">
                  <CheckCircle size={18} className="check-icon" />
                  <span>Senior engineer engagement on every single project</span>
                </div>
              </div>
            </div>

            <div className="about-story-visual glass-card">
              <div className="visual-header">
                <Cpu size={24} className="visual-icon" />
                <h3>Our Core Tech Matrix</h3>
              </div>
              <p className="visual-desc">
                We select technologies that balance state-of-the-art velocity with long-term enterprise maintainability.
              </p>
              <div className="tech-badge-cloud">
                {technologies.map((tech) => (
                  <span key={tech} className="tech-pill">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="about-pillars-section section-padding">
        <div className="container">
          <div className="section-header-center">
            <span className="badge">
              <ShieldCheck size={14} />
              Our Principles
            </span>
            <h2 className="section-title">Engineering Standards We Live By</h2>
            <p className="section-desc">
              Every system we design, write, and deploy adheres to non-negotiable principles of quality and reliability.
            </p>
          </div>

          <div className="pillars-grid">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div key={idx} className="pillar-card glass-card">
                  <div className="pillar-icon-box">
                    <Icon size={22} />
                  </div>
                  <h3 className="pillar-title">{pillar.title}</h3>
                  <p className="pillar-desc">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Global CTA */}
      <section className="about-cta-section section-padding">
        <div className="container">
          <div className="about-cta-card glass-card">
            <div className="about-cta-content">
              <Globe2 size={36} className="cta-icon" />
              <h2 className="cta-title">Ready to Elevate Your Engineering Capabilities?</h2>
              <p className="cta-desc">
                Whether you need to build a new flagship web platform or scale existing cloud architecture, our engineers are ready.
              </p>
              <div className="cta-button-row">
                <Link to="/contact" className="btn btn-primary">
                  <span>Get in Touch</span>
                  <ArrowRight size={15} />
                </Link>
                <Link to="/team" className="btn btn-secondary">
                  <span>Meet the Team</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
