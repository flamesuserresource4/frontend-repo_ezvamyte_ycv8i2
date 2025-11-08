import React from 'react';

export default function Footer({ onToggleLargeText, onToggleContrast, largeText, highContrast }) {
  return (
    <footer className="mt-16 mb-8 text-center text-[#FFF8F0]/80">
      <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur">
        <button
          onClick={onToggleLargeText}
          className={`px-3 py-1 rounded-full text-sm font-medium transition ${largeText ? 'bg-[#F6D08A] text-[#2C2C2C]' : 'text-[#FFF8F0] hover:bg-white/10'}`}
          aria-pressed={largeText}
        >
          Large Text
        </button>
        <span className="h-4 w-px bg-white/20" aria-hidden />
        <button
          onClick={onToggleContrast}
          className={`px-3 py-1 rounded-full text-sm font-medium transition ${highContrast ? 'bg-[#F6D08A] text-[#2C2C2C]' : 'text-[#FFF8F0] hover:bg-white/10'}`}
          aria-pressed={highContrast}
        >
          High Contrast
        </button>
      </div>
      <p className="mt-4 text-xs opacity-80">With love, in moonlight blue.</p>
    </footer>
  );
}
