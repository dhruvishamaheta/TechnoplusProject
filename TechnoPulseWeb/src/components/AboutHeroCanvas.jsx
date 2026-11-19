import { useEffect, useRef } from 'react';

export default function AboutHeroCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = canvas?.parentElement;
    const context = canvas?.getContext('2d');

    if (!canvas || !section || !context) return undefined;

    const pointer = { x: -1, y: -1 };
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let width = 0;
    let height = 0;
    let particles = [];
    let animationFrameId;

    const createParticles = () => {
      const count = Math.min(64, Math.max(18, Math.round((width * height) / 18000)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.38,
        vy: (Math.random() - 0.5) * 0.38,
        radius: Math.random() * 1.3 + 1
      }));
    };

    const resizeCanvas = () => {
      const bounds = section.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = bounds.width;
      height = bounds.height;
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      createParticles();

      if (reduceMotion) draw(false);
    };

    const draw = (moveParticles) => {
      context.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        if (moveParticles) {
          const dx = particle.x - pointer.x;
          const dy = particle.y - pointer.y;
          const distance = Math.hypot(dx, dy);

          if (distance > 0 && distance < 150) {
            const influence = (1 - distance / 150) * 0.012;
            particle.vx += (dx / distance) * influence;
            particle.vy += (dy / distance) * influence;
          }

          particle.x += particle.vx;
          particle.y += particle.vy;

          if (particle.x < 0 || particle.x > width) particle.vx *= -1;
          if (particle.y < 0 || particle.y > height) particle.vy *= -1;
          particle.x = Math.max(0, Math.min(width, particle.x));
          particle.y = Math.max(0, Math.min(height, particle.y));
        }
      });

      const connectionDistance = 150;
      for (let first = 0; first < particles.length; first += 1) {
        for (let second = first + 1; second < particles.length; second += 1) {
          const start = particles[first];
          const end = particles[second];
          const distance = Math.hypot(start.x - end.x, start.y - end.y);

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.3;
            context.beginPath();
            context.moveTo(start.x, start.y);
            context.lineTo(end.x, end.y);
            context.strokeStyle = `rgba(103, 232, 249, ${opacity})`;
            context.lineWidth = 0.8;
            context.stroke();
          }
        }
      }

      particles.forEach((particle, index) => {
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fillStyle = index % 4 === 0
          ? 'rgba(96, 165, 250, 0.9)'
          : 'rgba(103, 232, 249, 0.86)';
        context.fill();
      });
    };

    const animate = () => {
      draw(true);
      animationFrameId = window.requestAnimationFrame(animate);
    };

    const handlePointerMove = (event) => {
      if (event.pointerType === 'touch') return;
      const bounds = section.getBoundingClientRect();
      pointer.x = event.clientX - bounds.left;
      pointer.y = event.clientY - bounds.top;
    };

    const handlePointerLeave = () => {
      pointer.x = -1;
      pointer.y = -1;
    };

    resizeCanvas();

    let resizeObserver;
    if ('ResizeObserver' in window) {
      resizeObserver = new ResizeObserver(resizeCanvas);
      resizeObserver.observe(section);
    } else {
      window.addEventListener('resize', resizeCanvas);
    }

    section.addEventListener('pointermove', handlePointerMove, { passive: true });
    section.addEventListener('pointerleave', handlePointerLeave);

    if (!reduceMotion) {
      animationFrameId = window.requestAnimationFrame(animate);
    }

    return () => {
      resizeObserver?.disconnect();
      window.removeEventListener('resize', resizeCanvas);
      section.removeEventListener('pointermove', handlePointerMove);
      section.removeEventListener('pointerleave', handlePointerLeave);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="about-hero-canvas" aria-hidden="true" />;
}
