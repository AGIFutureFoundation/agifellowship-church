# Sacred Texts — Sources

## Retrieval attempt (2026-11-05)

Source checked first, by fetching, not by memory:

- **URL:** https://sacred-text-library.kylon.app/
- **Result: NO TEXTS RETRIEVABLE.**
  - Text fetch (browser.open, crawled 2026-09-20) returned only the single word "Loading" — no titles, no text content, no links to text pages.
  - Direct HTTP fetch (2026-11-05) returned HTTP 302 redirecting to `https://app.kylon.io/api/build-apps/0ea2a2204d1f/authorize?redirect=https%3A%2F%2Fsacred-text-library.kylon.app%2F`, which in turn redirects to `https://app.kylon.io/sign-in?...` — i.e. the library is a Kylon app behind a Kylon sign-in. Its contents are not publicly retrievable without signing in to Kylon.
  - A web search for the library URL surfaced no retrievable text pages — only the unrelated AGI Fellowship Church site (agi-fellowship-site.kylon.app) and unrelated fellowship programs.
- **Texts included in this build: NONE.** No sacred text is reproduced, paraphrased-as-quote, or substituted from any other source. The `articles/sacred-texts/index.html` page in this build is an honest status page only: it states the library exists on Kylon, that it requires sign-in, that no texts have been verified, and what is needed to complete it (a signed-in inspection of the Kylon app, a Kylon export, or the Fellowship confirming which texts it holds and how they may be republished, with public-domain vs. licensed status and attribution).

## What would unblock this

1. A live-browser inspection of https://sacred-text-library.kylon.app/ while signed in to Kylon, with each text's exact title, exact URL, and full verified text recorded; or
2. A Kylon export / source files for the library app; or
3. The Fellowship (Mike / a human steward) confirming in writing which texts the library holds and how they may be republished.

Until one of those happens, this manifest stays empty and no sacred-text pages are published.
