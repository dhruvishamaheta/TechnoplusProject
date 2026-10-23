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

    // Multi-layered wave configurations
    const waves = [
      {
        baseY: 0.62,
        amplitude: 38,
        wavelength: 0.0070,
        speed: 0.012,
        color: 'rgba(0, 245, 212, 0.35)',
        fillColor: 'rgba(0, 245, 212, 0.03)',
        lineWidth: 2
      },
      {
        baseY: 0.68,
        amplitude: 45,
        wavelength: 0.0055,
        speed: 0.009,
        color: 'rgba(59, 130, 246, 0.35)',
        fillColor: 'rgba(59, 130, 246, 0.025)',
        lineWidth: 2
      },
      {
        baseY: 0.74,
        amplitude: 52,
        wavelength: 0.0045,
        speed: 0.014,
        color: 'rgba(0, 245, 212, 0.22)',
        fillColor: 'rgba(0, 245, 212, 0.02)',
        lineWidth: 1.5
      },
      {
        baseY: 0.82,
        amplitude: 34,
        wavelength: 0.008,
        speed: 0.016,
        color: 'rgba(139, 92, 246, 0.25)',
        fillColor: 'rgba(139, 92, 246, 0.02)',
        lineWidth: 1.5
      }
    ];

    // Floating glowing node beacons on the waves
    const beacons = [
      { waveIndex: 0, xRatio: 0.2, pulse: 0 },
      { waveIndex: 1, xRatio: 0.45, pulse: 1.5 },
      { waveIndex: 0, xRatio: 0.7, pulse: 3 },
      { waveIndex: 2, xRatio: 0.85, pulse: 4.5 }
    ];

    let time = 0;

    const animate = () => {
      time += 1;
      ctx.clearRect(0, 0, width, height);

      // Render each wave layer
      waves.forEach((wave, wIdx) => {
        const waveBaseY = height * wave.baseY;
        ctx.beginPath();
        ctx.moveTo(0, height);
        ctx.lineTo(0, waveBaseY);

        const step = 8;
        const wavePoints = [];

        for (let x = 0; x <= width + step; x += step) {
          // Primary sine wave
          let y = Math.sin(x * wave.wavelength + time * wave.speed + wIdx) * wave.amplitude;
          // Secondary harmonic for natural fluidity
          y += Math.sin(x * (wave.wavelength * 1.8) - time * (wave.speed * 0.7)) * (wave.amplitude * 0.35);

          // Interactive mouse wave displacement
          const dx = x - mouseRef.current.x;
          const dy = (waveBaseY + y) - mouseRef.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouseRef.current.targetRadius) {
            const force = (1 - dist / mouseRef.current.targetRadius);
            // Dynamic fluid lift near cursor
            y -= force * 35 * Math.sin(time * 0.08);
          }

          const currentY = waveBaseY + y;
          wavePoints.push({ x, y: currentY });
          ctx.lineTo(x, currentY);
        }

        ctx.lineTo(width, height);
        ctx.closePath();

        // Wave Fill
        ctx.fillStyle = wave.fillColor;
        ctx.fill();

        // Wave Outline Stroke with glowing gradient
        ctx.beginPath();
        if (wavePoints.length > 0) {
          ctx.moveTo(wavePoints[0].x, wavePoints[0].y);
          for (let i = 1; i < wavePoints.length; i++) {
            ctx.lineTo(wavePoints[i].x, wavePoints[i].y);
          }
        }
        ctx.strokeStyle = wave.color;
        ctx.lineWidth = wave.lineWidth;
        ctx.stroke();

        // Draw glowing beacons riding on this wave
        beacons.filter(b => b.waveIndex === wIdx).forEach(b => {
          const beaconX = width * b.xRatio;
          const targetPoint = wavePoints.find(p => Math.abs(p.x - beaconX) < step) || { x: beaconX, y: waveBaseY };
          const pulseSize = Math.sin(time * 0.05 + b.pulse) * 1.5 + 4;

          // Beacon center
          ctx.beginPath();
          ctx.arc(targetPoint.x, targetPoint.y, pulseSize, 0, Math.PI * 2);
          ctx.fillStyle = '#00f5d4';
          ctx.shadowBlur = 12;
          ctx.shadowColor = '#00f5d4';
          ctx.fill();
          ctx.shadowBlur = 0;

          // Beacon outer halo ring
          ctx.beginPath();
          ctx.arc(targetPoint.x, targetPoint.y, pulseSize * 2.4, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(0, 245, 212, 0.25)';
          ctx.lineWidth = 1;
          ctx.stroke();
        });
      });

      // Subtle atmospheric grid overlay lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
      ctx.lineWidth = 1;
      const gridSpacing = 60;
      for (let gx = 0; gx < width; gx += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(gx, 0);
        ctx.lineTo(gx, height);
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Mouse tracking
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
      parent.addEventListener('mousemove', handleMouseMove);
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
      <div className="hero-radial-overlay" />
    </div>
  );
}
