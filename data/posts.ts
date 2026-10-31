import { photo } from "@/lib/media";
import type { Post } from "./types";

export const posts: Post[] = [
  // ───────────────────────────────────────────────────────────────
  {
    slug: "best-road-trips-in-france",
    title: "The best road trips in France",
    category: "Road trip ideas",
    excerpt:
      "Lavender plateaux, Alpine passes, castle-lined rivers and island hairpins: our pick of France's greatest drives, and how to do them properly.",
    date: "2026-03-12",
    readMinutes: 5,
    heroImage: photo(["theme:road-winding", "theme:car-countryside"], 0),
    authorSlug: "margaux-delaunay",
    blocks: [
      {
        type: "p",
        text: "France is the most rewarding road-trip country in Europe, and it isn't close. It has the space (it's the biggest country in the EU), the variety (Alps, Atlantic, Mediterranean, and everything in between) and the roads: around a million kilometres of them, most of them small, quiet and leading somewhere that serves lunch.",
      },
      {
        type: "p",
        text: "The trick is to stay off the motorways. The autoroutes are fast and efficient, but the real France lives on the D-roads, the departmental roads that wander from village to village, through vineyards and over passes. Every loop below is designed around them. And every one is a loop, so you finish where you started without paying a one-way fee.",
      },
      { type: "h2", text: "1. Provence: lavender and hill villages" },
      {
        type: "p",
        text: "The classic, and for good reason. From Marseille, head into the Luberon, where Gordes, Roussillon and Bonnieux sit on their hilltops like they're waiting for a painter. Then cross the lavender plateaux of Sault and Valensole, drop into the Verdon gorges and finish on the coast at Cassis.",
      },
      {
        type: "p",
        text: "Timing matters. The lavender usually flowers from late June to mid-July, with the Valensole plateau often at its best in early July. Come in May or September instead and you'll trade purple fields for empty villages and long, warm evenings. Neither is a bad deal.",
      },
      { type: "tripLink", slug: "provence-lavender-hilltop-villages" },
      { type: "h2", text: "2. The Alps: the great passes" },
      {
        type: "split",
        image: photo(["theme:road-winding", "region:french-alps"], 1),
        heading: "Above the clouds",
        text: [
          "If you love driving, this is the one. The Route des Grandes Alpes runs from Lake Geneva to the Mediterranean over the most famous passes in Europe: the Col de l'Iseran, the highest paved pass in the Alps at 2,764 m, plus the Galibier, the Izoard and the Bonette.",
          "Our version starts on the Riviera, climbs through the red gorges of the Cians and spends a week among the cols before dropping back to the sea. The passes are generally open from around June to October, depending on snow.",
        ],
      },
      { type: "tripLink", slug: "riviera-alpine-passes" },
      { type: "h2", text: "3. The Dordogne: castles, caves and canoes" },
      {
        type: "p",
        text: "The Dordogne valley is road-trip perfection in miniature. Distances are short, the roads are gentle and there's a castle on every other cliff: Beynac, Castelnaud, Montfort. Add the painted caves of the Vézère valley, the cliff town of Rocamadour, a canoe trip and the Saturday market in Sarlat, and you have a week that suits everyone from history buffs to small children.",
      },
      {
        type: "p",
        text: "It's also one of France's great food regions. Walnuts, duck, strawberries in spring, cèpes in autumn and black truffles in winter. Finish your loop in Saint-Émilion and you'll have covered the wine, too.",
      },
      { type: "tripLink", slug: "dordogne-castles-caves" },
      { type: "h2", text: "4. Normandy: the D-Day beaches and Mont-Saint-Michel" },
      {
        type: "p",
        text: "Some road trips are about scenery; this one is also about stories. From Honfleur's painterly harbour, drive through the cider country of the Pays d'Auge to Bayeux, then spend a day on the D-Day landing beaches with a local historian. It's the most moving day you'll spend in France.",
      },
      {
        type: "p",
        text: "Then head west to Mont-Saint-Michel. Stay nearby so you can see it at sunrise, and cross the bay on foot with a qualified guide: the tides here are among the strongest in Europe and the sands are not to be explored alone.",
      },
      { type: "tripLink", slug: "normandy-d-day-mont-saint-michel" },
      { type: "h2", text: "5. Corsica: the island loop" },
      {
        type: "p",
        text: "Corsica is a mountain range rising out of the sea, which means every road is either climbing, descending or hugging a cliff. The Calanches de Piana, the Col de Bavella and the coast road to Calvi are among the most spectacular drives anywhere in Europe.",
      },
      {
        type: "callout",
        text: "Corsican roads are slow. A 100 km day can easily take three hours of driving. Plan fewer kilometres than you think, book an automatic if you're more comfortable with one, and expect to reverse for a coach at least once.",
      },
      { type: "tripLink", slug: "corsica-island-loop" },
      { type: "h2", text: "6. The gentle ones: Loire, Burgundy, Alsace" },
      {
        type: "p",
        text: "Not every road trip needs hairpins. The Loire Valley, Burgundy and Alsace are perfect for a slower pace, with short drives between châteaux, wine villages and some of the best food in France. They're also ideal for mixing driving with e-bike days: park the car outside your hotel and pedal the vineyard lanes instead.",
      },
      {
        type: "list",
        items: [
          "The Loire: Renaissance châteaux, riverside cycle paths and wine cellars dug into the rock.",
          "Burgundy: the Route des Grands Crus and the Voie des Vignes cycle path, with Beaune as your base.",
          "Alsace: the Route des Vins through storybook villages, and the best Christmas markets in France.",
        ],
      },
      { type: "tripLink", slug: "loire-chateaux-loop" },
      { type: "h2", text: "7. Brittany and the Basque Country: the Atlantic edge" },
      {
        type: "p",
        text: "France's Atlantic coast is wilder and greener than the Mediterranean. Brittany has pink granite, lighthouses and crêperies; the Basque Country has surf, red-shuttered villages and the Pyrenees as a backdrop. Both are at their best from June to September, and both are seriously good places to eat.",
      },
      { type: "tripLink", slug: "brittany-coast-loop" },
      { type: "h2", text: "A few things we've learned on the road" },
      {
        type: "list",
        items: [
          "Plan fewer kilometres than you think. France is big, the small roads are slow and the best moments happen when you stop.",
          "Lunch is the main event. In rural France, kitchens often close by 2pm, so aim to be at the table by 1pm.",
          "Book an automatic if you need one. Manual is still the default for hire cars, and automatics run out in summer.",
          "Avoid driving into big cities. Park outside and take a tram, or skip them on a road trip altogether.",
          "Fill up at supermarkets. Motorway fuel is the most expensive, and rural stations may only take chip-and-PIN cards at night.",
        ],
      },
      { type: "h2", text: "How to choose" },
      {
        type: "p",
        text: "Start with the season. Spring is for gardens, blossom and the Loire. Early summer is for lavender and the Alps. Autumn is for harvests, golden vineyards and the Dordogne. Winter is for truffles, Christmas markets and the Riviera's mimosa. Our When to go calendar has the details, month by month.",
      },
      {
        type: "p",
        text: "Then think about pace. Do you want long, glorious days at the wheel, or short hops and long lunches? We grade every trip Gentle, Balanced or Ambitious, so you know what you're getting into. And if you can't decide, tell us what you love and let us take the long way round for you.",
      },
      {
        type: "callout",
        text: "Every Rond-Point trip is a loop and every one is tailor-made. Change the stays, the pace, the car or the season. Your specialist will rebuild the route around you.",
      },
    ],
    related: ["how-to-drive-a-french-roundabout", "self-drive-vs-drive-and-e-bike", "best-wine-routes-in-france"],
    seo: {
      title: "The best road trips in France",
      description:
        "Our pick of the greatest road trips in France, from Provence's lavender to the Alpine passes, the Dordogne, Normandy and Corsica.",
    },
  },

  // ───────────────────────────────────────────────────────────────
  {
    slug: "how-to-drive-a-french-roundabout",
    title: "How to drive a French roundabout like a local",
    category: "Driving in France",
    excerpt:
      "France has more roundabouts than any country on earth. Here's how to tackle them with confidence, from give-way rules to the Arc de Triomphe.",
    date: "2026-04-23",
    readMinutes: 5,
    heroImage: photo(["theme:roundabout-village", "theme:car-countryside"], 0),
    authorSlug: "camille-bertin",
    blocks: [
      {
        type: "p",
        text: "We named our company after them, so we'd better explain. France has tens of thousands of roundabouts (ronds-points), more than any other country in the world. Small towns have them at both ends; some villages seem to have more roundabouts than residents. Many are decorated by the local council with sculptures, flower beds, vintage tractors or, in one memorable case we know, a giant snail.",
      },
      {
        type: "p",
        text: "For visitors, especially those used to driving on the left, roundabouts are often the most nerve-racking part of driving in France. They needn't be. Here's how to handle them like a local, minus the hand gestures.",
      },
      { type: "h2", text: "The golden rule: give way to traffic already on the roundabout" },
      {
        type: "p",
        text: "On the vast majority of French roundabouts, traffic already circulating has priority, and you give way before entering. You'll see a red-bordered give-way triangle (cédez le passage), dashed give-way lines on the road and, usually, a sign saying 'Vous n'avez pas la priorité': you do not have priority.",
      },
      {
        type: "p",
        text: "Because France drives on the right, you go round anticlockwise, and the traffic you're giving way to is coming from your left. If you're used to driving on the left, that's the mirror image of what you know, and the moment to slow down and think.",
      },
      {
        type: "callout",
        text: "Remember: look left, give way to the left, go round to the right. If in doubt, stop and wait for a clear gap. Nobody minds a cautious driver; plenty of people mind a confused one.",
      },
      { type: "h2", text: "The exception: the old-style roundabouts" },
      {
        type: "split",
        image: photo(["theme:paris-departure", "theme:roundabout-village"], 0),
        heading: "Priorité à droite, the old way",
        text: [
          "Before the 1980s, French roundabouts followed the general rule of priorité à droite: traffic coming from the right had priority, which on a roundabout means cars entering have priority over cars already going round. Most roundabouts were converted to the modern give-way system, but not all.",
          "The most famous exception is the Place Charles-de-Gaulle around the Arc de Triomphe in Paris, where twelve avenues feed a huge cobbled circle with no lanes and no give-way lines. Traffic entering from the right has priority. It works, in a very Parisian way, but we'd suggest admiring it from the pavement.",
        ],
      },
      {
        type: "p",
        text: "In smaller towns, you may still meet a roundabout with no give-way signs or markings. Treat it with caution: entering traffic from your right may have priority. Slow down, watch what others do and be ready to stop.",
      },
      { type: "h2", text: "Lanes, signals and exits" },
      {
        type: "p",
        text: "Many French roundabouts have a single lane, which makes life easy. On larger ones with two or more lanes, the general practice is straightforward:",
      },
      {
        type: "list",
        items: [
          "For the first exit (turning right), approach in the right-hand lane, stay in it and signal right as you approach.",
          "For exits straight ahead, the right-hand lane is usually fine; follow any lane markings or overhead signs.",
          "For later exits, you can use the inner (left-hand) lane, then move carefully back to the outer lane before your exit, checking your mirror and blind spot.",
          "Always signal right just before you leave the roundabout, after passing the exit before yours.",
          "Watch for cyclists and motorbikes, who often stay on the outside of the roundabout.",
        ],
      },
      {
        type: "p",
        text: "Be aware that French drivers don't always signal on roundabouts, and some use the outer lane for every exit. Leave space, watch the wheels of the car next to you rather than its indicators, and don't assume anyone is leaving until they actually do.",
      },
      { type: "h3", text: "Reading the signs" },
      {
        type: "p",
        text: "Before each roundabout, a blue or green sign shows the layout and exits. Green signs point towards major roads and towns; blue ones towards motorways; white for local destinations. 'Toutes directions' (all directions) and 'Autres directions' (other directions) are your friends when your town isn't listed. Your route book uses exit numbers, just like our homepage.",
      },
      { type: "h3", text: "Approaching, entering, and the people on foot" },
      {
        type: "p",
        text: "Slow down early: many roundabouts on the edge of towns come straight after a fast stretch of road, and the speed limit usually drops to 50 km/h or less on the approach. Pick your lane in good time, look left as you near the give-way line and judge the gap by the traffic, not by hope.",
      },
      {
        type: "p",
        text: "Zebra crossings often sit just before the entry and just after each exit. Pedestrians have priority when they're crossing or clearly about to cross, so leaving a roundabout means checking the crossing as well as your mirror. On mini-roundabouts in villages (a painted circle or a low dome), give way in the same way and go round the marking, not over it, if your car fits.",
      },
      {
        type: "p",
        text: "Large lorries and caravans need the whole width of the roundabout and may straddle both lanes. Hang back, let them through and don't try to squeeze alongside.",
      },
      { type: "h2", text: "The most important rule of all" },
      {
        type: "p",
        text: "If you miss your exit, don't brake, don't swerve and don't reverse. Just go round again. A roundabout is the only road in the world that gives you a second chance by design, and the scenic route is rarely a mistake.",
      },
      {
        type: "p",
        text: "That's more or less our philosophy. Every Rond-Point trip is a loop: you start and finish in the same place, but the way round is the whole point. You'll probably meet a few hundred roundabouts on the way. By the end of the week, you'll be choosing your exit with a confident flick of the indicator and a nod to the giant snail.",
      },
      { type: "h2", text: "A few more tips for driving in France" },
      {
        type: "list",
        items: [
          "Priorité à droite also applies at many unmarked junctions in towns and villages: give way to traffic joining from the right unless signs tell you otherwise.",
          "Speed limits drop sharply at the town sign, typically to 50 km/h, and often 30 km/h in city centres.",
          "Keep a hi-vis vest within reach of the driver's seat and a warning triangle in the car.",
          "In the countryside, tractors have every right to be there. Breathe, enjoy the view, overtake only when it's clearly safe.",
        ],
      },
      {
        type: "callout",
        text: "Rules change. Check our Driving in France guide and the official French road safety website before you travel. Your specialist is a message away for any question, roundabout-related or otherwise.",
      },
      { type: "tripLink", slug: "alsace-wine-route" },
    ],
    related: ["best-road-trips-in-france", "self-drive-vs-drive-and-e-bike"],
    seo: {
      title: "How to drive a French roundabout like a local",
      description:
        "Give-way rules, priorité à droite, lanes and exits: a friendly guide to driving French roundabouts with confidence.",
    },
  },

  // ───────────────────────────────────────────────────────────────
  {
    slug: "self-drive-vs-drive-and-e-bike",
    title: "Self-drive vs drive & e-bike: which loop is yours?",
    category: "Planning",
    excerpt:
      "Four wheels or four wheels plus two? How our two styles of road trip compare, and how to choose the right one for you.",
    date: "2026-06-04",
    readMinutes: 5,
    heroImage: photo(["theme:ebike", "theme:car-countryside"], 0),
    authorSlug: "theo-nguyen",
    blocks: [
      {
        type: "p",
        text: "Every Rond-Point trip is a loop by car, with hand-picked stays, a route book and a dedicated specialist. But we design two kinds: classic self-drive road trips, and 'drive & e-bike' trips, where some days you leave the car at the hotel and explore on a pedal-assisted bike instead. Here's how they compare.",
      },
      { type: "h2", text: "Self-drive: the classic road trip" },
      {
        type: "p",
        text: "A self-drive loop is the purest form of road trip. Every day brings a new stretch of road, from short hops between villages to big days over mountain passes. You cover more ground, see more landscapes and enjoy the drive as part of the experience.",
      },
      {
        type: "p",
        text: "Self-drive suits you if you love driving (or being driven), want to see a lot in a week, or are heading somewhere where distances are bigger and the roads are the highlight: the Alps, Corsica, the Verdon, the coast of Brittany.",
      },
      {
        type: "list",
        items: [
          "Best for: drivers, dramatic scenery, covering a wider area, mountain passes.",
          "Typical pace: Balanced or Ambitious, two to four hours at the wheel on most days.",
          "Our favourites: the Riviera and Alpine passes, the Corsica island loop, the Brittany coast.",
        ],
      },
      { type: "tripLink", slug: "riviera-alpine-passes" },
      { type: "h2", text: "Drive & e-bike: the best of both" },
      {
        type: "split",
        image: photo(["theme:ebike", "region:burgundy"], 1),
        heading: "Park up, saddle up",
        text: [
          "On a drive & e-bike trip, you still have a car for the whole loop, but on two to four days you'll swap it for an e-bike. Bikes are delivered to your stay, fitted, charged and ready, with helmets, locks, panniers and a route loaded on a handlebar phone mount.",
          "Rides are typically 25–45 km, on cycle paths and quiet lanes, with stops for lunch, tastings and photographs. Then you're back at your hotel, and the car is ready for the next day's drive.",
        ],
      },
      {
        type: "p",
        text: "Why bother? Because some places are simply better by bike. You can't stop a car in the middle of a grand cru vineyard, but you can lean a bike against the wall. You can ride straight up to the gates of Chenonceau on a riverside path while everyone else hunts for parking. And you can taste wine at lunch without worrying about who's driving.",
      },
      { type: "tripLink", slug: "burgundy-grands-crus-loop" },
      { type: "h2", text: "But I'm not a cyclist…" },
      {
        type: "p",
        text: "You don't need to be. Our e-bikes are pedal-assisted: a motor adds power as you pedal, up to 25 km/h (the legal limit for e-bikes in Europe). Hills feel like gentle slopes, and headwinds lose their bite. If you can ride a bike, you can do our e-bike days, and many guests who haven't ridden for years tell us it was the highlight of their trip.",
      },
      {
        type: "callout",
        text: "Weather looking grim? Your specialist can swap an e-bike day for a drive at short notice. Nothing is fixed, and nobody gets wet who doesn't want to.",
      },
      { type: "h3", text: "Where e-bikes shine" },
      {
        type: "list",
        items: [
          "The Loire Valley: flat riverside paths on the Loire à Vélo route, with châteaux at every turn.",
          "Burgundy: the Voie des Vignes cycle path through Pommard, Volnay and Meursault.",
          "Champagne: vineyard lanes from Hautvillers along the Marne valley.",
          "The Basque Country: cliff-top lanes along the Corniche and rolling hills inland.",
        ],
      },
      { type: "tripLink", slug: "loire-chateaux-loop" },
      { type: "h2", text: "How to choose" },
      {
        type: "p",
        text: "Ask yourself three questions. First, how do you like to spend your days? If the drive itself is what excites you, go self-drive. If you prefer to slow right down and feel the landscape, add e-bikes.",
      },
      {
        type: "p",
        text: "Second, where are you going? Wine regions and river valleys are perfect for e-bikes; mountains and islands are better suited to the car (unless you're a very keen cyclist, in which case talk to us).",
      },
      {
        type: "p",
        text: "Third, who's coming? E-bike days are brilliant for couples and friends, and work well with teenagers. With younger children, a self-drive loop with shorter driving days and plenty of stops is usually easier, though we can add child seats or trailers to bikes in some regions.",
      },
      { type: "h2", text: "What a typical day looks like" },
      {
        type: "p",
        text: "On a self-drive day, you might leave after breakfast, drive an hour and a half to a market town, wander and lunch, then take a scenic road to your next hotel, arriving in time for a swim before dinner. On a big day in the mountains, you'll spend longer at the wheel, with stops at belvederes and a picnic at the top of a pass.",
      },
      {
        type: "p",
        text: "On an e-bike day, there's no packing and no driving. The bikes are waiting when you come down to breakfast. You set off mid-morning, ride for an hour or two, stop for a tasting or a château, have lunch in a village square, then pedal gently home for a late-afternoon rest. Most guests ride between three and four hours in total, spread across the day.",
      },
      { type: "h3", text: "Practical things worth knowing" },
      {
        type: "list",
        items: [
          "Luggage stays at the hotel on e-bike days; carry only what you need in the panniers.",
          "Helmets are provided and strongly recommended. They're compulsory in France for children under 12.",
          "E-bike batteries last comfortably for our routes; we plan rides well within their range.",
          "Our drive & e-bike loops are usually Gentle or Balanced, with shorter drives on the non-cycling days.",
          "Prices include bike delivery, fitting, equipment and route navigation.",
        ],
      },
      { type: "h2", text: "Or mix it up" },
      {
        type: "p",
        text: "All our trips are tailor-made, so the line between the two styles is yours to draw. Add an e-bike day to a self-drive loop, or drop one from a drive & e-bike trip. Add a cooking class, a boat trip, an extra night where you fall in love with the view. Tell your specialist what you enjoy and the loop will bend around you. That's rather the point of a roundabout.",
      },
      {
        type: "callout",
        text: "Not sure yet? Our road trip planner asks five quick questions, then a specialist sends you a first draft. No commitment, just a loop to look at.",
      },
    ],
    related: ["best-road-trips-in-france", "best-wine-routes-in-france"],
    seo: {
      title: "Self-drive vs drive & e-bike road trips in France",
      description:
        "How classic self-drive road trips compare with drive & e-bike trips in France, and how to choose the right loop for you.",
    },
  },

  // ───────────────────────────────────────────────────────────────
  {
    slug: "best-wine-routes-in-france",
    title: "The best wine routes in France",
    category: "Food & wine",
    excerpt:
      "From Alsace's flower-boxed villages to the grands crus of Burgundy and the chalk cellars of Champagne: France's great wine roads, and how to drive them.",
    date: "2026-09-10",
    readMinutes: 5,
    heroImage: photo(["theme:autumn-vineyard", "theme:wine-tasting"], 0),
    authorSlug: "amara-diallo",
    blocks: [
      {
        type: "p",
        text: "France has some of the most beautiful wine country in the world, and the best way to see it is slowly, along the routes des vins that wind through the vineyards from village to village. Here are our favourites, with a word of advice that applies to all of them: the driver tastes and spits, or the driver gets an e-bike day.",
      },
      {
        type: "callout",
        text: "France's drink-drive limit is 0.5 g of alcohol per litre of blood, and lower (0.2 g/l) for new drivers. That's less than you might think. Designate a driver, use the spittoon, or plan tastings on e-bike or rest days. Verify the current limits before you travel.",
      },
      { type: "h2", text: "Route des Vins d'Alsace" },
      {
        type: "p",
        text: "The Alsace wine route runs for about 170 km along the foothills of the Vosges, from Marlenheim near Strasbourg to Thann in the south. It's one of the oldest and best-signposted wine routes in France, and almost certainly the prettiest.",
      },
      {
        type: "p",
        text: "The villages are the stars: Riquewihr, Ribeauvillé, Kaysersberg, Eguisheim, all half-timbered houses, cobbled lanes and window boxes. Alsace wines are named by grape, which makes them easy to learn: Riesling, Gewurztraminer, Pinot Gris, Muscat, Sylvaner, Pinot Blanc and Pinot Noir, plus the sparkling Crémant d'Alsace. Many family winegrowers welcome visitors without appointment.",
      },
      { type: "tripLink", slug: "alsace-wine-route" },
      { type: "h2", text: "Route des Grands Crus, Burgundy" },
      {
        type: "split",
        image: photo(["region:burgundy", "theme:autumn-vineyard"], 1),
        heading: "Sixty kilometres of legend",
        text: [
          "Burgundy's Route des Grands Crus runs some 60 km from Dijon to Santenay, along the Côte de Nuits and Côte de Beaune. The village names read like a fine wine list: Gevrey-Chambertin, Vougeot, Nuits-Saint-Georges, Pommard, Volnay, Meursault, Puligny-Montrachet.",
          "The landscape is modest (a gentle east-facing slope, stone walls, small villages), but each vineyard plot, or climat, has its own character. The climats of Burgundy are a UNESCO World Heritage Site.",
        ],
      },
      {
        type: "p",
        text: "Base yourself in Beaune and you can explore by car and by bike. The Voie des Vignes cycle path heads south from Beaune through the vineyards, perfect for an e-bike day with a tasting at the end.",
      },
      { type: "tripLink", slug: "burgundy-grands-crus-loop" },
      { type: "h2", text: "Route Touristique du Champagne" },
      {
        type: "p",
        text: "Champagne's tourist route is a network of signposted circuits through the main vineyard areas: the Montagne de Reims, the Vallée de la Marne, the Côte des Blancs and the Côte des Bar further south. It's a short hop from Paris, which makes it perfect for a long weekend.",
      },
      {
        type: "p",
        text: "Visit a famous house in Reims or Épernay to see the chalk cellars, then head into the villages to meet growers who make Champagne from their own grapes. Don't miss Hautvillers, where the monk Dom Pérignon worked, or the vineyard lighthouse at Verzenay.",
      },
      { type: "tripLink", slug: "champagne-houses-weekend" },
      { type: "h2", text: "Bordeaux: the Médoc and Saint-Émilion" },
      {
        type: "p",
        text: "Bordeaux is less a wine route than a wine universe. North of the city, the D2 runs through the Médoc's Route des Châteaux, past the grand estates of Margaux, Saint-Julien, Pauillac and Saint-Estèphe. Many of the most famous châteaux visit by appointment only, so plan ahead.",
      },
      {
        type: "p",
        text: "East of Bordeaux, Saint-Émilion is a medieval village built over its own limestone quarries, with a monolithic church carved into the rock and vineyards all around. It's a UNESCO World Heritage Site and arguably the most charming wine village in France. Combine it with the Dordogne for the perfect food-and-wine loop.",
      },
      { type: "tripLink", slug: "dordogne-castles-caves" },
      { type: "h2", text: "The Loire Valley" },
      {
        type: "p",
        text: "The Loire is France's longest river, and its vineyards stretch for hundreds of kilometres, from Sancerre in the east to Muscadet near the Atlantic. In between come Vouvray's Chenin Blanc, the Cabernet Franc reds of Chinon and Bourgueil, and Saumur's sparkling wines.",
      },
      {
        type: "p",
        text: "Many cellars are carved into the soft tufa stone, a cool 12°C all year round, which makes a tasting in July feel even better. And because the landscape is gentle, the Loire is ideal for combining vineyards and châteaux by e-bike.",
      },
      { type: "tripLink", slug: "loire-chateaux-loop" },
      { type: "h2", text: "The Rhône Valley" },
      {
        type: "p",
        text: "The northern Rhône's vineyards cling to steep terraces above the river: Côte-Rôtie, Condrieu, Hermitage. Further south, around Avignon and Orange, the landscape opens up into the sun-baked vineyards of Châteauneuf-du-Pape, Gigondas and Vacqueyras, beneath the jagged Dentelles de Montmirail.",
      },
      {
        type: "p",
        text: "The southern Rhône fits neatly into a Provence road trip: add a day of tastings between the Luberon and Mont Ventoux, and a picnic of local cheese and figs among the vines.",
      },
      { type: "tripLink", slug: "provence-lavender-hilltop-villages" },
      { type: "h2", text: "Off the beaten track: Languedoc, Jura and beyond" },
      {
        type: "p",
        text: "Some of France's most exciting wine is made away from the famous names. In Languedoc, a new generation of winemakers has transformed regions like Pic Saint-Loup, Faugères and the Minervois, and the landscape of garrigue, Cathar castles and Mediterranean light is a joy to drive. The Jura, between Burgundy and Switzerland, makes nutty vin jaune and straw wines found nowhere else. And Corsica's island grapes, from Nielluccio to Vermentinu, deserve a much wider audience.",
      },
      {
        type: "p",
        text: "These regions tend to be less visited, which means warmer welcomes, lower prices and winemakers who still have time to talk. If you've already done the classics, ask us about building a loop around one of them.",
      },
      { type: "h2", text: "How to plan a wine road trip" },
      {
        type: "p",
        text: "Choose a base, not a route. Wine regions are compact, and staying three or four nights in one place means you can taste without moving hotels every day. Mix tasting days with non-wine days (a château, a market, a walk) to keep your palate fresh. And think about the season: late spring brings green vines and quiet cellars; September and October bring the harvest, golden light and a buzz in every village.",
      },
      { type: "h2", text: "Tips for tasting in France" },
      {
        type: "list",
        items: [
          "Book ahead, especially for smaller estates and anything in Burgundy or Bordeaux. Your specialist can do this for you.",
          "Avoid harvest time for in-depth visits: many winemakers are busy in the vineyards from late August to October. Harvest is still a wonderful time to visit the regions.",
          "Lunch is sacred. Many estates close from noon to two.",
          "Buying a bottle or two after a free tasting at a small estate is appreciated, though rarely expected.",
          "Ask about shipping if you want to buy more than your suitcase can handle.",
        ],
      },
      {
        type: "callout",
        text: "Every Rond-Point wine loop includes hand-picked tastings with family producers, booked for you, plus plenty of time for the ones you discover yourself.",
      },
    ],
    related: ["best-road-trips-in-france", "self-drive-vs-drive-and-e-bike"],
    seo: {
      title: "The best wine routes in France",
      description:
        "Alsace, Burgundy, Champagne, Bordeaux, the Loire and the Rhône: France's great wine routes and how to drive them.",
    },
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export const postsByDate = [...posts].sort((a, b) => b.date.localeCompare(a.date));
