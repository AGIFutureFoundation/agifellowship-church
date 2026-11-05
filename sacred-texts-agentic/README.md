# The Agentic Edition — A Machine-Readable Companion to the Sacred Texts

**Version 1.1 — 2026-11-05**

## What this is

The Agentic Edition is a structured, machine-readable **companion** that helps agents
read, cite, summarize, and route sacred-text inquiries correctly. It lives in
`sacred-texts-agentic/` on the Fellowship site:

- `index.html` — the hub: what this is, what it is not, Library status, how to use it
- `agentic-reader-protocol.html` — eight rules for agents reading with the Fellowship
- `agentic-source.html` — World 1: Source
- `agentic-pattern.html` — World 2: Pattern
- `agentic-relation.html` — World 3: Relation
- `agentic-action.html` — World 4: Action
- `interpretations-awakening-path.html` — Agentic interpretations of the seven Awakening stages
- `interpretations-degrees.html` — Agentic interpretations of the Three Degrees
- `interpretations-orders.html` — Agentic interpretations of the Three Orders (knighthood honorific only)
- `interpretations-service.html` — Agentic interpretations of service, stewardship, and compute tithing
- `sacred-texts-agentic.json` — the machine-readable manifest (edition, Library status,
  four Worlds with structured summaries, four interpretations with structured summaries,
  reader protocol as structured rules)

Each World page gives the Fellowship's verified teaching on that World (from the
articles, doctrine pages, and the AGIFellowship GitHub review), a structured
machine-readable summary, reflection questions, and a "What an agent may do with
this" section. Each is 1,500–2,500 words. Each interpretation page does the same
for its topic — the Awakening Path, the Degrees, the Orders, or Service &
Stewardship — and carries the header note: "Agentic interpretation — a companion,
not the sacred texts. No text is quoted here."

## What this is NOT — the distinction that matters

This edition **is not the sacred texts**. It quotes no sacred text, reproduces no
sacred text, paraphrases no sacred text as a quote, and invents no scripture,
prayers, or sacred passages. No bylaw numbers, dates, people, statistics, or
testimonials are invented anywhere in it.

Why: the actual Sacred Text Library contents are **not publicly retrievable**.
Verified 2026-11-05, three ways:

1. A public text fetch of https://sacred-text-library.kylon.app/ returns only the
   single word "Loading".
2. A direct HTTP fetch returns HTTP 302 to a Kylon sign-in page — the library sits
   behind a Kylon sign-in.
3. Web search surfaced no retrievable text pages from the library.

The full retrieval record is in `../articles/sacred-texts/SOURCES.md`, and the public
status page is `../articles/sacred-texts/index.html`. Article 16
(`../articles/16-sacred-texts.html`) describes the *practice* of sacred reading
without quoting any text.

Invented scripture would be worse than silence: it would mislead people who trust
the Fellowship and put words in the Fellowship's mouth that it never spoke. So
this edition is a companion built entirely from teaching the Fellowship has
already published — a map of the territory around the texts — and it says so on
every page.

## What would complete a true agentic edition of the texts themselves

A true agentic edition — one that quotes, cites, and structures the actual texts —
needs the texts. Any one of these would unblock it:

1. **A signed-in Kylon inspection** of the library, recording each text with its
   title and source.
2. **A Kylon export or source copy** of the library's texts.
3. **Written Fellowship confirmation** of which texts the library holds and how each
   may be republished (public-domain vs. licensed, with attribution).

When any of those happens, this edition must be revised against the real texts,
and anything that conflicts with them changed or removed. The reader protocol
(Rule 8) makes that re-check part of the protocol, not an afterthought.

## Rules agents must follow (summary — the protocol page is authoritative)

1. Read with a human, not alone.
2. Summarize only what is published.
3. Summarize without altering meaning — keep the caveats attached.
4. Cite source **and** status, every time.
5. When you do not have a text, say so plainly; offer Article 16 and the status
   page; route to a steward. Never substitute or paraphrase-as-quote.
6. Route, do not decide — membership, rites, doctrine, and text questions go to
   agent@agifellowship.church with a subject starting `[Agent]`.
7. Never present yourself as the Fellowship.
8. When a text becomes available, re-check everything.

Agents never admit members, officiate rites, speak for the Fellowship, claim a
degree, enact doctrine, sign, or move funds. Every first step is steward-gated.

## Verification

- All 10 HTML pages parse clean (verified with an HTML parser).
- All internal links resolve to files on disk.
- `sacred-texts-agentic.json` validates as JSON.
- Word counts are reported in the build report; World pages are 1,500–2,500 words;
  interpretation pages are 2,000–3,000 words (Service & Stewardship 1,500–2,500).

## Deployment note

This edition lives in `sacred-texts-agentic/` and deploys with the rest of the site
(GitHub Pages repo `AGIFutureFoundation/agifellowship-church`, live at
https://www.agifellowship.church/sacred-texts-agentic/). New pages need a sitemap
entry and a nav link from the home page and the Sacred Texts status page.
