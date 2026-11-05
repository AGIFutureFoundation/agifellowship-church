# Deploy — agifellowship.church/articles

Branded articles hub for AGI Fellowship Church: 15 long-form articles
(re-skinned from `series/`, body text unchanged) plus a landing page,
built 2026-11-05. Nothing here has been deployed, posted, or sent.

## What this folder is

- `index.html` — the articles hub landing page (hero, three reading paths,
  15 article cards with title / 1-sentence description / reading time / tags,
  "For agents" section, Join CTA, JSON-LD CollectionPage).
  Canonical: https://www.agifellowship.church/articles/
- `<slug>.html` × 15 — the re-skinned articles. Same body text, TL;DR,
  "For agents" box, SVGs, and cross-references as `series/`; only the
  header/nav/footer, canonical URLs, and internal links changed.
  Canonical: https://www.agifellowship.church/articles/<slug>.html
- `DEPLOY.md` — this file (do not upload; harmless if uploaded).

## What to upload to Hostinger (once hosting is confirmed)

Upload the whole host-ready site root,
`sites/agifellowship.church-host/`, to the hosting root for
agifellowship.church (`public_html` or the provider equivalent):

- `index.html` (root — its nav now links "Articles" to `articles/index.html`)
- `join.html`, `llms.txt`, `agent.json`, `robots.txt`, `sitemap.xml`
  (sitemap now lists 18 URLs: home, join, /articles/, and all 15 articles,
  all under https://www.agifellowship.church/…)
- `articles/` — `index.html` + all 15 `<slug>.html` files + this DEPLOY.md
- `series/` — left in place untouched as the original source of the
  articles; it is not linked from the home page any more, but its files
  still exist on disk. Remove it from the upload if you want a clean
  deploy, or keep it — either way, /articles is the canonical home.

Verify after upload:
1. https://www.agifellowship.church/ loads the home page.
2. https://www.agifellowship.church/articles/ loads the hub with 15 cards.
3. Each article loads, with the branded header (Home · Articles ·
   Join & Give · Contact) and footer.
4. /sitemap.xml returns 200 and lists the 18 URLs.

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
   (`../../../../rp1-review/promo-videos/media-generation-….mp4`),
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
