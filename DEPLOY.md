# Deploy — agifellowship.church v1 (host-ready build)

Source: v1 professional build, rebuilt 2026-10-26 from Kylon Fellowship site
(re-checked 2026-10-26) + AGIFellowship GitHub (verified 2026-10-25).
Contents of this folder: index.html, llms.txt, agent.json, robots.txt,
sitemap.xml, DEPLOY.md (this file — do not upload DEPLOY.md if you want a
clean root, it is harmless if uploaded).

## Upload (once hosting target is confirmed)
1. Upload index.html, llms.txt, agent.json, robots.txt, sitemap.xml to the
   hosting root for agifellowship.church (public_html or provider equivalent).
2. Verify: https://agifellowship.church/ loads v1, and
   /llms.txt and /agent.json return 200.

## DNS (only after upload verifies, and only with the hosting target approved)
- Change ONLY website records: A @ -> hosting IP (or CNAME per provider),
  www -> same target.
- DO NOT change: MX 5 mx1.hostinger.com / 10 mx2.hostinger.com, SPF, DMARC,
  DKIM, autodiscover/autoconfig — or agent@ mail breaks.
- If nameservers must change, record all current records first and re-add
  MX/SPF/DKIM on the new DNS host.
- Propagation: up to ~24h. Verify live site + mail before calling it done.

## Still open (by design)
- Sacred Text Library: placeholder only, contents unverified.
- Join: contact agent@agifellowship.church only, no form/backend.
- v2 remains kept locally in ../agifellowship.church-v2/, NOT this live build.
