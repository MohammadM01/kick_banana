import React, { useEffect, useRef } from 'react';

const PARTICLE_COUNT = 72;

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

const CanvasParticles = ({ style = {} }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    // Detect dark mode
    const isDark = () => document.documentElement.dataset.theme === 'dark';

    const makeParticle = () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: randomBetween(1, 3.5),
      vx: randomBetween(-0.18, 0.18),
      vy: randomBetween(-0.25, -0.05),
      alpha: randomBetween(0.25, 0.75),
      pulse: Math.random() * Math.PI * 2,
    });

    const particles = Array.from({ length: PARTICLE_COUNT }, makeParticle);

    let raf;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const dark = isDark();
      const goldColor = dark ? '210,154,56' : '15,45,89';

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += 0.018;

        const alphaPulse = p.alpha + Math.sin(p.pulse) * 0.12;

        // Wrap around
        if (p.y < -10) p.y = height + 10;
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        // Draw glowing dot
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 3);
        grad.addColorStop(0, `rgba(${goldColor},${alphaPulse})`);
        grad.addColorStop(1, `rgba(${goldColor},0)`);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 3, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      });

      // Draw faint connection lines between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(210,154,56,${(1 - dist / 100) * 0.12})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };

    draw();

    const onResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        ...style,
      }}
    />
  );
};

export default CanvasParticles;
