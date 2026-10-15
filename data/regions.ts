import { photo } from "@/lib/media";
import type { Img, Region } from "./types";

/** Hero, poster card and two gallery images from the region pool, with theme fallbacks. */
function regionImages(slug: string, extra: string[]): { heroImage: Img; cardImage: Img; gallery: Img[] } {
  const key = `region:${slug}`;
  return {
    heroImage: photo([key, ...extra], 0),
    cardImage: photo([`${key}:portrait`, key], 0),
    gallery: [
      photo([key, ...extra], 1),
      photo([extra[0] ?? key, key], 0),
      photo([key, ...extra], 2),
      photo([extra[1] ?? key, key], 1),
    ],
  };
}

/*
 * mapPin: % position on a mainland-France box spanning ~5°W–9.6°E and 51.1°N–41.3°N,
 * computed from a representative point in each region (Corsica sits bottom-right).
 */
export const regions: Region[] = [
  {
    slug: "provence",
    name: "Provence",
    shortName: "Provence",
    tagline: "Lavender, hill villages and a very long lunch.",
    lede:
      "Hill villages stacked like sugar cubes, lavender in purple stripes and markets that smell of melon and thyme. Provence is the original slow road trip.",
    overview: [
      "Provence rewards the driver who doesn't hurry. Between the Luberon, the Alpilles and the plateau of Valensole, the roads wriggle past vineyards and olive groves to villages that seem to have been placed on their hilltops for the view: Gordes, Roussillon, Bonnieux, Ménerbes, each with a café terrace and a fountain doing its best.",
      "Head east and the landscape gets dramatic. The Gorges du Verdon cut a 700-metre-deep canyon through the limestone, with rim roads that will test your passengers' nerves and reward them with some of the best views in Europe. To the north, Mont Ventoux looms over everything, white-topped even in summer with bare limestone.",
      "Down on the coast, Cassis and the calanques bring turquoise coves and a fishing-port lunch. The Route des Crêtes above them is short, steep and spectacular.",
      "Our Provence loops are built around markets (every village has a day), long lunches and that early-evening hour when the stone turns gold and the swifts come out.",
    ],
    ...regionImages("provence", ["hero:lavender", "theme:market"]),
    bestMonths: [5, 6, 7, 9],
    quietMonths: [1, 2, 11, 12],
    bestTimeSummary:
      "May–June and September are ideal. Lavender peaks from late June to mid-July; August is hot and busy.",
    signatureRoads: [
      {
        name: "Route des Crêtes, Gorges du Verdon (D23)",
        km: 23,
        note: "A one-way loop from La Palud along the north rim, with belvederes over a 700 m drop. Partly closed in winter.",
      },
      {
        name: "Mont Ventoux from Bédoin (D974)",
        km: 22,
        note: "The famous climb to 1,910 m through forest and then a lunar summit. Usually snow-closed near the top from mid-November to April.",
      },
      {
        name: "Route des Crêtes, Cassis to La Ciotat (D141)",
        km: 15,
        note: "Some of France's highest sea cliffs, with the calanques far below.",
      },
    ],
    foodAndWine: {
      title: "Rosé, olives and a market for every day",
      body: [
        "Provençal food is sun-driven: tomatoes that taste of something, courgette flowers, tapenade, aïoli on Fridays and lamb from the hills. Every village has a market day, and building your loop around them is half the fun.",
        "The wines run from pale Côtes de Provence rosé to the serious reds of Bandol and the Rhône villages to the north. Lunch at a vineyard with a carafe on the table is not a cliché here; it's a weekday.",
      ],
      image: photo(["theme:market", "region:provence"], 1),
    },
    mapPin: { x: 70.5, y: 74 },
    colour: "lavender",
    faqIds: ["best-months", "automatic-vs-manual", "tolls"],
  },
  {
    slug: "cote-d-azur",
    name: "Côte d'Azur",
    shortName: "Côte d'Azur",
    tagline: "Corniches, perched villages and a sea that matches the name.",
    lede:
      "Three corniche roads stacked above the bluest water in France, and behind them, hill villages and mountain passes most visitors never see.",
    overview: [
      "The Riviera is a driving coast. Between Nice and Menton, the Basse, Moyenne and Grande Corniches run one above the other, each with a different view of the Mediterranean and a different idea of how many hairpins a road needs.",
      "West of Nice, the red rock Corniche de l'Estérel drops into coves between Saint-Raphaël and Cannes, and further on the Corniche des Maures links the beaches of the Var. Inland, Grasse smells of perfume, Saint-Paul-de-Vence of oil paint, and Èze and Gourdon cling to their cliffs.",
      "Go further back and you're in the Alps within an hour: the Col de Turini, the gorges of the Cians and the Var, villages where the bakery doubles as the post office.",
    ],
    ...regionImages("cote-d-azur", ["theme:convertible", "theme:mimosa"]),
    bestMonths: [5, 6, 9, 10],
    quietMonths: [1, 11],
    bestTimeSummary:
      "May–June and September–October are warm and easier on the roads. February brings mimosa and Menton's lemon festival.",
    signatureRoads: [
      {
        name: "Grande Corniche (D2564), Nice to Menton",
        km: 31,
        note: "The highest of the three corniches, via La Turbie, with views down on Monaco.",
      },
      {
        name: "Corniche de l'Estérel (D559)",
        km: 40,
        note: "Red porphyry cliffs and coves between Saint-Raphaël and Mandelieu.",
      },
      {
        name: "Corniche des Maures (D559)",
        km: 25,
        note: "Beach after beach between Le Lavandou and Cavalaire, with the Maures hills behind.",
      },
    ],
    foodAndWine: {
      title: "Socca, pissaladière and Bellet",
      body: [
        "Niçois cooking is its own thing: socca (a chickpea pancake) eaten hot from the street, pissaladière with onions and anchovies, stuffed vegetables and the real salade niçoise, which locals will tell you has no cooked vegetables in it.",
        "Look for the tiny Bellet appellation in the hills above Nice, and the rosés of the Var. In Menton, everything comes with lemon.",
      ],
      image: photo(["theme:cafe-terrace", "region:cote-d-azur"], 0),
    },
    mapPin: { x: 84, y: 75.5 },
    colour: "roadsign",
    faqIds: ["best-months", "low-emission-zones", "tolls"],
  },
  {
    slug: "dordogne-perigord",
    name: "Dordogne & Périgord",
    shortName: "Dordogne",
    tagline: "Castles, caves and a river made for lazy afternoons.",
    lede:
      "A golden-stone valley with a castle on every cliff, painted caves 20,000 years old and markets where walnuts, foie gras and truffles are taken very seriously.",
    overview: [
      "The Dordogne valley is one of France's great road-trip landscapes. Between Sarlat and the river, the D-roads wind past Beynac, Castelnaud, La Roque-Gageac and Domme, villages so photogenic that you'll stop the car every few kilometres.",
      "The Vézère valley next door is the cradle of prehistoric art, with painted caves and rock shelters around Montignac and Les Eyzies. Book ahead in summer; we'll do it for you.",
      "Further afield, Rocamadour clings to its cliff above the Alzou canyon, and Périgord Vert to the north is all green meadows and Brantôme's abbey on the river.",
      "It's gentle driving and short distances, which leaves plenty of time for a canoe, a picnic and a long dinner on a terrace above the water.",
    ],
    ...regionImages("dordogne-perigord", ["theme:caves-dordogne", "theme:truffle"]),
    bestMonths: [5, 6, 9, 10],
    quietMonths: [1, 2, 11],
    bestTimeSummary:
      "May–June and September–October are perfect. July–August are lively and busy; truffle markets run in winter.",
    signatureRoads: [
      {
        name: "D703 along the Dordogne",
        km: 30,
        note: "Beynac to La Roque-Gageac and on towards Domme, with castles on both banks.",
      },
      {
        name: "D706 through the Vézère valley",
        km: 25,
        note: "Montignac to Les Eyzies past cliffs riddled with prehistoric shelters.",
      },
      {
        name: "Road into Rocamadour (D32)",
        km: 12,
        note: "The approach from L'Hospitalet gives the classic view of the cliff-hung town.",
      },
    ],
    foodAndWine: {
      title: "Truffles, walnuts and the good fat",
      body: [
        "Périgord cooking is rich and proud of it: duck in every form, potatoes fried in duck fat (pommes sarladaises), walnut cake and, in winter, the black Périgord truffle sold at markets in Sarlat and Sainte-Alvère.",
        "Bergerac and Monbazillac make the local wines, from fresh reds to sweet whites that go astonishingly well with foie gras. Saint-Émilion is under two hours away.",
      ],
      image: photo(["theme:truffle", "region:dordogne-perigord"], 1),
    },
    mapPin: { x: 42.6, y: 63.4 },
    colour: "sunflower",
    faqIds: ["best-months", "children-car-seats", "tolls"],
  },
  {
    slug: "loire-valley",
    name: "Loire Valley",
    shortName: "Loire Valley",
    tagline: "A château for every day of the week.",
    lede:
      "The garden of France: a broad, lazy river lined with Renaissance châteaux, vineyards and flat, quiet lanes that are made for e-bikes.",
    overview: [
      "The Loire is the gentlest road trip in France. Distances are short, the roads are flat and the châteaux come thick and fast: Chambord, Chenonceau, Amboise, Villandry, Azay-le-Rideau, Chinon, each one different.",
      "It's also the perfect place to leave the car for a day. The Loire à Vélo cycle route follows the river for hundreds of kilometres, with signposted links to the châteaux and plenty of riverside cafés.",
      "West of Tours, the soft tufa stone was quarried for the châteaux, leaving cliffs full of troglodyte homes, mushroom caves and wine cellars around Saumur and Chinon.",
    ],
    ...regionImages("loire-valley", ["theme:chateau-hotel", "theme:ebike"]),
    bestMonths: [4, 5, 6, 9],
    quietMonths: [1, 2, 12],
    bestTimeSummary:
      "April–June for gardens in bloom, September for the harvest. Summer is warm and busy at the big châteaux.",
    signatureRoads: [
      {
        name: "D952 along the Loire",
        km: 60,
        note: "Blois to Tours via Amboise, following the levée with the river alongside.",
      },
      {
        name: "D947 from Montsoreau to Saumur",
        km: 12,
        note: "The troglodyte road, with houses and cellars carved into the cliff.",
      },
    ],
    foodAndWine: {
      title: "Goat's cheese and Chenin",
      body: [
        "Loire food is understated and very good: river fish with beurre blanc, rillettes from Tours, goat's cheeses (Sainte-Maure, Selles-sur-Cher, Valençay) and tarte Tatin, born in Sologne.",
        "The wines follow the river: Sancerre and Pouilly-Fumé upstream, Vouvray's Chenin Blanc around Tours, Chinon and Bourgueil's Cabernet Franc and Saumur's sparkling crémant. Tastings often happen in cellars cut into the rock.",
      ],
      image: photo(["theme:wine-tasting", "region:loire-valley"], 1),
    },
    mapPin: { x: 41, y: 37.7 },
    colour: "vineyard-300",
    faqIds: ["best-months", "e-bike-fitness", "automatic-vs-manual"],
  },
  {
    slug: "normandy-mont-saint-michel",
    name: "Normandy & Mont-Saint-Michel",
    shortName: "Normandy",
    tagline: "Beaches with stories, cider with bubbles.",
    lede:
      "Harbour towns that painters adored, the D-Day beaches, orchards full of cider apples and, at the end of the road, an abbey rising out of the sea.",
    overview: [
      "Normandy packs a lot into a short drive. Honfleur's old harbour has inspired painters for 150 years, the Côte Fleurie has belle-époque resorts and long sandy beaches, and inland, the Pays d'Auge is half-timbered farmhouses, orchards and cheese.",
      "Further west, the D-Day landing beaches stretch from Ouistreham to Utah Beach. Museums, cemeteries and memorials tell the story of June 1944, and a good local guide makes it unforgettable.",
      "At the border with Brittany, Mont-Saint-Michel rises from the bay. See it from afar at sunrise, walk across the sands with a guide, and stay nearby so you can visit when the day-trippers have gone.",
    ],
    ...regionImages("normandy-mont-saint-michel", ["theme:dday-beaches", "theme:spring-blossom"]),
    bestMonths: [5, 6, 9],
    quietMonths: [1, 2, 11],
    bestTimeSummary:
      "May–June for apple blossom and long days (and D-Day commemorations around 6 June), September for quieter beaches.",
    signatureRoads: [
      {
        name: "D514 along the landing beaches",
        km: 70,
        note: "From Ouistreham towards Grandcamp-Maisy, linking Sword, Juno, Gold and Omaha.",
      },
      {
        name: "Route du Cidre, Pays d'Auge",
        km: 40,
        note: "A signposted loop through Cambremer and Beuvron-en-Auge with producers along the way.",
      },
      {
        name: "Corniche Normande (D513)",
        km: 15,
        note: "Honfleur to Trouville above the estuary and the sea.",
      },
    ],
    foodAndWine: {
      title: "Butter, cream and four kinds of apple",
      body: [
        "Normandy cooking runs on butter, cream and apples. Try Camembert, Livarot and Pont-l'Évêque near where they're made, moules à la crème in a harbour town and the salt-marsh lamb of the bay.",
        "Drinks come from the orchard: cider, poiré (perry), Pommeau and Calvados, the apple brandy that locals take mid-meal as a 'trou normand'.",
      ],
      image: photo(["theme:cheese-food", "region:normandy-mont-saint-michel"], 0),
    },
    mapPin: { x: 30.1, y: 20.4 },
    colour: "roadsign",
    faqIds: ["best-months", "tolls", "driving-licence-idp"],
  },
  {
    slug: "brittany",
    name: "Brittany",
    shortName: "Brittany",
    tagline: "Granite, tides and galettes.",
    lede:
      "A wild, wind-scrubbed coast of pink granite, lighthouses and secret coves, with crêperies in every village and its own language on the signposts.",
    overview: [
      "Brittany feels like a country of its own, and in some ways it is. Road signs are bilingual, the music is Celtic and the coast seems to go on forever: some 2,700 km of it, with headlands, islands and harbours round every corner.",
      "In the north, Saint-Malo's walled city faces the sea, Cancale is oyster heaven and the Pink Granite Coast near Perros-Guirec is pure geology-as-art. In Finistère, the land ends at the Crozon peninsula and the Pointe du Raz.",
      "The south coast is gentler: Pont-Aven's painters, Concarneau's walled town, the standing stones of Carnac and the island-studded Gulf of Morbihan.",
    ],
    ...regionImages("brittany", ["theme:beach-atlantic", "theme:festival"]),
    bestMonths: [6, 7, 8, 9],
    quietMonths: [1, 2, 11, 12],
    bestTimeSummary:
      "June–September for warm(ish) seas and festivals. Spring and autumn are quieter, with dramatic weather.",
    signatureRoads: [
      {
        name: "Corniche Bretonne (D788)",
        km: 20,
        note: "Perros-Guirec to Trébeurden along the Pink Granite Coast.",
      },
      {
        name: "Road to the Pointe du Raz (D784)",
        km: 50,
        note: "From Quimper through Audierne to the westernmost tip of mainland France.",
      },
      {
        name: "Côte Sauvage, Quiberon",
        km: 10,
        note: "A rugged west-facing coast road on the Quiberon peninsula. Look, don't swim.",
      },
    ],
    foodAndWine: {
      title: "Salted butter is a food group",
      body: [
        "Breton cooking is about the sea and salted butter: oysters from Cancale, scallops, lobster, buckwheat galettes for dinner and sweet crêpes for pudding, kouign-amann for anyone who missed breakfast.",
        "Brittany isn't wine country, so drink cider (brut or doux), served in a bowl, or a local beer. Muscadet from just over the border goes beautifully with the shellfish.",
      ],
      image: photo(["theme:cafe-terrace", "region:brittany"], 1),
    },
    mapPin: { x: 14, y: 30.9 },
    colour: "lavender-300",
    faqIds: ["best-months", "ev-road-trips", "children-car-seats"],
  },
  {
    slug: "burgundy",
    name: "Burgundy",
    shortName: "Burgundy",
    tagline: "Every village, a wine list.",
    lede:
      "A narrow strip of hillside with the most famous village names in wine, walled vineyards, glazed roofs and an e-bike path that runs right through the middle.",
    overview: [
      "The Côte d'Or is a 60 km ribbon of vines from Dijon to Santenay, and the Route des Grands Crus follows it through Gevrey-Chambertin, Vougeot, Nuits-Saint-Georges, Pommard, Volnay and Meursault. It's a slow road in the best way.",
      "Beaune, with its multicoloured glazed roofs, is the natural base. From there, the Voie des Vignes cycle path heads south through the vineyards, and the Hautes-Côtes behind the escarpment offer quiet lanes and wide views.",
      "Further afield there are Romanesque abbeys, canals for barge-spotting and the Côte Chalonnaise, a less famous and very friendly wine area.",
    ],
    ...regionImages("burgundy", ["theme:autumn-vineyard", "theme:wine-tasting"]),
    bestMonths: [5, 6, 9, 10],
    quietMonths: [1, 2],
    bestTimeSummary:
      "May–June and September–October; harvest is usually in September. Some estates close for visits during harvest.",
    signatureRoads: [
      {
        name: "Route des Grands Crus (D974 and village lanes)",
        km: 60,
        note: "Dijon to Santenay along the Côte de Nuits and Côte de Beaune.",
      },
      {
        name: "Route des Hautes-Côtes",
        km: 45,
        note: "The quiet plateau behind the escarpment, with blackcurrant fields and hilltop views.",
      },
    ],
    foodAndWine: {
      title: "Pinot, Chardonnay and something in a cream sauce",
      body: [
        "Burgundy gave the world boeuf bourguignon, coq au vin and œufs en meurette, plus Dijon mustard, gougères and the pungent Époisses cheese. Lunch is a serious business.",
        "The wines are all about place: Pinot Noir and Chardonnay from a patchwork of 'climats', each with its own character. Tasting in a small family cellar is the best way to understand them, and the most fun.",
      ],
      image: photo(["theme:wine-tasting", "region:burgundy"], 0),
    },
    mapPin: { x: 67.4, y: 41.6 },
    colour: "vineyard",
    faqIds: ["best-months", "e-bike-fitness", "whats-included"],
  },
  {
    slug: "champagne",
    name: "Champagne",
    shortName: "Champagne",
    tagline: "Chalk, cellars and quite a lot of bubbles.",
    lede:
      "An hour from Paris, rolling vineyards, villages full of small growers and kilometres of chalk cellars beneath Reims and Épernay.",
    overview: [
      "Champagne is a short hop that feels like a proper escape. Reims has a great Gothic cathedral and grand cellars, and Épernay's Avenue de Champagne is lined with famous names. The real charm is in the villages between them.",
      "The Route Touristique du Champagne loops through the Montagne de Reims, the Vallée de la Marne and the Côte des Blancs, with signposted circuits and growers who welcome visitors.",
      "Hautvillers, where the monk Dom Pérignon worked, is a must. So is an e-bike day through the vines: the hills are short, the views are long and the tastings are close together.",
    ],
    ...regionImages("champagne", ["theme:grape-harvest", "theme:wine-tasting"]),
    bestMonths: [5, 6, 9, 10],
    quietMonths: [1, 2],
    bestTimeSummary:
      "May–June for green vines, September for the harvest, December for festive cellars. Very quiet in January–February.",
    signatureRoads: [
      {
        name: "Route Touristique du Champagne, Montagne de Reims",
        km: 70,
        note: "Reims to Épernay via Verzenay, its lighthouse among the vines, and Hautvillers.",
      },
      {
        name: "Côte des Blancs",
        km: 40,
        note: "Chardonnay country, from Cramant and Avize to Le Mesnil-sur-Oger and Vertus.",
      },
    ],
    foodAndWine: {
      title: "Biscuits roses and a glass of something",
      body: [
        "Champagne's food is hearty and northern: jambon de Reims, Chaource cheese, potée champenoise and the pink Reims biscuits locals dunk in their glass.",
        "Beyond the big houses, more than 4,000 growers make their own Champagne. Visiting a récoltant-manipulant (grower who makes and sells their own) is one of the joys of the region, and very different from a big cellar tour.",
      ],
      image: photo(["theme:wine-tasting", "region:champagne"], 1),
    },
    mapPin: { x: 61.3, y: 21 },
    colour: "sunflower",
    faqIds: ["best-months", "e-bike-fitness", "low-emission-zones"],
  },
  {
    slug: "alsace",
    name: "Alsace",
    shortName: "Alsace",
    tagline: "Half-timbered, flower-boxed, beautifully wine-soaked.",
    lede:
      "A wine road threaded through storybook villages between the Vosges and the Rhine, with Germanic food, French flair and the best Christmas markets in the country.",
    overview: [
      "The Route des Vins d'Alsace runs some 170 km along the foothills of the Vosges, and it's one of the most rewarding drives in France. Riquewihr, Ribeauvillé, Kaysersberg, Eguisheim and Obernai look almost too pretty, with half-timbered houses and window boxes spilling geraniums.",
      "Above them, ruined castles crown the hills and the restored Haut-Kœnigsbourg watches over the plain. Higher still, the Route des Crêtes follows the Vosges ridges with views to the Black Forest and, on clear days, the Alps.",
      "Colmar and Strasbourg make fine bookends: canals, museums and some of the most atmospheric old towns in Europe.",
    ],
    ...regionImages("alsace", ["theme:christmas-market", "theme:wine-tasting"]),
    bestMonths: [5, 6, 9, 10, 12],
    quietMonths: [1, 2, 3],
    bestTimeSummary:
      "May–June and September–October for the wine road, late November to Christmas Eve for the markets.",
    signatureRoads: [
      {
        name: "Route des Vins d'Alsace",
        km: 170,
        note: "Marlenheim to Thann, through more than 60 wine villages.",
      },
      {
        name: "Route des Crêtes, Vosges",
        km: 80,
        note: "Along the ridges from the Col du Bonhomme to the Grand Ballon. Upper sections close in winter.",
      },
    ],
    foodAndWine: {
      title: "Tarte flambée and seven grape varieties",
      body: [
        "Alsace cooking is generous: choucroute garnie, baeckeoffe, tarte flambée (flammekueche) from wood-fired ovens, Munster cheese and kugelhopf for breakfast. A winstub is the place to eat it.",
        "Alsace wines are named by grape: Riesling, Gewurztraminer, Pinot Gris, Muscat, Sylvaner, Pinot Blanc and Pinot Noir, plus 51 Grand Cru vineyards and excellent Crémant d'Alsace.",
      ],
      image: photo(["theme:cheese-food", "region:alsace"], 1),
    },
    mapPin: { x: 84.7, y: 30.8 },
    colour: "vineyard-300",
    faqIds: ["best-months", "low-emission-zones", "ev-road-trips"],
  },
  {
    slug: "french-basque-country",
    name: "French Basque Country",
    shortName: "Basque Country",
    tagline: "Surf, red shutters and the Pyrenees as a backdrop.",
    lede:
      "Atlantic surf towns, green hills, red-and-white villages and a culture all its own, where the Pyrenees meet the sea.",
    overview: [
      "The Pays Basque packs mountains and ocean into a small corner. Biarritz has belle-époque glamour and serious surf, Saint-Jean-de-Luz a perfect harbour and a sheltered beach, and the Corniche Basque runs along cliff tops towards Spain.",
      "Inland, the hills roll up to the Pyrenees: Espelette with its strings of red peppers, Ainhoa and Sare among the most beautiful villages in France, and La Rhune, the mountain with the rack railway.",
      "Further in, Saint-Jean-Pied-de-Port welcomes pilgrims heading for Santiago, the Irouléguy vineyards climb steep terraces and the Iraty forest is one of the largest beech forests in Europe.",
    ],
    ...regionImages("french-basque-country", ["theme:beach-atlantic", "theme:festival"]),
    bestMonths: [5, 6, 9, 10],
    quietMonths: [1, 2, 11],
    bestTimeSummary:
      "May–June and September–October for warm days and fewer crowds; summer brings fêtes, and autumn the biggest swells.",
    signatureRoads: [
      {
        name: "Corniche Basque (D912)",
        km: 10,
        note: "Cliff-top road from Socoa to Hendaye.",
      },
      {
        name: "Espelette to Saint-Jean-Pied-de-Port (D918)",
        km: 45,
        note: "Through green valleys and red-shuttered villages into the Pyrenean foothills.",
      },
      {
        name: "Forêt d'Iraty roads",
        km: 40,
        note: "High mountain roads through beech forest and pasture. Some sections close in winter.",
      },
    ],
    foodAndWine: {
      title: "Piment, pintxos and gâteau basque",
      body: [
        "Basque food is a celebration: Bayonne ham, axoa (veal with Espelette pepper), sheep's cheese with black cherry jam, chipirons (baby squid) and gâteau basque, filled with cream or cherries depending on who you ask.",
        "Drink Irouléguy reds and rosés from the mountain terraces, Basque cider in season and Jurançon's sweet whites from neighbouring Béarn.",
      ],
      image: photo(["theme:market", "region:french-basque-country"], 2),
    },
    mapPin: { x: 23.6, y: 77.8 },
    colour: "roadsign",
    faqIds: ["best-months", "e-bike-fitness", "children-car-seats"],
  },
  {
    slug: "bordeaux-atlantic",
    name: "Bordeaux & the Atlantic coast",
    shortName: "Bordeaux",
    tagline: "Grand cru country and Europe's tallest sand dune.",
    lede:
      "A handsome city on the Garonne, the world's most famous vineyards on its doorstep and an Atlantic coast of endless beaches and pine forest.",
    overview: [
      "Bordeaux is a gateway city: elegant 18th-century streets, a huge riverside promenade and a food scene that's grown up fast. From there, the vineyards fan out in every direction.",
      "North, the Médoc's Route des Châteaux runs past the great names of Margaux and Pauillac. East, Saint-Émilion is a medieval village perched over its own limestone quarries, surrounded by vines. South, Sauternes makes golden sweet wines.",
      "West, the Atlantic: the Bassin d'Arcachon's oyster villages, the Dune du Pilat and long straight roads through the Landes pine forest to surf beaches that seem to go on for ever.",
    ],
    ...regionImages("bordeaux-atlantic", ["theme:beach-atlantic", "theme:wine-tasting"]),
    bestMonths: [5, 6, 9, 10],
    quietMonths: [1, 2, 11],
    bestTimeSummary:
      "May–June and September–October; the vendanges usually run through September into October.",
    signatureRoads: [
      {
        name: "Route des Châteaux (D2), Médoc",
        km: 50,
        note: "From the edge of Bordeaux through Margaux, Pauillac and Saint-Estèphe.",
      },
      {
        name: "Saint-Émilion vineyard lanes",
        km: 20,
        note: "Narrow lanes around the village through some of the most famous Merlot in the world.",
      },
    ],
    foodAndWine: {
      title: "Oysters, entrecôte and a very long wine list",
      body: [
        "Bordeaux eats well: Arcachon oysters with a glass of Entre-Deux-Mers, entrecôte à la bordelaise grilled over vine cuttings, lamprey for the brave, and canelés, the little caramelised cakes that are everywhere.",
        "The wines need no introduction, but they reward exploring beyond the famous labels: Côtes de Bourg, Entre-Deux-Mers, Graves and the satellite appellations around Saint-Émilion offer great value and warm welcomes.",
      ],
      image: photo(["theme:wine-tasting", "region:bordeaux-atlantic"], 2),
    },
    mapPin: { x: 30.3, y: 63.9 },
    colour: "vineyard",
    faqIds: ["best-months", "low-emission-zones", "ev-road-trips"],
  },
  {
    slug: "languedoc",
    name: "Languedoc",
    shortName: "Languedoc",
    tagline: "Cathar castles, wild gorges and big-hearted wine.",
    lede:
      "France's sunniest secret: medieval Carcassonne, Cathar castles on impossible crags, deep river gorges and some of the best-value wine in the country.",
    overview: [
      "Languedoc is Provence's wilder sibling. Carcassonne's double ring of walls is the headline, but the real adventure is in the hills to the south, where the Cathar castles of Peyrepertuse and Quéribus balance on the ridges.",
      "North, the Hérault and the Tarn have carved deep gorges. Saint-Guilhem-le-Désert is a medieval village tucked into a canyon, and the Gorges du Tarn are a classic drive.",
      "Along the coast, the Canal du Midi reaches the sea, oysters come from the Étang de Thau and Montpellier makes a lively, young base.",
    ],
    ...regionImages("languedoc", ["theme:autumn-vineyard", "theme:road-winding"]),
    bestMonths: [4, 5, 6, 9, 10],
    quietMonths: [1, 2, 12],
    bestTimeSummary:
      "Spring and autumn are glorious; July–August are hot, and the coast gets busy.",
    signatureRoads: [
      {
        name: "Route des Châteaux Cathares",
        km: 100,
        note: "Carcassonne into the Corbières hills to Peyrepertuse and Quéribus.",
      },
      {
        name: "Gorges du Tarn (D907bis)",
        km: 50,
        note: "From Ispagnac to Le Rozier between limestone walls and the river.",
      },
      {
        name: "Gorges de l'Hérault",
        km: 30,
        note: "From the Pont du Diable to Saint-Guilhem-le-Désert and beyond.",
      },
    ],
    foodAndWine: {
      title: "Cassoulet and the wine revolution",
      body: [
        "Languedoc food is southern and generous: cassoulet in Castelnaudary and Carcassonne, Bouzigues oysters, tielle (octopus pie) from Sète and Roquefort from the caves next door.",
        "Once known for quantity, Languedoc wine is now one of France's most exciting regions: Pic Saint-Loup, Faugères, Minervois and Corbières reds, plus sparkling Blanquette de Limoux, which locals will tell you is older than Champagne.",
      ],
      image: photo(["theme:cheese-food", "region:languedoc"], 2),
    },
    mapPin: { x: 56.2, y: 78.1 },
    colour: "lavender-300",
    faqIds: ["best-months", "tolls", "automatic-vs-manual"],
  },
  {
    slug: "french-alps",
    name: "French Alps",
    shortName: "French Alps",
    tagline: "Above the clouds, two hands on the wheel.",
    lede:
      "The highest paved passes in Europe, glacier views, lakes like mirrors and the Route des Grandes Alpes from Lake Geneva to the Mediterranean.",
    overview: [
      "For anyone who loves driving, the Alps are the promised land. The Route des Grandes Alpes crosses more than 15 passes on its way from Thonon-les-Bains to Menton, and almost every one of them is a legend: the Iseran, the Galibier, the Izoard, the Bonette.",
      "Between the passes are lakes (Annecy, Serre-Ponçon), old fortified towns like Briançon, and quiet valleys such as the Ubaye and the Queyras, where marmots whistle at passing cars.",
      "The high passes are generally open from around June to October, depending on snow. Outside those months, the Alps become ski country, and we'll happily build you a winter loop instead.",
    ],
    ...regionImages("french-alps", ["theme:road-winding", "theme:ski-snow"]),
    bestMonths: [6, 7, 8, 9],
    quietMonths: [4, 5, 11],
    bestTimeSummary:
      "Late June to September for the high passes (opening dates vary with snow). December–March for snow.",
    signatureRoads: [
      {
        name: "Col de l'Iseran (D902)",
        km: 48,
        note: "Lanslebourg to Val d'Isère via Bonneval-sur-Arc over 2,764 m, the highest paved pass in the Alps. Usually open June–October.",
      },
      {
        name: "Col du Galibier (D902)",
        km: 26,
        note: "Valloire to the Col du Lautaret over 2,642 m, a Tour de France favourite.",
      },
      {
        name: "Route des Grandes Alpes",
        km: 720,
        note: "Lake Geneva to Menton across the great passes. Our riviera loop borrows its southern half.",
      },
    ],
    foodAndWine: {
      title: "Melted cheese, mountain herbs",
      body: [
        "Alpine food is built for altitude: tartiflette, fondue, raclette, crozets and the great cheeses (Beaufort, Reblochon, Abondance, Tomme de Savoie) made in high summer pastures.",
        "Savoie wines are fresh and mountainous: Apremont and Chignin whites, spicy Mondeuse reds, and génépi, the herbal liqueur that appears after dinner whether you asked for it or not.",
      ],
      image: photo(["theme:cheese-food", "region:french-alps"], 1),
    },
    mapPin: { x: 78.8, y: 59.2 },
    colour: "night",
    faqIds: ["best-months", "automatic-vs-manual", "ev-road-trips"],
  },
  {
    slug: "corsica",
    name: "Corsica",
    shortName: "Corsica",
    tagline: "A mountain in the sea, and every road knows it.",
    lede:
      "Red granite cliffs, turquoise coves, chestnut forests and mountain villages. Corsica is France's wildest road trip, with bends to match.",
    overview: [
      "The 'Île de Beauté' is a mountain range rising out of the Mediterranean, and driving it is an adventure. Roads are narrow and winding, distances take twice as long as the map suggests, and the views are worth every hairpin.",
      "On the west coast, the Calanches de Piana are a jumble of red rock above the Gulf of Porto, with the Scandola nature reserve beyond. In the north, the Balagne's hill villages look over the sea, and Cap Corse points at mainland Italy.",
      "The interior is wild: Corte and the Restonica gorge, the forests of Vizzavona, the Aiguilles de Bavella. In the south, Bonifacio sits on white cliffs facing Sardinia, and the beaches around Porto-Vecchio are as good as anywhere in the Mediterranean.",
    ],
    ...regionImages("corsica", ["theme:corsica-road", "theme:beach-atlantic"]),
    bestMonths: [5, 6, 9, 10],
    quietMonths: [1, 2, 11, 12],
    bestTimeSummary:
      "May–June and September–October are perfect. July–August are hot and busy, with ferries full.",
    signatureRoads: [
      {
        name: "Calanches de Piana (D81)",
        km: 12,
        note: "Piana to Porto through red granite spires. Narrow: expect to reverse for a coach at least once.",
      },
      {
        name: "Col de Bavella (D268)",
        km: 30,
        note: "Solenzara to Zonza beneath the jagged Aiguilles de Bavella.",
      },
      {
        name: "Cap Corse (D80)",
        km: 120,
        note: "A loop round the island's northern finger, past Genoese towers and fishing ports.",
      },
    ],
    foodAndWine: {
      title: "Chestnuts, brocciu and island wine",
      body: [
        "Corsican food comes from the maquis and the mountains: charcuterie from free-roaming pigs (figatellu, coppa, lonzu), brocciu ewe's-milk cheese, chestnut flour in everything from cakes to beer, and wild boar stew.",
        "The island's wines are distinctive, with local grapes like Nielluccio and Sciaccarellu (reds) and Vermentinu (whites). Patrimonio, Ajaccio and Calvi are good names to look for.",
      ],
      image: photo(["theme:cheese-food", "region:corsica"], 0),
    },
    mapPin: { x: 96.9, y: 89.8 },
    colour: "lavender",
    faqIds: ["best-months", "automatic-vs-manual", "car-hire-insurance"],
  },
];

export function getRegion(slug: string): Region | undefined {
  return regions.find((r) => r.slug === slug);
}
