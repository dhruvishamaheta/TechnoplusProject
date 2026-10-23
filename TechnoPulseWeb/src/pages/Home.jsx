import { Link } from 'react-router-dom';
import HeroAnimation from '../components/HeroAnimation';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import './Home.css';

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

  return (
    <div>
      {/* =========================================================================
          HERO SECTION WITH AMBIENT CANVAS ANIMATION
          ========================================================================= */}
      <section className="hero-section">
        {/* Subtle Ambient Particle Mesh */}
        <HeroAnimation />

        <div className="container hero-content-wrap">
          <div className="hero-text-container">
            <div className="hero-badge">
              <span></span>
            </div>

            <h1 className="hero-main-title">
              Building modern software, cloud systems, and digital platforms.
            </h1>

            <p className="hero-description">
              Technoplus is a dedicated engineering partner for companies looking to design, build, and scale reliable web applications and cloud infrastructure.
            </p>

            <div className="hero-cta-group">
              <Link to="/services" className="btn btn-primary hero-btn-primary">
                <span>View Our Services</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn btn-secondary hero-btn-secondary">
                <span>Talk to Our Team</span>
              </Link>
            </div>

            
          </div>
        </div>
      </section>

      {/* =========================================================================
          KEY STATS BAR
          ========================================================================= */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div>
              <div className="stat-value">120+</div>
              <div className="stat-label">Delivered Projects</div>
            </div>
            <div>
              <div className="stat-value">99.9%</div>
              <div className="stat-label">Uptime Reliability Track Record</div>
            </div>
            <div>
              <div className="stat-value">6+</div>
              <div className="stat-label">Years in Production Engineering</div>
            </div>
            <div>
              <div className="stat-value">Rajkot</div>
              <div className="stat-label">HQ &amp; Engineering Center</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          HOW WE WORK
          ========================================================================= */}
      <section className="section-padding">
        <div className="container">
          <div className="process-header">
            <h2 className="process-title">How We Work</h2>
            <p className="process-subtitle">
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
              We are always happy to discuss platform requirements, review existing architectures, or prepare an estimate.
            </p>
            <Link to="/contact" className="btn btn-primary home-cta-btn">
              <span>Get in touch with us</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
