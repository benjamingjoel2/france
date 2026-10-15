# Pages A: tour-type listing, tour detail, location (design map)

Reference: mountainbikeworldwide.com, measured at 1440x900 with Playwright computed styles. Mobile is 390.
Supporting captures are in `scratchpad/ref/pa/`: styles-1440.json, styles-390.json, int.json, and *.png (hover, filter, modal and other states).

## 0. Shared tokens and primitives used on these pages

- **Colours**
  - cream `#F2F0E8` (242,240,232); charcoal `#242421` (36,36,33); black `#121211` (18,18,17)
  - charcoal-5 `#2F2F2C` (47,47,44); charcoal-10 `#3A3A37` (58,58,55); muted-dark `#50504D` (80,80,77)
  - grey-mid `#797874` (121,120,116); grey-light `#B6B4AE` (182,180,174)
  - Hairlines: `rgba(cream,.15)` on dark backgrounds and `rgba(charcoal,.15)` on cream.
- **Fluid type at 1440** (390 values in brackets):
  - 4xl 87.4px / lh .8 / ls -.02em [36.8]
  - 3xl 63.9 / .8 [31.4]
  - 2xl 47.05 / .9 [26.7]
  - xl 35 / 1.0 [22.7]
  - lg 26.2 / .9 [19.3]
  - md 19.8 / 1.0 [16.45]
  - body 15.04 / 1.5 [14 / 21]
  - small caps text 13.16 / 1.5 [12.25]
  - micro 11.9
- **Fonts**
  - Display: Ginto Normal Black, uppercase, letter-spacing -0.02em.
  - Condensed heads: Ginto Nord Condensed Medium, uppercase, ls -0.03em, lh 1.0 or 0.9.
  - Wide accent (card titles only): Ginto Nord Ultra.
  - Body: Aeonik Fono Light 300.
  - UI labels: Aeonik Fono Regular 400, 13.16px, uppercase.
- **Spacing**
  - Container side padding: 43.2px [14px].
  - Section padding: 2xl = 94.1px [~53], xl = 70px [45.4], lg = 52.4px, md = 26px.
  - Grid gutter: 21.6px. Bootstrap-like 12-column grid (`row`, `col-lg-*`, `offset-*`).
- **Buttons `.btn`**
  - Pill shape: radius 30px, height 44px (59px on large CTAs), padding 0 19-38px.
  - Text: 13.16px uppercase Aeonik Fono 400.
  - `.btn-inverted` on dark: cream background with charcoal text. Hover: background goes to grey-light `#B6B4AE`, 0.3s.
  - `.btn-stroke`: transparent with a 1px cream border. Hover: fills cream with charcoal text.
  - On cream backgrounds the button is a charcoal fill with cream text.
- **Breadcrumbs `.breadcrumbs`**
  - Full-width bar, padding 15px 30px, 11.9px uppercase.
  - Bottom border is a 1px hairline. The separator is a `›` chevron.
  - Links are underlined using a background-size underline that animates over 0.3s with ease `cubic-bezier(.645,.045,.355,1)`. The current item is greyed.
  - The bar sits under the fixed 75px header (`.site-header-offset` has padding-top 75px).
- **Reveal animations**, all sitewide and triggered on scroll:
  - `.animate-text` splits headings into words (`.word` with `--word-index`) and rises or fades them per word/line, staggered.
  - `.reveal-fade-in` goes from `translateY(40px); opacity:0` to `0/1`. `.reveal-fade-in-hero` is the same on load.
  - `.image-reveal` animates `clip-path: inset(0 0 100% 0)` to `inset(0)`, a wipe downward from the top.
  - Hero background parallax: the hero image moves at about 0.2x scroll speed (translateY grows to about +178px) at opacity 0.85.
- **Header** is fixed, 75px tall, and transparent over heroes. It gets `.site-scrolled` after scrolling, which sets a charcoal background and a soft shadow.
- **Carousels** are Swiper-based. The shared navigation pattern:
  - Two square 59x59 buttons joined with 1px hairline borders.
  - A disabled button sits at 20% opacity.
  - Next to the buttons is a 1px hairline progress bar ("scrollbar") with a darker drag segment. It is clickable and draggable.

---

## 1. Tour-type listing: `/tour-type/mtb-tours` (and `/tour-type/e-mtb-tours`)

The page background is charcoal throughout, except the cross-sell band (charcoal-10) and the CTA (black).

### 1.1 Header and breadcrumbs
- Breadcrumb: `HOME › MTB`, with a charcoal background (`.site-header-offset.bg-charcoal`).

### 1.2 Intro (`.px-container.py-2xl > .row.align-items-end`)
- **Columns:** left `col-lg-8` holds the H1; right `col-lg-4` holds the intro text (x=960, w=437). Both are bottom-aligned.
- **H1 "MTB / TOURS":** two lines (a forced `<br>`), 4xl 87.4px, line-height 0.8 (69.9px), cream. Animated per word.
- **Intro paragraph `.text-block-30`:** body 15px / 22.5px, max-width about 451px. Fades in on load.
- **Spacing:** top padding 94px after the breadcrumb. The H1 top sits about 95px below the breadcrumb bar.

### 1.3 Filter bar (`.filter`)
- **Bar:** margin-top 70px, with a 1px hairline top border across the full container width. Pills sit 28px below the line.
- **Desktop pills `.filter-list > li > button.filter-list-item`:**
  - Labels: ALL, NOVICE +, INTERMEDIATE, INTERMEDIATE +, ADVANCED.
  - Pill: height 40px, padding 0 19.8px, radius 19.8px, gap about 7.5px. Text 13.16px uppercase.
  - Inactive: background charcoal-5 `#2F2F2C`, text grey-light `#B6B4AE`.
  - Hover: background charcoal-10 `#3A3A37`, text cream.
  - Active (`.mixitup-control-active`): cream background, charcoal text. Transitions run 0.3s.
- **E-MTB page:** the same layout with only 4 pills (no ADVANCED). Filters are generated from the levels actually present on the page.
- **Filtering logic:** MixItUp on `.tours-listings`.
  - Each card has the class `mix mix-{level}` and each button has `data-filter=".mix-advanced"`.
  - Single select. "All" resets the filter.
  - Animation: matching items stay and non-matching ones fade out while shifting down about 60px. The grid then reflows and new items fade in from below.
  - Total duration about 0.5-0.6s. The container height animates.
  - No URL state, no counts.
- **Mobile (<lg):** the pills collapse into a "FILTER" toggle row (`.filter-toggle`).
  - The row is 49px tall with a 3-line icon on the left and a chevron on the right, and a hairline top border.
  - Tapping it adds `.filter-dropdown-is-open`. The dropdown expands using `grid-template-rows 0fr → 1fr` over 0.5s, ease `cubic-bezier(.645,.045,.355,1)`, with a 0.2s delay.
  - The open panel is full-bleed with a charcoal-10 background. Pills wrap onto several lines, are 33px tall, and are outlined (1px hairline) when inactive or filled cream when active.

### 1.4 Tour grid (`.tours-listings`)
- **Grid:** CSS grid with 3 columns of 436.8px. Column gap 21.6px, row gap 86.4px. Margin-top 52px, padding-bottom 47px.
- **Stagger:** the middle column items (`.tours-listings-item.middle`, which is the 3n+2 position server-side) get `transform: translateY(47px)`. The result is a staggered "poster wall".
  - Caveat: the class stays put after filtering. When rebuilding, compute the stagger from the visible index.
- **Card `a.tours-listings-item`** is the whole card as a link:
  - **Media `.tours-listings-media`:** aspect-ratio 7/10 (437x624).
  - **Full-bleed variant:** the image covers the box with `object-fit: cover`.
  - **Framed variant (`.tours-listings-media-framed`):**
    - Coloured mat (per-tour colour, e.g. `#C7B2A8` dusty pink, sage `#B5C495`, slate `#66667E`, olive `#7D8A5C`, teal `#3F5A55`, sky `#8ABDCC`).
    - The image is inset 21.8px top, left and bottom, and about 65.5px on the right, so the vertical label sits on the mat.
  - **Poster title overlay `.tours-listings-media-title`:**
    - Absolutely positioned over the whole media area with z-index 3. Padding 21.8px, plus 65.5px on the right.
    - Uppercase cream text, or charcoal with `.text-dark`.
    - Modifiers combine freely per tour:
      - `font-family-mid`: Ginto Normal Black 43.2px / lh .85 / ls -.02em.
      - `font-family-narrow`: Ginto Nord Condensed 43.2px / lh .9 / ls -.03em.
      - `font-family-wide`: Ginto Nord Ultra 36px / lh .8.
      - `font-size-small`, `font-size-medium` and `font-size-large` (57.6px) set the size.
      - `v-align-top|bottom` and `h-align-left|center` set the position.
    - Optional translucent tint behind the title (e.g. `rgba(36,36,33,.1)`).
  - **Vertical meta `.tours-listings-media-details`:**
    - Shows "PYRENEES | MTB" at the bottom-right edge, rotated 90° so it reads top to bottom.
    - Ginto Normal Black 16.2px uppercase cream, with a `|` separator between the `li` items. Inset 21.8px from the bottom and right.
  - **Title under the media `.tours-listings-title`:** the country, e.g. "SPAIN". Ginto Nord Condensed 26.2px / lh .9, uppercase. Padding 19.6px 0 9.8px.
  - **Details `.tours-listings-details`:** a flex row of `li`, 13.16px uppercase light.
    - The first `li` carries a level icon in `::before`: a 13px SVG pixel glyph. Each level has its own glyph (`level-intermediate-plus` is a "+" cross, `level-intermediate` a chequer, advanced a different chequer).
    - The second `li` is "8 DAYS / 7 NIGHTS", preceded by a "•" separator.
  - Card height is about 697px (624 media + 73 text).
- **Hover:**
  - `.tours-listings-media-hover` holds a looping muted `<video>` or an alternate image and fades from opacity 0 to 1 over 0.3s.
  - The base image fades to 0.
  - The title overlay gains a 20% charcoal tint (`rgba(36,36,33,.2)`) so the text stays legible.
  - There is no scale effect and no "view tour" label in the current version.
- **Mobile:** a single column at 362px with row gap 28px and no stagger. Media keeps 7/10. Title overlay is 35px, title 19.3px.
- **Listing size:** the MTB page has 22 cards and the E-MTB page has about 10.

### 1.5 Cross-sell band (`.px-container.py-xl.bg-charcoal-10`)
- On the MTB page this links to E-MTB; on the E-MTB page it links to MTB.
- **Background:** charcoal-10 `#3A3A37`. Padding 70px 43px. Height about 875px.
- **Left `col-lg-7`** is a flex column with space-between:
  - Top block `.pt-lg.bt-light`: a hairline top border, padding-top 52px, and the H2 at 3xl 63.9px ("E-MTB / TOURS").
  - Bottom block `.pb-lg.bb-light`: a hairline bottom border. A row holds the paragraph (max about 451px) on the left and a `FIND OUT MORE` pill on the right, aligned to the bottom (59px tall).
- **Right `col-lg-5`:** a 3:4 portrait image (551x735) with `.image-reveal` clip-wipe. It is hidden below lg.

### 1.6 Full-width CTA "Tour calendar" (`.fwcta-block`)
- **Block:** 810px tall at 1440. Padding 94px 43px 70px. Black background.
- **Background:** `.fwcta-block-bg` is an absolute full-bleed landscape image with a dark gradient toward the bottom.
- **Content `.fwcta-block-main`** is anchored to the bottom:
  - H2 at 3xl.
  - `.fwcta-block-footer`: hairline top border, margin-top 35px, padding-top 26px. Flex row with the paragraph on the left and a "VIEW TOUR DATES" pill on the right.
- **Mobile:** 506px tall.

### 1.7 Footer
The sitewide footer: "LET'S START AN ADVENTURE" CTA, newsletter row, contacts and legal.

---

## 2. Tour detail: `/tour/dolomites-italy-mtb`

The page alternates charcoal and cream. Order: hero → overview (charcoal) → gallery (split) → highlights (cream) → itinerary (charcoal) → plan (cream) → private CTA (charcoal-10) → guides (split charcoal) → reviews and explore (cream) → footer.

### 2.1 Hero (`.article-hero.article-hero-tall`)
- **Size:** 797px tall, from y=0 behind the transparent header. Padding-top 75px. The breadcrumb `HOME › MTB › DOLOMITES ITALY` sits inside the hero over the image.
- **Background `.article-hero-bg`:**
  - Absolute, bottom -94px (it bleeds into the next section), 1440x892. Image ratio 3:2 with object-fit cover.
  - `::before`: a top gradient, charcoal to transparent, 225px tall.
  - `::after`: a bottom gradient, charcoal to transparent, about 670px tall. The hero melts into the charcoal overview.
  - The image parallaxes at opacity 0.85.
- **Content `.article-hero-main`:** padding 94px 43px, centered both ways.
  - `.location-heading`: a map-pin icon plus "ITALY", 13.16px uppercase. Margin-bottom 26px.
  - H1 "MONUMENTAL / DOLOMITES": 4xl 87.4px / .8, centered, max-width about 700px.
- **Mobile:** the hero is 349px tall and the H1 is 36.8px, centered.

### 2.2 Sticky tour bar (`.sticky-nav`), the booking bar
- It is the last element in the main wrapper with `position: sticky; bottom: 0`, so it always sits at the bottom of the viewport (y = 826 at 900px height) until the footer.
- It is not a sidebar. Height 74px, black background `#121211`, padding 11px 30px, z-index 100.
- **Left `ul`:** in-page anchors OVERVIEW · HIGHLIGHTS · YOUR ITINERARY · PLAN YOUR TRIP · YOUR GUIDE · REVIEWS.
  - Text 13.16px uppercase. Spacing about 30px.
  - Inactive: grey `#797874`. Active/hover: cream with a 1px cream underline (a background-image underline).
  - A scroll-spy watches `.page-nav-target` sections (`#overview`, `#highlights`, `#itinerary`, `#plan`, `#guides`, `#reviews`) and updates `.active`.
  - Clicks smooth-scroll (Lenis).
- **Right `.btn-group`:**
  - `BOOK NOW`: cream pill, 104x44, linking to /booking. Hover background is grey-light.
  - `ASK A QUESTION`: a stroke pill (148x44, 1px cream border), a GET form to /enquiries?tourId=. Hover fills cream.
  - Gap 8px.
- **Mobile:** the links are hidden and the bar is 58px tall with padding 7px 14px. It shows the two buttons at equal width (178x37 each, 50/50).

### 2.3 Overview (`#overview .container.py-2xl`, charcoal)
- **Row 1, left `col-lg-4`:** `ul.tour-details-sidebar`, a key-facts list, not sticky.
  - Width about 263px. It is a single-column grid.
  - Each `li` has padding-bottom 13px, a hairline bottom border, and about 13px space above the next item.
  - The label `.tour-details-sidebar-heading` is 13.16px uppercase Regular. The value below it is Light 13.16px uppercase.
  - Items: LEVEL (with the level glyph), DURATION, RIDERS (MAX), REGION, PRICE (PER PERSON) "£3275 / €3930 / $4519.50".
- **Row 1, right `col-lg-8`** (x=502, w=895):
  - H2 "TOWERING PEAKS AND ALPINE MEADOWS.": Ginto Nord Condensed xl 35px / lh 1.0.
  - `.richtext-two-col`: CSS `column-count: 2`, margin-top 26px. Paragraphs are 15px / lh 24.4px, margin-bottom 18.8px, with padding-right about 45px as a pseudo column gap.
  - Inline links are bold and underlined.
- **Row 2 (`.row.pt-2xl`)** has two `col-lg-6` columns:
  - **Left: `h2.plus-heading` "+ TOUR FLAVOUR".**
    - 13.16px uppercase with a "+" icon. Hairline top border, padding-top 19.7px, margin-bottom 26px.
    - Below it sits `.tour-flavour-chart`, a JS chart driven by data attributes: `data-challenge=8 culture=6 food=8 riding=9` plus `data-tourcolour=#8abdcc`. It renders as a 4-axis radar/bar chart in the tour colour.
    - It rendered empty in headless capture, so treat the exact chart look as an open item. A 4-bar or radar chart (0-10) in the tour colour on charcoal is suggested.
  - **Right: "+ TOUR DATES"**, then `ul.tour-dates-list`:
    - Each `li` is flex with space-between, padding 22.5px 0 (69px tall), and a hairline bottom border.
    - `.dates` reads "26 JUN 2027 - 03 JUL 2027", 15px uppercase cream.
    - `.availability .spaces` reads "4 SPACES LEFT" in grey-light.
    - Rows reveal one by one (staggered `reveal-fade-in`).
    - There is no price column and no click action; booking goes through the sticky bar.
- **Mobile:**
  - The sidebar becomes the first full-width block. Then the H2 at 22.7px, then the text in one column.
  - The flavour and dates headings stack.

### 2.4 Gallery slider (`.tour-gallery-container`): the dark-to-cream transition
- **Split background:** `.tour-gallery-main::before` is an absolute charcoal block covering the top 252px (about half the slide). The rest is cream, so the image straddles the colour change.
- **Slide column:** `col-xxl-8` centred, 895px wide at x=272. Slides are 16:9 (895x504). `margin-right` is 43px, so the next slide peeks on the right edge.
- **Navigation `.tour-gallery-footer`:** prev/next squares (59px, charcoal-15 hairline borders) and `.tour-gallery-scrollbar` (1px hairline with a charcoal drag of about 90px). Margin-top 22px.
- **Mobile:** slides are 348px wide (196px tall) with a 14px gap.

### 2.5 Highlights (`#highlights`, cream, py-2xl)
- **Column:** `col-xl-5 col-xxl-4 offset-lg-1`, x=158, w=437.
- **H2 "HIGHLIGHTS":** condensed xl 35px charcoal.
- **List:** `li` 15px / lh 24.4px, padding 11px 0 11px 30px.
  - Bullet: a 6px charcoal square/dot (`::before`) at left 0, vertically centred on the first line.
  - Separator: a 1px dashed `rgba(charcoal,.15)` bottom border.
- **Collage `ul.tour-highlights-images`** (`.pb-2xl`): a flex row of 2 offset images, both with `.image-reveal`.
  - Item 1 (right half, padding-left 216px, padding-right 43px): a square 600x600 B&W image (461 wide), placed higher and overlapping upward into the list area.
  - Item 2 (left half, 720 wide, flush to the left viewport edge, margin-top 47px): a 3:2 landscape (720x480).
  - The collage is deliberately asymmetric.
- **Mobile:**
  - Item 1 is pushed right (padding-left 181px, about 195px wide).
  - Item 2 is pushed left (padding-right 78px), with a 28px overlap gap. The asymmetry is kept.

### 2.6 Itinerary carousel (`#itinerary`, charcoal, py-2xl, `overflow:hidden`)
- **Desktop:** the Swiper's first slide is the intro (`.tour-itinerary-carousel-intro`).
  - It holds the H2 "TOUR ITINERARY" (3xl 63.9 / .8, max-width 383px), a paragraph, and a "VIEW FULL ITINERARY" pill.
- **Day slides `.tour-itinerary-carousel-slide`** are 451px wide with a 129.6px gap; about 2.3 slides are visible and the rest bleed off the right edge.
  - Subheading "DAY 0": condensed lg 26.2px in muted-dark `#50504D`.
  - Heading "ARRIVAL IN VENICE": condensed 26.2px cream, directly below with no gap.
  - Then 2 paragraphs (`.text-block-30`) and a "MORE INFORMATION" pill (59px tall). It links to `/itinerary` (a separate page; the cards are not expandable).
- **Vertical zig-zag:** odd and even slides alternate. Slides 1, 3, 5 are pushed down about 94px relative to 2, 4, 6, which gives a stepped rhythm.
- **Footer:** prev/next squares, the next button filled cream when active, and a long hairline scrollbar (1215px) with a cream drag segment. Margin-top about 47px.
- **Mobile:**
  - The intro moves out of the slider (`.d-lg-none` copy, centred text).
  - The slider shows one centred slide at a time with centred text.
- **Accordion:** there is no itinerary accordion on this page. The accordion lives in Plan your trip (next).

### 2.7 Plan your trip (`#plan`, cream, py-2xl): tabs plus accordion
- **Left `col-lg-5`:** `.tour-plan-sticky` (position sticky, top 169px). The tabs follow while reading long accordions.
  - H2 "PLAN YOUR / TRIP": 3xl charcoal.
  - `ul.nav-tabs` holds pill tabs (`.tour-plan-nav-link`): WHAT'S INCLUDED · ARE YOU READY? · WHAT BIKES? · FAQ'S · OTHER DETAILS.
  - Tabs: 40px tall, padding 0 19.8px, radius 19.8px, 1px charcoal border. They wrap onto 2 lines with gap 8px.
  - Inactive: transparent with charcoal text. Active: charcoal fill with cream text. Transition 0.15s.
  - Bootstrap tabs: the panes swap with a fade. A tab click also scrolls to `#plan` (`data-scroll`).
- **Right `col-lg-6 offset-lg-1`** (x=731, w=666): `.tab-content` with a `.tour-plan-accordion` per pane.
  - Each `.accordion-item` has a hairline top border.
  - `.accordion-button`: flex with space-between, padding 29.7px 0 (79px rows). Label in condensed md 19.8px uppercase.
  - The icon is a "+" (`ri-add-fill`) that rotates 45° into an "×" when open.
  - Body: padding-bottom 45px.
  - Body lists use a 6px dot bullet with 30px indent and 1px dashed separators (same as Highlights). Links are bold and underlined.
  - Bootstrap collapse animates the height. `data-bs-parent` means one item open at a time.
  - "What's included" items: Tour price / Price includes / Price excludes / Payment terms.
  - Some panes end with `.article-links-item`: a full-width row with a 59px square arrow box plus a label (e.g. "VIEW KIT LIST"), with hairline borders top and bottom.
- **Mobile:** the H2 and tabs come first (tabs wrap 2 + 3), then the accordion full width. Rows are 67px tall and the label is 16.45px.

### 2.8 "Make this tour private" (`.customise-tour-block`, charcoal-10, py-2xl)
- **Columns:** `col-lg-4` holds the H2 in condensed 2xl 47px / .9 (3 lines). `col-lg-6` holds the paragraph and a "GET STARTED" pill.
- **Decoration:** a large tiled brand-monogram pattern in a slightly lighter charcoal, bleeding off the right edge (decorative SVG background).
- **Interaction:** the pill opens `.modal.modal-drawer`.
  - Backdrop: `rgba(18,18,17,.5)` fade 0.4s.
  - Panel: a 752px right-side drawer that slides in from translateX(100%) over 0.4s with ease `cubic-bezier(.645,.045,.355,1)`. Charcoal background, scrollable.
  - Top-left close: a square bordered "×".
  - Title "CUSTOMISE YOUR TOUR" at about xl Black. Intro text.
  - Form sections are headed in condensed md ("YOUR INFORMATION", "CONTACT PREFERENCES", "COUNTRY OF RESIDENCE", "TOUR OF INTEREST", and so on).
  - Inputs: 66px tall, charcoal-10 fill with a hairline border and a grey placeholder.
  - Radio cards are full-width 58px rows with a round check. When selected the card turns cream with charcoal text.
  - Custom dropdowns; a multiselect with checkboxes pre-selects the current tour.

### 2.9 Meet your guides (`#guides.row.gx-0`): a 50/50 split, 636px tall
- **Left half:** charcoal, padding 70px 43px, flex column with space-between.
  - H2 "MEET YOUR / GUIDES" in 3xl with a hairline top border.
  - Paragraph at the bottom with a hairline bottom border.
- **Right half (`.guides-carousel-container`):** charcoal-5 `#2F2F2C`, padding 128px 43px.
  - The guide card is centred, 317x380 (5:6 portrait), B&W photo.
  - The name sits overlaid at the bottom in condensed lg 26px, padding 26px, centred.
  - Card swaps use Swiper "creative" effect: the next card rises from below (translateY 100%) and the image parallaxes (`data-swiper-parallax-y=50%`, scale 1.1 → 1). The name slides in separately.
  - Navigation: a vertical stack of two 70x70 squares (charcoal background, hairline divider) pinned to the right viewport edge at mid-height.
  - Pagination: a centred fraction "01 / 02" in Aeonik Fono 13px. The current number is cream; the rest is grey-mid.
  - The card links to the guide profile.
- **Mobile:** the halves stack. The card is 243px wide.

### 2.10 Reviews (`#reviews`, cream, py-2xl)
- **Header:** H2 "REVIEWS" (3xl, centred), then a "CREATE YOUR OWN REVIEW" charcoal pill (245x59) that toggles an inline form.
- **Column:** centred, 666px wide (x=387).
  - Dotted separators (1px dotted grey-light).
  - Line "AVERAGE RATING: ★★★★★ 17 REVIEWS", 13px uppercase.
  - Each review is centred: stars plus an italic small date "by Author", then a small bold-ish title, then the body at 15px / 1.4, with dotted separators between reviews.
- **Pagination:** 2 per page. "Page 1 of 9" followed by round 34px outlined buttons (« ‹ 1 2 3 › »). The current page is filled charcoal and disabled ones sit at 20% opacity.

### 2.11 Explore (related tours)
- **Divider:** `.hr.py-2xl` (a hairline with 94px above and below), then the centred H2 "EXPLORE" in 3xl.
- **Carousel:** `.tours-carousel` (Swiper, pt-xl) uses the same `.tours-listings-item` cards as the listing page.
  - 3 visible, 437px wide with a 21.6px gap. No stagger.
  - On cream the card text is charcoal and the framed mat uses the tour colour.
- **Mobile:** 355px slides with a peek, plus a nav and scrollbar.

---

## 3. Location page: `/location/italy`

### 3.1 Hero
- The same `.article-hero-tall` as the tour page (797px, gradients, parallax). The breadcrumb reads `HOME › ITALY`.
- **H1 "TOURS IN ITALY":** left-aligned and single-line, 4xl, vertically centred in the hero (y about 425). There is no location pin.

### 3.2 Intro (`.px-container.pb-2xl`, charcoal)
- It continues straight out of the hero gradient. Position relative, z-index 2, and it overlaps the bottom of the hero image by about 94px.
- **Column:** `col-lg-9 offset-lg-3 col-xl-8 offset-xl-4` (x=502, w=875-895).
  - H2 lede: condensed xl 35px / 1.0 uppercase, 3 lines.
  - `.richtext-two-col.text-block-70`: two columns of body text, margin-top 26px.
- **Divider:** `.hr.pt-2xl.pb-xl`, a hairline with 94px above and 70px below.

### 3.3 Tours grid
- Identical to §1.4: a 3-column staggered grid with the middle card translated +47px.
- There are no filters (MixItUp is initialised but no controls).
- Cards here use `text-dark` titles and white-sky images.

### 3.4 Gallery slider
- The same `.tour-gallery` component as §2.4, but wider: `col-md-11 col-xl-10`, 1124px wide (x=158), 16:9 (1124x632).
- **Split background:** the charcoal top portion is about 212px of the slide, with cream below. The next slide peeks on the right.
- **Navigation:** squares plus scrollbar, as before.

### 3.5 Explore: article links list (`ul.home-stories-listings`, cream, py-2xl)
- **Header:** H2 "EXPLORE" (3xl, centred, pb-xl).
- **Rows:** full-bleed rows (1440 wide) with a hairline top border. Row padding 35px 43px (about 117px tall).
  - Left: an index number "01" in 13px Aeonik Fono (a CSS counter).
  - Title at x≈174: Ginto Normal Black 35px / .9 uppercase, wrapping at about 50% width.
  - Right: a 47x47 square arrow box (hairline border).
- **Hover:** the row background fills charcoal (a slide or fade over 0.5s, ease `cubic-bezier(.645,.045,.355,1)`) and the text turns cream. The arrow box inverts to a cream fill with a charcoal arrow.
- **Mobile:** rows are 66px tall with padding 22.7px 14px and the title at 22.7px.

### 3.6 Tour calendar CTA (`.fwcta-block`)
- The same as §1.6, then the footer.

---

## 4. Breakpoint summary (lg ≈ 992px)

- **Container padding:** 43.2px goes to 14px. Type scales fluidly (4xl 87 → 37, 3xl 64 → 31, xl 35 → 22.7).
- **Listing grid:** 3 columns staggered becomes 1 column, gap 28px. Filter pills become a "FILTER" accordion.
- **Hero:** 797px becomes 349px. The centred H1 stays.
- **Two-column richtext** becomes one column. The tour sidebar facts list moves above the text.
- **Sticky tour bar:** links are hidden and the two CTA buttons go 50/50.
- **Itinerary:** the intro is pulled out of the carousel and slides are centred one at a time.
- **Cross-sell band:** the image is hidden (`d-none d-lg-block`).
- **Split sections** (guides, gallery background) stack. The highlights collage keeps its offset pair.

## 5. Key class names for orientation

- **Listing:** `.filter`, `.filter-toggle`, `.filter-dropdown`, `.filter-list-item` (`.mixitup-control-active`), `.tours-listings`, `.tours-listings-item(.middle)`.
- **Tour card:** `.tours-listings-media(-framed)`, `-media-container`, `-media-title` (`font-family-*`, `font-size-*`, `v-align-*`, `h-align-*`), `-media-hover`, `-media-details`, `.tours-listings-title`, `.tours-listings-details li.level-*`.
- **Hero:** `.article-hero(-tall)`, `-main`, `-bg`, `.location-heading`.
- **Tour nav and overview:** `.sticky-nav`, `.page-nav-item`, `.page-nav-target`; `.tour-details-sidebar(-heading|-level)`, `.richtext-two-col`, `.plus-heading`, `.tour-flavour-chart`, `.tour-dates-list (.dates/.spaces)`.
- **Galleries and itinerary:** `.tour-gallery-container/-main/-footer/-nav/-scrollbar`; `.tour-highlights-images`; `.tour-itinerary-carousel(-intro|-slide|-subheading|-heading|-nav|-scrollbar)`.
- **Plan your trip:** `.tour-plan-sticky`, `.tour-plan-nav-link`, `.tour-plan-accordion .accordion-item/.accordion-button/.accordion-body`, `.article-links-item`.
- **Private tour CTA and drawer:** `.customise-tour-block`, `.modal.modal-drawer .modal-container`.
- **Guides and reviews:** `.guides-carousel(-container|-image-container img-5-6|-name|-nav|-pagination)`; `.wpcr3_*` (reviews).
- **Shared blocks:** `.tours-carousel`, `.home-stories-listings(-item|-item-title|-arrow)`, `.fwcta-block(-main|-footer|-bg)`, `.hr`, `.bt-light`/`.bb-light`, `.image-reveal`, `.reveal-fade-in`, `.animate-text`.
