import React from 'react';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
};

export default function Sections() {
  return (
    <div className="mt-12 grid gap-6 max-w-3xl mx-auto">
      <motion.section variants={sectionVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-[#C9B7E6]" style={{ fontFamily: 'Playfair Display, serif' }}>Words of Love</h2>
        <p className="mt-3 text-[#FFF8F0]/90 leading-relaxed">
          I wrap my words around you like a shawl of gentle warmth. When the world feels cold, remember: your heart is a sun that never forgets how to rise.
        </p>
      </motion.section>

      <motion.section variants={sectionVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-[#C9B7E6]" style={{ fontFamily: 'Playfair Display, serif' }}>Prayers for You</h2>
        <ul className="mt-3 text-[#FFF8F0]/90 space-y-2">
          <li>May Allah place ease where your breath tightens, and widen the path beneath your steps.</li>
          <li>May your nights be guarded by angels, and your mornings arrive with quiet joy.</li>
          <li>May mercy pour like rain, and may you always find shelter in remembrance.</li>
        </ul>
      </motion.section>

      <motion.section variants={sectionVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-[#C9B7E6]" style={{ fontFamily: 'Playfair Display, serif' }}>When You Feel</h2>
        <div className="mt-3 grid sm:grid-cols-2 gap-3 text-[#FFF8F0]/90">
          <div className="rounded-xl p-4 bg-[#2B3A67]/40 border border-white/10">
            <p className="text-sm opacity-80">Overwhelmed</p>
            <p className="mt-1 text-sm">Place a hand upon your heart. Breathe. Say, “Hasbunallahu wa ni’mal wakeel.” You are carried.</p>
          </div>
          <div className="rounded-xl p-4 bg-[#2B3A67]/40 border border-white/10">
            <p className="text-sm opacity-80">Alone</p>
            <p className="mt-1 text-sm">Look upward. Even the quietest stars are with you. I am, too.</p>
          </div>
          <div className="rounded-xl p-4 bg-[#2B3A67]/40 border border-white/10">
            <p className="text-sm opacity-80">Uncertain</p>
            <p className="mt-1 text-sm">Trust the One who knows the path through every forest. Take the next loving step.</p>
          </div>
          <div className="rounded-xl p-4 bg-[#2B3A67]/40 border border-white/10">
            <p className="text-sm opacity-80">Weary</p>
            <p className="mt-1 text-sm">Rest in remembrance. Mercy turns even sighs into prayers.</p>
          </div>
        </div>
      </motion.section>

      <motion.section variants={sectionVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-[#C9B7E6]" style={{ fontFamily: 'Playfair Display, serif' }}>Lina’s Sky</h2>
        <p className="mt-3 text-[#FFF8F0]/90">Open the sky mode to play with the stars and write a wish across the night.</p>
      </motion.section>
    </div>
  );
}
