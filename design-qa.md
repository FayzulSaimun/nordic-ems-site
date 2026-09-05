# Design QA - NORDIC-EMS homepage

## Comparison target

- Source visual truth: `C:/Users/fasai/.codex/generated_images/01a066f3-ddd9-73a1-9c51-c40b48628592/exec-edb1a67d-a05f-4315-b362-beb01c6aee1b.png` (864 x 1821 px).
- Implementation: `E:/Development/Lucian_Project/nordic-ems-site/implementation-desktop-final.png` (1265 x 712 px, default desktop browser viewport, CSS density 1x).
- Responsive evidence: `E:/Development/Lucian_Project/nordic-ems-site/implementation-mobile.png` (375 x 811 px, 390 x 844 browser viewport including browser chrome, CSS density 1x).
- State: homepage at rest; desktop comparison is the hero and first viewport. The local opportunity form was separately opened, completed with test values, and verified to reach its success state.
- Full-view evidence: `design-qa-final-comparison.png` places the selected visual target and final desktop rendering side by side at a normalized first-viewport crop.
- Focused comparison: the hero/header is the image-sensitive, typography-dense region. It was compared directly in the final side-by-side image; the rendered page uses a dedicated generated Nordic energy image rather than a placeholder.

## Findings

No actionable P0, P1, or P2 findings remain.

- Typography: Manrope and DM Sans establish a strong display/body hierarchy comparable to the selected design. The headline, navigation, labels, and CTAs remain readable at desktop and mobile widths.
- Layout and rhythm: the implementation preserves the selected design's dark header, full-bleed energy-atlas hero, paired CTAs, process ribbon, light KPI strip, and alternating navy/white knowledge sections. Section spacing remains intentional rather than card-heavy.
- Colors and tokens: navy, teal, ice, and amber map cleanly to the selected visual's institutional energy palette with high-contrast hero copy and controls.
- Imagery and icons: the hero and Nordic map are dedicated generated assets; UI symbols come from a consistent Font Awesome library. The exact source emblem was not provided as a brand asset, so the interface uses a restrained network icon as a P3 brand-mark substitute.
- Content and interactions: navigation scrolls to the named areas; project, mobility, research-school, and opportunity CTAs are functional. The interest form has labelled fields and a visible completion state. The browser console reported no errors.
- Responsive behavior: at the mobile check the document width was 375 px and the scroll width was also 375 px, confirming the six-item metrics strip no longer causes horizontal overflow. The mobile header exposes a menu control and the hero CTA hierarchy remains intact.

## Comparison history

1. Initial comparison found two P2 issues: the selected visual used six project metrics but the implementation exposed five, and forcing six fixed columns caused mobile horizontal overflow (506 px scroll width at a 375 px client width).
2. Fixes: added the `5+ Industry interactions` metric from the source brief and changed the metrics grid to `repeat(auto-fit, minmax(140px, 1fr))`.
3. Post-fix evidence: the final desktop comparison shows the aligned hero treatment; mobile retest reports 375 px scroll width at a 375 px client width. Build and Sites worker tests pass.

## Follow-up polish

- [P3] Replace the temporary network mark with the official NORDIC-EMS logo when it is supplied.
- [P3] Replace generated imagery with real mobility, laboratory, and Summer School photographs as project activity begins.

## Application-source update - 2026-09-03

- Reviewed the complete application text after extracting 18 embedded Base64 project visuals. The application confirms the public facts now used on the site: four institutions, 12 exchanges split into six 3-month PhD and six 1-month researcher mobilities, three to four research clusters, four to six publications, two shared digital tools/datasets, a 4-5 ECTS Research School, and five named work packages with leads and durations.
- Added the application-provided strategic framework, joint curriculum, partner research-groups, impact pathway, 40-month roadmap, and communication framework as responsive source visuals in their corresponding site sections.
- Browser evidence: refreshed homepage and curriculum section rendered with the embedded framework visible; mobile retest reported `scrollWidth: 375` and `clientWidth: 375`; browser console had no errors. Build and all four Sites worker tests pass.
- Residual P3: public dates, contacts, specific calls and event details remain placeholders until the consortium supplies launch-ready details.

## Final result

final result: passed
