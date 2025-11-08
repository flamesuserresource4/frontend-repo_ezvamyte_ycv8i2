import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Starfield canvas with twinkling stars, slight drift, and tap micro-popups
export default function StarfieldCanvas({ density = 140, accent = '#F6D08A', className = '' }) {
  const canvasRef = useRef(null);
  const [popups, setPopups] = useState([]);
  const starsRef = useRef([]);
  const animationRef = useRef(null);
  const ratioRef = useRef(1);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const initStars = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      const areaCount = Math.floor((w * h) / 12000);
      const target = Math.max(60, Math.min(density, areaCount));
      const stars = [];
      for (let i = 0; i < target; i++) {
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 1.2 + 0.3,
          t: Math.random() * Math.PI * 2,
          v: (Math.random() * 0.4 + 0.1) * (Math.random() < 0.5 ? -1 : 1),
          dx: (Math.random() - 0.5) * 0.05,
          dy: (Math.random() - 0.5) * 0.05,
        });
      }
      starsRef.current = stars;
    };

    const resize = () => {
      ratioRef.current = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      canvas.width = Math.floor(w * ratioRef.current);
      canvas.height = Math.floor(h * ratioRef.current);
      ctx.setTransform(ratioRef.current, 0, 0, ratioRef.current, 0, 0);
      initStars();
    };

    const draw = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);

      const vignette = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, Math.max(w, h));
      vignette.addColorStop(0, 'rgba(255,255,255,0.02)');
      vignette.addColorStop(1, 'rgba(0,0,0,0.15)');
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, w, h);

      for (const s of starsRef.current) {
        s.t += s.v * 0.02;
        s.x += s.dx;
        s.y += s.dy;
        if (s.x < -5) s.x = w + 5;
        if (s.x > w + 5) s.x = -5;
        if (s.y < -5) s.y = h + 5;
        if (s.y > h + 5) s.y = -5;
        const alpha = 0.5 + Math.sin(s.t) * 0.5;
        ctx.globalAlpha = 0.2 + alpha * 0.8;
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();

        if (alpha > 0.96 && Math.random() > 0.985) {
          ctx.globalAlpha = 0.35;
          const g = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, 8);
          g.addColorStop(0, accent + 'AA');
          g.addColorStop(1, 'rgba(246,208,138,0)');
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(s.x, s.y, 8, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(draw);
    };

    const onClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const id = Math.random().toString(36).slice(2);
      const lines = [
        'You are loved.',
        'Light finds you.',
        'Peace be upon your heart.',
        'I am with you.',
        'Gentle as moonlight.',
      ];
      setPopups((p) => [...p, { id, x, y, text: lines[Math.floor(Math.random() * lines.length)] }]);
      setTimeout(() => setPopups((p) => p.filter((pp) => pp.id !== id)), 2000);
    };

    resize();
    window.addEventListener('resize', resize);
    canvas.addEventListener('click', onClick);
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('click', onClick);
      cancelAnimationFrame(animationRef.current);
    };
  }, [density, accent]);

  return (
    <div className={`absolute inset-0 ${className}`} aria-hidden>
      <canvas ref={canvasRef} className="w-full h-full" />
      <AnimatePresence>
        {popups.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 6, scale: 0.96 }}
            animate={{ opacity: 1, y: -20, scale: 1 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="absolute px-2 py-1 rounded-md text-xs shadow"
            style={{ left: p.x, top: p.y, background: 'rgba(255,248,240,0.95)', color: '#2C2C2C', border: '1px solid rgba(246,208,138,0.6)', transform: 'translate(-50%, -100%)' }}
          >
            {p.text}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
