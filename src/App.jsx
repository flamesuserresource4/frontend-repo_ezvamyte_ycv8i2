import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import StarfieldCanvas from './components/StarfieldCanvas.jsx';
import Hero from './components/Hero.jsx';
import Sections from './components/Sections.jsx';
import Footer from './components/Footer.jsx';
import SkyModal from './components/SkyModal.jsx';

// Color palette
const colors = {
  moonlight: '#2B3A67',
  lavender: '#C9B7E6',
  gold: '#F6D08A',
  ivory: '#FFF8F0',
  charcoal: '#2C2C2C',
};

export default function App() {
  const [openSky, setOpenSky] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--moonlight', colors.moonlight);
    root.style.setProperty('--lavender', colors.lavender);
    root.style.setProperty('--gold', colors.gold);
    root.style.setProperty('--ivory', colors.ivory);
    root.style.setProperty('--charcoal', colors.charcoal);
  }, []);

  const textSize = largeText ? 'text-[18px] sm:text-[19px]' : 'text-[16px] sm:text-[17px]';
  const contrast = highContrast ? 'saturate-[1.05] contrast-[1.15]' : 'saturate-[0.98] contrast-[1.0]';

  return (
    <div className={`relative min-h-screen ${textSize} ${contrast} select-none`} style={{ background: 'radial-gradient(1200px 600px at 50% -10%, #2B3A67 10%, #2C2C2C 80%)' }}>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Playfair+Display:ital,wght@0,500;0,600;1,500&display=swap" rel="stylesheet" />
      <div className="absolute inset-0">
        <StarfieldCanvas density={160} accent={colors.gold} />
      </div>

      <main className="relative z-10 px-4 py-10 sm:py-14">
        <div className="max-w-5xl mx-auto">
          <Hero onOpenSky={() => setOpenSky(true)} />
          <Sections />
          <Footer
            onToggleLargeText={() => setLargeText((v) => !v)}
            onToggleContrast={() => setHighContrast((v) => !v)}
            largeText={largeText}
            highContrast={highContrast}
          />
        </div>
      </main>

      <SkyModal open={openSky} onClose={() => setOpenSky(false)} />

      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-b from-[#2B3A67]/20 via-transparent to-transparent" />
      </div>
    </div>
  );
}
