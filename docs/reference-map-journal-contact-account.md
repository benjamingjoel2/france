# Pages C — Stories index, Story article, Enquiry form, My Account, Mobile header/menu

Reference: mountainbikeworldwide.com (desktop 1440, mobile 390). Measured with Playwright computed styles.
Evidence screenshots: `scratchpad/ref/pagesC/*.png` (hover/open/checked states, mobile `m2-*`).

## Shared tokens seen on these pages
- Colours: charcoal page bg `rgb(36,36,33)`; card/raised `rgb(58,58,55)`; input bg `rgb(47,47,44)`; input border `rgb(58,58,55)`;
  cream text `rgb(242,240,232)`; muted text `rgb(182,180,174)`; dim note `rgb(121,120,116)`; menu-image panel `rgb(18,18,17)`;
  hairline `rgba(242,240,232,.15)` on dark, `rgba(36,36,33,.15–.2)` on cream; error red `rgb(189,95,89)`.
- Fonts: body `Aeonik Fono Light` 300 15.04px/22.56 (richtext p 24.44 lh); UI/labels `Aeonik Fono` 400 13.16px uppercase;
  display `ABCGintoNormal-Black` uppercase, lh 0.8, ls -0.02em; condensed `ABCGintoNordCondensed-Medium` uppercase, lh 0.9–1.0, ls -0.03em.
- Display scale @1440: `.font-size-4xl` 87.4px (lh 69.9); `.font-size-3xl` 63.9px (lh 51.1); condensed `xl` 35px (lh 31.5);
  richtext h2 26.2px; h3/`md` 19.8px. @390: 4xl → 36.8px, 3xl → 31.4px, xl → 22.7px. (fluid, ≈ vw-based clamp)
- Spacing: `.px-container` 43.2px sides (14px @390); `.py-2xl` 94.1px; `.pb-xl`/`pt-xl` 70px; @390 2xl≈53px, xl≈45px.
- Easing everywhere: `cubic-bezier(.645,.045,.355,1)` 0.3s. Image hover = `transform: scale(1.1)` 0.3s inside overflow-hidden frame.
- Reveal: `.reveal-fade-in` / `.reveal-fade-in-hero` (fade + small translateY on enter); headings `.animate-text` split into
  words/lines (Splitting.js) and stagger up line-by-line.
- Square arrow button (used across cards/pagination/back): 40×40, 1px hairline border, centred remix-icon arrow 15px;
  hover → cream fill wipes in behind (`::before`), icon turns charcoal (color 0.3s, 0.1s delay).
- Category tag (`.stories-listings-item-category`): flex row, 10×10 cream square `::before` + Aeonik Fono 13.16 uppercase, mb 19.7px.
- `.plus-heading`: eyebrow label (Aeonik Fono 13.16 uppercase) with a `+` icon (remix `ri-add-fill`) below it, mb 26px;
  `.plus-heading-below` variant stacks icon under text; `text-center` variant centres both.
- Breadcrumbs (`.breadcrumbs`): full-bleed strip directly under header, padding 15px 30px, border-bottom hairline,
  Aeonik Fono 11.9px uppercase; links underlined (animated `background-size` underline 0.3s), current page at ~50% opacity; `›` separators.

---------------------------------------------------------------------------------------------------
## 1. /stories (Stories index) — all on charcoal bg

1. **Header** fixed 75px (see global map). Breadcrumb strip y=75, h=47 (HOME › STORIES).
2. **Intro** `.px-container.py-2xl` (pt 94 / pb 70 `.pb-xl`)
   - `.plus-heading` "GET INSPIRED" + `+` (y=217).
   - H1 `.font-size-4xl` 87.4px "ADVENTURE / STORIES", 2 lines, max-width ~874px, left aligned; split-line animate on load.
3. **Featured story** `.stories-featured-listing` (reveal-fade-in)
   - 1354×508, flex 50/50, bg `rgb(58,58,55)` (lighter card).
   - Left `.stories-featured-listing-image` 677×508, aspect 4/3, img object-fit cover, hover scale 1.1.
   - Right `.stories-featured-listing-main` padding 81px 108px, vertically centred column:
     tag "FEATURED" → title condensed 35px/31.5 (max-w 460) mb 17.5 → excerpt body 15px (max-w 460).
   - Whole card is a link; hover = image zoom only.
4. **Filter bar** `.filter` mt 70px, border-top hairline, then pills (mt ~27px):
   - `.filter-list` flex wrap, gap ≈7.5px (items margin 0 3.76px).
   - `.filter-list-item` pill: h 40px, padding 0 19.8px, radius 19.8px (full), Aeonik Fono 13.16 uppercase.
     Inactive bg `rgb(58,58,55)` text muted; active = cream bg + charcoal text. Transition color/border/bg 0.3s; hover → cream-ish.
   - Items are plain links to `/category/<slug>` (server-side page per category, no JS filtering).
   - Desktop: `.filter-toggle` hidden; mobile: becomes a full-width row "≡ FILTER ›" (h 49, border-top hairline) that
     expands `.filter-dropdown` with the same pills wrapping (x-collapse).
5. **Grid** `.stories-listings` mt 35px — Masonry-style (absolute positioned, `grid-sizer`/`gutter-sizer`), 2 columns.
   - Item 666px wide, gutter 21.6px (1.5% of 1440), row gap 45px (item mb 45.12). 10 items per page.
   - `.stories-listings-item-image` aspect 4/3 (666×500), overflow hidden, img cover; hover img scale 1.1 (0.3s).
   - Below image (mt ~19px): category tag, then `.stories-listings-item-title` flex row: h3 condensed ~26px/0.9 uppercase
     (max-w ~420px, 2–3 lines) left; 40×40 arrow box right (top aligned). Hover anywhere on card → arrow box fills cream.
6. **Pagination** `.pagination` mt 70px, flex space-between: prev arrow box (left, disabled at 20% opacity), centred numbers, next arrow box (right).
   - Number boxes 40×40, 1px hairline, gap ~7.5px, Aeonik Fono Light 15px muted; `.active` cream fill + charcoal text.
7. **Footer CTA + footer** (global): "LET'S START AN ADVENTURE" 3xl, border-top hairline, pt 94 pb 70; newsletter row; info.

**Mobile 390**: H1 36.8px; featured card stacks (image 4/3 on top, text block padding 22×29, title 22.7px); filter becomes
toggle row; grid 1 column 362 wide, image 4/3, title 2 lines then arrow box drops BELOW title (left aligned);
pagination numbers overflow (site bug — keep to prev/next + few numbers).

---------------------------------------------------------------------------------------------------
## 2. Story article (/travel-advice/guided-vs-self-guided-mountain-bike-tours)

Wrapper `.article-wrapper.bg-charcoal.overflow-hidden`.

1. **Hero** `.article-hero` (h 572 incl. 75 header offset), header & breadcrumbs sit transparently OVER the image.
   - `.article-hero-bg` absolute, 1440×667 (extends ~95px below hero, behind the cream panel's top edge), img cover, opacity .85,
     `::after` gradient `linear-gradient(0deg, charcoal 0%, transparent 100%)` for legibility; slight parallax translate on scroll.
   - `.article-hero-main` padding 94 43 70, content bottom-left: category tag (TRAVEL ADVICE) → H1 3xl 63.9px/51.1,
     max-w ~640 (4 lines). Optional `.article-author` (avatar + name/role) — not present on this post.
2. **Article body** `.article-main.bg-dust` — cream panel `rgb(242,240,232)`, text charcoal, padding 94px 0.
   - Inset 43px from the LEFT edge, bleeds to the RIGHT viewport edge (left charcoal strip visible all the way down) — asymmetric "sheet" look.
   - Each `.article-block`: flex, padding 0 65px 0 108px (8%/4.8% of panel); blocks separated by mt 70px.
   - **Intro block** `.article-share-container`: `.richtext-first-letter` (w ~902) with H2 condensed 26.2px (mb 19.7) +
     paragraphs 15px/24.4 (mb 18.8), links Aeonik Fono 400 underlined (animated underline).
     Right column `.article-share` (ml 70px): vertical rotated label "SHARE ITINERARY" (condensed 15px, rotate -90°)
     + stacked 45×45 icon buttons (Twitter, Facebook, WhatsApp, Email) in a 1px `rgba(36,36,33,.2)` bordered column;
     hover → charcoal fill wipes in, icon turns cream (0.3s, 0.1s delay).
   - **Split blocks** `.article-split` (alternating, `.article-split-reverse`): two equal columns 590px each;
     image column padding-right 59, text column padding-left 59. Image square-ish (531×531, cover) vertically centred vs text;
     H3 condensed 19.8px (mb 14.8) + paras. Reverse flips image to the right. Italic one-liners used as pull-ins.
   - Other block types available in the template (not used here): `.article-video-block` (cover image + round play button
     → iframe), `.article-accordion-block` (Bootstrap accordion, `+` icon rotates), itinerary stats/feature icon grids, `.article-image` full width.
   - **Back button** `.back-btn` at end: 40×40 arrow box (left arrow) + "SEE ALL STORIES" condensed 19.8px, ml 19.8; hover fills box.
3. **Related stories** `.px-container.py-2xl.bg-charcoal`: centred plus-heading "CONTINUE READING" + H2 3xl "RELATED STORIES"
   - `.stories-listings-carousel` (Swiper) mt 94; slides 666px (2 per view + peek of a 3rd), spaceBetween 21.6; same card as index.
   - Footer row: two 59×59 square nav buttons (hairline border, chevrons; disabled at 20% opacity) + 1px scrollbar track
     (`rgba(cream,.15)`) with cream drag bar, ml 19.8, fills remaining width.
4. Global footer.

**Mobile 390**: hero h ~293 (56 header offset), H1 31.4px; cream panel inset 14px left (keeps the strip), padding 53 0,
blocks padding 0 15 0 29; share becomes a horizontal row ("SHARE ITINERARY" label + 4 boxes ~37px) above the intro;
split blocks stack image (318×318) then text (mt 38.7); related carousel 1 slide + peek.

---------------------------------------------------------------------------------------------------
## 3. /enquiries (Contact) — SINGLE-STEP form (no steps / no progress UI)

1. **Intro** `.px-container.py-2xl`: H1 4xl "CONTACT" (1 line). Row below (mt ~36):
   - `col-xxl-5`: intro paragraph `.text-block-25` (max-w 376) body 15px/24.
   - `col-xxl-3`: "GENERAL ENQUIRIES" condensed 19.8px (mb 7.5) + `.contact-details` (mt 19.8): lines "T: <link> (UK)"
     links underlined, `.contact-details-note` dim `rgb(121,120,116)`.
   - `col-xxl-4`: "PRESS ENQUIRIES" same pattern. Columns start at x=616 and x=960.
2. (`.fwi.parallax-container` full-width parallax image slot exists in template; empty here.)
3. **Form section** `.px-container.py-2xl`, `row justify-content-center`:
   - Left `col-lg-5`: plus-heading "MAKE AN ENQUIRY" + condensed xl 35px/31.5 statement (4 lines, max-w 525).
     Not sticky.
   - Right `col-lg-6 offset-lg-1` (x=731, w=666): `.contact-form`.
4. **Fields** (vertical stack, order): First name*, Last name*, Email*, Country of residence* (dropdown),
   Which tour…* (multi-select dropdown), How can we help? (textarea), Prefer to talk? (callback checkbox → reveals Telephone* + Best time* (type=time)),
   Sign up to newsletter? (checkbox), Submit.
   - Label: Aeonik Fono 13.16 uppercase cream, margin 19.7 top / 6.6 bottom; `*` in label text.
   - Input: h 67px (52 @390), padding 0 22.2, bg `rgb(47,47,44)`, border 1px `rgb(58,58,55)`, radius 0, text 15px 400 cream;
     transition border/bg 0.2s. **Focus**: bg → page charcoal `rgb(36,36,33)`, border → cream. No outline.
   - Textarea: h 120, padding 15×22, placeholder muted, resizable vertically.
   - **Dropdown** `.contact-form-dropdown` (Bootstrap dropdown on a button): same box as input, flex space-between,
     placeholder "Please select…"; right 26px **cream circle** with charcoal chevron (`.dropdown-toggle-arrow`, radius 50%).
     Open menu: absolute, directly under (offset 0), full width, max-h 300 scroll, bg input colour, padding 7.5 0, border 1px.
     `.dropdown-item` padding 11.3 22.2, muted text; hover → bg `rgb(58,58,55)` + cream text. Selecting writes text into toggle.
   - **Multi-select** (tours): same toggle "Select one or more…", menu stays open on click (auto-close outside).
     Each row: 23px **round** checkbox (1px muted border, transparent) + label muted; checked → cream filled circle with charcoal ✓,
     label turns cream. Toggle text summarises: "2 tours selected".
   - **Checkbox rows** `.contact-form-checkbox-item`: 26px **square** box (bg input colour, border 1px `rgb(58,58,55)`) +
     label muted 15px (pt 1.9, ml 11.3). Checked → ✓ (remix `ri-check-line`) shown in cream inside box.
     Callback checkbox is a Bootstrap collapse trigger: checking slides open `.contact-form-collapse` (height anim ~0.35s) with phone + time inputs.
   - (A commented-out radio pair "Send a message / Request a callback" uses `.contact-form-radio-item` chip-style radios — not live.)
5. **Submit** `.contact-form-submit.btn.btn-inverted`: pill h 59, padding 0 38.5, radius 30, cream bg, charcoal Aeonik Fono 13.16 uppercase,
   mt 45; hover bg → muted `rgb(182,180,174)` (0.3s). @390 h 42, padding 0 26.5.
6. **Validation**: JS-handled (`contact-form.js`); empty submit showed NO visual field error states and no inline messages in
   capture — only a hidden `.response` container. (Recommend: add our own error state — red `rgb(189,95,89)` 11.5px uppercase
   message + red border, as used on the account page `.text-danger`.)
7. **Confirmation**: AJAX; message injected into `.response` (no page change / no separate thank-you step observed — not submitted).

**Mobile 390**: everything single column; contact columns stack (heading 19.8 → details); statement 22.7px; form full width (362).

---------------------------------------------------------------------------------------------------
## 4. /my-account (Login / Register)

1. **Intro** `.px-container.py-2xl > .container`: H1 3xl 63.9px "MY ACCOUNT" centred (pb 70).
2. **Login widget** `.login` (centred, w 960, margins ~197): richtext H2 condensed 26.2 centred "LOGIN / CREATE AN ACCOUNT",
   sub copy 15px centred, then `.logintype` 2 equal tab buttons (469×59, gap 22, square corners):
   bg `rgb(58,58,55)`, Aeonik Fono 14px uppercase cream; hover/active → cream bg + charcoal text (0.2s ease-in-out).
   - "YES. I HAVE AN ACCOUNT" → `.loginpanel` (pt 30): Email*, Password* fields (half width 469, h 59, same input style,
     placeholders lowercase, focus = charcoal bg + cream border); required `*` red `rgb(189,95,89)` 11.5px; full-width pill
     LOGIN button (960×59, radius 30, cream, disabled until valid); "I've forgotten my password" muted link below.
   - "NO. I DON'T HAVE AN ACCOUNT" → `.registerpanel`: centred intro copy; section headings "DETAILS:" / "EMAIL AND PASSWORD:"
     condensed ~20px with 1px cream rule under (full width); 3-col grid (306px cols, gap ~16): Title (select), First, Last;
     Country (select), Mobile (intl-tel-input with flag dropdown), DOB; then 2-col: Email / Confirm, Password (hint
     "*MINIMUM OF 8 CHARACTERS") / Confirm; footer row: terms sentence left + REGISTER pill (306×59) right.
   - Panels toggle instantly (show/hide), only one visible.
3. **Full-width image** `.fwi.parallax-container`: 1440×~810 (16:9) window, inner img 1440×1013 translated on scroll (parallax).
4. Global footer CTA ("LET'S START AN ADVENTURE" + CONTACT US pill) + footer.

**Mobile 390**: H1 31.4 centred; tab buttons stack full width (h ~42, gap ~22); fields 1 column; image 390×~475.

---------------------------------------------------------------------------------------------------
## 5. Mobile header (390)
- `.site-header` fixed, h 56, bg charcoal, `.site-header-container` padding 10.5px 14px, flex 3 zones (left/right each flex:1).
- Left: `.site-menu-toggle` "≡ MENU" (14px 3-line icon with unequal bar lengths + Aeonik Fono 12.25 uppercase, gap 7). Desktop has a
  vertical hairline divider after it and the 75px height; mobile has no divider.
- Centre: logo SVG 73×25 (desktop 90×30) absolutely centred.
- Right: account link hidden < lg; CONTACT pill `.btn-sm.btn-inverted` h 37, padding 0 15.75, radius 28, cream bg, 12.25px uppercase
  (text "CONTACT" < md; "CONTACT US" ≥ md; chat icon `ri-chat-3-line` variant shown in menu-open state).
- Border-bottom hairline under breadcrumbs; header gets box-shadow transition 0.3s when scrolled (no hide-on-scroll observed).
- Body gets `.no-scroll` when menu open.

## 6. Full-screen menu (`.site-menu.site-menu-is-open`)
- `.site-menu` fixed inset 0, z above page; opacity/visibility toggle.
- `.site-menu-main` bg charcoal, padding-top = header height; **open animation = clip-path wipe top→bottom**
  (`clip-path: inset(0 0 100% 0)` → `inset(0)`, 0.5s ease above). Desktop also has `.site-menu-images` (right 50%, bg `rgb(18,18,17)`)
  that wipes with 0.1s delay and shows a full-height photo per nav item (crossfade on hover, `.active` default).
- Header stays on top: MENU toggle swaps to "✕ CLOSE" (`.site-menu-close`), logo stays, right side keeps CTA.
- Nav `.site-menu-nav.ginto-normal-black` : items 32px/40 (desktop ~56px/1.0), uppercase, ls -0.02em.
  Mobile: centred horizontally and vertically in the space above socials (flex column, justify/align center); desktop: left aligned, vertically centred in left half.
  Items: MTB, E-MTB, CALENDAR, OUR GUIDES, STORIES, WHY H+I, CONTACT.
  - Current page item = **outlined text** (`-webkit-text-stroke: .02em cream; color: transparent`).
  - Hover: siblings dim to opacity .25 (transition opacity 0.3s); hovered stays 1 (and swaps right-side image on desktop).
  - Items likely stagger in (translateY/opacity) after the wipe.
- `.site-menu-social` below nav: 4 icons (LinkedIn, Instagram, YouTube, Mail) 21px separated by 20px horizontal rules,
  centred on mobile (left on desktop); fades/slides in with 0.5s delay (opacity/transform 0.3s 0.5s).
- `.site-menu-account-btn` (mobile only): full-width bar pinned at bottom, h 49, bg `rgb(47,47,44)`, user icon + "MY ACCOUNT" 12.25 uppercase centred.

## Build notes / gotchas
- Reference at 390 has horizontal overflow (scrollWidth 602 from pagination numbers) — avoid: cap pagination to window of numbers.
- Masonry not needed: equal 4/3 images make a plain CSS grid `repeat(2,1fr)` gap 45/21.6 identical.
- Enquiry form is one page; if our brand wants steps, reuse these primitives (input box, round-check multi-select rows,
  square checkbox, cream pill) — no progress UI exists to copy.
