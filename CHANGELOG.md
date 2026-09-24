# Website revision notes

## September 23, 2026 — Fall campaign homepage and application landing page

- Rewrote homepage hero, problem, introduction steps, benefits, audience criteria, stats, final CTA, and search/social text metadata. Added application reassurance, quarterly pricing, guarantee/expense/referral copy, and proof below the steps.
- Hero begins “3 curated intros…”; its subhead begins “Arena is a curated network for industry executives.” Eyebrow is neon yellow; testimonial stays white. Removed the homepage load overlay and hero reveal delay.
- Updated step 1 to membership committee review, replaced its image with the supplied tablet/application artwork, kept intro timing at 10am ET, and renamed step 3 “If both say yes, then you meet.”
- Added “A vetted network.” as the sixth benefit tile. Reordered testimonials: Trebor, Andrew, Vince, Marisol, Bryna.
- Matched all 19 regular page headers to How it works, Membership, FAQ, Log in, and Apply by Oct 2. Interior section links return to the homepage.
- Added standalone `/apply` with no navigation or inbound site links, noindex metadata, four application CTAs, mobile sticky CTA, live deadline countdown, proof/testimonials, fit criteria, comparison, price/guarantee, and FAQ. The logo links home. “Members come from” is centered.
- Application deadline is October 2, 2026 at 11:59 p.m. ET. First intros arrive the Monday after activation; the next application window is winter. All application buttons target the existing external signup application.
- Paused the shared newsletter popup through October 2 Eastern time. Existing newsletter forms remain available.
- Updated the integrity checker to resolve root-relative homepage links correctly.

### Validation and handoff notes

Local references and JavaScript syntax checks and the static build passed. The application page local route returned HTTP 200. All 19 regular headers were checked for matching links and `/apply` for no navigation/inbound links. No new comprehensive device/browser regression test or live form submission was performed. Existing backend/email limitations remain in README.md. Campaign deadlines and static copy require editorial maintenance; the homepage CTAs do not automatically close when the application landing page countdown ends.

## September 22, 2026 — Bryna Taylor member spotlight

- Added Bryna Taylor to the homepage's Meet our members carousel after Andrew Ball.
- Included her title, **Freelance Art Director/Designer**, supplied headshot, and full testimonial: “Connecting with people has always been one of the things I value most, and as I navigate an ever-changing creative landscape, Arena continues to push me forward in that pursuit.”
- Added the supplied Sid Lee × DAZN logo and a black-wordmark version with a transparent background. The member card displays the transparent version; the original is retained as an asset.
- The existing carousel now contains five members and continues to use its existing looping arrows and mobile swipe behavior.
- Updated the developer README to reflect five member spotlights.

### Files

- `public/index.html`: new member card.
- `public/member-bryna-taylor.jpeg`: headshot.
- `public/member-sidlee-dazn-black.png`: displayed transparent logo.
- `public/member-sidlee-dazn.jpeg`: original supplied logo.
- `README.md`: member count documentation.

### Validation and remaining work

Static integrity checks and the production build passed. No framework, dependencies, forms, or backend integrations changed. Existing integration limitations remain documented in the README. This round did not include a new browser/device regression test.
