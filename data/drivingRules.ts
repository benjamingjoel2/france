import type { DrivingRule } from "./types";

/**
 * Rules of the road for visitors. Laws, limits and fines change: every entry
 * is flagged verifyBeforeLaunch and links to official French government sources only.
 */

const SECURITE_ROUTIERE = { label: "Sécurité routière (French road safety agency)", url: "https://www.securite-routiere.gouv.fr/" };
const SERVICE_PUBLIC = { label: "Service-public.fr (official French government information)", url: "https://www.service-public.fr/" };
const LEGIFRANCE = { label: "Légifrance: Code de la route", url: "https://www.legifrance.gouv.fr/" };
const BISON_FUTE = { label: "Bison Futé (official traffic information)", url: "https://www.bison-fute.gouv.fr/" };
const CRIT_AIR = { label: "Certificat qualité de l'air (official Crit'Air site)", url: "https://www.certificat-air.gouv.fr/" };
const ECOLOGIE = { label: "Ministère de la Transition écologique", url: "https://www.ecologie.gouv.fr/" };
const INTERIEUR = { label: "Ministère de l'Intérieur", url: "https://www.interieur.gouv.fr/" };

export const drivingRules: DrivingRule[] = [
  {
    id: "driving-on-the-right",
    title: "Driving on the right",
    summary: "Keep right, overtake on the left, and take extra care at the first junction of the day.",
    body: [
      "France drives on the right and overtakes on the left. Undertaking (passing on the right) is not allowed on motorways, except in slow-moving queues where lanes move at different speeds.",
      "If you're used to driving on the left, the riskiest moments are the quiet ones: pulling out of a car park, turning left at an empty junction or setting off after lunch. A little 'keep right' note on the dashboard is not embarrassing; it's clever.",
      "On a single-carriageway road, the driver should sit nearest the centre line. In a right-hand-drive car, overtaking is harder to judge, so give yourself more room and let your passenger be a second pair of eyes.",
    ],
    sources: [SECURITE_ROUTIERE, SERVICE_PUBLIC],
    verifyBeforeLaunch: true,
  },
  {
    id: "roundabouts",
    title: "Roundabout rules",
    summary: "Traffic already on the roundabout usually has priority. Go anticlockwise and signal right before your exit.",
    body: [
      "France has more roundabouts than any other country in the world, so you'll get plenty of practice. You go round anticlockwise, and on most roundabouts you give way to traffic already circulating (coming from your left). They're marked with a give-way triangle and the sign 'Vous n'avez pas la priorité' (you do not have priority).",
      "A few older roundabouts and squares, most famously Place Charles-de-Gaulle around the Arc de Triomphe in Paris, have no give-way signs. There, the general priorité à droite rule applies, so traffic entering from the right has priority over traffic already on the roundabout. Approach any roundabout without give-way markings with care.",
      "Use the right lane if you're taking the first or second exit, and an inner lane for later exits, moving back to the outside before your exit. Always signal right just before you leave. And if you miss your exit? Go round again. It's practically our motto.",
    ],
    sources: [SECURITE_ROUTIERE, LEGIFRANCE],
    verifyBeforeLaunch: true,
  },
  {
    id: "priorite-a-droite",
    title: "Priority to the right",
    summary: "At unmarked junctions, traffic coming from your right has priority, even from a tiny side road.",
    body: [
      "France's famous 'priorité à droite' means that, unless signs or road markings say otherwise, vehicles joining from the right have priority. It still applies at many junctions in towns, villages and the countryside, and it catches visitors out.",
      "On main roads, a yellow diamond sign means you have priority over side roads; the same sign with a black line through it means that priority has ended, so watch for cars from the right. A red-bordered triangle with a black cross warns that priority to the right applies at the next junction.",
      "In practice: slow down at junctions in villages, look right, and don't be surprised if a small Renault pulls out without hesitation. Legally, it was its turn.",
    ],
    sources: [SECURITE_ROUTIERE, LEGIFRANCE],
    verifyBeforeLaunch: true,
  },
  {
    id: "speed-limits",
    title: "Speed limits",
    summary: "130 km/h on motorways (110 in the wet), 80 on most two-lane roads, 50 in towns, often 30 in city centres.",
    body: [
      "Default limits for cars are: 130 km/h on motorways (110 km/h in rain); 110 km/h on dual carriageways separated by a central reservation (100 km/h in rain); 80 km/h on two-way roads without a central separation, though some departments have restored 90 km/h on certain roads, so follow the signs; and 50 km/h in built-up areas, which start at the town's name sign.",
      "Many cities, including Paris, Lyon and Grenoble, have set 30 km/h limits on most streets. In fog or other poor visibility (under 50 metres), the limit is 50 km/h everywhere.",
      "Drivers with a probationary licence (newly qualified) have lower limits: 110 km/h on motorways, 100 on dual carriageways and 80 on other roads. Check how this applies to you if you have recently passed your test.",
      "Speed cameras are common and often unmarked. Fines for foreign-registered and rental cars are pursued across borders, and your rental company will pass them on with an admin fee.",
    ],
    sources: [SECURITE_ROUTIERE, SERVICE_PUBLIC],
    verifyBeforeLaunch: true,
  },
  {
    id: "tolls",
    title: "Tolls & toll tags",
    summary: "Most motorways charge tolls, paid by card at the booth, by tag, or online on newer barrier-free sections.",
    body: [
      "Most French motorways (autoroutes) are toll roads, shown by the word 'péage'. On most, you take a ticket on entry and pay at a barrier on exit; others charge a fixed amount at a toll plaza. Bank cards, including contactless, are widely accepted. Avoid lanes marked only with an orange 't', which are for electronic tags.",
      "A télépéage tag (badge) lets you drive through dedicated lanes and pay by monthly bill. It's handy if you'll use a lot of motorways; on most of our loops, you won't.",
      "Some newer sections use barrier-free 'free-flow' tolling: cameras read your number plate and you pay online within a set deadline (usually a few days). If you don't pay, a fine follows, so we flag these sections in your route book.",
      "Toll prices rise every year. As a rough guide, Paris to Lyon costs several tens of euros for a car. Check routes and costs with the motorway operators before you go.",
    ],
    sources: [BISON_FUTE, SERVICE_PUBLIC],
    verifyBeforeLaunch: true,
  },
  {
    id: "fuel-ev-charging",
    title: "Fuel & EV charging",
    summary: "Check the pump label (gazole is diesel) and plan EV charging stops on rural and mountain days.",
    body: [
      "Fuel names to know: 'gazole' is diesel (B7, sometimes B10 or XTL), 'SP95' and 'SP98' are unleaded petrol (E5), and 'SP95-E10' is unleaded with up to 10% ethanol, fine for most modern petrol cars. 'E85' is high-ethanol fuel for compatible cars only. Check the label inside your rental car's fuel flap.",
      "Supermarket fuel stations are usually cheapest, motorway stations the most expensive. Many rural stations are automated at night and on Sundays, accepting only chip-and-PIN bank cards.",
      "Electric cars: fast chargers are found at most motorway service areas, and slower chargers in towns, supermarkets and many hotels. Coverage is thinner in the mountains and deep countryside, so plan stops ahead with a charging app and carry a card or app that works across several networks.",
    ],
    sources: [ECOLOGIE, SERVICE_PUBLIC],
    verifyBeforeLaunch: true,
  },
  {
    id: "parking",
    title: "Parking",
    summary: "Pay-and-display or apps in towns; a parking disc in blue zones; never park on yellow lines.",
    body: [
      "In most towns, on-street parking is paid at a machine (horodateur), often by card or through a parking app, and you may need to enter your number plate. Charges usually apply on weekdays and Saturdays, with free parking at lunchtime in some smaller towns; check the machine.",
      "Blue zones (zone bleue) offer free short-term parking with a parking disc (disque de stationnement) on the dashboard showing your arrival time. Rental cars usually have one; if not, they're sold cheaply at tobacconists and petrol stations.",
      "Yellow lines on the kerb mean no parking. In popular villages, use the car parks at the edge of town; the walk in is part of the experience, and the lanes weren't built for cars anyway.",
    ],
    sources: [SERVICE_PUBLIC],
    verifyBeforeLaunch: true,
  },
  {
    id: "low-emission-zones",
    title: "Low-emission zones & Crit'Air",
    summary: "Some cities restrict polluting vehicles using Crit'Air stickers. Rules are in flux: check before you go.",
    body: [
      "Several French cities and metropolitan areas have operated low-emission zones (zones à faibles émissions, ZFE), where vehicles must display a Crit'Air sticker showing their emissions class. Stickers are also used for temporary restrictions during pollution peaks.",
      "The national framework for ZFEs has been under review, with lawmakers voting in 2025 to scrap or scale back the scheme. The situation in each city may differ, so check the current rules before you drive into a big city.",
      "Rental cars registered in France usually already have a sticker. If you bring your own car, buy a Crit'Air sticker only from the official site, certificat-air.gouv.fr, which costs a few euros. Unofficial sites charge far more for the same sticker.",
    ],
    sources: [CRIT_AIR, ECOLOGIE, SERVICE_PUBLIC],
    verifyBeforeLaunch: true,
  },
  {
    id: "documents-idp",
    title: "Documents & IDP",
    summary: "Carry your licence, passport or ID, the rental agreement or registration document, and proof of insurance.",
    body: [
      "Always carry: your full, valid driving licence; your passport or national ID card; the car's registration document (for a rental, the rental agreement does the job); and proof of insurance. Police can ask to see them at any time.",
      "Licences issued in the EU and EEA are valid in France. Many other licences are accepted for short visits, but some must be accompanied by an International Driving Permit (IDP) or an official French translation, and some rental partners ask for an IDP regardless. Check the rules for your licence country with official sources and with us.",
      "If you bring a UK-registered car, display a 'UK' identifier (sticker or on the number plate) and carry your V5C registration certificate and insurance documents.",
    ],
    sources: [SERVICE_PUBLIC, INTERIEUR],
    verifyBeforeLaunch: true,
  },
  {
    id: "what-to-carry",
    title: "What to carry",
    summary: "A hi-vis vest within reach and a warning triangle are compulsory; headlamp adjustments for right-hand-drive cars.",
    body: [
      "Every car must carry a high-visibility vest, kept within reach of the driver (not in the boot), and a warning triangle. If you break down, put the vest on before you get out. Rental cars should come equipped; check before you drive off.",
      "French law has required drivers to carry a breathalyser since 2012, but the fine for not having one was dropped, so in practice no penalty applies. A disposable one in the glovebox is still a good idea. Spare bulbs are recommended rather than compulsory.",
      "If you bring a right-hand-drive car, adjust or fit beam deflectors so your headlights don't dazzle oncoming drivers. In mountain areas, some winter rules require snow tyres or chains between 1 November and 31 March; they don't apply to our summer Alpine loops but do to winter trips.",
    ],
    sources: [SECURITE_ROUTIERE, SERVICE_PUBLIC, LEGIFRANCE],
    verifyBeforeLaunch: true,
  },
];
