import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import './LiveScrollProgress.css';

export default function LiveScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        const progress = Math.min(Math.round((totalScroll / windowHeight) * 100), 100);
        setScrollProgress(progress);
        setIsVisible(totalScroll > 260);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const circumference = 2 * Math.PI * 18;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div className={`live-scroll-progress-wrap ${isVisible ? 'visible' : ''}`}>
      <button
        onClick={scrollToTop}
        className="live-scroll-btn"
        aria-label="Scroll to top"
        title={`Scroll to top (${scrollProgress}%)`}
      >
        <svg className="progress-ring" width="46" height="46">
          <circle
            className="progress-ring-bg"
            stroke="rgba(255, 255, 255, 0.08)"
            strokeWidth="3"
            fill="transparent"
            r="18"
            cx="23"
            cy="23"
          />
          <circle
            className="progress-ring-circle"
            stroke="url(#progressGradient)"
            strokeWidth="3"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
            r="18"
            cx="23"
            cy="23"
          />
          <defs>
            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="50%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#4f46e5" />
            </linearGradient>
          </defs>
        </svg>
        <span className="scroll-arrow-icon">
          <ArrowUp size={16} />
        </span>
      </button>
    </div>
  );
}

