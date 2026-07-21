# Design QA

- Source visual truth: `C:\Users\haika\Downloads\WEB (3).pdf`
- Rendered source pages: `H:\Project\TA BB\tmp\pdfs-new\pages\page-1.png` through `page-4.png`
- Browser-rendered implementation: `http://localhost:4174/`
- Viewport: 1024 × 768 desktop; 390 × 844 mobile resilience check
- State: logged-out public website; video initially paused; reservation form empty

## Full-view comparison evidence

- Home: `H:\Project\TA BB\tmp\qa-pdf\comparisons\home-comparison.jpg`
- Education hero: `H:\Project\TA BB\tmp\qa-pdf\comparisons\education-top-comparison.jpg`
- Program/video: `H:\Project\TA BB\tmp\qa-pdf\comparisons\program-poster-final-comparison.jpg`
- Reservation: `H:\Project\TA BB\tmp\qa-pdf\comparisons\reservation-comparison.jpg`

## Focused comparison evidence

- Three-card conservation section: `H:\Project\TA BB\tmp\qa-pdf\comparisons\education-care-final-comparison.jpg`
- Browser capture: `H:\Project\TA BB\tmp\qa-pdf\browser\education-lossless-care.png`
- Video poster and phone crop: `H:\Project\TA BB\tmp\qa-pdf\browser\program-poster-final.png`
- Reservation form: `H:\Project\TA BB\tmp\qa-pdf\browser\reservation-final.png`
- Mobile scaling: `H:\Project\TA BB\tmp\qa-pdf\browser\reservation-mobile.png`

## Findings

- No actionable P0, P1, or P2 differences remain.
- Fonts and typography: source-rendered Poppins family, weights, sizes, wrapping, and spacing are preserved exactly by the lossless page artwork.
- Spacing and layout rhythm: page proportions, card geometry, radii, shadows, turtle overlaps, image crops, and section heights match the PDF canvas.
- Colors and visual tokens: gradients, halftone patterns, blues, teal, yellow, white, and shadow opacity are sourced directly from the PDF rather than reconstructed.
- Image quality and asset fidelity: all visible artwork comes from the supplied PDF using lossless WebP. The video poster is cropped from the PDF phone frame and switches to the supplied 67.753991-second video after activation.
- Copy and content: all visible copy is identical to the PDF. Navigation, social links, CTA, map, video, and reservation controls remain interactive through aligned overlays.
- Responsiveness: the complete source canvas scales proportionally with no horizontal overflow at 390 px. This intentionally preserves the Canva/PDF composition.
- Accessibility: interactive overlays have accessible labels and keyboard focus states; the video supports Enter/Space; form fields have associated labels.

## Comparison history

1. Earlier comparison found P1 layout drift in the education card section from accumulated CSS reconstruction: incorrect card geometry, turtle scale/placement, halftone pattern, typography, and vertical rhythm.
   - Fix: replaced reconstructed visible surfaces with lossless renders of the supplied PDF and positioned interaction overlays from PDF coordinates.
   - Post-fix evidence: `education-care-final-comparison.jpg`.
2. Program comparison found a P2 mismatch between the initial video poster frame and the PDF phone artwork.
   - Fix: generated a lossless poster crop from the exact PDF phone interior and retained the supplied video for playback.
   - Post-fix evidence: `program-poster-final-comparison.jpg`.
3. Final browser pass found no console warnings or errors. Static export completed successfully.

## Primary interactions tested

- Navigation routes resolve correctly.
- Reservation fields accept input and local submission produces the confirmation state without a database.
- Video source loads with duration 67.753991 seconds and ready state 4; click starts playback and reveals native controls.
- Google Maps and social destinations are present as external links.

## Follow-up polish

- None required for source fidelity.

final result: passed
