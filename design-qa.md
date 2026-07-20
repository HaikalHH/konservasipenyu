# Design QA

- Source visual truth: `C:\Users\haika\Downloads\WEB.pdf` (pages 1-4; page 5 used only as the color palette)
- Rendered source pages: `H:\Project\TA BB\tmp\pdfs\pages\page-1.png` through `page-4.png`
- Primary implementation screenshot: `H:\Project\TA BB\tmp\qa\home-full-final.png`
- Desktop viewport: 1024 x 768
- Mobile viewport: 390 x 844
- State: default desktop routes, anchored content regions, mobile menu, and successful reservation form state

## Full-view comparison evidence

- Home top comparison: `H:\Project\TA BB\tmp\qa\comparisons\home-pass2-compare.jpg`
- Education top comparison: `H:\Project\TA BB\tmp\qa\comparisons\education-pass2-compare.jpg`
- Program top comparison: `H:\Project\TA BB\tmp\qa\comparisons\program-pass2-compare.jpg`
- Reservation top comparison: `H:\Project\TA BB\tmp\qa\comparisons\reservation-pass2-compare.jpg`
- Full rendered home page: `H:\Project\TA BB\tmp\qa\home-full-final.png`

The implementation retains the PDF's four-page information architecture, blue navigation bar, cyan-to-blue visual language, white rounded cards, Poppins-like heavy typography, image-led hero sections, conservation content, and footer hierarchy.

## Focused region comparison evidence

- Home content: `H:\Project\TA BB\tmp\qa\comparisons\home-focus-final4-compare.jpg`
- Education species: `H:\Project\TA BB\tmp\qa\comparisons\education-focus-final5-compare.jpg`
- Program tour: `H:\Project\TA BB\tmp\qa\comparisons\program-focus-final4-compare.jpg`
- Reservation map: `H:\Project\TA BB\tmp\qa\comparisons\reservation-focus-final4-compare.jpg`
- Mobile home: `H:\Project\TA BB\tmp\qa\mobile-home-final.png`
- Mobile reservation: `H:\Project\TA BB\tmp\qa\mobile-reservation-final.png`

## Fidelity review

- Fonts and typography: Poppins weights 400-800 match the rounded geometric character of the Canva reference. Heading scale, line height, wrapping, and body density were tuned independently for hero, species, and reservation regions.
- Spacing and layout rhythm: Navigation, hero heights, two-column home content, three-column education cards, phone mockup, reservation grid, and mobile stacking were checked at matching viewports. No clipped controls or horizontal page overflow remain.
- Colors and visual tokens: The implementation uses the page-5 palette, including dark azure, vivid azure, turquoise, cream, white, and yellow accents. Extracted PDF gradient imagery is reused for the large color fields.
- Image quality and asset fidelity: Logos, photos, map, turtle cards, hero photography, and tour imagery come directly from the supplied PDF. No placeholder imagery or code-drawn substitutes remain.
- Copy and content: The four routes reproduce the supplied Indonesian headings, descriptions, pricing, hours, visit rules, contact details, and conservation information. Page 5 is not exposed as a route.

## Comparison history

1. Initial pass found a P1 hero-image orientation mismatch on Home/Education, P2 hero-height drift, P2 reservation-column overflow, and P2 incorrect turtle-card crops.
2. The hero assets were mirrored to match the PDF, desktop heights and content margins were normalized, the reservation form and price cards were compacted, and exact turtle-card regions were re-extracted from the PDF.
3. The second comparison found P2 excess density in the Home introduction, Education species section, and Program phone mockup. These were resized and rechecked against focused side-by-side comparisons.
4. Post-fix evidence shows no remaining actionable P0, P1, or P2 mismatches. Residual P3 differences are limited to minor footer-wave simplification and small responsive text-wrap variations.

## Interaction and runtime checks

- Desktop navigation routes: verified.
- Mobile menu open/close and navigation to Reservation: verified.
- Reservation inputs, required fields, submit action, and success state: verified.
- Google Maps and social links are present with accessible labels.
- Final browser console check: no errors or warnings.
- Final production build: passed.

## Follow-up polish

- P3: Recreate the exact layered wave silhouette above the footer if pixel-level decorative parity is required.

## Video replacement QA

- Source visual truth: `H:\Project\TA BB\tmp\pdfs\pages\page-3.png`, supplemented by the user-provided `C:\Users\haika\Downloads\0717.mov` as the intended moving content.
- Implementation screenshot: `H:\Project\TA BB\tmp\qa\program-video-full.png`.
- Browser viewport: 1912 x 948; Program Ekowisata route; video poster visible with native controls.
- Full-view comparison: `H:\Project\TA BB\tmp\qa\comparisons\program-video-compare.jpg`.
- Focused comparison: `H:\Project\TA BB\tmp\qa\comparisons\program-video-focus-compare.jpg`.
- Fonts and typography: unchanged from the previously passed Program page and still aligned with the reference hierarchy.
- Spacing and layout rhythm: the 9:17 video remains centered inside the same rounded phone frame with no overflow or section-height regression.
- Colors and visual tokens: the white/gray phone frame and cyan-to-blue background remain unchanged.
- Image and video fidelity: the placeholder still image was replaced with the supplied vertical footage; its poster is an actual frame from that video, and H.264/AAC playback metadata loaded successfully at 720 x 1280.
- Copy and content: page copy is unchanged; the video has an Indonesian accessible label and fallback message.
- Interaction test: native play control advanced playback from 0 to 1.76 seconds, then paused successfully. Duration reported as 67.75 seconds with ready state 4.
- Console check: no errors or warnings; only normal React development and HMR informational messages.
- Comparison result: no new P0/P1/P2 mismatch. Native player controls are an intentional functional addition inside the reference frame.

final result: passed
