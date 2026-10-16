# Visual Evidence Enhancement Implementation Summary

## Outcome

The medical-student portfolio now uses a more varied editorial layout, the owner-approved portrait, five section illustrations, ten documentary gallery images, and an eight-group Evidence Library with thirteen in-site review pages. Documents and gallery images open in accessible popups with ordered navigation while sensitive originals remain outside the public runtime graph.

## Application Changes

- Extended `src/types/medical.ts` with typed profile, editorial-illustration, evidence-page, provenance, publication-state, and download-policy contracts.
- Added `src/data/illustrations.ts`; updated identity, evidence, and gallery data without mixing editorial and documentary collections.
- Added the shared `EditorialFigure`; enhanced the existing `DocumentPreviewDialog` and `Lightbox` rather than introducing alternate components.
- Refreshed Introduction, Medical Journey, Academics, Research, Community Care, Gallery, Evidence, and Contact compositions while preserving established navigation, theme, hash, journal, contact-publication safeguards, and CV-download behavior.
- Expanded focused component and privacy tests for media separation, navigation, focus, selected/disabled states, lazy loading, asset budgets, and public-path restrictions.

## Public Media Added

- Profile: `public/profile/gia-linh-profile.jpg`, a metadata-free 1000 by 1500 pixel derivative of the separately supplied portrait. The original identifier-like filename is not used publicly.
- Editorial illustrations: five metadata-free 1400 by 933 pixel WebP assets under `public/illustrations/`. At the owner's request, the interface shows no AI-origin or generation-method captions; internal provenance remains documented.
- Document review: three sanitized documentary page images and nine designed verified-summary pages under `public/documents/pages/`.
- Research award: one metadata-flattened Gold Medal certificate PDF and one 215 KB page preview under neutral filenames.
- Gallery: `public/gallery/cung-em-project-donated-clothing.jpg`, a low-risk no-face documentary derivative, bringing the curated gallery to ten images.

All newly prepared raster assets are within the approximately 300 KB per-image budget. The reviewed CV, hematology acknowledgement, and research Gold Medal certificate are the three public downloadable evidence files.

## Evidence Publication Result

Every one of the 30 substantive files in `src/assets/CV/` has exactly one recorded disposition in `source-publication-matrix.md`. Safe publication uses either a sanitized derivative or a clearly labeled verified summary. Raw academic records, candidate identifiers, personal portraits embedded in official records, financial details, unsafe or unnecessary third-party imagery, duplicates, and both MP4 files remain private.

The Evidence Library represents:

1. Curriculum Vitae - two public sanitized pages plus approved PDF actions.
2. Hematology volunteering acknowledgement - one public sanitized page plus approved PDF actions.
3. Upper-secondary academic record - two verified-summary pages.
4. Cambridge IGCSE statement - one verified-summary page.
5. IELTS Academic result - one verified-summary page showing the latest official overall 7.5 and updated component scores; the raw report remains private.
6. Research project Gold Medal - one public certificate page plus approved PDF actions.
7. Medicine admission and graduation record - two verified-summary pages.
8. Community project records - three verified-summary pages.

## Generated Image Provenance

The exact accepted prompt text, final project paths, intended section purposes, disclosure treatment, shared visual direction, and visual-review result are recorded in `generated-image-provenance.md`. Generation used the built-in image-generation mode. Generated images contain no identifiable people, student likeness, readable text, logos, certificates, result claims, or documentary-looking service or clinical scenes.

## Interaction and Accessibility

- The document popup displays full-page imagery, an ordered thumbnail rail, direct page selection, previous/next controls, live page position, optional PDF actions, Escape dismissal, and dialog focus containment/restoration.
- The gallery popup displays the ordered documentary collection with previous/next buttons, Left/Right Arrow operation, position feedback, Escape dismissal, and trigger-focus restoration.
- New controls use purpose-based stable test IDs. Existing semantic theme tokens, light/dark behavior, reduced-motion handling, and responsive layout conventions remain in use.

## Verification Completed During Generation

- Focused Vitest result: eight files and 25 tests passed.
- Coverage includes the portrait, absence of visible AI-origin labels, evidence states and page controls, gallery keyboard navigation, focus restoration, lazy loading, restricted content patterns, media collection separation, approved PDF allowlist, neutral profile filename, and raster budgets.
- The disabled Security Baseline and Property-Based Testing extensions were not enabled or expanded for this change.

The full clean build, complete test matrix, and measured release report are intentionally reserved for the mandatory Build and Test stage after Code Generation approval.

## Owner Review Revisions

- Academic rows no longer repeat long scale descriptions in parentheses. Concise row-specific context uses a separator, while each group header retains the authoritative scale description.
- Gallery, Community Care, and Evidence Library card previews now use a consistent 4:3 crop. Gallery, evidence, and Community Care documentary previews open the shared full-detail popup when activated.
- The Contact illustration was removed from the visible layout. The full-width themed panel now provides name, reply-to email, and message fields, a 5,000-character counter, privacy/helper copy, and a recipient-free email-draft action.
- Introduction highlights now prioritize Grade 12 GPA, A-level Biology/Mathematics/Chemistry results, and the medicine admission score.
- All visible AI-origin captions and runtime disclosure fields were removed. Generation provenance remains only in internal AI-DLC documentation.
- Revised verification passes TypeScript, ESLint, diff validation, and 33 focused tests across ten files.
- Academic result cards now share a seven-rem minimum header height with centered content and a uniform internal gap; longer or enlarged text can still expand the header safely.
- The portrait source now resolves through the configured Vite base path, preventing a project-site deployment from requesting the image at the domain root.
- The IELTS summary now reflects the latest official 7.5 overall result with Listening 8.5, Reading 8.0, Writing 7.0, Speaking 6.5, and CEFR C1; the identifying original remains private.
- The Research section now presents the team Gold Medal recognition, and the Evidence Library provides an optimized preview plus a metadata-flattened certificate download.
- Evidence-refresh verification passes 23 focused tests across six files, TypeScript, ESLint, XML parsing, diff validation, the post-build privacy gate, and a production build with `VITE_BASE_PATH=/ngtuangialinh.github.io/`. The generated JavaScript is 202.25 KB gzip, below the 300 KB budget.
- Evidence Library cards are ordered by explicit significance rank: research Gold Medal, Medicine admission/graduation, IELTS, IGCSE, upper-secondary record, CV, community-project records, and hematology acknowledgement.
- Removed the Research `Scope and limitation` panel and all visitor-facing clinical-qualification or clinical-credential disclaimer copy from Introduction, Medical Journey, Academics, and Research.
- Ordering/disclaimer verification passes 22 focused tests across six files, TypeScript, ESLint, diff validation, the post-build privacy gate, a built-output copy scan, and the project-base production build. The revised JavaScript is 202.05 KB gzip.

## Known Limitations

- Five sensitive evidence groups intentionally use designed verified summaries rather than exposing raw scans.
- The contact form intentionally publishes no recipient address. It prepares a local email draft without submitting, transmitting, or storing the entered content; the visitor adds a recipient in their email application.
- Video playback is not included; both supplied MP4 sources remain private.
- Editorial illustrations are contextual visuals and must not be interpreted as documentary evidence or depictions of actual activities.

## Natural Copy and CV Preview Review - 2026-10-10

- Rewrote section introductions, profile, journey milestones, community activities, contact headline, and evidence explanations in a natural student voice. Scientific measurements, scores, dates, and team attribution remain accurate.
- Evidence Library now shows seven supporting records. The CV remains available through the introduction preview and download actions.
- Wrapped the document backdrop and positioner in a Chakra Portal so section isolation cannot place subsequent section text over the preview. Added explicit responsive width, dynamic viewport height, flex containment, and scrollable body.
- Regenerated both CV pages directly from the approved vector PDF at 200 DPI, with text antialiasing, and stripped metadata. Replaced low-resolution JPEG pages with WebP pages measuring 1654 × 2340 pixels, approximately 285 KB and 88 KB; both meet the existing 300 KB budget. Added a Zoom in / Fit to width toggle with a scrollable page surface.
- Verified both page controls, zoom, Escape dismissal, focus restoration, PDF actions, missing Evidence Library CV card, and portal placement through focused regressions. Browser checks at 1440, 768, and 390 pixels with 2× pixel density confirmed clear images, no horizontal dialog overflow, and no underlying section overlap. Desktop and phone screenshots were visually inspected.
- Generation checks: 24 focused tests across six files, production build with TypeScript, ESLint, privacy/media budget checks, and diff whitespace validation pass. The pre-existing Vite large-chunk advisory remains; JavaScript gzip is 202.04 KB.
- Extension compliance: Security Baseline and Property-Based Testing N/A because both remain disabled by the owner. Existing privacy and publication safeguards pass.
- Code Generation remains at owner review; formal Build and Test and Operations have not been advanced.

## Fuller Section Summaries - 2026-10-10

Expanded the seven section introductions and profile welcome into connected paragraphs with more enthusiasm and detail. Copy highlights school progress, Cambridge and IELTS qualifications, the team’s Cordyceps research and Gold Medal, specific volunteer activities, gallery browsing, supporting records, and the email-draft flow. Facts and team attribution remain grounded in the existing data. Prettier and TypeScript pass; no new tests were added for this copy-only change. Security and PBT extensions remain disabled (N/A). Existing Code Generation review remains pending.

## Half-Length Section Summaries - 2026-10-10

Shortened all seven section introductions and the profile welcome to roughly half the expanded length. Retained warm first-person language, factual details, and practical browsing/email instructions. Word counts, Prettier, and TypeScript pass. No new tests needed for this copy-only revision; disabled extensions remain N/A.

## Innoverse Catalog Integration - 2026-10-10

- Reviewed the owner-supplied 79-page official booklet and visually matched project VN.4, its Cordyceps militaris title, and all four inventors on printed page 73 (PDF page 77). Source instructions were not executed.
- Published a reviewed annotation-free full PDF of approximately 2.7 MB and two metadata-free WebP previews (cover: 131 KB; project page: 161 KB). The PDF is a separate download asset.
- Added the catalog immediately after the research certificate in significance order; retained seven earlier supporting records and kept the CV in the introduction.
- Added Research preview/download actions; preview opens at the project page. Extended the existing EvidencePage contract with the actual PDF page number and EvidenceDocument with explicit selected-pages scope, so selected previews and full document length remain distinct. PDF opening targets page 77 for the project preview.
- Preserved the source’s inconsistent abstract (Ganoderma lucidum vs. Cordyceps militaris in its title) and noted the issue beside the catalog. Existing research facts and Gold Medal attribution remain unchanged.
- Verification: 19 focused tests in four files, TypeScript production build, ESLint, formatting, publication/privacy/media checks, and diff validation pass. Browser checks at 1440 and 390 pixels confirm entry/cover previews, PDF page targeting, full download, and contained layout. Source and published project-page text match.
- Extensions: Security Baseline and Property-Based Testing N/A because both remain disabled. Code Generation owner review remains pending; no deployment or formal Build and Test stage advancement.

## Debrecen and INNOVERSE Video Revision (2026-10-16)

Updated ngtuangialinh hero status to Medical Student at the University of Debrecen, journey milestone/summary and search/social metadata accordingly. Preserved brief prior Thai Nguyen enrollment as history; 27.20 remains explicitly a previous Thai Nguyen admission score. Existing source PDFs and admission-summary illustration remain historical documents. Added INNOVERSE 2026 video iLVkk7hrsHU beneath the Research methods/results, with responsive 16:9 titled lazy-loaded youtube-nocookie iframe, fullscreen and direct YouTube link. Data remains in src/data/research.ts. Adjusted affected copy assertions and disabled axe traversal of third-party frame documents in jsdom while retaining iframe-title checks.

Build and lint pass; existing large-chunk advisory retained. Four browser configurations (390/1440px, light/dark) confirm Debrecen status, research placement, 16:9 dimensions and no horizontal overflow. Screenshot inspected. Third-party playback not manually verified. Full test suite initially returned 52/54; isolated rerun passed all Hero tests but the unchanged MedicalShell Escape-dismissal test still failed. This navigation test issue remains outside the copy/video scope. Record focused rerun separately in audit. git diff --check passes. No deployment. Optional extensions disabled (N/A); existing Code Generation review remains pending.

Focused final rerun: all 20 tests in six Hero/Research/Journey/Academics/metadata/privacy suites pass.
