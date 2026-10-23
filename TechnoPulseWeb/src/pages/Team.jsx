import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './Team.css';

export default function Team() {
  const team = [
    {
      name: 'Rajesh Varma',
      role: 'Founder',
      bio: 'Steers the technical vision, architectural standards, and engineering culture at Technoplus.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=360&auto=format&fit=crop&q=80'
    },
    {
      name: 'Arvind Singhania',
      role: 'CEO',
      bio: 'Leads global business strategy, enterprise client partnerships, and corporate growth.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=360&auto=format&fit=crop&q=80'
    },
    {
      name: 'Dr. Ananya Sen',
      role: 'COO',
      bio: 'Oversees operational workflows, project governance, and cross-functional team delivery.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=360&auto=format&fit=crop&q=80'
    },
    {
      name: 'Vikramaditya Rao',
      role: 'Project Manager',
      bio: 'Orchestrates agile sprint cycles, project roadmaps, and client milestone delivery.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=360&auto=format&fit=crop&q=80'
    },
    {
      name: 'Sneha Kapoor',
      role: 'Marketing Lead',
      bio: 'Drives market research, brand outreach, enterprise campaigns, and communications.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=360&auto=format&fit=crop&q=80'
    },
    {
      name: 'David Miller',
      role: 'Senior MERN Developer',
      bio: 'Specializes in high-scale React frontends, Node.js microservices, and MongoDB databases.',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=360&auto=format&fit=crop&q=80'
    },
    {
      name: 'Alisha Verma',
      role: 'Graphic & UI Designer',
      bio: 'Designs intuitive digital interfaces, brand identity systems, and product assets in Figma.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=360&auto=format&fit=crop&q=80'
    },
    {
      name: 'Karthik Nair',
      role: 'Python Developer',
      bio: 'Builds robust backend APIs, automated data pipelines, and intelligent cloud microservices.',
      image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=360&auto=format&fit=crop&q=80'
    },
    {
      name: 'Elena Rostova',
      role: 'Team Leader',
      bio: 'Guides engineering squads, leads code reviews, and ensures sprint delivery quality.',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=360&auto=format&fit=crop&q=80'
    },
    {
      name: 'Pooja Deshmukh',
      role: 'Recruiting Lead',
      bio: 'Sources and onboards senior engineering talent and creative professionals for Technoplus.',
      image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=360&auto=format&fit=crop&q=80'
    }
  ];

  return (
    <div className="team-page-wrap">
      <div className="container">
        {/* Big Header */}
        <div className="team-header">
          <h1 className="team-main-title">
            Meet our <span className="team-title-highlight">Technoplus team</span>
          </h1>
          <p className="team-description">
            The dedicated professionals driving software engineering, product innovation, and business operations at Technoplus Solutions.
          </p>
        </div>

        {/* Team Grid: CEO, Founder, Project Manager, COO, Marketing, Senior MERN, Graphic, Python Developer, Team Leader, Recruiting */}
        <div className="team-grid">
          {team.map((member, idx) => (
            <div key={idx} className="team-member-card">
              <div className="team-member-header">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-member-img"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <div className="team-member-details">
                  <h2 className="team-member-name">{member.name}</h2>
                  <div className="team-member-role">{member.role}</div>
                </div>
              </div>

              <p className="team-member-bio">{member.bio}</p>
            </div>
          ))}
        </div>

        {/* Minimal Bottom Banner */}
        <div className="team-footer-note">
          <div className="team-footer-text">
            <h3>Want to collaborate with our team?</h3>
            <p>We are always eager to discuss new platform challenges and technical opportunities.</p>
          </div>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '9px 20px', borderRadius: '6px' }}>
            <span>Connect with Us</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
