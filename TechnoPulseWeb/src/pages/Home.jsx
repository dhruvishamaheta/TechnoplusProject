import { useEffect } from 'react';
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

const TECH_STACK = [
  'React',
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

const DELIVERY_STATS = [
  { value: '120+', label: 'Projects delivered', sub: 'Across product and platform teams' },
  { value: '99.9%', label: 'Reliability focus', sub: 'Designed for production workloads', accent: true },
  { value: '6+', label: 'Years of experience', sub: 'Building and operating software' },
  { value: '24/7', label: 'Operational mindset', sub: 'Monitoring, support, and iteration' }
];

const DELIVERY_HIGHLIGHTS = [
  {
    image: '/images/finpulse.jpg',
    alt: 'Real-time financial technology dashboard',
    label: 'Real-time platforms',
    detail: 'Fast, observable systems for mission-critical workflows.'
  },
  {
    image: '/images/omnidoc.jpg',
    alt: 'Artificial intelligence data analytics',
    label: 'Intelligent automation',
    detail: 'Practical AI that turns business data into action.'
  },
  {
    image: '/images/cybershield.jpg',
    alt: 'Cybersecurity operations and monitoring',
    label: 'Secure by design',
    detail: 'Security and compliance considered from the first sprint.'
  }
];

export default function Home() {
  const processSteps = [
    {
      step: '01',
      title: 'Technical Discovery',
      desc: 'We align on your goals, users, constraints, and success metrics before shaping the technical plan.'
    },
    {
      step: '02',
      title: 'Sprint Development',
      desc: 'Small, focused sprints turn the plan into working software with regular demos and visible progress.'
    },
    {
      step: '03',
      title: 'Testing & QA',
      desc: 'Automated tests, code reviews, and security checks protect quality as the product grows.'
    },
    {
      step: '04',
      title: 'Deployment & Support',
      desc: 'We release confidently, monitor what matters, and stay involved as your platform scales.'
    }
  ];

  // Top 4 flagship services
  const coreServices = servicesData.slice(0, 4);

  useEffect(() => {
    const homeRoot = document.querySelector('.home-page-root');
    if (!homeRoot) return undefined;

    homeRoot.classList.add('home-motion-ready');
    const revealItems = homeRoot.querySelectorAll('.home-reveal');
    if (!('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('is-visible'));
      return () => homeRoot.classList.remove('home-motion-ready');
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.12 }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
      homeRoot.classList.remove('home-motion-ready');
    };
  }, []);

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
              <span>Product engineering for ambitious teams</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-main-title">
              Build software your business can depend on.
            </h1>

            <p className="hero-description">
              Technoplus helps growing companies turn complex ideas into reliable web products, intelligent workflows, and cloud platforms that are ready for what comes next.
            </p>

            {/* Clean CTA Actions */}
            <div className="hero-cta-group">
              <Link to="/services" className="btn btn-primary hero-btn-primary">
                <span>Explore our services</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn btn-secondary hero-btn-secondary">
                <span>Start a conversation</span>
                <ArrowUpRight size={15} />
              </Link>
            </div>

            {/* Minimal Trust Row */}
            <div className="hero-trust-row">
              <div className="hero-trust-item">
                <CheckCircle2 size={14} className="trust-icon" />
                <span>Full IP ownership</span>
              </div>
              <div className="hero-trust-item">
                <CheckCircle2 size={14} className="trust-icon" />
                <span>Secure collaboration</span>
              </div>
              <div className="hero-trust-item">
                <CheckCircle2 size={14} className="trust-icon" />
                <span>Clear sprint delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          KEY STATS ROW - MINIMALIST GLASS CARDS
          ========================================================================= */}
      <section className="stats-section home-reveal">
        <div className="container">
          <div className="stats-grid">
            {DELIVERY_STATS.map((stat) => (
              <div key={stat.label} className="stat-card">
                <div className={`stat-value${stat.accent ? ' stat-value-accent' : ''}`}>{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-sub">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          MINIMAL TECH STACK RIBBON
          ========================================================================= */}
      <div className="marquee-section home-reveal">
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
          VISUAL DELIVERY HIGHLIGHTS
          ========================================================================= */}
      <section className="home-visual-section home-reveal">
        <div className="container">
          <div className="home-visual-grid">
            {DELIVERY_HIGHLIGHTS.map((highlight) => (
              <figure key={highlight.label} className="home-visual-card">
                <img src={highlight.image} alt={highlight.alt} loading="lazy" />
                <figcaption>
                  <strong>{highlight.label}</strong>
                  <span>{highlight.detail}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          CORE PRACTICES & SERVICES
          ========================================================================= */}
      <section className="section-padding home-reveal">
        <div className="container">
          <div className="section-head-wrap">
            <div className="badge">
              <Sparkles size={13} />
              <span>What we build</span>
            </div>
            <h2 className="section-title">Technology that moves your business forward</h2>
            <p className="section-subtitle">
              From a focused product build to a platform-wide modernization, our teams bring product thinking and engineering discipline to every engagement.
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
      <section className="section-padding process-section home-reveal">
        <div className="container">
          <div className="section-head-wrap">
            <div className="badge">
              <Terminal size={13} />
              <span>Our approach</span>
            </div>
            <h2 className="section-title">A clear path from idea to impact</h2>
            <p className="section-subtitle">
              You get senior technical thinking, frequent feedback, and a delivery process designed to keep momentum without losing quality.
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
      <section className="home-cta-section home-reveal">
        <div className="container">
          <div className="home-cta-box">
            <h2 className="home-cta-title">Ready to build what is next?</h2>
            <p className="home-cta-desc">
              Tell us what you are solving. We will help you clarify the opportunity, identify the right next step, and build a practical plan.
            </p>
            <div className="home-cta-actions">
              <Link to="/contact" className="btn btn-primary home-cta-btn">
                <span>Discuss your project</span>
                <ArrowRight size={15} />
              </Link>
              <Link to="/projects" className="btn btn-secondary home-cta-btn">
                <span>See our work</span>
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
