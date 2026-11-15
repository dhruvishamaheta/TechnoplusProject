import './LiveBackground.css';

export default function LiveBackground() {
  return (
    <div className="live-bg-container" aria-hidden="true">
      {/* Calm, minimal ambient glow orbs with gentle breathing */}
      <div className="minimal-ambient-glow glow-top" />
      <div className="minimal-ambient-glow glow-bottom" />
      {/* Subtle faint grid overlay */}
      <div className="minimal-digital-grid" />
    </div>
  );
}
