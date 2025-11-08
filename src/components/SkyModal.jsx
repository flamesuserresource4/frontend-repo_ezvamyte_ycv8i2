import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SkyModal({ open, onClose, accent = '#F6D08A' }) {
  const canvasRef = useRef(null);
  const [stars, setStars] = useState([]);
  const [lines, setLines] = useState([]);

  useEffect(() => {
    if (!open) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      init();
    };

    const init = () => {
      const count = 80;
      const s = Array.from({ length: count }).map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.2 + 0.4,
      }));
      setStars(s);
      setLines([]);
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(255,255,255,0.9)';
      for (const s of stars) {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.strokeStyle = accent;
      ctx.lineWidth = 1.2;
      ctx.globalAlpha = 0.8;
      for (const l of lines) {
        ctx.beginPath();
        ctx.moveTo(l.x1, l.y1);
        ctx.lineTo(l.x2, l.y2);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
      requestAnimationFrame(draw);
    };

    const click = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const nearest = [...stars].sort((a,b) => (a.x-x)**2 + (a.y-y)**2 - ((b.x-x)**2 + (b.y-y)**2))[0];
      if (!nearest) return;
      const last = lines[lines.length - 1];
      if (!last || last.done) {
        setLines((ls) => [...ls, { x1: nearest.x, y1: nearest.y, x2: nearest.x, y2: nearest.y, done: false }]);
      } else {
        setLines((ls) => {
          const copy = [...ls];
          copy[copy.length - 1] = { ...copy[copy.length - 1], x2: nearest.x, y2: nearest.y, done: true };
          return copy;
        });
      }
    };

    resize();
    window.addEventListener('resize', resize);
    canvas.addEventListener('click', click);
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('click', click);
    };
  }, [open, accent, stars, lines]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-50 flex items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div className="absolute inset-0 bg-[#2B3A67]/80 backdrop-blur" onClick={onClose} />
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }} transition={{ duration: 0.5 }} className="relative w-[92vw] max-w-3xl h-[70vh] rounded-2xl overflow-hidden border border-white/20 bg-white/5">
            <canvas ref={canvasRef} className="w-full h-full" />
            <div className="absolute top-3 right-3">
              <button onClick={onClose} className="px-3 py-1 rounded-full bg-[#F6D08A] text-[#2C2C2C] text-sm font-medium shadow">Close</button>
            </div>
            <div className="absolute bottom-3 left-3 right-3 text-center text-xs text-[#FFF8F0]/90">
              Tap stars to draw little constellations. Make a wish.
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
