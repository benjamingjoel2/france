import type { Faq, FaqCategory } from "./types";

/**
 * FAQs. Answers marked "Verify before launch" cover rules and facts that change;
 * check them against official sources before publishing. Business terms in
 * [SQUARE BRACKETS] are placeholders.
 */
export const faqs: Faq[] = [
  // ── Your trip ──────────────────────────────────────────────────
  {
    id: "whats-included",
    category: "Your trip",
    question: "What's included in a Rond-Point road trip?",
    answer: [
      "Every loop includes hand-picked stays (boutique hotels, châteaux, farmhouses and the odd fisherman's house), car hire with a full-insurance option, a beautifully printed route book plus an offline app version, and one dedicated specialist on WhatsApp seven days a week for the whole trip.",
      "We also book the things that need booking (restaurant tables, cave tickets, tastings, e-bikes and guides) and send you local tips you won't find in a guidebook. Each trip page lists exactly what's included and what isn't.",
      "Not included: flights or trains to France, fuel, tolls, parking, most meals and personal travel insurance. We're happy to advise on any of them.",
    ],
  },
  {
    id: "whatsapp-specialist",
    category: "Your trip",
    question: "How does the WhatsApp specialist support work?",
    answer: [
      "The same person who designed your trip stays with you while you're on the road. Message them on WhatsApp for anything: a dinner recommendation, a change of plan, a flat tyre, a sudden craving for oysters.",
      "Your specialist is available seven days a week during your trip, from [8:00 to 20:00] Paris time, with an emergency line outside those hours. Replies are usually within minutes, not hours.",
    ],
  },
  {
    id: "best-months",
    category: "Your trip",
    question: "When is the best time to go?",
    answer: [
      "It depends on the corner of France. Late spring (May–June) and early autumn (September–October) are lovely almost everywhere: warm, green or golden, and quieter than high summer.",
      "Some highlights are seasonal. Provence's lavender usually flowers from late June to mid-July, the high Alpine passes are generally open from about June to October, the grape harvest runs roughly from late August to early October, and Alsace's Christmas markets fill late November and December. Our When to go calendar has the details, and dates shift year to year, so we always check before we plan.",
    ],
  },

  // ── Cars & driving ─────────────────────────────────────────────
  {
    id: "car-hire-insurance",
    category: "Cars & driving",
    question: "How does car hire and insurance work?",
    answer: [
      "We arrange your car with a reputable rental partner, collected at the airport or station where your loop begins and ends. Standard hire includes the legally required third-party cover; we strongly recommend the full-insurance option, which reduces your excess (deductible) to [zero or a small amount].",
      "You'll need a credit card in the main driver's name for the rental deposit. Additional drivers can be added at the counter. We'll send you a checklist before you travel so the pick-up takes minutes, not an hour.",
      "Verify before launch: confirm the rental partner's insurance terms, excess amounts and deposit rules.",
    ],
  },
  {
    id: "driving-licence-idp",
    category: "Cars & driving",
    question: "Do I need an International Driving Permit?",
    answer: [
      "It depends on where your licence was issued. Licences from EU and EEA countries are valid in France. A UK photocard licence is generally accepted for visits without an International Driving Permit (IDP), though an older paper licence may need one.",
      "Licences from many other countries (including the USA, Canada and Australia) are usually accepted for short visits, but some must be accompanied by an IDP or an official translation, and some rental partners ask for an IDP regardless. Check with us and with official sources for your country before you travel; an IDP is inexpensive and can save an awkward conversation at the rental desk.",
      "Verify before launch: rules depend on licence country and can change.",
    ],
  },
  {
    id: "automatic-vs-manual",
    category: "Cars & driving",
    question: "Can I have an automatic car?",
    answer: [
      "Yes, but you need to ask. Manual gearboxes are still the default for hire cars in France, so automatics are in shorter supply and cost more. Tell us when you enquire and we'll guarantee an automatic in your booking.",
      "If you usually drive an automatic, we'd recommend one: hill starts in a medieval village with a tractor behind you are not the moment to rediscover the clutch.",
    ],
  },
  {
    id: "one-way-fees",
    category: "Cars & driving",
    question: "Are there one-way drop-off fees?",
    answer: [
      "Not on our trips. Every Rond-Point road trip is a loop that starts and ends at the same airport or station, which is the main reason we design them that way: one-way fees within France can be steep, and dropping a car in another country can cost several hundred euros.",
      "If you'd like to end somewhere else, we can quote it, and we'll always show you the fee upfront.",
    ],
  },
  {
    id: "ev-road-trips",
    category: "Cars & driving",
    question: "Can I do my road trip in an electric car?",
    answer: [
      "Yes. France has a large and growing charging network, with fast chargers at most motorway service areas and plenty of slower chargers in towns, supermarket car parks and at many hotels.",
      "We plan EV loops with realistic daily distances, note charging points in your route book and choose stays with charging where possible. Rural and mountain areas have fewer fast chargers, so we build in a charging stop rather than hoping for one. A charging app or aggregator (Chargemap is a popular one) and a card or app that works on several networks make life easier.",
      "Verify before launch: confirm EV availability with the rental partner for each pick-up location.",
    ],
  },
  {
    id: "tolls",
    category: "Cars & driving",
    question: "How do French motorway tolls work?",
    answer: [
      "Most French motorways (autoroutes) are toll roads, marked 'péage'. You take a ticket on entry and pay on exit, or pay a fixed amount at a barrier. Bank cards, including contactless, are accepted at almost all booths; use the lanes marked with a card symbol and avoid the 't' (télépéage) lanes unless you have a tag.",
      "Some newer sections use barrier-free 'free-flow' tolling, where cameras read your number plate and you pay online within a set time. We flag these in your route book. As a rough guide, a long motorway day can cost €20–40 in tolls, but our loops spend most of their time on toll-free D-roads, which is where the good stuff is anyway.",
      "Verify before launch: toll prices and free-flow sections change regularly.",
    ],
  },
  {
    id: "low-emission-zones",
    category: "Cars & driving",
    question: "What are low-emission zones and Crit'Air stickers?",
    answer: [
      "Several French cities have operated low-emission zones (zones à faibles émissions, ZFE) where vehicles need a Crit'Air sticker showing their emissions class, and stickers can also be required during pollution-peak restrictions. The rules have been under review at national level, so the situation in each city can change.",
      "Rental cars registered in France usually already carry a Crit'Air sticker, but check when you collect the car. If you're bringing your own car, order a sticker only from the official site, certificat-air.gouv.fr. Copycat sites charge much more for the same thing.",
      "Verify before launch: ZFE rules are changing; confirm the current status city by city.",
    ],
  },

  // ── E-bikes ────────────────────────────────────────────────────
  {
    id: "e-bike-fitness",
    category: "E-bikes",
    question: "How fit do I need to be for the e-bike days?",
    answer: [
      "If you can ride a bike, you can do our e-bike days. Pedal-assist e-bikes boost your effort up to 25 km/h (the legal limit for e-bikes in Europe), so hills feel like gentle slopes and headwinds become a rumour.",
      "Rides are typically 25–45 km with plenty of stops, mostly on quiet lanes and cycle paths. We deliver the bikes to your stay, fitted and charged, with helmets, locks, panniers and a route on a handlebar-mounted phone holder. If the weather turns, your specialist will help you swap the ride for a drive.",
    ],
  },

  // ── Families ───────────────────────────────────────────────────
  {
    id: "children-car-seats",
    category: "Families",
    question: "Can we travel with children? What about car seats?",
    answer: [
      "Absolutely: road trips are brilliant with children, and we plan shorter driving days, family rooms and plenty of things to climb. Tell us your children's ages, heights and weights and we'll book the right seats with the car.",
      "In France, children generally must use a child restraint suited to their size until they are 10 years old, and EU rules require a restraint for children under 135 cm. Children under 10 may not normally sit in the front seat, with limited exceptions (for example a rear-facing baby seat with the front airbag deactivated). Verify before launch: confirm the current rules with official sources.",
    ],
  },

  // ── Travel documents ───────────────────────────────────────────
  {
    id: "ees-entry-exit",
    category: "Travel documents",
    question: "What is the EU Entry/Exit System (EES)?",
    answer: [
      "The Entry/Exit System is the EU's digital border system for non-EU travellers on short stays in the Schengen area, including France. It replaces passport stamps: on your first entry, your fingerprints and a photo are taken at the border, along with your passport details.",
      "It's in operation now, so allow a little extra time at your first border crossing, especially at busy airports and the Channel ports. Later visits should be quicker. EU citizens and residents aren't affected.",
      "Verify before launch: check the official EU travel pages for the latest guidance.",
    ],
  },
  {
    id: "etias",
    category: "Travel documents",
    question: "Will I need ETIAS to visit France?",
    feature: "etiasNotice",
    answer: [
      "Coming soon: ETIAS (the European Travel Information and Authorisation System) will require visa-exempt visitors, such as travellers from the UK, USA, Canada and Australia, to apply online for a travel authorisation before visiting France and most of Europe. The fee is expected to be €20.",
      "Its launch has been postponed to 2027 and there is no firm date yet. You don't need it today, and we'll update this page (and let you know before you travel) as soon as it goes live. Only apply through the official EU website when it opens.",
    ],
  },

  // ── Booking & payment ──────────────────────────────────────────
  {
    id: "payment-deposits",
    category: "Booking & payment",
    question: "How do payment and deposits work?",
    answer: [
      "Once you're happy with your tailor-made itinerary, we ask for a [25%] deposit to confirm the booking, and the balance is due [8] weeks before you travel. We accept [payment methods].",
      "Prices are quoted per person in euros. The currency switcher on the site shows approximate conversions; your final invoice is in [EUR].",
    ],
  },
  {
    id: "cancellations",
    category: "Booking & payment",
    question: "What if I need to cancel?",
    answer: [
      "[PLACEHOLDER: cancellation terms to be confirmed.] If you cancel more than [8] weeks before departure, you lose your deposit; between [8] and [4] weeks, [50%] of the trip price; within [4] weeks, [100%].",
      "We strongly recommend travel insurance that covers cancellation from the day you book. Full terms are in our booking conditions.",
    ],
  },
];

export const faqCategories: FaqCategory[] = [
  "Your trip",
  "Cars & driving",
  "E-bikes",
  "Families",
  "Travel documents",
  "Booking & payment",
];

export function getFaq(id: string): Faq | undefined {
  return faqs.find((f) => f.id === id);
}

export function getFaqs(ids: readonly string[]): Faq[] {
  return ids.map(getFaq).filter((f): f is Faq => Boolean(f));
}
