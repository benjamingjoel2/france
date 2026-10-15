# Pages B — Calendar, Guides, About (design map @1440 unless noted)

Source evidence: computed styles via Playwright, the site stylesheet (main2026.css), and captures in
`scratchpad/cap/shots/` (cal-row-open.png, cal-filtered.png, cal-reviews*.png, guides-grid*.png,
guides-cta.png, about-modal.png, about-acc-open.png, m-*.png). DOM outlines are in `scratchpad/cap/*-outline.txt`.

## 0. Shared tokens / primitives (used on all three pages)
- Colours: cream/dust `#f2f0e8`, charcoal `#242421`, black `#121211`, panel `#2f2f2c` (row hover / filter pill),
  panel-2 `#3a3a37` (hover / dropdown / tag bg), muted text `#b6b4ae`, dim `#797874` (dust-50), strike `#50504d`,
  hairline `rgba(242,240,232,.15)` on dark and `rgba(36,36,33,.15)` on light, star `#ffc166`.
- Fluid type scale (CSS vars, value at 1440): sm 11.9 · base 15.04 · md 19.8 · lg 26.2 · xl 35.0 · 2xl 47.1 ·
  3xl 63.9 · 4xl 87.4px. Formula `clamp(min, a·vw + b, max)`; 4xl = clamp(36.8px, 4.86vw+17.4px, 134px).
- Spacing uses the same vars: `py-2xl` = 2×2xl = 94px, `py-xl` = 2×xl = 70px, `pt/pb-md` and so on.
  Container `px-container` = max(1rem, 3vw), which is 43.2px at 1440 and 16px on mobile. 12-col Bootstrap grid with 21.6px gutters.
- Fonts:
  - Display (H1/H2 hero) is ABCGintoNormal-Black, uppercase, line-height .8, letter-spacing -0.02em (`ginto-normal-black`).
  - Sub-display is ABCGintoNordCondensed-Medium, uppercase, lh .9–1, ls -0.03em (`ginto-nord-condensed-medium`).
  - UI/labels use "Aeonik Fono" 400, uppercase, 13.16px (.875rem).
  - Body is "Aeonik Fono Light" 300, 15.04px, line-height 22.6px (p 24.4px), p margin-bottom 18.8px.
  - A wide display face, ABCGintoNord-Ultra, is used only for some guide names.
- `plus-heading` (eyebrow): Aeonik Fono 13.16px uppercase with a "+" icon (1rem) placed *below* the text
  (`plus-heading-below`, column-reverse, icon margin-top 1em at ≥1200). Margin-bottom 2em (26px).
- `text-block-N` sets `max-width: N em`, which is how headings are made to wrap (e.g. `text-block-8` on 4xl gives 2 lines).
- Buttons `.btn`: pill (radius 30px), height clamp(3rem, 2.5rem+1.5vw, 4rem) = 59px, padding 0 38px, Aeonik Fono 13px uppercase.
  - `btn-inverted`: cream bg, charcoal text; hover bg `#b6b4ae`.
  - `btn-inverted btn-stroke`: transparent with 1px cream border; hover fills cream with charcoal text.
  - `btn-sm` is used in the header.
- Breadcrumbs bar (≥768 only): Aeonik Fono 11.9px uppercase, padding 15px 30px, bottom hairline, height 47px.
  The chevron separator is a 45°-rotated bordered square. The current item is at 50% opacity.
  Link underline is a 1px background-image line that wipes out left→right on hover (0.3s).
- Header: fixed, 75px tall, charcoal. Pages offset by header height (`site-header-offset` is set by JS).
- **Animations (GSAP ScrollTrigger + Splitting.js):**
  - `animate-text`: headings are split into words/lines. When the element reaches "top 75%", the class `animate` is added,
    which triggers a per-line/word rise-in (staggered by line index).
  - `reveal-fade-in`: starts at opacity 0, y +40. At "top 75%" it batches to opacity 1, y 0 (0.4s, stagger 0.15, once).
    `reveal-fade-in-hero` does the same but fires at "top bottom".
  - `image-reveal` and every `.team-listings-item`: the wrapper starts at clip-path inset(0 0 100% 0) with the img at scale 1.4.
    At "top 60%" the clip opens to inset(0) (0.6s power2.inOut) while the img scales to 1 (0.8s power1.inOut).
    The result is a top-to-bottom curtain wipe plus a zoom-out.
  - Smooth scroll via Lenis. Hash links scroll to `[data-scroll-id]`.
- Global footer (all pages, charcoal):
  - CTA "LET'S START AN ADVENTURE" (Ginto Black 3xl 63.9px, lh .8) with a Contact pill, padding pt-2xl pb-xl.
  - Hairline.
  - Newsletter row: "NEWSLETTER SIGN UP" (condensed lg), two flat inputs (bg #3a3a37, 58px tall, no radius),
    and a 58px square outlined submit arrow.
  - 2-col company info / phone and email (links underlined).
  - "Explore our world" links, logos at right.
  - Social icons joined by short dashes.
  - Hairline, then legal links (11px).

---

## 1. /calendar — Tour calendar (all charcoal page, then cream reviews, then footer)
Wrapper `div.site-header-offset.bg-charcoal` > breadcrumbs > `.py-2xl` (94px top/bottom) > `.px-container`.

### 1a. Intro header (`.row.align-items-end`)
- Left `col-lg-8`:
  - `h1.plus-heading` "OUR TOURS" + "+" (y≈217).
  - H2 "TOUR / CALENDAR" in Ginto Black 87.4px, lh 69.9px (.8), ls -1.75px, 2 lines, block 699px wide,
    margin-bottom 0 at lg (hmb-50 on mobile). Uses animate-text.
- Right `col-lg-4` (x=960, w=437): intro paragraph, Aeonik Light 15px / 24.4px, max-width 30em, bottom-aligned with the
  title baseline. `reveal-fade-in-hero`.
- Mobile: the columns stack. Title 2 lines (~37–45px), paragraph below, 16px gutters.

### 1b. Filter bar (`.filter`)
- Margin-top 70px (2×xl). Desktop has a full-width top hairline (y=501).
  Then `.filter-dropdown` padding-top 26px (lg), with the pills row at y=529.
- Left `ul.filter-list`, flex-wrap, pill gap 7.5px: four dropdown pills **MONTH · TOUR TYPE · REGION · RIDER LEVEL**.
  - Pill (`.filter-list-dropdown .dropdown-toggle`): height 40px (2×md), padding 0 19.8px, radius 19.8px, bg #2f2f2c,
    text #b6b4ae, Aeonik Fono 13.16px uppercase, small chevron-down icon.
  - Hover or open: text turns cream, bg #3a3a37 (0.3s).
- Right: **CLEAR ALL** pill, same size, cream bg, charcoal text.
- Dropdown menu (Bootstrap dropdown, offset 8px; it flips above when there is no room):
  bg #3a3a37, radius 4px, padding .5rem 0, no border.
  - Items: checkbox square (1em, 1px #b6b4ae border) + label, 13px uppercase, padding .5em 19.8px, colour #b6b4ae.
  - Hover: label and border turn cream.
  - Active: label is cream and the checkbox is filled cream.
  - Multi-select within a group.
- Filtering engine: MixItUp multifilter on classes per row (`hi-10-2026`, `hi-mtb-tours`, `hi-europe`, `hi-intermediate-plus`).
  Groups are ANDed and values within a group are ORed.
  After filtering, any month heading whose rows are all hidden gets `d-none`. A "No results..." message shows when 0 rows remain.
  The list re-flows with no page reload (see cal-filtered.png: the E-MTB filter leaves only April, May and later).
- **Mobile (<992):**
  - The pills are replaced by a full-width `.filter-toggle` row (height clamp 56–72px): a 3-line "hamburger" icon
    (lines 100/75/50%) + "FILTER", with a chevron at right that rotates 90° when open.
  - Opening sets a panel bg #3a3a37 that grows from a 1px line: width expands to 100%+6vw (bleeding past the gutters),
    then height grows. The body uses a grid-template-rows 0fr→1fr transition (0.5s, cubic-bezier(.645,.045,.355,1)).
  - Inside is an accordion list: MONTH / TOUR TYPE / REGION / RIDER LEVEL rows, 48–64px tall, hairlines, chevron-right
    that rotates on expand, and the same checkbox items.
  - Centered text-link "CLEAR ALL" with an underline wipe. An Apply button exists for mobile only.

### 1c. Calendar listing (`.calendar-listing`, full-bleed width 1440, overflow hidden)
Structure, repeated per month (Oct 2026 → Dec 2027, 15 months):
```
.calendar-accordion-heading.px-container [data-scroll-id="october2026"]
   h2  "OCTOBER 2026"
.calendar-accordion.accordion  (one per month)
   .accordion-item.category-mtb|category-emtb  (border-bottom hairline)
      button.accordion-button.px-container  → .row: title col-lg-5 | date col-lg-4 | level col-lg-2 | arrow (absolute right)
      .accordion-collapse > .accordion-body.px-container  (expanded preview)
```
- Month heading: Ginto Nord Condensed Medium 26.2px (lg), lh .9, ls -0.03em, uppercase, cream.
  Padding-bottom 26px, margin-top 52px (2×lg) between month groups. The first heading sits about 52px below the filter.
  The heading is inset by the container (43px), but the row hairlines run full-bleed 0–1440.
  The first row of each month has a hairline on top (visual: heading, line, rows, line).
- **Row** (height 68–69px): button padding 22.6px (1.5em) top/bottom × 43.2px sides, full-bleed.
  Bottom border 1px rgba(cream,.15). bg transparent → hover #2f2f2c (0.3s).
  - Col 1 (`col-lg-5`, x=43 to about 590): tour name, Aeonik Fono **Regular** 15px, cream.
    Followed by a **type tag** (CSS ::after content "MTB"/"E-MTB"): 11.3px (0.75em), padding 2.8px 5.6px, radius 17px,
    bg #3a3a37, text #b6b4ae, margin-left .5em.
  - Col 2 (`col-lg-4`, x≈616): date range in Aeonik Light 15px, e.g. "18 - 27 Oct 2026" or "25 Sep - 02 Oct 2027".
    **Trip full** state: the date gets line-through and colour #50504d, followed by an ::after "TRIP FULL" (uppercase, cream, .5em gap).
  - Col 3 (`col-lg-2`, x≈1075): rider level ("Novice +", "Intermediate", "Intermediate +", "Advanced"), Aeonik Light 15px.
  - Arrow: remix `arrow-right-line` 18px, absolutely positioned at the right edge (x≈1380), vertically centred.
    On hover *and* when expanded it rotates 90° to point down (0.3s easeInOutCubic).
- **Expanded row** (Bootstrap collapse, one open per month; see cal-row-open.png):
  - The button keeps its #2f2f2c bg. The body has bg #2f2f2c, padding 35px (xl) top / 70px bottom, 43px sides.
  - `.row.align-items-end`: left `col-lg-6 col-xxl-7` image, **3:2**, 781×520 at 1440, object-fit cover.
  - Right `col-lg-5 col-xxl-4 offset-lg-1` (x=960, w=437), bottom-aligned with the image:
    a short description paragraph (Light 15/24.4), then a button group: **VIEW TOUR** (cream pill 146×59) and
    **BOOK NOW** (cream-outline pill), with a 7.5px gap.
  - Mobile: the image goes full-width above the text and gets a 52px bottom margin.
- Mobile row (<992): columns stack inside a single cell. Title + tag on line 1, date (+TRIP FULL) on line 2,
  level on line 3. The arrow stays at the right, vertically centred. Padding 1.5em, 16px gutters. Row height about 90px.

### 1d. Client reviews (cream `#f2f0e8`, text charcoal) — `.reviews-container`
- Padding 94px top/bottom (≥992). `.row.gx-0.flex-lg-row-reverse`: image column on the RIGHT, text on the LEFT.
- Image column `col-lg-6 col-xxl-5`: full-bleed to the right edge (x=840, 600×450).
  Height 43.75vw (lg) / 36.46vw, max 50vh (≥1400); 87.5vw on mobile.
  A Swiper "creative" vertical effect: the next image slides up from 100% while the previous one shades
  (parallax scale 1.1, 600ms).
- Nav: a cream box at the bottom-left of the image (70×140 desktop, two 70px squares stacked: next on top, prev below),
  with a hairline divider between them. Chevrons are 20px. A disabled button is at 20% opacity.
  On mobile the nav sits at the bottom-right of the image and is horizontal.
- Pagination "01 / 06": Aeonik 14px, rotated -90°, placed vertically just left of the nav (≥992 only).
- Text column `col-lg-6 col-xxl-7` (padding 0 43px, flex column space-between):
  - Plus-heading "CLIENT REVIEWS" at the top. The quote block is bottom-aligned.
  - Quote: a grey (15% charcoal) double-quote glyph about 31px tall, then the title "FLAWLESSLY ORGANIZED" in Ginto Nord
    Condensed 35px (xl), lh .9, max 12em.
  - Review paragraph (Light 15px, about 600px wide, padding-right 8%).
  - Footer row: "KELLY, CANADA - PYRENEES" (Aeonik uppercase, dash separators), then 5 stars (20px, #ffc166; empty
    stars are 15% charcoal), margin-left 1em.
- Text swap uses a Swiper creative effect synced to the images: the outgoing slide moves translateY +50% and fades out,
  the incoming one enters from -50% (see the cal-reviews-mid.png cross-fade). autoHeight is on; drag is off.
- Mobile: the image comes first (full width, 87.5vw tall), then the text with padding-top 70px and padding-bottom 94px.

### 1e. Footer (shared, see §0)

---

## 2. /tour-guides — Guides
Wrapper `div.bg-charcoal.overflow-hidden`.

### 2a. Hero (`.article-hero.article-hero-tall`)
- Breadcrumbs overlay the photo. The hero is about 797px tall. `article-hero-main` has min-height 75vmin (675px),
  padding 94px 43px, with content vertically centred.
- H1 "MEET YOUR / GUIDES": Ginto Black 87.4px, lh .8, left-aligned at x=43, 2 lines. animate-text.
- Background `.article-hero-bg`: absolutely positioned, height = hero + 2×2xl (it extends 94px under the next section).
  img opacity .85, object-fit cover.
  - Top gradient: charcoal→transparent, height clamp(12rem, 18vw, 15rem).
  - Bottom gradient: charcoal→transparent over the bottom 75%, so the photo melts into the charcoal page.

### 2b. Intro (`.px-container.pb-2xl`, overlapping the hero fade)
- `col-lg-9 offset-lg-3 col-xl-8 offset-xl-4` (starts at x=502, width about 875).
- H2 statement (4 lines): Ginto Nord Condensed 35px (xl), lh 1.0, ls -1.05px, uppercase, max 25em. animate-text.
- `richtext-two-col`: CSS columns 2 at ≥768. Paragraphs are Light 15/24.4, with padding-right 5%
  (each column about 440px). Inline links are underlined and in regular weight. Margin-top 26px.
- Divider `.hr`: padding 94px top / 70px bottom, 1px hairline across the container.

### 2c. Guide grid (`.team-listings`) — **key pattern**
- CSS grid: 3 cols at ≥992 (2 cols at ≥576, 1 col on mobile). Gap max(1.5vw, .5rem) = 21.6px.
  Cards are 437×437 at 1440. 42 guides, alphabetical.
- **Staggered middle column:** each `nth-child(3n-1)` is translateY(2xl = 47px), giving a masonry/offset look.
  The grid gets padding-bottom 47px to compensate.
- Card = `<a.team-listings-item>` (relative, overflow hidden) linking to `/tour-guides/<name>`:
  - `.team-listings-image`: aspect **1:1**, img object-fit cover, **filter saturate(0)** (B/W).
  - Gradient `::after`: covers the bottom half (top:50%), from rgba(18,18,17,.9) at the bottom to transparent.
  - Name: absolutely positioned bottom-left, padding 6% 8% (26px 35px), 26.2px (lg), uppercase, cream.
- **Name font cycles per position (6-item pattern):**
  - items 1 and 6 (6n-5, 6n): GintoNord **Ultra** (very wide, ls -0.02em)
  - items 2 and 4: GintoNord **Condensed** Medium (ls -0.03em)
  - items 3 and 5: GintoNormal **Black** (ls -0.02em)
  - This deliberately mixes typefaces to give a zine-like rhythm.
- **Hover:** the img goes saturate(0)→1 (to full colour) and scales to 1.1, over 0.3s cubic-bezier(.65,.05,.36,1).
  The name does not move.
- **Reveal:** each card does the curtain clip wipe (inset 100%→0 from the top) with the image zooming 1.4→1 when it reaches
  60% of the viewport.
- Mobile: 1 column, full-width square cards with no stagger and a 16px gap (≈8px). Names keep the font cycling.

### 2d. Guide bio (separate page `/tour-guides/<slug>`, not a modal)
- Short hero: breadcrumbs (Home > Guides > NAME). A small category label "OUR GUIDES".
  H1 "MEET <NAME>" in Ginto Black 3xl, max 10em. The background photo fades the same way as 2a.
- Content: `.container` > `.article-main.bg-dust.py-2xl`, a cream card that overlaps the bottom of the hero.
  - `article-split-mixed`: square portrait (1:1, about 530px) on the left; on the right, an H2 quote headline
    (condensed, uppercase) plus first-person bio paragraphs in charcoal.
  - Back link "← SEE ALL GUIDES": a square outlined arrow box (2em). On hover a fill wipes in with scaleX from the left
    and the icon inverts. The label is in condensed uppercase.

### 2e. Ticker (`.ticker.bg-black`, marquee3k)
- Full-bleed, bg #121211, padding 15px 0, height 53px. Aeonik Fono 15px uppercase cream.
- One sentence is repeated with " • " separators (`::after`), scrolling continuously right→left at speed 1.

### 2f. Full-width CTA (`.fwcta-block.bg-black`)
- min-height min(56.25vmax, 100vh) (810px), with content bottom-aligned (flex-end). Padding 94px top / 70px bottom, 43px sides.
- Background photo: cover, opacity .8, with a bottom 75% gradient rgba(18,18,17,.8)→0.
- H2 "TOUR CALENDAR": Ginto Black 63.9px (3xl), lh .8, single line.
- `.fwcta-block-footer`: margin-top 35px, then a hairline top border, then padding-top 26px.
  Row space-between: left is a paragraph (max 30em, about 451px); right is a "VIEW TOUR DATES" cream pill (190×59).
  Stacks on mobile, with the button 26px below.
- Then the footer.

---

## 3. /about — "Why H+I"
Wrapper `div.bg-charcoal.overflow-hidden.article-wrapper`.

### 3a. Hero (same `article-hero-tall` as 2a, but centred)
- H1 "WHY H+I": Ginto Black 87.4px, single line, **centred** (`.container.text-center`), sitting vertically centred over a
  dark campfire photo (opacity .85 with top and bottom charcoal gradients). Height about 797px.

### 3b. Our story (`.py-2xl`, charcoal)
- Plus-heading "OUR STORY" (full row).
- Row: left `col-xl-6` H2 "CRAFTING LIFE-AFFIRMING MTB AND E-MTB ADVENTURES": Ginto Nord Condensed 47px (2xl),
  lh .9, max 12em (3 lines, w≈565), mb 1em.
- Right column (x=731, w=602, max 40em): 5 paragraphs of Light 15/24.4. The text starts level with the H2 top.
- Tablet: everything shifts to `offset-lg-5` (single column starting at 5/12).
- **Image pair** (`.about-intro-images`, flex row at ≥992, padding-top 94px):
  - Item 1: square **1:1** portrait (461px). The column has padding 0 15% 0 43px, and the image is translated **up** by
    (2×2xl + xl) = about 129px, so it rises into the text area beside the paragraphs.
  - Item 2: landscape **3:2** (709×473), width 50%, **bleeds off the right edge** (x=731 to 1440).
  - Both use image-reveal (curtain + zoom).
  - Mobile: stacked. The portrait is half-width on the left (padding-right 50%); the landscape is indented 20% from the left.
- **Pull quote** (`.about-intro-quote-container`): `col-xl-4 offset-xl-1` (x=158, w=437).
  Ginto Nord Condensed 26px (lg), lh 1.0, uppercase, with curly quotes, followed by the attribution plus-heading
  "GERRIT FROM COLORADO". It sits under the portrait column. Padding-top 0 at ≥1200 (94px on smaller screens).

### 3c. Video band (`.tour-gallery-container`, transition charcoal → cream)
- 16:9 `article-video` in `col-md-11 col-xl-10` centred (x=158, 1124×632).
- The section background behind it is split: charcoal above and cream below (`tour-gallery-main::before` is coloured to
  match the previous section), so the media straddles the colour change.
- Cover image with a play overlay. On click, the cover fades out (0.3s) and the iframe plays.

### 3d. Meet the team (cream bg, `.px-container.py-2xl`)
- H2 "MEET THE / TEAM": Ginto Black 3xl 63.9px, centred, charcoal, lh .8, 2 lines.
- `.team-listings.pt-xl`: the same 3-col staggered grid as the guides page (6 people, 437px squares, B/W→colour hover,
  name font cycling, curtain reveal). Here the cards are `modal-trigger` elements, not links.
- **Bio modal** (`.modal` + `.kitlist-modal-container`):
  - The overlay covers the viewport with rgba(18,18,17,.5) and fades in (0.4s).
  - The container slides up from translateY(6rem) to 0 while fading (0.4s easeInOutCubic). Body scroll is locked.
  - Container: charcoal, max-width 70rem (1053px at 1440), shadow 0 4px 32px rgba(0,0,0,.25), flex row at ≥992.
    - Left half `.kitlist-modal-content`: padding 10% 10% 8%.
      - Name H2 in condensed 26px, cream.
      - Role H3 directly below it (no gap, lh .9) in the same size, coloured #797874, mb 1em.
      - Bio paragraphs in Light 15/22.6.
    - Right half: image with aspect **7:8** (desktop) / 8:7 (mobile), cover, in full colour.
    - Close button: 47px square, bg #3a3a37, × icon, top-right corner.
  - Closes on the close button or on an outside click.
  - Mobile: stacks (text first, image below), max-width 40rem, scrolls within the overlay.

### 3e. Why H+I (charcoal `.py-2xl`)
- Header row `col-lg-7 offset-lg-1` (x≈163):
  - Plus-heading "WHY H+I ADVENTURES?".
  - H2 "THE DEVIL IS IN THE DETAIL - AND WE'RE OBSESSED BY THE DETAIL!": condensed 47px (2xl), lh .9, max 15em (2 lines).
    mb 2×2xl (94px) at lg, 1em on mobile.
- Body row (`.row.gx-0`):
  - Left `col-lg-6`: a large landscape **4:3** image (720×540) that **bleeds to the left edge** (x=0). Image-reveal.
  - Right `col-lg-6 col-xl-5 offset-xl-1` (x=883, w=514):
    - Intro paragraph (Light 15, max 40em).
    - **Accordion** (`.article-accordion`) with 5 items:
      - Each item has a top hairline (except the first). The button has padding 1.5em 0 (39px) at font-size lg.
      - The label is Ginto Nord Condensed 26px uppercase, lh 1, ls -0.03em.
      - A "+" icon (24px) sits at the right and rotates 45° to "×" when open (0.2s).
      - The body is richtext Light 15/24.4, max 60em, padding-bottom 52px (2×lg). One item is open at a time.
      - Items use reveal-fade-in and stagger in.
    - Below: a small square **1:1** image (385px), 75% width, pushed right (`margin-left:auto`), padding-top 94px.
      Image-reveal. On mobile it is 50% width and right-aligned.
- Then the footer (its top hairline continues directly from this section).

---

## 4. Reusable component checklist (class names)
- `breadcrumbs`, `plus-heading` (`plus-heading-below`), `text-block-N`, `font-size-{lg..4xl}`, `line-height-{80,90,100}`
- `article-hero` (`-tall`, `-main`, `-bg` with 2 gradients), `fwcta-block` (`-main`, `-footer`, `-bg`), `ticker` (marquee)
- `filter` (`-toggle`, `-dropdown`, `-list`, `filter-list-dropdown`, `-item-checkbox`, `filter-clear-btn`, `filter-accordion`)
- `calendar-listing` > `calendar-accordion-heading` + `calendar-accordion` > `accordion-item.category-(mtb|emtb)` >
  `accordion-button` (`accordion-button-title`, `calendar-accordion-date(.trip-full)`, `accordion-button-arrow`) + `accordion-body` (`accordion-image` 3:2)
- `reviews-container` (`reviews-carousel-images`, `-nav`, `-pagination`, `-text`, `-quote`, `-title`, `-ref`, `-rating`)
- `team-listings` > `team-listings-item` (`-image` 1:1 B/W, `-name`), `modal` + `kitlist-modal-container` (`-content`, `-image` 7:8, `modal-close`)
- `about-intro-images` (1:1 lifted + 3:2 right-bleed), `about-intro-quote-container`, `about-life-images-item-(lg 4:3|sm 1:1)`, `article-accordion`, `article-video` 16:9
- JS hooks: `animate-text` (Splitting + class toggle), `reveal-fade-in(-hero)`, `image-reveal`, MixItUp (calendar filters), Swiper creative (reviews), marquee3k (ticker), Bootstrap collapse/dropdown.

## 5. Breakpoints summary
- ≥992 (lg): the calendar row becomes a 5/4/2 column grid with the pill filter bar; team grid has 3 cols plus the stagger;
  the modal is side by side; reviews are side by side with the vertical pagination; about images lay out in a row.
- 768–991: breadcrumbs are visible, richtext is two-column, the mobile filter toggle still applies, and the
  calendar rows are stacked.
- <576: team grid has 1 col. Type scales down through the clamps (4xl reaches 36.8px at the minimum).
  Container gutters are 16px.
