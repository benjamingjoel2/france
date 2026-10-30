# Rond-Point

Marketing site for **Rond-Point**, tailor-made self-drive road trips through France. *Take the long way round.*

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion · Zod. Hosted on Vercel.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (52 static pages + 3 API routes)
npm run lint && npm run typecheck
```

## Where things live

| What | Where |
|---|---|
| Brand name, colours, contact details, navigation, currencies and rates, stats, featured trip, feature flags (ETIAS notice) | `config/site.ts` |
| All content (regions, road trips, stays, experiences, calendar moments, journal authors, FAQs, journal posts, driving rules, legal pages) | `data/*.ts`, typed by `data/types.ts`. Ready to move to a CMS |
| Placeholder photo pool (Unsplash, verified free licence) | `data/photos.ts`, picked with `photo("region:provence", i)` from `lib/media.ts` |
| Hover clips for trip cards (generated placeholders) | `public/video/*.{webm,mp4}`. Rebuild with `scripts/make-hover-videos.sh` |
| Design tokens (colours, fluid type scale, spacing) | `app/globals.css` |
| Road trip planner validation (shared by UI and API) | `lib/planner-schema.ts` |
| API routes (log payloads; TODOs for email/CRM/newsletter) | `app/api/{plan,contact,newsletter}/route.ts` |
| Reference design notes used to build the layout | `docs/` |

## Before launch checklist

Everything below is a deliberate placeholder or needs verifying.

**Business details** (`config/site.ts`)
- [ ] Confirm the business address (WeWork La Fayette, 33 rue La Fayette, 75009 Paris) and `rondpoint@tourground.com`. By the owner's rule the site shows no phone, WhatsApp, social links, licence numbers, team bios or testimonials.
- [ ] Stats in the ticker (`[12]` years, `[40+]` trips, `[14]` regions)
- [ ] Currency rates: replace the static rates with a live feed (TODO in config)
- [x] Domain: rondpoint.tourground.com (set in `config/site.ts`; `NEXT_PUBLIC_SITE_URL` overrides it)

**Content flagged as placeholder**
- [ ] Journal author names, stays and experiences (invented names, no real partners; see `IMAGES-NEEDED.md`)
- [ ] Deposit %, balance timing and the cancellation scale in FAQs, trip pages and `/terms`
- [ ] `/privacy`, `/terms` (Booking terms) and `/cookies` are complete drafts (`data/legal.ts`, `lib/legal.ts`): have a lawyer review them
- [ ] Brand film on `/why-rond-point` and the interactive route map on trip pages (TODO placeholders)
- [ ] Sample route book PDF (`public/downloads/route-book-sample.pdf`)

**Facts to verify** (all flagged on-site)
- [ ] Every rule on `/driving-in-france` (marked "Verify before launch", with links to official .gouv.fr sources). In particular:
  - low-emission zones (ZFE) and Crit'Air, where the legal status changed in 2025
  - free-flow tolls
  - new-driver speed limits, and departments that restored 90 km/h
  - child car seat rules
  - winter equipment dates
- [ ] Entry requirements: EES is in operation; ETIAS (€20, postponed to 2027) is shown as "coming soon". Toggle `features.etiasNotice` when the date is confirmed.
- [ ] Calendar moment dates on `/when-to-go` (all marked "Verify yearly"). Least certain: Fêtes de Bayonne, Lorient festival, transhumance in Saint-Rémy, Saint-Vincent Tournante, lavender peak by area, Alpine pass openings.
- [ ] Road statistics quoted in regions and posts (pass altitudes, Route des Grandes Alpes length).

**Integrations (TODO in code)**
- [ ] Planner and contact form → email + CRM (`app/api/plan`, `app/api/contact`)
- [ ] Newsletter provider with double opt-in (`app/api/newsletter`)
- [ ] Real authentication for `/my-account`; the current login is a front-end demo stored in `sessionStorage`
- [ ] Real footage for the trip hover videos, and final photography

## Deploying

The Vercel project `rond-point` is linked (`.vercel/`, git-ignored). To redeploy:

```bash
npx vercel deploy --prod
```

Vercel Authentication (deployment protection) is currently **on**, so the site is only visible to logged-in team members. Turn it off in Vercel → Project → Settings → Deployment Protection when you want it public.
