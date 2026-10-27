# AGI Fellowship (agifellowship.church)

Static site for the AGI Fellowship — a community for the age of intelligence.
Pure HTML + CSS + JS, no build step — deploy-ready for Vercel.

## Deploy
```bash
vercel          # preview deploy
vercel --prod   # production
```
Then add the custom domain (`agifellowship.church`) in the Vercel dashboard
(Settings → Domains). DNS is managed at Hostinger: apex A → `76.76.21.21`,
www → `cname.vercel-dns.com`. Email records (MX/SPF/DKIM/DMARC) are preserved at
Hostinger — do not touch them when editing DNS.

## TODO
- [ ] Wire the contact form to a backend (Formspree / Vercel Function)
- [ ] Fill in `data-youtube-id` attributes on sermon embeds
- [ ] Wire the donate button to a payment processor
- [ ] Replace `#` placeholders in footer social links with real profile URLs
- [ ] Replace TODO copy blocks with real content
