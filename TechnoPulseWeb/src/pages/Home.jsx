import { Link } from 'react-router-dom';
import HeroAnimation from '../components/HeroAnimation';
import { servicesData } from '../data/servicesData';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Terminal,
  Sparkles
} from 'lucide-react';
import './Home.css';

// Core tech stack items for the minimal, smooth marquee
const TECH_STACK = [
  'React 19',
  'TypeScript',
  'Next.js',
  'Node.js',
  'Python',
  'AWS Cloud',
  'Kubernetes',
  'Docker',
  'PostgreSQL',
  'Apache Kafka',
  'Redis',
  'GraphQL',
  'Terraform',
  'Tailwind CSS'
];

export default function Home() {
  const processSteps = [
    {
      step: '01',
      title: 'Technical Discovery',
      desc: 'We analyze your requirements, existing stack, and timeline to design a robust architecture before writing code.'
    },
    {
      step: '02',
      title: 'Sprint Development',
      desc: 'Focused bi-weekly sprints with continuous demo releases, clean Git commits, and transparent progress updates.'
    },
    {
      step: '03',
      title: 'Testing & QA',
      desc: 'Automated test suites and code reviews on every build to guarantee reliability, performance, and security.'
    },
    {
      step: '04',
      title: 'Deployment & Support',
      desc: 'Smooth cloud deployment followed by uptime monitoring, maintenance, and long-term scalability support.'
    }
  ];

  // Top 4 flagship services
  const coreServices = servicesData.slice(0, 4);

  return (
    <div className="home-page-root">
      {/* =========================================================================
          HERO SECTION - MINIMAL & ELEGANT
          ========================================================================= */}
      <section className="hero-section">
        {/* Subtle, calm ambient canvas wavefield */}
        <HeroAnimation />

        <div className="container hero-content-wrap">
          <div className="hero-text-container">
            {/* Minimal Status Badge */}
            <div className="hero-badge">
              <span className="pulse-dot"></span>
              <span>Enterprise Engineering &amp; Cloud Partner</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-main-title">
              Building <span className="hero-gradient-text">modern software</span>, cloud systems, and digital platforms.
            </h1>

            <p className="hero-description">
              Technoplus is a dedicated engineering partner for companies looking to design, build, and scale reliable web applications, distributed APIs, and cloud infrastructure.
            </p>

            {/* Clean CTA Actions */}
            <div className="hero-cta-group">
              <Link to="/services" className="btn btn-primary hero-btn-primary">
                <span>View Our Services</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn btn-secondary hero-btn-secondary">
                <span>Talk to Our Team</span>
                <ArrowUpRight size={15} />
              </Link>
            </div>

            {/* Minimal Trust Row */}
            <div className="hero-trust-row">
              <div className="hero-trust-item">
                <CheckCircle2 size={14} className="trust-icon" />
                <span>100% IP Transfer</span>
              </div>
              <div className="hero-trust-item">
                <CheckCircle2 size={14} className="trust-icon" />
                <span>Enterprise SLA &amp; NDAs</span>
              </div>
              <div className="hero-trust-item">
                <CheckCircle2 size={14} className="trust-icon" />
                <span>Transparent Bi-Weekly Sprints</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          KEY STATS ROW - MINIMALIST GLASS CARDS
          ========================================================================= */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-value">120+</div>
              <div className="stat-label">Delivered Projects</div>
              <div className="stat-sub">Across global clients</div>
            </div>
            <div className="stat-card">
              <div className="stat-value stat-value-accent">99.9%</div>
              <div className="stat-label">Uptime Reliability Track Record</div>
              <div className="stat-sub">High-availability systems</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">6+</div>
              <div className="stat-label">Years in Production Engineering</div>
              <div className="stat-sub">Enterprise-grade delivery</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">Rajkot</div>
              <div className="stat-label">HQ &amp; Engineering Center</div>
              <div className="stat-sub">Dedicated agile squads</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          MINIMAL TECH STACK RIBBON
          ========================================================================= */}
      <div className="marquee-section">
        <div className="marquee-outer-wrap">
          <div className="marquee-track">
            {[...TECH_STACK, ...TECH_STACK].map((tech, idx) => (
              <div key={idx} className="marquee-item">
                <span className="marquee-dot"></span>
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================================================
          CORE PRACTICES & SERVICES
          ========================================================================= */}
      <section className="section-padding">
        <div className="container">
          <div className="section-head-wrap">
            <div className="badge">
              <Sparkles size={13} />
              <span>Core Practices</span>
            </div>
            <h2 className="section-title">Specialized Engineering Services</h2>
            <p className="section-subtitle">
              Disciplined engineering practices focused on performance, modular design, and maintainable cloud systems.
            </p>
          </div>

          <div className="services-grid">
            {coreServices.map((svc) => {
              const IconComponent = svc.icon;
              return (
                <Link key={svc.id} to={`/services/${svc.id}`} className="service-card">
                  <div className="service-card-header">
                    <div className="service-icon-wrap">
                      <IconComponent size={20} />
                    </div>
                    <span className="service-badge">{svc.badge}</span>
                  </div>

                  <h3 className="service-title">{svc.title}</h3>
                  <p className="service-desc">{svc.shortDesc}</p>

                  <div className="service-tech-tags">
                    {svc.tech.slice(0, 4).map((t, tidx) => (
                      <span key={tidx} className="tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="service-link">
                    <span>Learn more</span>
                    <ArrowRight size={14} className="service-arrow" />
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="services-footer-cta">
            <Link to="/services" className="btn btn-secondary">
              <span>View All Services</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          HOW WE WORK - CLEAN DELIVERY TIMELINE
          ========================================================================= */}
      <section className="section-padding process-section">
        <div className="container">
          <div className="section-head-wrap">
            <div className="badge">
              <Terminal size={13} />
              <span>Agile Framework</span>
            </div>
            <h2 className="section-title">How We Work</h2>
            <p className="section-subtitle">
              A disciplined, transparent delivery framework designed to minimize risk and deliver predictable outcomes.
            </p>
          </div>

          <div className="process-grid">
            {processSteps.map((item, idx) => (
              <div key={idx} className="process-card">
                <div className="process-step-num">{item.step}</div>
                <h3 className="process-card-title">{item.title}</h3>
                <p className="process-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          MINIMAL CALL TO ACTION
          ========================================================================= */}
      <section className="home-cta-section">
        <div className="container">
          <div className="home-cta-box">
            <h2 className="home-cta-title">Have a project in mind?</h2>
            <p className="home-cta-desc">
              We are always happy to discuss platform requirements, review existing architectures, or prepare an engineering estimate.
            </p>
            <div className="home-cta-actions">
              <Link to="/contact" className="btn btn-primary home-cta-btn">
                <span>Get in touch with us</span>
                <ArrowRight size={15} />
              </Link>
              <Link to="/projects" className="btn btn-secondary home-cta-btn">
                <span>View Case Studies</span>
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
