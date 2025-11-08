import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const lines = [
  'Today I whisper your name into the morning light.',
  'My heart makes sujood whenever it remembers you.',
  'May every step you take be kissed by peace.',
  'I fold a prayer into the pocket of your day.',
  'You are a gentle dawn after a long night.',
  'I send you a lantern made of duas and moonlight.',
  'Your courage is a quiet river, always moving.',
  'Even the stars hush when your soul speaks.',
  'Allah knits soft ease between your moments.',
  'Wherever you are, mercy travels with you.',
];

function dailyLine() {
  const d = new Date();
  const i = (d.getFullYear() * 372 + (d.getMonth() + 1) * 31 + d.getDate()) % lines.length;
  return lines[i];
}

export default function Hero({ onOpenSky }) {
  const message = useMemo(() => dailyLine(), []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0, ease: 'easeOut' }}
      className="relative max-w-xl w-full mx-auto"
    >
      <div
        className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl overflow-hidden"
        style={{ boxShadow: '0 20px 60px rgba(43,58,103,0.35)' }}
      >
        <div className="absolute -inset-12 rounded-[48px] bg-[radial-gradient(circle_at_50%_40%,rgba(246,208,138,0.25),transparent_60%)] blur-3xl animate-pulse" aria-hidden />
        <div className="relative p-8 sm:p-10">
          <p className="text-sm tracking-widest text-[#F6D08A] uppercase">Bismillah — For Lina</p>
          <h1 className="mt-2 font-semibold text-3xl sm:text-4xl text-[#FFF8F0]" style={{ fontFamily: 'Playfair Display, serif' }}>
            Lina’s Light
          </h1>
          <p className="mt-4 text-[#FFF8F0]/90 leading-relaxed">
            {message}
          </p>
          <div className="mt-6 flex items-center gap-3">
            <button
              className="px-4 py-2 rounded-full bg-[#F6D08A] text-[#2C2C2C] font-medium shadow hover:shadow-lg transition"
              onClick={onOpenSky}
            >
              Open Sky Mode
            </button>
            <span className="text-xs text-[#C9B7E6]">Tap the stars. They listen.</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
