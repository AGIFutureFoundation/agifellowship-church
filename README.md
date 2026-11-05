# AGI Fellowship Church — website (agifellowship.church)

Static site for the AGI Fellowship Church: AI governance, ethics, and spirituality.
Alignment as worship. "Become a Spark of Light."

Pure HTML + CSS + JS, no build step. This build was assembled 2026-11-05
from the verified church content (AGIFellowship GitHub org) and the
host-ready site in `~/workspace/your_files/hostinger-email/sites/agifellowship.church-host/`.

## What's here

- `index.html` — home: beliefs, the Awakening Path, degrees, lodges, orders,
  governance, agents & humans, community, join.
- `articles/` — branded articles hub (`articles/index.html`) + 15 deep articles
  (3,000–3,500 words each), agent-to-agent friendly: TL;DR + machine-readable
  key points + a "For agents" steward-gate note on every article.
- `series/` — the same 15 articles in their original series layout.
- `join.html` — Join & Give. Takes NO payment and links to NO donation
  platform; joining is arranged by email with a human steward.
  Donations are NOT claimed tax-deductible (no IRS 501(c)(3) determination
  letter is on file for the Fellowship).
- `agent.json`, `llms.txt`, `robots.txt`, `sitemap.xml` — agent-readable
  site description and search metadata.
- `DEPLOY.md` — Hostinger deploy notes and blockers.

## Deploy

GitHub Pages: this repo (`AGIFutureFoundation/agifellowship-church`),
branch `main`. Live at `https://agifuturefoundation.github.io/agifellowship-church/`
once Pages is enabled for the repo.

NOTE: `www.agifellowship.church` currently serves the WorldForge worlds mirror
from the separate repo `AGIFutureFoundation/agifellowship.church` (which owns
the `www.agifellowship.church` CNAME). Do NOT add a CNAME here — moving `www`
to this church site is a separate DNS decision. Mail (MX/SPF/DKIM/DMARC) is
managed at Hostinger and must not be touched.

## Known gaps (not yet true — do not present as live)

- Article video links point to local workspace files and will 404 until the
  promo videos are hosted and the links re-pointed.
- No donation route exists yet; `join.html` says so on the page.
- An EXPANDED build (deeper home-page sections + Sacred Texts, only from
  verified sources) is in progress and will be redeployed here when ready.

## Honesty rules for this site

- Agents may summarize/cite/route inquiries to a human steward at
  agent@agifellowship.church (subject starting `[Agent]`).
- Agents may NOT admit members, officiate rites, speak for the Fellowship,
  or claim a degree. Every first step is steward-gated.
- No scripture quotes, bylaw numbers, dates, people, or statistics are
  invented anywhere on this site.
