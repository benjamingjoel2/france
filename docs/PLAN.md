# Rond-Point — Build plan (for approval)

> "Take the long way round."
> This plan maps every section of the reference site onto Rond-Point content. Detailed measurements for each reference page
> are in `docs/reference-map-*.md`. Everything gets rebuilt from scratch: no reference code, assets, fonts or wording.

---

## 0. Design system

### 0.1 Tokens (reference → Rond-Point)

| Role | Reference | Rond-Point token |
|---|---|---|
| Light page background | cream `#F2F0E8` | `cream` `#F5EFE2` (warm cream) |
| Dark section background | charcoal `#242421` | `charcoal` `#25252A` |
| Deepest background (hero, ticker, big CTA) | black `#121211` | `night` `#141418` |
| Raised panel / row hover / pill | `#2F2F2C` | `charcoal-5` `#2F2F35` |
| Input / card / dropdown | `#3A3A37` | `charcoal-10` `#3B3B42` |
| Muted text | `#B6B4AE` | `mist` `#B9B5C4` (lavender-tinted grey) |
| Dim text | `#797874` | `dim` `#7C7A85` |
| Strike / sub-heading | `#50504D` | `ash` `#54525C` |
| Star rating | `#FFC166` | `sunflower` `#F4C21C` |
| Card mats, map tooltips (the reference's per-tour colours) | dusty pink, sage, slate, teal… | **brand palette**: `lavender` `#8E7CC3`, `sunflower` `#F4C21C`, `roadsign` `#1D4E9E`, `vineyard` `#4E6B35`, plus tints `lavender-300` `#C9BEE6`, `vineyard-300` `#A9BC8B` |
| Error | `#BD5F59` | `brick` `#C0584F` |
| Road-sign accent (sparingly) | — | `roadsign` background + white text (used on the "exit" labels and the Atout France badge) |

Hairlines are `rgba(cream,.15)` on dark backgrounds and `rgba(charcoal,.15)` on cream. Easing is `cubic-bezier(.645,.045,.355,1)` throughout, at 0.3s (UI) or 0.5s (rows and panels).

### 0.2 Fonts (Google Fonts, chosen to look like the reference's)

| Reference | Role | Rond-Point (Google Fonts) |
|---|---|---|
| Ginto Normal Black | Display H1/H2, uppercase, lh .8, ls -.02em | **Archivo** variable, wght 900, wdth 100 |
| Ginto Nord Condensed Medium | Sub-display, uppercase, lh .9, ls -.03em | **Archivo** wght 600, wdth 62 (condensed axis) |
| Ginto Nord Ultra | Wide poster titles on cards and people | **Archivo** wght 900, wdth 125 (expanded axis) |
| Aeonik Fono (Light/Regular) | Body 15px/1.5 and UI labels 13px uppercase | **DM Mono** 300 / 400 |

All of these are loaded from one Archivo variable file plus DM Mono through `next/font/google`, with no layout shift.

### 0.3 Type scale (fluid `clamp()`, same as the reference)

| Step | 1440px | 390px | Use |
|---|---|---|---|
| sm | 11.9px | — | breadcrumbs, legal |
| ui | 13.2px | 12.25px | uppercase labels and buttons |
| base | 15px | 14px | body |
| md | 19.8px | 16.5px | accordion labels |
| lg | 26.2px | 19.3px | condensed titles |
| xl | 35px | 22.7px | condensed titles |
| 2xl | 47px | 26.7px | condensed titles |
| 3xl | 64px | 31.4px | display |
| 4xl | 87.4px | 36.8px | display |

### 0.4 Spacing and grid

- **Container gutter:** `max(1rem, 3vw)`, which is 43px at 1440 and 16px on mobile.
- **Grid:** 12 columns with a 21.6px gutter.
- **Section padding:** 2xl 94px, xl 70px, lg 52px, md 26px. These scale fluidly too.

### 0.5 Primitives

- **Pill buttons** (44 or 59px tall):
  - `solid-cream`: hover goes to mist.
  - `solid-charcoal`: for cream backgrounds.
  - `stroke`: hover fills.
  - `sign`: white on road-sign blue.
- **Square arrow box** (40, 47 or 59px): a hairline border. On hover a fill wipes in and the icon inverts.
- **Plus-heading eyebrow:** "+ LABEL", where we swap the "+" for our **mini roundabout glyph** (a small ring).
- **Breadcrumbs strip:** › separators with an animated underline.
- **Filter pills:** 40px, in inactive, hover and active states. On mobile they collapse to a "≡ FILTER" accordion that opens with `grid-template-rows 0fr→1fr`.
- **Carousel controls:** two square buttons plus a 1px progress or scrollbar line, which can be dragged.
- **Accordion:** the + rotates 45° into ×, and only one item is open at a time.
- **Inputs (dark):** 67px tall, `charcoal-5` fill with a `charcoal-10` border. On focus the fill turns charcoal and the border turns cream. Errors use `brick`.
- **Dropdown:** a cream chevron circle. **Multi-select:** round checks. **Checkbox:** a 26px square.

### 0.6 Motion (Framer Motion)

- **SplitWords heading reveal:** words rise from 100% with a stagger, triggered on view at 75%.
- **Fade-up reveal:** y 40→0 with opacity, 0.4s, stagger 0.15.
- **Image reveal:** clip-path `inset(0 0 100% 0)`→`inset(0)` while the image scales 1.4→1.
- **Hero background parallax:** the image moves at 0.2× scroll speed.
- **Marquee ticker.**
- **Menu:** a clip-path wipe from top to bottom, with the image panel 0.1s behind.
- **Sticky header:** gains a background and shadow after scrolling.
- **Reduced motion:** `useReducedMotion()` turns all of the above into simple fades or nothing. Hover videos are off, and the marquee is paused.

---

## 1. Global chrome

| Reference | Rond-Point |
|---|---|
| **Header** (fixed, 75px; 56px on mobile; transparent over heroes, charcoal plus shadow once scrolled). Left: "≡ MENU" with a hairline divider. Centre: logo. Right: "MY ACCOUNT" and a "CONTACT US" pill | Left: "≡ MENU". Centre: the **Rond-Point logo**, a text wordmark "ROND·POINT" in Archivo expanded next to a circular mark (a ring with 4 exit ticks and a dot "car"). Right: **currency switcher** (EUR ▾, with USD, GBP, CAD and AUD), "MY ACCOUNT", and a **"PLAN MY ROAD TRIP"** pill (it shortens to "PLAN" on mobile) |
| **Full-screen image menu**: left 50% charcoal with 7 giant links. Hovering one dims the others to 25% and crossfades the right-hand photo. The current page shows as outlined text. Socials sit below, joined by dashes. On mobile everything is centred, there are no images, and a "MY ACCOUNT" bar sits at the bottom | Links: **Self-drive · Drive & e-bike · When to go · Our specialists · Journal · Why Rond-Point · Contact**, each with its own France photo. Utility links are My account and Contact us, plus the currency switcher and a "Plan my road trip" pill. The behaviour matches the reference: focus trap, Esc to close, and scroll lock |
| — | **Floating WhatsApp button** at bottom-right: a sunflower circle linking to `wa.me/[NUMBER]` from config, labelled "Chat to your specialist" |
| **Footer CTA**: "LET'S START AN ADVENTURE" plus a Contact pill | "LET'S TAKE THE LONG WAY ROUND" with a **Contact us** pill |
| **Newsletter row**: condensed heading, name input, email input and a square arrow button | "NEWSLETTER SIGN UP: POSTCARDS FROM THE BACK ROADS". Submits to `/api/newsletter` (logs the payload, with a TODO for the provider) |
| **Info columns**: company text, phones/email, "Explore" links, and partner logos on the right | Columns: **[COMPANY NAME]** with registered office placeholders, phone and email placeholders, and an "Explore" link list. On the right sit two **badges**: "Atout France registration [IM NUMBER]" and "Financial guarantee: [GUARANTEE PROVIDER]" (road-sign blue) |
| **Social icons** joined by dashes, then a hairline and the legal links | Instagram, Facebook, YouTube, Pinterest and email (our own inline SVGs). Legal links: Privacy · Terms · FAQ · Driving in France |

---

## 2. Homepage (`/`): same section order as the reference

| # | Reference section and layout | Rond-Point content |
|---|---|---|
| 1 | **Hero**: 100vh, `night` background with the photo and a dark bottom gradient. Bottom-left: a "+ BRAND" eyebrow and a 4xl 2-line display headline (split-word reveal). Bottom-right: a cream pill linking the featured tour | Eyebrow "ROND-POINT ROAD TRIPS". Headline **"LAVENDER ALL / THE WAY."** Pill **"IN PROVENCE NEXT SUMMER"** → `/road-trips/provence-lavender-hilltop-villages`. Photo: lavender field with a road. All of this is driven by `config.featuredTrip` |
| 2 | **Mission**: charcoal. Eyebrow "OUR MISSION" plus a 2xl condensed statement at col 7–12. Below: a square image (cols 1–4) and a 3:2 image bleeding off the right (cols 7–12), both with image-reveal | "We believe the best of France lives between the dots on the map. So we design road trips that take the long way round: vineyards, villages, coastlines and mountain passes, and bring you back to where you started, changed." Images: a couple at a café terrace with a car, and a coastal corniche road |
| 3 | **Stats ticker**: a `night` band, 53px tall, with a scrolling uppercase marquee separated by • | "**[12] YEARS** ON THE BACK ROADS • **[40+] ROAD TRIPS** • **[14] REGIONS** • ONE SPECIALIST ON WHATSAPP THE WHOLE WAY •". The numbers come from `config.stats`, each with `placeholder: true` (a dev-only outline shows which are placeholders) |
| 4 | **NEW: Roundabout selector** (signature section), styled in the reference's system: cream background, py-2xl, a 3xl heading and a two-column layout | See §2.1 below |
| 5 | **Featured tours carousel**: cream. Eyebrow plus a 3xl heading on the left and intro text at cols 9–12. 3-up slider of 7:10 poster cards. Controls: square arrows plus a progress line | Eyebrow "EXPLORE OUR ROAD TRIPS". Heading **"FEATURED ROAD TRIPS"**. Intro "Twelve loops, a thousand ways to get lost on purpose." All 12 trips, using the card in §2.2 |
| 6 | **Full-width CTA** (`fwcta`): 810px photo with a 3xl heading, a hairline, a paragraph on the left and a pill on the right | **"WHEN TO GO"**: "Lavender peaks in early summer, grapes come in around September, and Alsace lights up in December. Time it right and France does half the work." Pill **"VIEW THE CALENDAR"** |
| 7 | **Why us**: charcoal. Two staggered images on the left (image-reveal). A 2xl condensed statement on the right, then a paragraph and a "Find out more" pill | Eyebrow "WHY ROND-POINT". "**ROND-POINT WAS BORN FROM A LOVE OF THE BACK ROADS AND A DESIRE TO DO ROAD TRIPS BETTER.**" Paragraph: real local knowledge in every route, hand-picked stays, a route book worth keeping, and one specialist on WhatsApp. Pill "FIND OUT MORE" → `/why-rond-point` |
| 8 | **Stories list**: cream. 4xl heading, intro and a pill at cols 9–12. Full-width numbered rows: 01 index, 35px display title, square arrow on the right. Hover fills the row charcoal, turns the text cream and inverts the arrow | **"THE JOURNAL"**: "Dispatches from the passenger seat." The latest 4 posts, plus "VIEW ALL POSTS" |
| 9 | **Destinations**: charcoal. Centred eyebrow and 3xl heading. A world map with coloured pins and hover tooltips (desktop only) | Eyebrow "OUR REGIONS". **"PICK A CORNER OF FRANCE"**. An SVG **outline map of France** with 14 coloured pins and tooltips, plus (requested) a **regions list with image hovers**: full-width rows of region names where hovering shows a floating, cursor-following 4:5 photo. The list is also the mobile version (the reference hides this section on mobile; we keep it) |
| 10 | **Reviews slider**: cream. Text on the left (eyebrow, quote glyph, xl condensed title, paragraph, "NAME, COUNTRY – TRIP" and stars). Image on the right, bleeding off the edge, with a vertical "01 / 06" counter and a stacked cream nav box. Synced text and image transitions | 6 reviews from `data/testimonials.ts`, each with a small **"SAMPLE REVIEW – PLACEHOLDER"** tag. Sunflower stars |
| 11–13 | Footer CTA, newsletter and footer (§1) | as §1 |

### 2.1 Roundabout selector (signature interaction)

- **Layout:** left cols 1–6 hold an SVG roundabout about 560px across: an outer ring "road", a dashed centre line, a central island with the Rond-Point mark, and **14 exit arms** radiating out. Each arm ends in a road-sign-blue label: "1st exit: Provence", "2nd exit: Loire Valley", and so on, plus a 15th lavender arm, **"Keep circling: not sure yet"**.
- **Right panel** (cols 7–12):
  - The chosen region's name (3xl), its "best time" line and a 1-line pitch.
  - 1–3 compact road-trip cards (16:10 image, title, pace and days tags).
  - "Explore {region}" and "Plan my road trip" pills.
  - "Keep circling" instead shows the 3 most popular trips plus a link to the planner with `?region=help`.
- **Motion:** a small car dot drives round the ring (Framer `animate` along the arc, taking the shortest path) to the chosen exit. That exit arm highlights in sunflower, and the right panel crossfades. With reduced motion, the dot jumps and the panel just swaps.
- **Accessibility:**
  - The SVG is `aria-hidden`.
  - The real control is a visually integrated **`role="radiogroup"`** of 15 buttons positioned on the arms, with `aria-checked`, roving tabindex and ←/→/↑/↓/Home/End keys.
  - The panel is an `aria-live="polite"` region.
  - **List fallback:** below md (and with no JS) it renders as a vertical list of "exit" chips plus the same panel.

### 2.2 Road-trip poster card (shared by the homepage, trip-type pages, regions and related trips)

- **Image:** 7:10. Variants are `full-bleed` and `framed` (a mat in one of the brand colours: image inset 22px, with 65px on the right).
- **Poster title:** real text over the image. Font choices are `wide` (Archivo expanded), `mid` (Black) and `narrow` (condensed), plus a size and an alignment, all set per trip in data.
- **Vertical edge tag:** "PROVENCE | SELF-DRIVE", rotated 90°.
- **Below the image:** the region in lg condensed, then a details row: a **pace glyph** (our own 13px pixel glyph: Gentle = 1 dot, Balanced = 2, Ambitious = 3), "BALANCED · ~3H DRIVING/DAY" • "8 DAYS / 7 NIGHTS".
- **Hover (desktop, fine pointer only):** a lazy-loaded muted looping `<video>` fades in over 0.3s and the title gets a 20% tint. The video `src` is only attached on first hover. There is no video on touch devices, with `prefers-reduced-motion`, or with Save-Data, where a static second image shows instead.

---

## 3. Trip-type pages (`/self-drive`, `/drive-and-e-bike`) ← reference MTB / E-MTB pages

| Reference | Rond-Point |
|---|---|
| Breadcrumb strip "HOME › MTB" | "HOME › SELF-DRIVE" |
| Intro: a 4xl 2-line H1 on the left, intro text at cols 9–12, bottom-aligned | **"SELF-DRIVE / ROAD TRIPS"** with "Your car, your playlist, our route." / **"DRIVE & / E-BIKE"** with "Park up, saddle up: the best bits of France at 25km/h." |
| Filter bar: a hairline, then single-select level pills (MixItUp) that collapse to a FILTER accordion on mobile | **Expanded, as requested**: dropdown pills (the reference calendar's dropdown-pill pattern) for **Region**, **Days** (≤5, 6–8, 9–12, 13+), **Pace** (Gentle / Balanced / Ambitious), **Interests** and **Budget** (per person, in the selected currency), plus "CLEAR ALL". Groups combine with AND and values within a group with OR. The filter state is kept in the URL query. Framer `AnimatePresence` + `layout` gives the fade-and-slide reflow. If nothing matches: "No exits match. Keep circling?" with a reset |
| 3-column staggered poster grid (middle column +47px). 1 column on mobile | Same, with the **stagger worked out from the visible index** (which fixes the reference's quirk after filtering) |
| Cross-sell band: charcoal-10. H2 plus a paragraph and "Find out more" on the left, a 3:4 image on the right | Self-drive ↔ Drive & e-bike cross-link |
| Full-width "Tour calendar" CTA | "When to go" CTA |

---

## 4. Road-trip page (`/road-trips/[slug]`) ← reference tour page

| # | Reference | Rond-Point |
|---|---|---|
| 1 | **Tall hero** (797px): breadcrumbs, a location-pin eyebrow, a centred 4xl H1, a parallax 3:2 background with gradients melting into charcoal | "📍 PROVENCE" with H1 "LAVENDER & HILLTOP VILLAGES" |
| 2 | **Sticky bottom bar** (74px, `night`): section links with scroll-spy on the left, "BOOK NOW" and "ASK A QUESTION" pills on the right. On mobile, just the two buttons at 50/50 | Links: OVERVIEW · ROUTE · DAY BY DAY · STAYS & EXPERIENCES · WHAT'S INCLUDED · DATES & PRICES · REVIEWS. Buttons: **"ENQUIRE"** → planner prefilled with `?trip=slug`, and **"ASK A QUESTION"** → WhatsApp |
| 3 | **Overview**: charcoal. Key-facts list on the left (cols 1–4, hairline rows). On the right, an xl condensed lede and two-column body text | Key facts: TRIP TYPE · PACE (glyph + "~3h driving/day") · DURATION · TOTAL DISTANCE · REGIONS · START/END ("loop from Marseille") · FROM PRICE (per person, converted to the selected currency) · BEST MONTHS. The **tags row** goes here too |
| 4 | Row 2: "+ TOUR FLAVOUR" chart on the left, "+ TOUR DATES" list on the right | **"+ TRIP FLAVOUR"**: 4 horizontal bars (Driving, Food & wine, Culture, Nature, each scored 0–10) in the trip's colour. This is our own design, since the reference chart never rendered. **"+ BEST DATES"** is moved to section 9 |
| 5 | **Gallery slider**: 16:9 slides with the next one peeking, straddling the charcoal-to-cream background change | Same, with 5 photos per trip |
| 6 | **Highlights**: cream. A list with square bullets and dashed separators, plus an asymmetric 2-photo collage | Same |
| 7 | **NEW: Route** (between highlights and itinerary, styled like the reference's cross-sell band). An H2 "THE ROUTE" | A **route map placeholder**: a stylised SVG loop drawn through the stops on a France outline, with a stroke-draw animation and a "TODO: real map" note. Next to it, the stops listed with km |
| 8 | **Itinerary carousel**: charcoal. The intro is the first slide, then day cards that step up and down, with ~2.3 visible | **"DAY BY DAY"**. Each day card has: "DAY 3" (in ash), a title, the **driving distance and time** (e.g. "142 KM · ~2H15 AT THE WHEEL"), the stops, the overnight stay, and an **"E-BIKE DAY" chip** on Drive & e-bike trips. Clicking a card opens an expanded drawer instead of linking to a separate page |
| 9 | **Plan your trip**: cream. A sticky H2 plus pill tabs on the left, accordions on the right | Tabs: **WHAT'S INCLUDED** (stays, car hire, route book & app, WhatsApp support, plus excluded items) · **STAYS** (the trip's stays from data: placeholder names, style, 3:2 image) · **EXPERIENCES** · **DATES & PRICES** (season rows: date window plus price per person in the chosen currency, with "Prices are guides, tailor-made quote on request") · **FAQ** (trip-relevant FAQs) |
| 10 | **"Make this tour private"**: charcoal-10 block with a big background monogram and a slide-in drawer form | **"MAKE IT YOURS"**: "Every Rond-Point trip is tailor-made: change the stays, the pace, the car." A drawer with a short enquiry form (posts to `/api/enquiry`). The background pattern is a tiled roundabout mark |
| 11 | **Meet your guides**: a 50/50 split with a vertical card slider | **"YOUR SPECIALIST"**: the trip's specialist and local hosts (from data) |
| 12 | **Reviews** (paginated) | Trip testimonials (placeholders), plus "Average rating" |
| 13 | **Explore**: related tours carousel | "MORE LOOPS NEARBY": same region or trip type |

---

## 5. Region page (`/regions/[slug]`) ← reference location page

| Reference | Rond-Point |
|---|---|
| Tall hero with a left-aligned H1 "TOURS IN ITALY" | **"ROAD TRIPS IN PROVENCE"** |
| Intro overlapping the hero (cols 5–12): xl lede plus two-column text | Overview |
| — (new, same styling as the highlights list) | **Best time to go**: a 12-month strip (good / best / quiet) plus the linked calendar moments · **Signature roads** (the highlight-list pattern, with km) · **Food & wine** (the split image/text block from the journal article) |
| Hairline, then the staggered tours grid | Road trips in this region |
| Gallery slider | Gallery, then **Stays in {region}** (a 3-column grid of 3:2 cards) |
| Explore: article-link rows | **FAQ** (region FAQs in the same accordion) + related journal posts as link rows |
| Calendar CTA | **CTA**: "Take the {region} exit", a pill to the planner with `?region=slug` |

---

## 6. When to go (`/when-to-go`) ← reference calendar

| Reference | Rond-Point |
|---|---|
| H1 "TOUR / CALENDAR" with intro | **"WHEN / TO GO"**: "France has a season for everything. Here's when each region hits its stride." Plus a banner: "**All dates are indicative. Verify yearly** before you plan around them" |
| Dropdown filter pills (Month · Type · Region · Level) and "Clear all" | **Month · Region · Theme** (nature, food & wine, festival, culture, snow) and Clear all |
| Month headings (lg condensed). Full-bleed rows split 5 / 4 / 2 with an arrow. Hover sets charcoal-5 and rotates the arrow. Rows expand to show a 3:2 image, text and pills | Months **January → December**. Each row reads: **moment name + theme tag** · **typical window** (e.g. "late Jun – mid Jul", with a "VERIFY YEARLY" chip) · **region** · arrow. Expanding a row shows a photo, the description, and the linked road trips as pills ("VIEW TRIP") |
| Reviews slider | Same (shared component) |

---

## 7. Our specialists (`/our-specialists`) ← reference guides page

- **Hero:** "MEET YOUR / SPECIALISTS & HOSTS".
- **Intro:** a two-column text block.
- **Square grid:** 3 columns with the middle column staggered. The name font cycles **wide / condensed / black**. Images go from greyscale to colour and zoom 1.1 on hover, with a curtain reveal.
- **Sections:** **specialists** (trip designers, on WhatsApp) and **local hosts** (by region).
- **Card click:** opens the **bio modal**, the reference about-page pattern: name, role in dim, bio and "Favourite exit", with a 7:8 photo. We use a modal rather than separate bio pages to keep the scope tight. It is still deep-linkable via `?p=slug`.
- **After the grid:** the stats ticker, then the "When to go" CTA.
- **Placeholder people:** 6, all clearly marked.

## 8. Why Rond-Point (`/why-rond-point`) ← reference about page

1. **Hero:** a centred "WHY ROND-POINT".
2. **Our story:** an H2 plus the brand story (born from a love of the back roads), with the image pair (1:1 lifted, 3:2 bleeding off the right).
3. **Pull quote:** "We've never once regretted the long way round." — [FOUNDER NAME].
4. **Media band:** a 16:9 band straddling charcoal and cream (a poster image plus a play button that opens a placeholder video).
5. **Meet the team** (cream): the grid with modals.
6. **"THE DEVIL IS IN THE DÉTOUR"** accordion, with a 4:3 image bleeding off the left. Items:
   - Hand-picked stays
   - The route book
   - One specialist on WhatsApp
   - Local hosts
   - Car hire sorted
   - Financial protection (Atout France [IM NUMBER] / [GUARANTEE PROVIDER])

## 9. Journal (`/journal`, `/journal/[slug]`) ← reference stories

- **Index:**
  - "THE / JOURNAL" heading.
  - A featured split card (4:3).
  - Category pills: All, Road trip ideas, Driving in France, Food & wine, Planning. These filter client-side, with URL state.
  - A 2-column grid of 4:3 cards with a tag square, a condensed title and an arrow box.
  - Pagination is not needed for 4 posts; the component is built anyway.
- **Article:**
  - A hero with the category and a 3xl title.
  - A cream "sheet" panel inset on the left and bleeding off the right.
  - A share column ("SHARE THIS ROUTE": WhatsApp, Email, Copy link, Facebook).
  - Alternating split blocks.
  - "← ALL POSTS".
  - A "Related posts" carousel.
- **Content:** in `data/posts.ts` as typed blocks (`p`, `h2`, `h3`, `split`, `list`, `callout`, `tripLink`).
- **4 starter posts:**
  - The best road trips in France
  - How to drive a French roundabout like a local
  - Self-drive vs drive & e-bike
  - The best wine routes in France

## 10. Road trip planner (`/plan-my-road-trip`) ← reference enquiry page styling

- **Layout:** the reference's contact layout. A 4xl "PLAN MY / ROAD TRIP" H1 and intro, then **left col-5**: an eyebrow plus an xl statement **and a vertical progress indicator** (steps 1–5 shown as "1st exit: When", "2nd exit: Where", "3rd exit: Style", "4th exit: Who", "5th exit: Contact"; done / current / upcoming, with a small ring that fills). On mobile it becomes a horizontal 5-dot roundabout bar.
- **Right col-6:** the step form, built from the reference input primitives (dark 67px inputs, cream-circle dropdowns, round-check multi-selects, 26px square checkboxes, cream pill buttons).
- **Steps:**

| Step | Fields |
|---|---|
| 1. **When** | Start date; days (a 3–30 stepper or slider); exact or approximate (radio chips) |
| 2. **Where** | A **mini roundabout picker**: the same component as §2.1 in multi-select mode ("choose your exits"; `role="group"` of toggle buttons with `aria-pressed`), plus a "Keep circling: help me choose" toggle that disables and clears the picks |
| 3. **Style** | Trip type; pace; interests (multi); car type (compact, convertible, SUV, electric, plus an "automatic required" checkbox); pick-up city (+ an "other" text field) |
| 4. **Who** | Adults (stepper); children (stepper), revealing an age and car-seat question per child; stay style (château, boutique, countryside, mix); budget per person (ranges, shown in the selected currency) |
| 5. **Contact** | Name; email; phone with a country-code select; contact methods (Email, WhatsApp, Telephone; multi); notes |

- **Validation:** **Zod** schemas run per step on "Next", with inline brick errors and focus moved to the first error.
- **Saving progress:** stored in `localStorage` (`rp-planner-v1`), with "Start over".
- **Submit:** `POST /api/plan`. The route validates with the same Zod schema, `console.log`s the payload and has a `// TODO: email + CRM`.
- **Confirmation screen:** the car dot completes a full loop round the ring, then "Merci, {name}. Your specialist will be in touch within [24h]." ending with **"Take the long way round."**

## 11. Contact (`/contact`) ← reference enquiries

- **Top:** the reference layout. "CONTACT", an intro, then "TALK TO A SPECIALIST" (phone, WhatsApp, email placeholders) and "PRESS & PARTNERS" columns.
- **Below:** a short single-step form (name, email, phone, message, preferred contact method) with a big link card: "Planning a trip? Use the road trip planner →". Submits to `/api/contact`, which logs it, with a TODO.

## 12. My account (`/my-account`) ← reference login

- **Login screen:** centred "MY ACCOUNT", with two tab buttons ("YES, I'M A CLIENT" / "NOT YET") and an email/password login pill. "Not yet" links to the planner.
- **No real auth:** submitting sets a demo session in `sessionStorage` (`// TODO: real auth`).
- **Dashboard stub:**
  - "BONJOUR, [NAME]"
  - Trip summary card
  - **Trip documents** list (vouchers, car hire, insurance: placeholder rows)
  - **Route book download** button (a placeholder PDF in `/public`)
  - WhatsApp your specialist
  - Log out
- **Below:** a full-width parallax image.

## 13. Driving in France (`/driving-in-france`)

- **Structure:** a journal-article template. Each topic is an accordion block.
- **Topics:**
  - Driving on the right
  - Roundabout rules
  - Priority to the right
  - Speed limits
  - Tolls & toll tags
  - Fuel & EV charging
  - Parking
  - Low-emission zones & Crit'Air
  - Documents & IDP
  - What to carry
- **Each rule:** gets a **"VERIFY BEFORE LAUNCH"** chip and a link to an official source (service-public.fr, securite-routiere.gouv.fr, certificat-air.gouv.fr, ecologie.gouv.fr, and so on).

## 14. FAQ, Privacy, Terms

- **`/faq`:** the accordion grouped by category, plus JSON-LD `FAQPage`. The ETIAS item is gated by `config.features.etiasNotice` (`"coming-soon"`).
- **`/privacy` and `/terms`:** simple article-template pages with placeholder legal text, clearly marked "[LEGAL REVIEW REQUIRED]".

---

## 15. Tech architecture

### 15.1 Folder structure

```
/app
  layout.tsx                 fonts, Header, Menu, Footer, WhatsApp FAB, CurrencyProvider
  page.tsx                   homepage
  self-drive/page.tsx        drive-and-e-bike/page.tsx
  road-trips/[slug]/page.tsx regions/[slug]/page.tsx
  when-to-go/  our-specialists/  why-rond-point/  driving-in-france/
  journal/page.tsx  journal/[slug]/page.tsx
  plan-my-road-trip/page.tsx contact/  my-account/  faq/  privacy/  terms/
  api/plan/route.ts  api/contact/route.ts  api/newsletter/route.ts
  sitemap.ts  robots.ts  not-found.tsx  opengraph-image.tsx
/config
  site.ts                    brand, colours, contact, nav, currencies + rates, stats, featuredTrip, feature flags
/data
  types.ts  regions.ts  roadTrips.ts  stays.ts  experiences.ts  calendar.ts
  people.ts  testimonials.ts  faqs.ts  posts.ts  drivingRules.ts
/lib
  currency.tsx (context + useCurrency + formatPrice)  queries.ts (getTripsByRegion…)  seo.ts  filters.ts  planner-schema.ts
/components
  layout/   Header, SiteMenu, Footer, Newsletter, WhatsAppButton, CurrencySwitcher, Breadcrumbs, Logo
  ui/       Button, ArrowBox, PlusHeading, FilterBar, FilterDropdown, Accordion, Tabs, CarouselNav, Modal, Drawer,
            Input, Select, MultiSelect, Checkbox, ChipRadio, Stepper, Tag, PaceGlyph, Stars, PlaceholderFlag
  motion/   SplitWords, Reveal, ImageReveal, Parallax, Marquee
  sections/ Hero, ArticleHero, MissionIntro, StatsTicker, RoundaboutSelector, TripCarousel, TripCard, TripGrid,
            FullWidthCta, WhyUs, LinkRows, RegionsMap, RegionsHoverList, ReviewsSlider, CrossSellBand,
            Gallery, Highlights, RouteMap, ItineraryCarousel, PlanTabs, CustomiseBlock, SpecialistSplit,
            CalendarListing, PeopleGrid, PersonModal, PostCard, FeaturedPost, ArticleBody, ShareBar
  planner/  PlannerShell, ProgressRoundabout, Step1When … Step5Contact, Confirmation
/public/video                short placeholder loops (see below)
```

### 15.2 Data types (`/data/types.ts`, abridged)

```ts
type Slug = string; type Money = number; // always base EUR
type TripType = 'self-drive' | 'drive-and-e-bike';
type Pace = 'gentle' | 'balanced' | 'ambitious';               // with avgDailyDrivingHours
type Interest = 'wine'|'food'|'history'|'beaches'|'mountains'|'villages'|'cities';
type BrandColour = 'lavender'|'sunflower'|'roadsign'|'vineyard'|'lavender-300'|'vineyard-300'|'charcoal';
interface Img { src: string; alt: string; credit?: string }

interface Region { slug; name; shortName; tagline; overview: string[]; heroImage: Img; gallery: Img[];
  bestMonths: number[]; quietMonths: number[]; signatureRoads: {name; km; note}[];
  foodAndWine: {title; body; image: Img}; mapPin: {x; y}; colour: BrandColour; faqIds: string[]; seo }
interface DayPlan { day; title; from; to; km; driveTime: string; stops: string[]; stayId?: Slug;
  experienceIds?: Slug[]; eBikeDay?: {km; elevationM; note}; body: string }
interface RoadTrip { slug; title; regionSlugs: Slug[]; type: TripType; pace: Pace; avgDailyDriveHours: number;
  days; nights; totalKm; startEnd: string; interests: Interest[]; fromPrice: Money;
  seasons: {label; months: number[]; pricePerPerson: Money}[]; bestMonths: number[];
  poster: {title: string[]; font: 'wide'|'mid'|'narrow'; size; vAlign; hAlign; variant: 'full'|'framed'; mat?: BrandColour; dark?: boolean};
  heroImage: Img; cardImage: Img; hoverVideo?: {src; poster}; hoverImage: Img; gallery: Img[];
  lede; overview: string[]; highlights: string[]; flavour: {driving; food; culture; nature};
  itinerary: DayPlan[]; included: string[]; excluded: string[]; stayIds; experienceIds; specialistId; faqIds;
  featured?: boolean; seo }
interface Stay { slug; name /* placeholder */; regionSlug; style: 'chateau'|'boutique'|'countryside'|'coastal';
  blurb; image: Img; placeholder: true }
interface Experience { slug; name; regionSlug; kind: 'wine'|'food'|'culture'|'outdoors'|'e-bike'; duration; blurb; image: Img }
interface CalendarMoment { id; title; month: number; window: string; regionSlug; theme: 'nature'|'food-wine'|'festival'|'culture'|'snow';
  description; image: Img; tripSlugs: Slug[]; verifyYearly: true }
interface Person { slug; name /* placeholder */; role; kind: 'specialist'|'host'|'team'; regionSlug?; bio: string[];
  favouriteExit; languages: string[]; image: Img; placeholder: true }
interface Testimonial { id; title; body; name; country; tripSlug; rating: 1|2|3|4|5; image: Img; placeholder: true }
interface Faq { id; category; question; answer: string[]; featureFlag?: keyof SiteConfig['features'] }
interface Post { slug; title; category; excerpt; date; heroImage: Img; author: Slug; blocks: Block[]; related: Slug[]; seo }
```

### 15.3 Config (`/config/site.ts`)

- **Brand:** name, tagline and the brand colours (also exported to Tailwind).
- **Contact:** `[COMPANY NAME]`, address, phone, email and `whatsapp: '[NUMBER]'`.
- **Legal:** `atoutFrance: '[IM NUMBER]'` and `guarantee: '[GUARANTEE PROVIDER]'`.
- **Social:** URLs.
- **Navigation:** `nav` (the 7 menu items, each with its image) and `utilityNav`.
- **Currencies:** `{ base: 'EUR', supported: [EUR, USD, GBP, CAD, AUD], rates: {…} /* TODO: live rates */ }`.
- **Stats** (each with `placeholder: true`) and `featuredTrip`.
- **Feature flags:** `features: { etiasNotice: 'coming-soon' | 'live' | 'hidden', showPlaceholderFlags }`.

### 15.4 Behaviour notes

- **Currency:** a React context with the choice saved in localStorage. `<Price eur={…}/>` formats with `Intl.NumberFormat` and rounds to 10. Every price comes from base EUR.
- **Images:** `next/image` with Unsplash URLs (`remotePatterns`), searched to fit each slot (lavender, Gorges du Verdon, châteaux, Alsace villages, Étretat, and so on). Unsplash photo IDs live in the data files so they're easy to swap.
- **Hover videos:** short (4–6s, ~300–600KB, 720p) muted mp4 loops in `/public/video`, **generated locally with ffmpeg** as slow pans and zooms over the placeholder photos, so we don't depend on third-party clips. Real footage can be dropped in later. Only fine pointers load them, and only on hover.
- **SEO:**
  - Per-page `generateMetadata`, with OG/Twitter tags and dynamic OG images.
  - `sitemap.ts`, `robots.ts` and canonical URLs.
  - JSON-LD: `TravelAgency` (home), `TouristTrip` (trips), `FAQPage`, `Article`, `BreadcrumbList`.
- **Accessibility:**
  - Skip link and landmarks.
  - The menu has a focus trap, Esc to close and `aria-expanded`.
  - All carousels work by keyboard and show visible focus rings (sunflower outline).
  - Colour contrast is checked against both cream and charcoal.
  - Reduced motion is respected everywhere.
- **Dependencies:** `next`, `react`, `typescript`, `tailwindcss` v4, `framer-motion`, `zod` and `clsx`. Carousels are built with Framer (drag plus snap), so there is no Swiper.

---

## 16. Phases and checks

1. **Foundations:**
   - Next app, Tailwind tokens, fonts, config and the data types plus seed data.
   - Header, the full-screen image menu, the footer, newsletter, the WhatsApp button, the currency switcher and the motion primitives.
   - ✔ Run the dev server, then compare header, menu and footer screenshots with the reference at 1440 and 390.
2. **Homepage:** all 13 sections, including video-hover cards and the roundabout selector. ✔ Side-by-side screenshot comparison per section, then fixes.
3. **Planner and contact:** the 5 steps, Zod, localStorage, the API route and the confirmation screen. ✔ Keyboard-only run-through, validation errors, payload logged.
4. **Inner pages:**
   - The trip-type pages with filters, road-trip pages, region pages, When to go, specialists, Why, Driving in France, the Journal (index and 4 posts), My account, FAQ, privacy and terms.
   - ✔ Compare each with its reference counterpart.
5. **Polish:**
   - Animations, accessibility (axe), SEO and a Lighthouse run (mobile and desktop) with fixes.
   - `next build` must pass with no type or lint errors.
6. **Deploy to Vercel:**
   - I have no Vercel credentials in this environment. Either **you import the GitHub repo in Vercel** (zero-config Next.js), or you give me a `VERCEL_TOKEN` as an environment secret and I deploy with the Vercel CLI.
   - I'll set it up so either path works.

Throughout, I commit at the end of each phase and push to `claude/charming-heisenberg-359kn5` (with a draft PR).

---

## 17. Things I need you to confirm or decide

1. **Fonts:** Archivo (variable: black, condensed and expanded) plus DM Mono as the stand-ins for the reference's fonts. OK?
2. **Hex values** for the six brand colours (§0.1). Tweak now or later.
3. **Bio pages vs bio modal** for specialists: I plan a modal only, deep-linkable.
4. **Vercel deploy path** (§16.6).
5. **Placeholder imagery:** Unsplash hot-links via `next/image` for now (each photo credited in the data files).
