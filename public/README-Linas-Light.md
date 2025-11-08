Lina’s Light — Single Page Website

Overview
- Warm, intimate single page with a glassmorphism card, soft starfield, and shy reveal animations.
- Fully client-side (offline-first). No login.
- Mobile responsive with large-text and high-contrast toggles for accessibility.

How to publish on GitHub Pages
1) Create a new GitHub repository named `linas-light` and push the project files.
2) In the repository, open Settings → Pages.
3) Set Source to `GitHub Actions` or `Deploy from a branch` (main branch, `/` root).
4) If using Actions, add the standard Vite React build workflow or use `Deploy from a branch` after running a production build locally and committing the `dist` folder.
5) For a quick deploy from this sandbox, run `npm run build` and upload the `dist/` to a Pages branch or enable Pages from the `dist` folder.

Design tokens
- Colors
  - Moonlight Blue: #2B3A67
  - Lavender Mist: #C9B7E6
  - Soft Gold: #F6D08A
  - Ivory: #FFF8F0
  - Deep Charcoal: #2C2C2C
- Fonts: Inter for UI, Playfair Display for headings (loaded via Google Fonts in App)

Images to generate via image AI
- Hero portrait: soft, modest silhouette or backlit figure under a moonlit sky, tones of Moonlight Blue and Soft Gold; gentle bokeh stars.
- Optional small icons (PNG/SVG): a crescent-moon, a star, a small lantern; minimal line style with Soft Gold accents.

Notes
- Tap the sky background to see tiny star popups.
- Open Sky Mode to draw little constellations.
- Daily message changes automatically by date.
