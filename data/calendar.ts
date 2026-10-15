import { photo } from "@/lib/media";
import type { CalendarMoment, Month } from "./types";

/**
 * Seasonal moments for the "When to go" calendar.
 * Every window is approximate and shifts year to year: verify yearly.
 */
export const calendarMoments: CalendarMoment[] = [
  // January
  {
    id: "perigord-truffle-markets",
    title: "Black truffle markets",
    month: 1,
    window: "Dec – Feb",
    regionSlug: "dordogne-perigord",
    theme: "food-wine",
    description:
      "In winter, the black Périgord truffle comes to market in Sarlat, Sainte-Alvère and nearby towns. Buyers sniff, sellers shrug, prices are whispered. Go for the theatre, stay for the omelette.",
    image: photo(["theme:truffle", "region:dordogne-perigord"], 0),
    tripSlugs: ["dordogne-castles-caves"],
    verifyYearly: true,
  },
  {
    id: "saint-vincent-tournante",
    title: "Saint-Vincent Tournante",
    month: 1,
    window: "late Jan (one weekend)",
    regionSlug: "burgundy",
    theme: "food-wine",
    description:
      "Burgundy's winegrowers honour their patron saint in a different village each year (hence 'tournante': it goes round, like us). Processions, paper flowers and a great deal of tasting.",
    image: photo(["theme:wine-tasting", "region:burgundy"], 2),
    tripSlugs: ["burgundy-grands-crus-loop"],
    verifyYearly: true,
  },
  {
    id: "alps-snow-season",
    title: "Snow season in the Alps",
    month: 1,
    window: "mid Dec – early Apr",
    regionSlug: "french-alps",
    theme: "snow",
    description:
      "The high passes close and the Alps turn into ski country. A winter loop swaps cols for chalets, fondue and a car with winter tyres or chains.",
    image: photo(["theme:ski-snow", "region:french-alps"], 0),
    tripSlugs: [],
    verifyYearly: true,
  },

  // February
  {
    id: "riviera-mimosa",
    title: "Mimosa on the Riviera",
    month: 2,
    window: "late Jan – early Mar",
    regionSlug: "cote-d-azur",
    theme: "nature",
    description:
      "The hills between Bormes-les-Mimosas and Grasse turn bright yellow and smell of honey. The Route du Mimosa links the villages; the sunshine is free.",
    image: photo(["theme:mimosa", "region:cote-d-azur"], 0),
    tripSlugs: [],
    verifyYearly: true,
  },
  {
    id: "menton-lemon-festival",
    title: "Menton Lemon Festival",
    month: 2,
    window: "mid Feb – early Mar",
    regionSlug: "cote-d-azur",
    theme: "festival",
    description:
      "Menton's Fête du Citron builds giant sculptures from tonnes of lemons and oranges, with parades along the seafront. Very yellow, extremely zesty.",
    image: photo(["theme:festival", "region:cote-d-azur"], 1),
    tripSlugs: [],
    verifyYearly: true,
  },
  {
    id: "nice-carnival",
    title: "Nice Carnival",
    month: 2,
    window: "mid Feb – early Mar",
    regionSlug: "cote-d-azur",
    theme: "festival",
    description:
      "Two weeks of floats, giant heads and flower battles, where costumed performers throw blooms into the crowd along the Promenade des Anglais.",
    image: photo(["theme:festival", "region:cote-d-azur"], 2),
    tripSlugs: [],
    verifyYearly: true,
  },

  // March
  {
    id: "provence-almond-blossom",
    title: "Almond and fruit blossom",
    month: 3,
    window: "late Feb – Mar",
    regionSlug: "provence",
    theme: "nature",
    description:
      "Before the lavender, the orchards: almond, cherry and apricot trees flower across the Luberon and the Comtat Venaissin, with snow still on Ventoux.",
    image: photo(["theme:spring-blossom", "region:provence"], 0),
    tripSlugs: ["provence-lavender-hilltop-villages"],
    verifyYearly: true,
  },

  // April
  {
    id: "loire-spring-gardens",
    title: "Château gardens in bloom",
    month: 4,
    window: "Apr – May",
    regionSlug: "loire-valley",
    theme: "nature",
    description:
      "Tulips, wisteria and freshly clipped box hedges: the Loire's château gardens, from Villandry to Chenonceau, look their best in spring, before the summer crowds.",
    image: photo(["theme:spring-blossom", "region:loire-valley"], 1),
    tripSlugs: ["loire-chateaux-loop"],
    verifyYearly: true,
  },
  {
    id: "normandy-apple-blossom",
    title: "Apple blossom in the Pays d'Auge",
    month: 4,
    window: "late Apr – mid May",
    regionSlug: "normandy-mont-saint-michel",
    theme: "nature",
    description:
      "Orchards full of pink and white blossom between half-timbered farmhouses. Some villages hold blossom festivals; cider producers open their doors.",
    image: photo(["theme:spring-blossom", "region:normandy-mont-saint-michel"], 2),
    tripSlugs: ["normandy-d-day-mont-saint-michel"],
    verifyYearly: true,
  },

  // May
  {
    id: "corsica-spring-maquis",
    title: "The maquis in flower",
    month: 5,
    window: "Apr – early Jun",
    regionSlug: "corsica",
    theme: "nature",
    description:
      "Napoleon said he could smell Corsica from the sea. In spring, cistus, myrtle and broom flower across the maquis, the roads are quiet and the sea is just about swimmable.",
    image: photo(["theme:corsica-road", "region:corsica"], 0),
    tripSlugs: ["corsica-island-loop"],
    verifyYearly: true,
  },
  {
    id: "provence-transhumance",
    title: "Transhumance in Saint-Rémy",
    month: 5,
    window: "Whit Monday (May or June)",
    regionSlug: "provence",
    theme: "culture",
    description:
      "Thousands of sheep, goats and donkeys parade through Saint-Rémy-de-Provence before heading up to the summer pastures. Get there early and stand well back.",
    image: photo(["theme:countryside-farmhouse", "region:provence"], 2),
    tripSlugs: ["provence-lavender-hilltop-villages"],
    verifyYearly: true,
  },

  // June
  {
    id: "d-day-commemorations",
    title: "D-Day commemorations",
    month: 6,
    window: "around 6 Jun",
    regionSlug: "normandy-mont-saint-michel",
    theme: "culture",
    description:
      "Ceremonies, parachute drops and parades of restored vehicles mark the anniversary of the landings along the Normandy beaches. Moving and very busy; book well ahead.",
    image: photo(["theme:dday-beaches", "region:normandy-mont-saint-michel"], 1),
    tripSlugs: ["normandy-d-day-mont-saint-michel"],
    verifyYearly: true,
  },
  {
    id: "fete-de-la-musique",
    title: "Fête de la Musique",
    month: 6,
    window: "21 Jun",
    regionSlug: "alsace",
    theme: "festival",
    description:
      "On the longest day, all of France turns into a free concert. Strasbourg and Colmar fill with bands on every corner; a wine-village square with an accordion is just as good.",
    image: photo(["theme:festival", "region:alsace"], 0),
    tripSlugs: ["alsace-wine-route"],
    verifyYearly: true,
  },
  {
    id: "alpine-passes-open",
    title: "The high passes open",
    month: 6,
    window: "late May – Jun (depends on snow)",
    regionSlug: "french-alps",
    theme: "nature",
    description:
      "Snowploughs clear the Iseran, the Galibier and the Bonette, often between walls of snow. Opening dates depend on the winter, so we check before every trip.",
    image: photo(["theme:road-winding", "region:french-alps"], 1),
    tripSlugs: ["riviera-alpine-passes", "gorges-du-verdon-route-napoleon"],
    verifyYearly: true,
  },

  // July
  {
    id: "provence-lavender",
    title: "Lavender in bloom",
    month: 7,
    window: "late Jun – mid Jul",
    regionSlug: "provence",
    theme: "nature",
    description:
      "The plateaux of Valensole and Sault turn purple, with Valensole often peaking in early July and Sault a little later. Harvest starts in mid-July, so don't leave it too late.",
    image: photo(["hero:lavender", "region:provence"], 0),
    tripSlugs: ["provence-lavender-hilltop-villages", "gorges-du-verdon-route-napoleon"],
    verifyYearly: true,
  },
  {
    id: "sunflowers",
    title: "Sunflower season",
    month: 7,
    window: "early Jul – early Aug",
    regionSlug: "dordogne-perigord",
    theme: "nature",
    description:
      "Fields of sunflowers turn to face the morning sun across the Périgord and Provence. Pull over, safely, and join everyone else taking the same photo.",
    image: photo(["theme:sunflowers", "region:dordogne-perigord"], 0),
    tripSlugs: ["dordogne-castles-caves", "provence-lavender-hilltop-villages"],
    verifyYearly: true,
  },
  {
    id: "festival-d-avignon",
    title: "Festival d'Avignon",
    month: 7,
    window: "Jul (about three weeks)",
    regionSlug: "provence",
    theme: "festival",
    description:
      "One of the world's great theatre festivals takes over Avignon, from the Palais des Papes courtyard to hundreds of fringe shows in every cellar and chapel.",
    image: photo(["theme:festival", "region:provence"], 1),
    tripSlugs: ["provence-lavender-hilltop-villages"],
    verifyYearly: true,
  },
  {
    id: "bastille-day-carcassonne",
    title: "Bastille Day fireworks",
    month: 7,
    window: "14 Jul",
    regionSlug: "languedoc",
    theme: "culture",
    description:
      "France's national day brings fireworks everywhere, but Carcassonne's display over its medieval walls is legendary. The whole Cité appears to be on fire. It isn't.",
    image: photo(["theme:festival", "region:languedoc"], 0),
    tripSlugs: [],
    verifyYearly: true,
  },
  {
    id: "fetes-de-bayonne",
    title: "Fêtes de Bayonne",
    month: 7,
    window: "late Jul (five days)",
    regionSlug: "french-basque-country",
    theme: "festival",
    description:
      "Bayonne dresses in white and red for five days of music, dancing and Basque traditions. It's joyful, crowded and loud, so plan to stay outside town.",
    image: photo(["theme:festival", "region:french-basque-country"], 0),
    tripSlugs: ["basque-country-biarritz"],
    verifyYearly: true,
  },

  // August
  {
    id: "festival-interceltique-lorient",
    title: "Festival Interceltique de Lorient",
    month: 8,
    window: "early – mid Aug",
    regionSlug: "brittany",
    theme: "festival",
    description:
      "Ten days of pipes, fiddles, dance and Celtic culture from Brittany, Scotland, Ireland, Galicia and beyond. The grand parade is a sight (and sound) to behold.",
    image: photo(["theme:festival", "region:brittany"], 1),
    tripSlugs: ["brittany-coast-loop"],
    verifyYearly: true,
  },
  {
    id: "perseids-alps",
    title: "Shooting stars over the Alps",
    month: 8,
    window: "around 12 Aug",
    regionSlug: "french-alps",
    theme: "nature",
    description:
      "The Perseid meteor shower peaks in mid-August. From a high valley far from city lights, lie back on a warm rock and count. Some villages switch off their streetlights for it.",
    image: photo(["theme:night-stars", "region:french-alps"], 0),
    tripSlugs: ["riviera-alpine-passes"],
    verifyYearly: true,
  },

  // September
  {
    id: "burgundy-harvest",
    title: "Harvest on the Côte d'Or",
    month: 9,
    window: "early Sep – early Oct",
    regionSlug: "burgundy",
    theme: "food-wine",
    description:
      "Pickers fill the slopes, tractors fill the lanes and the whole Côte smells of crushed grapes. Some estates pause visits during harvest, so we book around it.",
    image: photo(["theme:grape-harvest", "region:burgundy"], 0),
    tripSlugs: ["burgundy-grands-crus-loop"],
    verifyYearly: true,
  },
  {
    id: "champagne-harvest",
    title: "Champagne vendanges",
    month: 9,
    window: "late Aug – Sep",
    regionSlug: "champagne",
    theme: "food-wine",
    description:
      "Every grape in Champagne is picked by hand, so the harvest is a busy, joyful affair with presses running day and night in every village.",
    image: photo(["theme:grape-harvest", "region:champagne"], 1),
    tripSlugs: ["champagne-houses-weekend"],
    verifyYearly: true,
  },
  {
    id: "bordeaux-harvest",
    title: "Bordeaux harvest",
    month: 9,
    window: "Sep – Oct",
    regionSlug: "bordeaux-atlantic",
    theme: "food-wine",
    description:
      "From Saint-Émilion to the Médoc, the vendanges roll from white grapes to red through September and into October. Golden light, busy cellars.",
    image: photo(["theme:grape-harvest", "region:bordeaux-atlantic"], 2),
    tripSlugs: ["dordogne-castles-caves"],
    verifyYearly: true,
  },
  {
    id: "basque-surf-season",
    title: "Autumn swells in Biarritz",
    month: 9,
    window: "Sep – Oct",
    regionSlug: "french-basque-country",
    theme: "nature",
    description:
      "As the crowds leave, the Atlantic swells arrive. Warm water, bigger waves and empty beaches: the surfers' favourite season.",
    image: photo(["theme:beach-atlantic", "region:french-basque-country"], 2),
    tripSlugs: ["basque-country-biarritz"],
    verifyYearly: true,
  },

  // October
  {
    id: "dordogne-autumn",
    title: "Autumn colours in the Dordogne",
    month: 10,
    window: "mid Oct – early Nov",
    regionSlug: "dordogne-perigord",
    theme: "nature",
    description:
      "Walnut trees and oak woods turn gold, mist hangs over the river in the mornings and the cèpe hunters are out. The castles look even better in it.",
    image: photo(["theme:autumn-vineyard", "region:dordogne-perigord"], 1),
    tripSlugs: ["dordogne-castles-caves"],
    verifyYearly: true,
  },
  {
    id: "alsace-autumn-vineyards",
    title: "Golden vineyards & new wine",
    month: 10,
    window: "Oct",
    regionSlug: "alsace",
    theme: "food-wine",
    description:
      "After the harvest, the Alsace vineyards turn gold and red, and winstubs serve 'vin nouveau' (barely fermented new wine) with walnuts and onion tart.",
    image: photo(["theme:autumn-vineyard", "region:alsace"], 2),
    tripSlugs: ["alsace-wine-route"],
    verifyYearly: true,
  },
  {
    id: "corsica-chestnut-season",
    title: "Chestnut season",
    month: 10,
    window: "Oct – Nov (village fairs into Dec)",
    regionSlug: "corsica",
    theme: "food-wine",
    description:
      "In the Castagniccia and around the island's mountain villages, chestnuts are gathered for flour, cakes and polenta. Village fairs celebrate the harvest into early winter.",
    image: photo(["theme:autumn-vineyard", "region:corsica"], 0),
    tripSlugs: ["corsica-island-loop"],
    verifyYearly: true,
  },

  // November
  {
    id: "beaujolais-nouveau",
    title: "Beaujolais Nouveau",
    month: 11,
    window: "third Thursday of Nov",
    regionSlug: "burgundy",
    theme: "food-wine",
    description:
      "The first wine of the vintage is released at midnight, and bars from Beaujeu to Beaune celebrate. It's young, fruity and not to be taken too seriously, which is exactly the point.",
    image: photo(["theme:wine-tasting", "region:burgundy"], 2),
    tripSlugs: ["burgundy-grands-crus-loop"],
    verifyYearly: true,
  },

  // December
  {
    id: "alsace-christmas-markets",
    title: "Alsace Christmas markets",
    month: 12,
    window: "late Nov – 24 Dec",
    regionSlug: "alsace",
    theme: "festival",
    description:
      "Strasbourg, Colmar, Kaysersberg and Riquewihr light up with wooden chalets, mulled wine and bredele biscuits. The most festive road trip in Europe; book early.",
    image: photo(["theme:christmas-market", "region:alsace"], 0),
    tripSlugs: ["alsace-wine-route"],
    verifyYearly: true,
  },
  {
    id: "champagne-festive-season",
    title: "Festive Champagne",
    month: 12,
    window: "late Nov – Dec",
    regionSlug: "champagne",
    theme: "festival",
    description:
      "Reims hosts a big Christmas market beside its cathedral, and the cellars are in a festive mood. The perfect time to stock up for New Year's Eve.",
    image: photo(["theme:christmas-market", "region:champagne"], 1),
    tripSlugs: ["champagne-houses-weekend"],
    verifyYearly: true,
  },
];

export function momentsInMonth(month: Month): CalendarMoment[] {
  return calendarMoments.filter((m) => m.month === month);
}

export function momentsInRegion(regionSlug: string): CalendarMoment[] {
  return calendarMoments.filter((m) => m.regionSlug === regionSlug);
}
