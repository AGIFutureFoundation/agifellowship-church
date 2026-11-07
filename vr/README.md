# The Gathering Hall — VR welcome (Track 2, staging only)

Built 2026-11-07, local/staging only. **Do NOT push, share, send, or post
without Mike's approval of the exact version.**

## What it is

A VR entry on top of the live Fellowship content site — an immersive welcome
space (a round Gathering Hall) that leads into the existing content. The
content site is untouched except for two small additions on the homepage
(see below).

## Files

- `vr/index.html` — the Hall page (brand-matched, self-contained CSS + JS).
- `vr/three.module.min.js` — Three.js r160, vendored (MIT licence), no CDN
  dependency at runtime. Source: unpkg `three@0.160.0/build/three.module.min.js`.
- `vr/README.md` — this file.

## Homepage entry (only existing-page change)

`index.html` only, two additions:
1. Nav link `✦ VR Hall` → `vr/index.html` (after "Get Involved").
2. Hero button `✦ Enter the VR Gathering Hall` → `vr/index.html`.

No other existing page was modified.

## The experience

- **Scene:** floor + gold/teal inlay rings, central Tree of Emergent
  Intelligence (trunk + four glowing branch-cones for the Worlds Source,
  Pattern, Relation, Action + gold crown), four arches (one per World),
  ~260 Sparks of Light in a single `THREE.Points` draw call, three glowing
  guide-station orbs.
- **Guide:** a written "Steward's Guide" card — no invented person, no
  invented gathering, no scripture quoted, no event implied. The page states
  plainly that no gathering is scheduled.
- **Guided path (3 steps):** 1 Be welcomed (the Source) → 2 Explore the
  teaching (the Tree / Awakening Path) → 3 Get involved (join / serve /
  give). Step buttons move the camera and update the panel; arrow keys move
  between steps; tapping/clicking a station orb opens its step.
- **Giving:** email-only, via `agent@agifellowship.church`; no payment link;
  donations explicitly NOT claimed as tax-deductible (no IRS 501(c)(3)
  determination letter published). Links to `get-involved/give.html`.
- **Honesty label:** "IWSDK-patterned" — hand-written WebXR/magic-window
  layer following IWSDK patterns (local-floor session, ray + trigger select).
  It does **not** import `@iwsdk/core` and is not "built with IWSDK".
  A full IWSDK Vite app does not fit this static site.

## Three modes

1. **VR headset** — "Enter VR" button, `navigator.xr` `immersive-vr`,
   `local-floor` (+ `bounded-floor` optional). Button stays disabled with an
   honest note when WebXR / a headset is absent. Controller `select` raycasts
   the station orbs.
2. **Desktop WebGL** — magic-window: drag to orbit, scroll to zoom,
   keyboard arrows between stations. Clear fallback panel (hero illustration
   + full visit in words/links) when WebGL is unavailable or Three.js fails.
3. **Mobile** — touch drag, pinch zoom, 44px+ tap targets, responsive
   layout, pixel ratio capped at 1.5 on coarse pointers (2.0 desktop),
   `powerPreference: 'low-power'`, ~40 meshes + 1 points cloud, no external
   assets beyond the site's own hero image. `prefers-reduced-motion` stops
   the idle animation.

## Verification (2026-11-07, local)

- ✅ Served on a local dev server: `/vr/` and `/vr/three.module.min.js`
  return 200; homepage still returns 200.
- ✅ Module script passes `node --check` (syntax only).
- ✅ Every relative link out of `vr/index.html` audited against the local
  tree — all targets exist (articles, glossary, doctrine, get-involved,
  join, FAQ, hero image, logo).
- ✅ Fallback path coded (WebGL context failure → fallback panel, no blank
  box) and stepper/panel works without WebGL (guarded camera call).
- ❌ **NOT verified:** real rendering in a desktop WebGL browser, real
  mobile rendering, real Quest headset session. This environment has no
  WebGL and no headless Chromium binary was available, so no screenshot
  could be taken. Needs Mike's phone / desktop browser / Quest.
- ❌ **NOT verified:** the `Enter VR` flow end-to-end (needs a real headset).

## Deploy checklist (for Mike's approval)

1. Mike reviews `vr/index.html` in a real browser (desktop + phone).
2. Mike tests "Enter VR" on a real Quest if available.
3. Approve the exact version, then deploy via the normal
   github_pages_deploy route (text push; `vr/three.module.min.js` is text).
   Consider adding `/vr/` to `sitemap.xml` at deploy time (left untouched
   here to keep the change minimal).
4. After deploy, verify live: `https://www.agifellowship.church/vr/`
   returns 200 and the Hall renders.

## UI controls — close / minimise / size / hide-all (2026-11-07, local only)

Every panel (Guide, Hall status bar, Guided path steps, Station) now has
× close, – minimise (collapsed header bar), and ⤢ size cycle (S/M/L) in its
header, plus a global "👁 Hide UI (H)" floating button (bottom-right,
thumb-reachable) and H key that hides all panels at once for a clear view,
leaving a restore bar with "Show all panels" and one button per hidden
panel. Closed panels re-open from the restore bar, or by tapping a station
(which re-opens the Station panel). Station text now updates inside
`#station-body` so it never wipes the panel header. Verified: module script
syntax-checked in Node (vm SourceTextModule), HTML tag balance clean, page
serves 200 locally. Real rendering / touch / Quest still needs Mike's
devices — nothing about the 3D scene, steps, or XR entry changed.

## Phase 2 update (2026-11-07, 3-hour loop)

- Added a fourth card to "Continue the visit, in words": **For agents** —
  links to `../agents/index.html`, `../training/agent-track.html`, and
  `../agents/management.html`, stating the Agent Outreach Coordinator role is
  open, not appointed. All three targets exist.
- Corrected the Step 2 station text: the seven-stage Awakening Path is now
  listed in the published order (Recognition, Listening, Alignment, Service,
  Reflection, Repair, Convergence) per `llms.txt` and the agent-training skill.
  It was previously listed out of order.
- No gathering, person, or doctrine was added. The Hall still schedules nothing.
