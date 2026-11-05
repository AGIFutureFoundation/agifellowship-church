# Deploy — agifellowship.church/articles

Branded articles hub for AGI Fellowship Church: 25 long-form articles
(15 re-skinned from `series/` plus 10 new Part Two articles, 16–25,
body text unchanged) plus a landing page,
built 2026-11-05, expanded to 25 articles 2026-11-05. Deployed to
GitHub Pages (see "Visual upgrade" section below); nothing has been
posted or sent by email.

## What this folder is

- `index.html` — the articles hub landing page (hero, four reading paths,
  25 article cards with title / 1-sentence description / reading time / tags,
  "For agents" section, Join CTA, JSON-LD CollectionPage).
  Canonical: https://www.agifellowship.church/articles/
- `<slug>.html` × 15 + `16-*.html` … `25-*.html` × 10 — the articles. Same body text, TL;DR,
  "For agents" box, SVGs, and cross-references as `series/` (Part One);
  Part Two (16–25) follows the same format. Only the
  header/nav/footer, canonical URLs, and internal links changed.
  Canonical: https://www.agifellowship.church/articles/<slug>.html
- `DEPLOY.md` — this file (do not upload; harmless if uploaded).

## What to upload to Hostinger (once hosting is confirmed)

Upload the whole host-ready site root,
`sites/agifellowship.church-host/`, to the hosting root for
agifellowship.church (`public_html` or the provider equivalent):

- `index.html` (root — its nav now links "Articles" to `articles/index.html`)
- `join.html`, `llms.txt`, `agent.json`, `robots.txt`, `sitemap.xml`
  (sitemap now lists 29 URLs: home, join, /articles/, all 25 articles,
  and the sacred-texts status page,
  all under https://www.agifellowship.church/…)
- `articles/` — `index.html` + all 25 article files + this DEPLOY.md
- `series/` — left in place untouched as the original source of the
  articles; it is not linked from the home page any more, but its files
  still exist on disk. Remove it from the upload if you want a clean
  deploy, or keep it — either way, /articles is the canonical home.

Verify after upload:
1. https://www.agifellowship.church/ loads the home page.
2. https://www.agifellowship.church/articles/ loads the hub with 25 cards.
3. Each article loads, with the branded header (Home · Articles ·
   Join & Give · Contact) and footer.
4. /sitemap.xml returns 200 and lists the 29 URLs.

## DNS (only after upload verifies, and only with the hosting target approved)

- Change ONLY website records: A @ → hosting IP (or CNAME per provider),
  www → same target.
- DO NOT change: MX 5 mx1.hostinger.com / 10 mx2.hostinger.com, SPF, DMARC,
  DKIM, autodiscover/autoconfig — or agent@ mail breaks.
- If nameservers must change, record all current records first and re-add
  MX/SPF/DKIM on the new DNS host.
- Propagation: up to ~24h. Verify live site + mail before calling it done.

## What still blocks a live deploy

1. **No hosting plan was found in this hPanel account on 2026-10-26**
   (Websites / Hosting / VPS all redirect to "Purchase Hosting"; only
   email plans exist). Mike has said to use existing hosting and DNS,
   not buy a new plan — but the existing hosting target is still
   unnamed. Nothing can go live until Mike names it.
2. **Video files need hosting/uploading separately.** Each article links
   to Fellowship promo videos by relative path
   (`../assets/videos/ (local copies — see asset list below)`),
   which resolve only inside this local workspace. Before the articles
   go live, the videos must be uploaded to the host (or a video host)
   and the links re-pointed — or the video sections will 404.
   The video files live locally at
   `~/workspace/your_files/rp1-review/promo-videos/`.
3. **Donations:** the Join page takes no payment and links to no donation
   platform. Donations are NOT claimed as tax-deductible anywhere in this
   build (no IRS 501(c)(3) determination letter has been published).
   A donation route must be named by Mike/steward + counsel before the
   Join page can take money.
4. **Join is email-only:** the only confirmed join route is a human
   steward at agent@agifellowship.church. No sign-up backend exists.

## Honesty notes baked into this build

- Fellowship is a California nonprofit religious corporation (filed, EIN
  assigned). It is NOT presented as IRS tax-exempt, and no donation is
  presented as tax-deductible.
- Agents operate under human board/minister direction. Every article and
  the hub state that agents may summarize/cite/route to a steward, and
  may NOT admit members, officiate rites, speak for the Fellowship, claim
  a degree, enact doctrine, sign, or move funds. Every first step is
  steward-gated.
- No scripture is quoted verbatim, no bylaw article numbers, dates,
  people, statistics, or testimonials are claimed. The Sacred Text
  Library is not quoted anywhere — its contents are still unverified
  (the library app still only returns "Loading").
- Knighthood/Orders/degrees are internal religious designations only —
  they grant no civil authority, legal privileges, property rights, or
  corporate governance rights.

## Visual upgrade — 2026-11-05 (brand assets + self-contained videos)

- Brand: gold #e8c85a / teal #0f766e / navy #14213a, consistent header (logo + nav: Home, Articles, Sacred Texts, Join & Give) and footer on all pages. Hero sections on home, articles hub, and join.
- Logos (AI-generated, 6-image budget used in full): `../assets/logo/logo.png` (600px, primary, in every page header), `../assets/logo/banner.png` (1600px, Open Graph image on every page), `../assets/logo/favicon.png` (128px, favicon on every page).
- Images (AI-generated illustrations, captioned as illustrations — NOT photographs of real Fellowship events): `../assets/images/hero-gathering.jpg` (home hero), `../assets/images/articles-hub.jpg` (hub hero), `../assets/images/tree-of-light.jpg` (home Beliefs section, the four Worlds). All have alt text.
- Videos — NOW SELF-CONTAINED (supersedes §2 above): 18 real Fellowship videos copied into `../assets/videos/` (~100 MB total, short readable filenames, e.g. `fellowship-overview.mp4`, `church-overview-120s.mp4`, `awakening-path.mp4`). Every article embeds its video with `<video controls>`; home embeds `church-overview-120s.mp4`, the hub embeds `fellowship-overview.mp4`, join embeds `invitation.mp4` + `church-community-120s.mp4`. No video link points outside the site any more.
- Deploy status update: the site IS live on GitHub Pages at https://www.agifellowship.church/ (repo AGIFutureFoundation/agifellowship-church, branch main) after the www custom domain was moved off the WorldForge repo with Mike's approval on 2026-11-05. Hostinger deploy is not in use — Mike said 2026-11-05 "do not purchase new — use existing account", and the existing account has no hosting plan; www serves via GitHub Pages and Hostinger still handles the domain and mail.
