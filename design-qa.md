# Design QA

- Source visual truth: `C:\Users\haika\Downloads\WEB (3).pdf` (pages 1-4)
- Rendered source pages: `H:\Project\TA BB\tmp\pdfs-new\pages\page-1.png` through `page-4.png`
- Desktop viewport: 1024 × 768
- Mobile viewport: 390 × 844
- Tested build: Next.js static export served locally from `out`

## Combined comparison evidence

- Home: `H:\Project\TA BB\tmp\qa-new\comparisons\home-final-compare.jpg`
- Education: `H:\Project\TA BB\tmp\qa-new\comparisons\education-final-compare.jpg`
- Program: `H:\Project\TA BB\tmp\qa-new\comparisons\program-final-compare.jpg`
- Reservation: `H:\Project\TA BB\tmp\qa-new\comparisons\reservation-final-compare.jpg`

Each comparison places the revised PDF and implementation side by side at the same width. The final pass confirms the revised yellow headings, cyan-to-blue fields, image placement, card colors, conservation illustrations, layered footer waves, contact information, pricing, visit hours, map, and reservation callout.

## Implementation screenshots

- `H:\Project\TA BB\tmp\qa-new\final-home-desktop.png`
- `H:\Project\TA BB\tmp\qa-new\final-education-desktop.png`
- `H:\Project\TA BB\tmp\qa-new\final-program-desktop.png`
- `H:\Project\TA BB\tmp\qa-new\final-reservation-desktop.png`
- `H:\Project\TA BB\tmp\qa-new\home-mobile-viewport.png`
- `H:\Project\TA BB\tmp\qa-new\reservation-mobile-viewport.png`

## Fidelity review

- Typography: local Poppins weights 400-800 retain the Canva reference hierarchy and rounded geometric character.
- Layout: all four PDF pages remain separate responsive routes; desktop composition and mobile stacking were checked at their target viewports.
- Assets: all photos, logos, map imagery, turtle cutouts, and coral imagery are taken from the supplied PDF. PDF soft masks were applied so decorative assets render with proper transparency.
- Program video: the supplied 9:16 video remains centered in the phone frame. Browser metadata reported H.264 playback ready, duration 67.75 seconds, and ready state 4.
- Content: the revised pricing, schedule, phone number `+62 811-954-545`, Instagram handle, and YouTube handle match the new PDF.

## Interaction and runtime checks

- Desktop navigation routes: verified.
- Mobile menu opens and closes; no horizontal overflow remains at 390 px.
- Reservation fields and submit confirmation: verified with local mock input; no database or network submission occurs.
- Static export: successful.
- Browser console: no warnings or errors on the final build.
- `npm test`: passed (lint has only the existing non-blocking Next.js `<img>` optimization notices).

No actionable P0, P1, or P2 mismatch remains. Residual variation is limited to browser-native video controls and minor text wrapping caused by responsive rendering.

final result: passed
