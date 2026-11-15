import { useEffect, useRef } from 'react';
import './HeroAnimation.css';

export default function HeroAnimation() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000, targetRadius: 180 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    // Layered waves create a calm, responsive signal-field effect.
    const waves = [
      {
        baseY: 0.65,
        amplitude: 28,
        wavelength: 0.005,
        speed: 0.007,
        color: 'rgba(37, 99, 235, 0.28)',
        fillColor: 'rgba(37, 99, 235, 0.035)',
        lineWidth: 1.6
      },
      {
        baseY: 0.72,
        amplitude: 34,
        wavelength: 0.004,
        speed: 0.005,
        color: 'rgba(79, 70, 229, 0.22)',
        fillColor: 'rgba(79, 70, 229, 0.025)',
        lineWidth: 1.5
      },
      {
        baseY: 0.80,
        amplitude: 24,
        wavelength: 0.006,
        speed: 0.009,
        color: 'rgba(2, 132, 199, 0.2)',
        fillColor: 'rgba(2, 132, 199, 0.02)',
        lineWidth: 1.2
      }
    ];

    // Subtle beacons on wave peaks
    const beacons = [
      { waveIndex: 0, xRatio: 0.25, pulse: 0, color: '#2563eb' },
      { waveIndex: 1, xRatio: 0.62, pulse: 2, color: '#4f46e5' },
      { waveIndex: 0, xRatio: 0.85, pulse: 4, color: '#0284c7' }
    ];

    let time = 0;

    const animate = () => {
      time += 1;
      ctx.clearRect(0, 0, width, height);

      waves.forEach((wave, wIdx) => {
        const waveBaseY = height * wave.baseY;
        ctx.beginPath();
        ctx.moveTo(0, height);
        ctx.lineTo(0, waveBaseY);

        const step = 8;
        const wavePoints = [];

        for (let x = 0; x <= width + step; x += step) {
          let y = Math.sin(x * wave.wavelength + time * wave.speed + wIdx) * wave.amplitude;
          y += Math.sin(x * (wave.wavelength * 1.6) - time * (wave.speed * 0.6)) * (wave.amplitude * 0.25);

          // Gentle mouse displacement
          const dx = x - mouseRef.current.x;
          const dy = (waveBaseY + y) - mouseRef.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouseRef.current.targetRadius) {
            const force = 1 - dist / mouseRef.current.targetRadius;
            y -= force * 20 * Math.sin(time * 0.04);
          }

          const currentY = waveBaseY + y;
          wavePoints.push({ x, y: currentY });
          ctx.lineTo(x, currentY);
        }

        ctx.lineTo(width, height);
        ctx.closePath();

        // Subtle gradient fill
        ctx.fillStyle = wave.fillColor;
        ctx.fill();

        // Minimal stroke line
        ctx.beginPath();
        if (wavePoints.length > 0) {
          ctx.moveTo(wavePoints[0].x, wavePoints[0].y);
          for (let i = 1; i < wavePoints.length; i++) {
            ctx.lineTo(wavePoints[i].x, wavePoints[i].y);
          }
        }
        ctx.strokeStyle = wave.color;
        ctx.lineWidth = wave.lineWidth;
        ctx.shadowBlur = 6;
        ctx.shadowColor = wave.color;
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Subtle glowing beacons
        beacons.filter(b => b.waveIndex === wIdx).forEach(b => {
          const beaconX = width * b.xRatio;
          const targetPoint = wavePoints.find(p => Math.abs(p.x - beaconX) < step) || { x: beaconX, y: waveBaseY };
          const pulseSize = Math.sin(time * 0.04 + b.pulse) * 1.2 + 3.5;

          ctx.beginPath();
          ctx.arc(targetPoint.x, targetPoint.y, pulseSize, 0, Math.PI * 2);
          ctx.fillStyle = b.color;
          ctx.shadowBlur = 10;
          ctx.shadowColor = b.color;
          ctx.fill();
          ctx.shadowBlur = 0;
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener('mousemove', handleMouseMove, { passive: true });
      parent.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      if (parent) {
        parent.removeEventListener('mousemove', handleMouseMove);
        parent.removeEventListener('mouseleave', handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="hero-animation-wrapper">
      <canvas ref={canvasRef} className="hero-canvas" />
      <div className="hero-orbit-field" aria-hidden="true">
        <span className="hero-orbit hero-orbit-one" />
        <span className="hero-orbit hero-orbit-two" />
        <span className="hero-orbit hero-orbit-three" />
        <span className="hero-live-particle particle-one" />
        <span className="hero-live-particle particle-two" />
        <span className="hero-live-particle particle-three" />
        <span className="hero-live-particle particle-four" />
      </div>
      <div className="hero-radial-overlay" />
    </div>
  );
}
