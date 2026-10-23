import { Link } from 'react-router-dom';
import {
  Code2,
  Cloud,
  Cpu,
  Shield,
  Palette,
  Briefcase,
  ArrowRight
} from 'lucide-react';
import './Services.css';

export default function Services() {
  const services = [
    {
      title: 'Web & Enterprise Applications',
      desc: 'Custom web platforms, SaaS products, and internal dashboards built with React, Node.js, and TypeScript.',
      icon: Code2,
      tech: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL']
    },
    {
      title: 'Cloud Architecture & DevOps',
      desc: 'Automated CI/CD pipelines, Docker containerization, and Kubernetes cluster management on AWS & Azure.',
      icon: Cloud,
      tech: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'CI/CD']
    },
    {
      title: 'AI & Data Integration',
      desc: 'Machine learning workflows, document extraction, semantic search, and internal business automation.',
      icon: Cpu,
      tech: ['Python', 'FastAPI', 'Vector Search', 'Automation']
    },
    {
      title: 'Security Auditing & Code Reviews',
      desc: 'System vulnerability reviews, access control hardening, and compliance readiness assessments.',
      icon: Shield,
      tech: ['ISO 27001 Prep', 'Code Audits', 'Zero-Trust']
    },
    {
      title: 'UI/UX & Product Design',
      desc: 'Intuitive user interface design, accessible component libraries, and interactive prototypes in Figma.',
      icon: Palette,
      tech: ['Figma', 'Design Systems', 'Prototyping', 'UX Audits']
    },
    {
      title: 'Technical Advisory & Consulting',
      desc: 'Architecture planning, legacy code modernization, and engineering best-practice guidance.',
      icon: Briefcase,
      tech: ['Architecture Roadmaps', 'Microservices', 'Refactoring']
    }
  ];

  return (
    <div className="services-page-wrap">
      <div className="container">
        {/* Header */}
        <div className="services-header">
          <h1 className="services-main-title">Services</h1>
          <p className="services-description">
            Comprehensive software engineering, cloud infrastructure, and technical design .
          </p>
        </div>

        {/* Services Grid - Concise & Minimal */}
        <div className="services-grid">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="service-card">
                <div>
                  <div className="service-icon-box">
                    <Icon size={20} />
                  </div>

                  <h2 className="service-card-title">{item.title}</h2>
                  <p className="service-card-desc">{item.desc}</p>
                </div>

                <div className="service-tags-row">
                  {item.tech.map((t, tIdx) => (
                    <span key={tIdx} className="service-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Minimal Bottom CTA */}
        <div className="services-bottom-cta">
          <div>
            <h3 className="services-bottom-title">Need a tailored solution?</h3>
            <p className="services-bottom-desc">
              Let’s discuss your technical specifications and timelines.
            </p>
          </div>
          <Link to="/contact" className="btn btn-primary services-cta-btn">
            <span>Contact Us</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
