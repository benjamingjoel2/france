// Verified Unsplash placeholder pool for Rond-Point (free-licence photos only).
// Each photo was checked: images.unsplash.com returns 200 + image, and the thumbnail was reviewed by eye.
// `src` is the base URL; append ?auto=format&fit=crop&w=…&q=… when rendering (see lib/media.ts).
export type Photo = { id: string; src: string; alt: string; credit: string; w: number; h: number };

export const photos: Record<string, Photo[]> = {
  "region:provence": [
    { id: "8QedjehXqYA", src: "https://images.unsplash.com/photo-1673423050646-38d6d4056a40", alt: "Rows of lavender in bloom with Mont Ventoux on the horizon", credit: "Simon Spring / Unsplash", w: 5760, h: 3840 },
    { id: "LKIx88e5s7I", src: "https://images.unsplash.com/photo-1632751255506-90b4a3b89774", alt: "Hilltop village of Gordes rising above the Luberon", credit: "mk. s / Unsplash", w: 3168, h: 2112 },
    { id: "ooTSQRDx-ng", src: "https://images.unsplash.com/photo-1722616587701-5a9565d4439b", alt: "Sénanque Abbey framed by rows of lavender", credit: "Bo Zhang / Unsplash", w: 5320, h: 2812 },
  ],
  "region:provence:portrait": [
    { id: "OJimPBFyz6w", src: "https://images.unsplash.com/photo-1733691217961-14e808e67a65", alt: "Lavender rows leading to two distant trees at dusk", credit: "le Sixième Rêve / Unsplash", w: 4592, h: 6904 },
  ],
  "region:cote-d-azur": [
    { id: "QRXxMSin654", src: "https://images.unsplash.com/photo-1643914729809-4aa59fdc4c17", alt: "Baie des Anges and the old town rooftops of Nice", credit: "Constantin / Unsplash", w: 4032, h: 3024 },
    { id: "zGyhy454PGs", src: "https://images.unsplash.com/photo-1674676618294-032e247cd5f4", alt: "View from Èze over the Mediterranean towards Cap Ferrat", credit: "Chelsea Essig / Unsplash", w: 4896, h: 3264 },
    { id: "C96CoYrOLak", src: "https://images.unsplash.com/photo-1709495543597-7d2752be8853", alt: "Colourful harbourfront houses and boats in Villefranche-sur-Mer", credit: "Christian Harb / Unsplash", w: 4500, h: 3600 },
  ],
  "region:cote-d-azur:portrait": [
    { id: "ts2F7EF00NU", src: "https://images.unsplash.com/photo-1587579785043-eccb9f70391d", alt: "Pastel houses stacked above the harbour in Villefranche-sur-Mer", credit: "Angélina Herbert / Unsplash", w: 4000, h: 6000 },
  ],
  "region:dordogne-perigord": [
    { id: "WdTDKlbZZMA", src: "https://images.unsplash.com/photo-1682525988574-15678019495b", alt: "Dordogne river winding through a wide green valley", credit: "Jametlene Reskp / Unsplash", w: 4032, h: 2268 },
    { id: "JxhwE5l4rGI", src: "https://images.unsplash.com/photo-1693999723072-c73ad995e325", alt: "Honey-stone village of La Roque-Gageac beside the Dordogne", credit: "paola capelletto / Unsplash", w: 5420, h: 3613 },
    { id: "-Hs7KnqlV2o", src: "https://images.unsplash.com/photo-1743072741607-c69b4a250cf5", alt: "Château de Beynac perched on a limestone cliff", credit: "Carnet de Voyage d'Alex / Unsplash", w: 5472, h: 3648 },
  ],
  "region:dordogne-perigord:portrait": [
    { id: "8wUjniBSnpw", src: "https://images.unsplash.com/photo-1471477464302-eb430383ff16", alt: "Bend of the Dordogne seen from a high cliff", credit: "Annie Spratt / Unsplash", w: 4000, h: 5578 },
  ],
  "region:loire-valley": [
    { id: "5ISQSCOd-MM", src: "https://images.unsplash.com/photo-1705591932023-412a22974f96", alt: "Château de Chenonceau spanning the river Cher", credit: "Colin Watts / Unsplash", w: 7952, h: 5304 },
    { id: "Yui3DZiX7yM", src: "https://images.unsplash.com/photo-1526816229784-65d5d54ac8bc", alt: "Château de Chambord reflected across its moat", credit: "Dorian Mongel / Unsplash", w: 6585, h: 4390 },
    { id: "B5dvqyQOFrE", src: "https://images.unsplash.com/photo-1650062908250-5a69ddebf470", alt: "Formal Renaissance gardens in front of a Loire château", credit: "Maxwell Andrews / Unsplash", w: 7521, h: 5000 },
  ],
  "region:loire-valley:portrait": [
    { id: "ez4YdhXgxH8", src: "https://images.unsplash.com/photo-1709805773958-40279d36069f", alt: "Château de Chambord mirrored in still water", credit: "Iris Delecroix / Unsplash", w: 4160, h: 6240 },
  ],
  "region:normandy-mont-saint-michel": [
    { id: "DKKkMfzQE3o", src: "https://images.unsplash.com/photo-1671010496251-22eab06e3292", alt: "Mont-Saint-Michel rising from the bay at sunset", credit: "Customerly / Unsplash", w: 5446, h: 3628 },
    { id: "m_uSWBJWr0s", src: "https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe", alt: "White chalk cliffs and sea arch at Étretat", credit: "Allyson Beaucourt / Unsplash", w: 5184, h: 3888 },
    { id: "EJ7wvYItcYA", src: "https://images.unsplash.com/photo-1575651133704-76021f71cc32", alt: "Tall slate-fronted houses around the old harbour of Honfleur", credit: "Max Well / Unsplash", w: 5958, h: 3972 },
  ],
  "region:normandy-mont-saint-michel:portrait": [
    { id: "wC_YNVgIRdA", src: "https://images.unsplash.com/photo-1628285477029-e98c852cfb63", alt: "Causeway leading to Mont-Saint-Michel under a pink sky", credit: "Daniel Dalea / Unsplash", w: 4000, h: 5000 },
  ],
  "region:brittany": [
    { id: "HzvPUfSnd0I", src: "https://images.unsplash.com/photo-1690748221026-7895906d819d", alt: "Pink granite boulders on the coast at sunset", credit: "le Sixième Rêve / Unsplash", w: 6666, h: 4444 },
    { id: "MuiTrZUAZBw", src: "https://images.unsplash.com/photo-1730233447605-4abc60ae11ee", alt: "Lighthouse on a rocky point above the Atlantic", credit: "Dorian Michel / Unsplash", w: 4000, h: 2250 },
    { id: "GSuSB9QPKmU", src: "https://images.unsplash.com/photo-1711110637006-c9dba894e8df", alt: "Stone lighthouse on pink granite rocks", credit: "Pascal Bernardon / Unsplash", w: 5291, h: 3096 },
  ],
  "region:brittany:portrait": [
    { id: "ZyfBBqQM0Ho", src: "https://images.unsplash.com/photo-1646489347610-e266625c3955", alt: "Waves breaking against the sea wall of Saint-Malo at dusk", credit: "Ronan POTIER / Unsplash", w: 4000, h: 6000 },
  ],
  "region:burgundy": [
    { id: "uomrAVoxs3o", src: "https://images.unsplash.com/photo-1760372057956-d20c2195c7a2", alt: "Turreted château behind rows of Burgundy vines", credit: "SOHAM BANERJEE / Unsplash", w: 8256, h: 5504 },
    { id: "6duN7DsOgcQ", src: "https://images.unsplash.com/photo-1542885414-0335bb483a08", alt: "Glazed polychrome roof tiles in Beaune", credit: "Francesco Ungaro / Unsplash", w: 6000, h: 4000 },
    { id: "zIXn0dzVX0k", src: "https://images.unsplash.com/photo-1620679380601-f6cc0a9f8d6c", alt: "Vineyard rows stretching towards an old stone tower", credit: "Sylvain Brison / Unsplash", w: 4572, h: 3048 },
  ],
  "region:burgundy:portrait": [
    { id: "DNjoCoORXxU", src: "https://images.unsplash.com/photo-1685868383881-72610b868dea", alt: "Patterned tiled roofs and turrets of the Hospices de Beaune", credit: "Hervé Marmillot / Unsplash", w: 2592, h: 3888 },
  ],
  "region:champagne": [
    { id: "gGs55RCA2MY", src: "https://images.unsplash.com/photo-1717240049346-b6a9f43f4e1c", alt: "Champagne vineyards climbing to a hilltop chapel", credit: "Sue Winston / Unsplash", w: 5129, h: 3424 },
    { id: "_xAUCK4KtHo", src: "https://images.unsplash.com/photo-1581211653431-310ba15ff9bf", alt: "Gothic west front of Reims Cathedral", credit: "Reno Laithienne / Unsplash", w: 5616, h: 3744 },
    { id: "s7RiAQYwnaU", src: "https://images.unsplash.com/photo-1703113690550-b1c65a730cd3", alt: "Autumn-coloured vineyard slopes above the Champagne plain", credit: "Salah Ait Mokhtar / Unsplash", w: 6720, h: 4480 },
  ],
  "region:champagne:portrait": [
    { id: "AsRsx2VVOnY", src: "https://images.unsplash.com/photo-1666351028798-8920e510b705", alt: "Rolling vineyard slopes in Champagne", credit: "PJ DC / Unsplash", w: 3024, h: 4032 },
  ],
  "region:alsace": [
    { id: "PPtF1jiJtA8", src: "https://images.unsplash.com/photo-1584109504427-f9b960c94cdb", alt: "Half-timbered houses lining the canal in Colmar's Petite Venise", credit: "Aswathy N / Unsplash", w: 4032, h: 3024 },
    { id: "lcz4c0Zfzz8", src: "https://images.unsplash.com/photo-1708621619503-e8d81fd45eb9", alt: "Alsace wine village surrounded by vineyards", credit: "GOETZ Jean-Pierre / Unsplash", w: 5488, h: 3662 },
    { id: "Xzr9iR1qg_I", src: "https://images.unsplash.com/photo-1539846484870-1a68e3aa8e74", alt: "Village church above golden vineyards on the Alsace wine route", credit: "Dirk Scheuble / Unsplash", w: 6000, h: 4000 },
  ],
  "region:alsace:portrait": [
    { id: "dNFk6v1jj5o", src: "https://images.unsplash.com/photo-1761489179404-9eed0152f1d1", alt: "Cobbled lane between half-timbered houses in an Alsace village", credit: "Lucas Gallone / Unsplash", w: 3731, h: 6000 },
  ],
  "region:french-basque-country": [
    { id: "sUM5WLQ1CnQ", src: "https://images.unsplash.com/photo-1586283562392-147aad033039", alt: "Fishing harbour of Saint-Jean-de-Luz with the Pyrenees behind", credit: "Alexis Gerbaud / Unsplash", w: 6000, h: 4000 },
    { id: "4CNZ9gm1K2E", src: "https://images.unsplash.com/photo-1745433329630-258b18480351", alt: "Whitewashed Basque houses with red timbers along a sunny street", credit: "Jordi Vich Navarro / Unsplash", w: 5856, h: 4088 },
    { id: "brngxqN0Lbw", src: "https://images.unsplash.com/photo-1666465622777-66e2218ddc49", alt: "Rocky islet and footbridge on the Biarritz coast at sunset", credit: "Farbod Papoli / Unsplash", w: 4032, h: 3024 },
  ],
  "region:french-basque-country:portrait": [
    { id: "4SWXJouvIDY", src: "https://images.unsplash.com/photo-1632434429079-700cc07804aa", alt: "Stone Basque house with red shutters", credit: "Caroline Zumbiehl / Unsplash", w: 2393, h: 3191 },
  ],
  "region:bordeaux-atlantic": [
    { id: "RYDeM4poDEk", src: "https://images.unsplash.com/photo-1667666670938-4e89397d7c06", alt: "Dune du Pilat between pine forest and the Atlantic", credit: "Florian Delée / Unsplash", w: 4000, h: 3000 },
    { id: "ulhxvMjzI_4", src: "https://images.unsplash.com/photo-1493564738392-d148cfbd6eda", alt: "Place de la Bourse in Bordeaux reflected in the water mirror at night", credit: "Juan Di Nella / Unsplash", w: 5196, h: 3464 },
    { id: "7rNwc1iK0eI", src: "https://images.unsplash.com/photo-1603457616812-2ab4f9a4dc55", alt: "Stone gateway opening onto a vineyard track", credit: "Omar Sotillo Franco / Unsplash", w: 5503, h: 3669 },
  ],
  "region:bordeaux-atlantic:portrait": [
    { id: "w4Q9l03Qq4o", src: "https://images.unsplash.com/photo-1572969690857-e374a67ba5c3", alt: "Vine rows below the old town of Saint-Émilion", credit: "Compagnons / Unsplash", w: 3024, h: 4032 },
  ],
  "region:languedoc": [
    { id: "EEut1BwBks0", src: "https://images.unsplash.com/photo-1753709697924-3f30695a50d7", alt: "Medieval ramparts of Carcassonne at sunset", credit: "Tom Podmore / Unsplash", w: 6016, h: 4016 },
    { id: "xNDi3oQw4Qw", src: "https://images.unsplash.com/photo-1737297023891-148f3f2fe2a8", alt: "Pont du Gard Roman aqueduct over the Gardon", credit: "Sonja Van Acolyen / Unsplash", w: 6000, h: 4000 },
    { id: "5sCU1BdCocM", src: "https://images.unsplash.com/photo-1645390841042-77720e06e2b9", alt: "Plane trees shading the Canal du Midi", credit: "Nicolas Gaborit / Unsplash", w: 3364, h: 2523 },
  ],
  "region:languedoc:portrait": [
    { id: "H7veOP1TXCc", src: "https://images.unsplash.com/photo-1714305557929-093ad1bd3805", alt: "Arches of the Pont du Gard reflected in the river", credit: "Sarah Sheedy / Unsplash", w: 2000, h: 3000 },
  ],
  "region:french-alps": [
    { id: "X6EVEZdzYHs", src: "https://images.unsplash.com/photo-1600818596647-9d5318c20a8a", alt: "Mont Blanc massif above the Chamonix valley", credit: "Susan Flynn / Unsplash", w: 3612, h: 3063 },
    { id: "WOrvdzuPqDM", src: "https://images.unsplash.com/photo-1590274853934-90bff4d9ba9e", alt: "Palais de l'Isle on the canal in Annecy's old town", credit: "Mathias Reding / Unsplash", w: 4551, h: 2560 },
    { id: "heGtaCEzY-4", src: "https://images.unsplash.com/photo-1764713107298-c17d2fc2937f", alt: "Road along Lake Annecy at dusk", credit: "Konstantin Kleine / Unsplash", w: 3072, h: 2048 },
  ],
  "region:french-alps:portrait": [
    { id: "hKdohRQu8LE", src: "https://images.unsplash.com/photo-1726088841239-95fde40a7e95", alt: "Canal and old houses of Annecy with mountains behind", credit: "Tuan P. / Unsplash", w: 3881, h: 5821 },
  ],
  "region:corsica": [
    { id: "SYBLkjltGRo", src: "https://images.unsplash.com/photo-1566485033821-57fbe2222609", alt: "Bonifacio citadel on white limestone cliffs at dusk", credit: "Hendrik Cornelissen / Unsplash", w: 4096, h: 2753 },
    { id: "0MGo3nl5iF4", src: "https://images.unsplash.com/photo-1545129228-7a804588bf8e", alt: "Turquoise cove among smooth granite rocks in southern Corsica", credit: "Kévin et Laurianne Langlais / Unsplash", w: 4967, h: 3311 },
    { id: "ePqZLOZ0XU0", src: "https://images.unsplash.com/photo-1534796211361-b8f9db468e8e", alt: "Red rock mountains plunging into the Gulf of Porto", credit: "Kai Pilger / Unsplash", w: 5568, h: 3712 },
  ],
  "region:corsica:portrait": [
    { id: "dptgM-1BimY", src: "https://images.unsplash.com/photo-1634064415653-ee82705f5451", alt: "Houses on the cliff edge in Bonifacio above a calm sea", credit: "Petr Slováček / Unsplash", w: 3961, h: 5941 },
  ],
  "theme:road-winding": [
    { id: "colNNDnUpBk", src: "https://images.unsplash.com/photo-1749424365113-6d91158de449", alt: "Car on a road winding between cypress trees", credit: "Marco Bianchetti / Unsplash", w: 3327, h: 4864 },
    { id: "B9j-xgMVf90", src: "https://images.unsplash.com/photo-1550613097-fe6c2c321cd3", alt: "Coastal road above the surf seen from the air", credit: "Pat Kay / Unsplash", w: 3465, h: 2308 },
    { id: "l_Q38Bn-56U", src: "https://images.unsplash.com/photo-1564135406432-e04bfa04e7d9", alt: "Cars on hairpin bends in a green alpine valley", credit: "Daniele Levis Pelusi / Unsplash", w: 4000, h: 2667 },
    { id: "5vKk8p95ACo", src: "https://images.unsplash.com/photo-1776251406949-ed718721fca1", alt: "Winding road through vineyards towards mountains at sunset", credit: "Thomas K / Unsplash", w: 4000, h: 6000 },
  ],
  "theme:car-countryside": [
    { id: "3sWy4x93qrc", src: "https://images.unsplash.com/photo-1684406940424-3e8540af69fd", alt: "Vintage saloon on a quiet country road", credit: "Matt Clayton / Unsplash", w: 5557, h: 3126 },
    { id: "BdlCC70f0pM", src: "https://images.unsplash.com/photo-1720109566873-8938f8b5b27f", alt: "Car on a straight road between fields, from above", credit: "Lucas Gallone / Unsplash", w: 3878, h: 2229 },
    { id: "hUt8PGJ80Og", src: "https://images.unsplash.com/photo-1774847897601-02f557ca10a7", alt: "Yellow 2CV beside a lake at sunset", credit: "Václav Pechar / Unsplash", w: 6000, h: 3375 },
  ],
  "theme:convertible": [
    { id: "kmwKge1-kYw", src: "https://images.unsplash.com/photo-1525127348642-dae4f1eb5f49", alt: "Couple driving a convertible through open countryside", credit: "Jonathan Farber / Unsplash", w: 5575, h: 3717 },
    { id: "_sWmUw8UBBI", src: "https://images.unsplash.com/photo-1625326943089-77fe44e0c220", alt: "Silver convertible on a road at sunset", credit: "Tyler Clemmensen / Unsplash", w: 7869, h: 5047 },
    { id: "PUBt7UPbJFY", src: "https://images.unsplash.com/photo-1514053514818-a89e7ce304e9", alt: "Small convertible on a sandy coastal road", credit: "Sonnie Hiles / Unsplash", w: 4758, h: 3172 },
  ],
  "theme:ebike": [
    { id: "Ub67vNBDKS8", src: "https://images.unsplash.com/photo-1592229338506-d4631f32b2b5", alt: "Two bicycles by a stone wall and a Burgundy village signpost", credit: "Ian Taylor / Unsplash", w: 2880, h: 1920 },
    { id: "4PmmkhyBPks", src: "https://images.unsplash.com/photo-1759337670125-2575ab1377c9", alt: "Couple cycling hand in hand down a country lane", credit: "Loris Boulinguez / Unsplash", w: 5835, h: 3890 },
    { id: "HVzm3AxBARc", src: "https://images.unsplash.com/photo-1761489179635-071aa4956e44", alt: "Two bicycles parked at a sunny countryside viewpoint", credit: "Lucas Gallone / Unsplash", w: 3940, h: 5768 },
    { id: "EZt4IOI6aLk", src: "https://images.unsplash.com/photo-1779023017094-2043c0219db8", alt: "Electric bike parked on a farm track beside a field", credit: "zeliha turk / Unsplash", w: 2560, h: 3840 },
  ],
  "theme:sunflowers": [
    { id: "44mucXtM9MU", src: "https://images.unsplash.com/photo-1593422195530-6ae215658bfd", alt: "Sunflower field below a hilltop village with cypresses", credit: "Brian Scott / Unsplash", w: 8256, h: 3096 },
    { id: "8bEMXJ_NwF4", src: "https://images.unsplash.com/photo-1627891374362-c6ca6c675cb3", alt: "Sunflowers in full bloom with the sun low in the sky", credit: "Allyson Beaucourt / Unsplash", w: 5196, h: 3896 },
    { id: "H_cQ7I2FPqk", src: "https://images.unsplash.com/photo-1692015830187-4b754c2257fa", alt: "Field of sunflowers under a soft summer sky", credit: "Jorgen Hendriksen / Unsplash", w: 3862, h: 6000 },
  ],
  "theme:cafe-terrace": [
    { id: "8IKf54pc3qk", src: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8", alt: "Café tables and a chalkboard on a cobbled street", credit: "Tony Lee / Unsplash", w: 5990, h: 3993 },
    { id: "oSkwy3kKkeg", src: "https://images.unsplash.com/photo-1614822180018-0620b4250ed1", alt: "Rattan bistro chairs and round marble tables on a terrace", credit: "Julian Alecxander / Unsplash", w: 3874, h: 4842 },
    { id: "o49uRfALSiI", src: "https://images.unsplash.com/photo-1577056922428-a511301a562d", alt: "Empty bistro chairs lined up along a Paris pavement", credit: "Megan Bucknall / Unsplash", w: 5347, h: 8000 },
  ],
  "theme:market": [
    { id: "nw1evHZKxXw", src: "https://images.unsplash.com/photo-1702506183879-398318b92f6d", alt: "Peppers, aubergines and carrots with chalk price tags at a market", credit: "Terry Granger / Unsplash", w: 4367, h: 2907 },
    { id: "laCaIyh7fVY", src: "https://images.unsplash.com/photo-1594299246161-96e7f1531482", alt: "Crates of aubergines, courgettes and radishes at a market stall", credit: "catrina farrell / Unsplash", w: 4592, h: 3295 },
    { id: "uIUj4FzA7XY", src: "https://images.unsplash.com/photo-1598272506579-77eaafa61bc3", alt: "Outdoor market in a sunny Provençal square", credit: "Jane Ackerley / Unsplash", w: 5140, h: 5142 },
  ],
  "theme:wine-tasting": [
    { id: "MMOXoxE_Gj0", src: "https://images.unsplash.com/photo-1598306442928-4d90f32c6866", alt: "Tasting flight with cheese and bread in a vineyard", credit: "Chelsea Pridham / Unsplash", w: 4000, h: 5334 },
    { id: "h6S8-UsDB6E", src: "https://images.unsplash.com/photo-1701622669938-fa4e09a1f1fe", alt: "Oak barrels in a vaulted wine cellar", credit: "Kristina Kutleša / Unsplash", w: 6000, h: 4000 },
    { id: "z38uTGNpNnA", src: "https://images.unsplash.com/photo-1558670460-cad0c19b1840", alt: "Wine being poured into tasting glasses", credit: "Caroline Attwood / Unsplash", w: 5760, h: 3240 },
  ],
  "theme:cheese-food": [
    { id: "b5a4wCwKH10", src: "https://images.unsplash.com/photo-1688367258643-62ec6956992e", alt: "Wheels and wedges of cheese at a market stall", credit: "Lauren Forando / Unsplash", w: 5184, h: 3888 },
    { id: "rOdM3LQRd50", src: "https://images.unsplash.com/photo-1668094497457-29f4bd775c95", alt: "Cheese board with grapes and crackers", credit: "Edward Howell / Unsplash", w: 4176, h: 2784 },
    { id: "sqkXyyj4WdE", src: "https://images.unsplash.com/photo-1623334044303-241021148842", alt: "Freshly baked croissants", credit: "Conor Brown / Unsplash", w: 6000, h: 4000 },
    { id: "H-VwuGQS278", src: "https://images.unsplash.com/photo-1608855238293-a8853e7f7c98", alt: "Quiche and salad on a rustic table", credit: "Keriliwi / Unsplash", w: 6000, h: 4000 },
  ],
  "theme:chateau-hotel": [
    { id: "-Fp-PyW1Mp0", src: "https://images.unsplash.com/photo-1549224174-8c0e61705985", alt: "Turreted château with a gravel drive and lawns", credit: "Colin Watts / Unsplash", w: 3840, h: 2160 },
    { id: "A8bjSrQg9CQ", src: "https://images.unsplash.com/photo-1623068769255-923b5307dd7d", alt: "Shaded hotel terrace with an olive tree", credit: "Sara Sadeghloo / Unsplash", w: 3264, h: 2448 },
    { id: "e7eqKQkpk_8", src: "https://images.unsplash.com/photo-1618817694392-e7b9c272c6a7", alt: "Château in parkland with autumn trees", credit: "Árpád Czapp / Unsplash", w: 3468, h: 4624 },
  ],
  "theme:boutique-room": [
    { id: "WWYF8Lts8Ho", src: "https://images.unsplash.com/photo-1731336478850-6bce7235e320", alt: "Contemporary hotel bedroom with a sculpted wooden headboard", credit: "Antonio Araujo / Unsplash", w: 5451, h: 3634 },
    { id: "NkJAfAOl-K0", src: "https://images.unsplash.com/photo-1652190455129-6d97f8d7a75b", alt: "Country guest room with antique furniture and a straw hat", credit: "Ambitious Studio* | Rick Barrett / Unsplash", w: 3832, h: 2555 },
    { id: "xQbmc2FnK3Y", src: "https://images.unsplash.com/photo-1776763018821-8feeaeeee0a5", alt: "Hotel room with armchairs and a writing desk", credit: "Antonio Araujo / Unsplash", w: 5857, h: 3905 },
  ],
  "theme:countryside-farmhouse": [
    { id: "hdQkd3k3ijI", src: "https://images.unsplash.com/photo-1779269751207-3fea011ce0d1", alt: "Swimming pool reflecting a rustic stone house", credit: "Erwan Hesry / Unsplash", w: 3901, h: 5851 },
    { id: "nM5-mS5eA8I", src: "https://images.unsplash.com/photo-1603034203013-d532350372c6", alt: "Pool beside a stone farmhouse under a tree", credit: "Bernard Hermant / Unsplash", w: 4000, h: 6000 },
    { id: "pqur-0LP8ak", src: "https://images.unsplash.com/photo-1763828484521-4e6a76a1ecfd", alt: "Elegant manor house with a garden", credit: "Shalev Cohen / Unsplash", w: 6000, h: 4000 },
  ],
  "theme:picnic": [
    { id: "GyE2Iuk3j9g", src: "https://images.unsplash.com/photo-1590166774851-bc49b23a18fe", alt: "Picnic with wine, bread and a basket on the grass", credit: "Kateryna Hliznitsova / Unsplash", w: 2519, h: 3764 },
    { id: "NjQ_gzJfeiw", src: "https://images.unsplash.com/photo-1652169892293-ba174ef19931", alt: "Picnic blanket under a blossoming tree", credit: "Svitlana / Unsplash", w: 5431, h: 3621 },
    { id: "it-VGwoQ6XQ", src: "https://images.unsplash.com/photo-1615199348139-00bf10980769", alt: "Picnic spread with a baguette on a white cloth", credit: "Calvin Shelwell / Unsplash", w: 4181, h: 5225 },
  ],
  "theme:map-roadtrip": [
    { id: "9-xfYKAI6ZI", src: "https://images.unsplash.com/photo-1519885277449-12eee5564d68", alt: "Road map on the dashboard looking out over the road", credit: "Tabea Schimpf / Unsplash", w: 5639, h: 3759 },
    { id: "CIuakYIjadc", src: "https://images.unsplash.com/photo-1504598318550-17eba1008a68", alt: "Folded map on a dashboard in evening light", credit: "Julentto Photography / Unsplash", w: 2848, h: 4288 },
    { id: "yg8Cz-i5U30", src: "https://images.unsplash.com/photo-1461183479101-6c14cd5299c4", alt: "Close-up of a folded road map", credit: "Stephen Monroe / Unsplash", w: 6000, h: 4000 },
    { id: "jkXaik_8HCA", src: "https://images.unsplash.com/photo-1550693445-737398ed6775", alt: "Passenger reading a paper map in the car", credit: "Taras Zaluzhnyi / Unsplash", w: 4000, h: 5000 },
  ],
  "theme:roundabout-village": [
    { id: "ENILgOsG6UU", src: "https://images.unsplash.com/photo-1690883732311-4dd2e193efe6", alt: "French road signs pointing toutes directions", credit: "Boudewijn Huysmans / Unsplash", w: 5904, h: 3944 },
    { id: "Im3VLeHVG74", src: "https://images.unsplash.com/photo-1784896637339-7242014342b5", alt: "Plane-shaded village square with café terraces", credit: "Dhiemas Afif Febriyan / Unsplash", w: 6506, h: 4880 },
    { id: "8X2siC3gSj4", src: "https://images.unsplash.com/photo-1587316745726-41d3e8b4942d", alt: "Blue roundabout sign beside a country road", credit: "Matt Seymour / Unsplash", w: 3448, h: 3683 },
    { id: "VGz54FT16fY", src: "https://images.unsplash.com/photo-1773179949450-8a84782e5375", alt: "Village street climbing towards a church", credit: "Ahmed Slimene / Unsplash", w: 4000, h: 6000 },
  ],
  "theme:christmas-market": [
    { id: "OHMRoA40xAI", src: "https://images.unsplash.com/photo-1580112613591-a4be59e156a5", alt: "Illuminated Christkindelsmärik sign at the Strasbourg Christmas market", credit: "Alexis Brandner / Unsplash", w: 4592, h: 3448 },
    { id: "pkDKjsPAAi4", src: "https://images.unsplash.com/photo-1575659458448-27b1d2836de2", alt: "Christmas market stalls around a lit tree at night", credit: "Daniels Joffe / Unsplash", w: 4608, h: 3072 },
    { id: "OEBeLcrzlaw", src: "https://images.unsplash.com/photo-1544212415-85fec3f52087", alt: "Carousel glowing in front of half-timbered houses at Christmas", credit: "cmophoto.net / Unsplash", w: 6871, h: 4549 },
  ],
  "theme:grape-harvest": [
    { id: "lzM3pbQim70", src: "https://images.unsplash.com/photo-1602170284347-f9c28856f149", alt: "Picker cutting a bunch of black grapes from the vine", credit: "Andrea Cairone / Unsplash", w: 6000, h: 3376 },
    { id: "_ZFHa5zk_U4", src: "https://images.unsplash.com/photo-1603314947668-e8372e0075ad", alt: "Crate of freshly picked white grapes in a vineyard", credit: "Gabriella Clare Marino / Unsplash", w: 6000, h: 4000 },
    { id: "zBwxaS0SkTk", src: "https://images.unsplash.com/photo-1605673349837-1d83a7740e30", alt: "Gloved hands harvesting red grapes", credit: "Vindemia Winery / Unsplash", w: 4242, h: 2828 },
  ],
  "theme:gorges-verdon": [
    { id: "09PYGQ1Pigo", src: "https://images.unsplash.com/photo-1615781940866-997d770386b8", alt: "Boats on the turquoise water of the Verdon gorge", credit: "Tamara Malaniy / Unsplash", w: 4032, h: 3024 },
    { id: "VNdCjOjW5Ys", src: "https://images.unsplash.com/photo-1725522149699-ab14bd6f2c22", alt: "Verdon river threading through steep wooded cliffs", credit: "Simon Spring / Unsplash", w: 8192, h: 5464 },
    { id: "MaJaEv18eqI", src: "https://images.unsplash.com/photo-1494668257191-e237c341e7f6", alt: "Bridge over the turquoise mouth of the Verdon gorge", credit: "Jens Peter Olesen / Unsplash", w: 3648, h: 4728 },
  ],
  "theme:route-napoleon": [
    { id: "oqf7Tu5FN88", src: "https://images.unsplash.com/photo-1666870981668-077673495e31", alt: "Mountain road climbing towards the Col du Galibier", credit: "Miles Iwes / Unsplash", w: 6000, h: 3368 },
    { id: "DmrLtMTv6VM", src: "https://images.unsplash.com/photo-1666870981007-fb95c18e7e18", alt: "Mountain road leading towards high Alpine peaks", credit: "Miles Iwes / Unsplash", w: 6000, h: 3368 },
    { id: "XlNX9uMB4rI", src: "https://images.unsplash.com/photo-1782887727787-ecc7a8452c44", alt: "Mountain road cut into a cliff with a tunnel", credit: "Sebastian S / Unsplash", w: 5184, h: 2920 },
  ],
  "theme:dday-beaches": [
    { id: "ls4rHX7Y6Ks", src: "https://images.unsplash.com/photo-1707209091954-b7ee988fe18e", alt: "Les Braves memorial sculpture on Omaha Beach", credit: "Wim van 't Einde / Unsplash", w: 4550, h: 2559 },
    { id: "qkMffg-eHoY", src: "https://images.unsplash.com/photo-1617814913890-8d20ae9ddfbb", alt: "Rows of white crosses at the Normandy American Cemetery above the sea", credit: "Antoine Demare / Unsplash", w: 3776, h: 2520 },
    { id: "pdpo1n8Mnv8", src: "https://images.unsplash.com/photo-1707209909974-37339b05400e", alt: "Wide sandy beach and bluffs on the Normandy coast", credit: "Wim van 't Einde / Unsplash", w: 4608, h: 2592 },
  ],
  "theme:caves-dordogne": [
    { id: "ibaaYcgh6xw", src: "https://images.unsplash.com/photo-1632061253472-9c715a570b6c", alt: "Rocamadour clinging to its cliff at dusk", credit: "le Sixième Rêve / Unsplash", w: 6000, h: 4000 },
    { id: "KyNmhgPdsMw", src: "https://images.unsplash.com/photo-1789379153883-583ca28eedd3", alt: "Limestone cave with stalactites", credit: "MrDuck Tail / Unsplash", w: 3984, h: 2984 },
    { id: "6VJbAdDc-os", src: "https://images.unsplash.com/photo-1672009676814-872125bb491b", alt: "Rocamadour sanctuary and village on the cliff face", credit: "Simon Kessler / Unsplash", w: 3648, h: 5472 },
  ],
  "theme:corsica-road": [
    { id: "ZHoSVc7nZNo", src: "https://images.unsplash.com/photo-1787945835460-40a84a365e3f", alt: "Aerial view of red rock ridges above the Corsican coast", credit: "Daniel R. / Unsplash", w: 4088, h: 2296 },
    { id: "6TvLTsEiPQM", src: "https://images.unsplash.com/photo-1666004431326-8a6e296e97db", alt: "Narrow coastal road along a Corsican headland", credit: "Clovis Wood / Unsplash", w: 4051, h: 6076 },
    { id: "upGbsgrtitQ", src: "https://images.unsplash.com/photo-1547399152-41a24f9adf33", alt: "Empty road curving through a pine forest in Corsica", credit: "Kilyan Sockalingum / Unsplash", w: 4928, h: 3264 },
  ],
  "theme:ski-snow": [
    { id: "QOuV-iMpL_w", src: "https://images.unsplash.com/photo-1550503736-c1a2c9033c03", alt: "Snow-covered wooden chalets in an Alpine village", credit: "Patrick Robert Doyle / Unsplash", w: 6211, h: 4089 },
    { id: "E7S6fM6jjl4", src: "https://images.unsplash.com/photo-1625527600543-ddd17a6ab2ab", alt: "Snowy Alpine peaks under a clear winter sky", credit: "Tom Wheatley / Unsplash", w: 6000, h: 4000 },
    { id: "9uqZZFTp-Lc", src: "https://images.unsplash.com/photo-1709508496457-e2f9c42493c6", alt: "Wooden chalet with a cable car passing overhead", credit: "Rayyân / Unsplash", w: 3416, h: 4554 },
  ],
  "theme:festival": [
    { id: "OSVh2HgbaZc", src: "https://images.unsplash.com/photo-1501765748878-d81ca6dd39ab", alt: "Aerobatic jets trailing blue, white and red smoke", credit: "Joe deSousa / Unsplash", w: 6915, h: 3890 },
    { id: "gdTxVSAE5sk", src: "https://images.unsplash.com/photo-1498931299472-f7a63a5a1cfa", alt: "Fireworks over water at night", credit: "Ray Hennessy / Unsplash", w: 4091, h: 2720 },
    { id: "Dn7P1U26ZkE", src: "https://images.unsplash.com/photo-1567351344506-b2e8a94e273b", alt: "Crowd silhouetted against a summer fireworks display", credit: "Arthur Chauvineau / Unsplash", w: 6000, h: 4000 },
  ],
  "theme:autumn-vineyard": [
    { id: "ggqmnJV3IRM", src: "https://images.unsplash.com/photo-1704300815703-e1beba972fa0", alt: "Golden autumn vines along a track towards a village", credit: "Michiel Mulder / Unsplash", w: 5930, h: 3953 },
    { id: "uFxjaDE6i8Y", src: "https://images.unsplash.com/photo-1762119954537-67f8d7351f3a", alt: "Vineyards in autumn colour around a small village", credit: "Adlan / Unsplash", w: 4032, h: 2268 },
    { id: "BFO9z4pQLfw", src: "https://images.unsplash.com/photo-1699712282163-e1ad3651b908", alt: "Black grapes among yellowing autumn vine leaves", credit: "Ingeborg Korme / Unsplash", w: 6240, h: 4160 },
  ],
  "theme:spring-blossom": [
    { id: "N6CQ6cb8Ewg", src: "https://images.unsplash.com/photo-1684749637408-6972e65e9863", alt: "Orchard rows in full spring blossom", credit: "Lipetskaya Zemlya / Unsplash", w: 6240, h: 4160 },
    { id: "U7LT_KjnBtY", src: "https://images.unsplash.com/photo-1524421222665-46008068e4cf", alt: "Blossoming orchard at sunset", credit: "Pascal Debrunner / Unsplash", w: 6000, h: 4000 },
    { id: "TRU-mlJ55IA", src: "https://images.unsplash.com/photo-1774619511446-f2af7584db46", alt: "Classic car parked under a blossoming cherry tree in a village", credit: "Antoine Pouligny / Unsplash", w: 5492, h: 3672 },
  ],
  "theme:mimosa": [
    { id: "Bj5yDBpp7Xg", src: "https://images.unsplash.com/photo-1709744302544-4417ca717279", alt: "Branches heavy with yellow mimosa blossom", credit: "Dare Artworks / Unsplash", w: 3456, h: 2304 },
    { id: "bMQ26DvuwsI", src: "https://images.unsplash.com/photo-1678149813194-6f8059040488", alt: "Mimosa flowers against a pale blue sky", credit: "Reika Makes / Unsplash", w: 3000, h: 2008 },
    { id: "OYCzNfhhlws", src: "https://images.unsplash.com/photo-1612636007122-fcc768576249", alt: "Fluffy yellow mimosa in February sunshine", credit: "Morgane Le Breton / Unsplash", w: 3648, h: 5472 },
  ],
  "theme:truffle": [
    { id: "-B59lCZO_4k", src: "https://images.unsplash.com/photo-1606419093310-d5ef610cc381", alt: "Black truffle sliced open on a wooden board", credit: "amirali mirhashemian / Unsplash", w: 6000, h: 4000 },
    { id: "-iPCD8Rpve4", src: "https://images.unsplash.com/photo-1642354609876-5386fea5e7fc", alt: "Truffle being shaved over fresh pasta", credit: "Vincent Dörig / Unsplash", w: 6000, h: 4000 },
    { id: "DZ0urIRl5_M", src: "https://images.unsplash.com/photo-1729885644009-ca8d9512c6f6", alt: "Chestnuts spilling from their spiky husks", credit: "Marta Reis / Unsplash", w: 4032, h: 3024 },
  ],
  "theme:beach-atlantic": [
    { id: "-lpkSJzdcPo", src: "https://images.unsplash.com/photo-1622625839082-6fdde07ec172", alt: "Surfers in the Atlantic waves off a long sandy beach", credit: "Ludo Poiré / Unsplash", w: 4608, h: 3456 },
    { id: "BkKEH_k-Tl0", src: "https://images.unsplash.com/photo-1537890227200-9242fb416f3a", alt: "Surfers walking to the beach at sunset", credit: "Barbora Kramná / Unsplash", w: 5184, h: 3456 },
    { id: "nJFTJKX_Jts", src: "https://images.unsplash.com/photo-1699883814440-cd55469828fa", alt: "Surfer with a red board on a wide misty beach", credit: "Jarno Colijn / Unsplash", w: 4000, h: 6000 },
  ],
  "theme:paris-departure": [
    { id: "WSvth_lwCi0", src: "https://images.unsplash.com/photo-1549144511-f099e773c147", alt: "Eiffel Tower at the end of a cobbled Paris street", credit: "cyril mzn / Unsplash", w: 4160, h: 6240 },
    { id: "R5scocnOOdM", src: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a", alt: "Pont Alexandre III lamps at dusk", credit: "Léonard Cotte / Unsplash", w: 5520, h: 3905 },
    { id: "CKn6fbGPOpE", src: "https://images.unsplash.com/photo-1623009070764-45002990256e", alt: "Pink café on a Montmartre street corner", credit: "Bastien Nvs / Unsplash", w: 5972, h: 3981 },
  ],
  "theme:night-stars": [
    { id: "L95xDkSSuWw", src: "https://images.unsplash.com/photo-1488866022504-f2584929ca5f", alt: "Milky Way over a mountain landscape", credit: "Nathan Anderson / Unsplash", w: 5751, h: 3871 },
    { id: "ots47nG_HGQ", src: "https://images.unsplash.com/photo-1763844600855-f57c9a6b8ebb", alt: "Half-timbered house beneath a starry sky", credit: "Angel Balashev / Unsplash", w: 5532, h: 9804 },
    { id: "DdMLP9ovF3U", src: "https://images.unsplash.com/photo-1626972759319-f32a691f6d1e", alt: "Country road and lone tree under the night sky", credit: "Alex Meta / Unsplash", w: 4000, h: 6000 },
  ],
  "people:1": [
    { id: "mpPfqvh04Fc", src: "https://images.unsplash.com/photo-1598966739654-5e9a252d8c32", alt: "Smiling man with a backpack in the mountains", credit: "Ali Kazal / Unsplash", w: 6000, h: 4000 },
  ],
  "people:2": [
    { id: "3dqSZidOkvs", src: "https://images.unsplash.com/photo-1507152927179-bc4ebfef7103", alt: "Woman laughing outdoors among green trees", credit: "Eye for Ebony / Unsplash", w: 4608, h: 3456 },
  ],
  "people:3": [
    { id: "M3MZ3NRpvPk", src: "https://images.unsplash.com/photo-1719037108848-685e9e599827", alt: "Smiling older woman in a park", credit: "Raymond Petrik / Unsplash", w: 4504, h: 2968 },
  ],
  "people:4": [
    { id: "u68jZr7ky0I", src: "https://images.unsplash.com/photo-1548382131-e0ebb1f0cdea", alt: "Young woman smiling in summer sunlight", credit: "Connor Wilkins / Unsplash", w: 3456, h: 4320 },
  ],
  "people:5": [
    { id: "VVEwJJRRHgk", src: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce", alt: "Man smiling with arms crossed in a meadow", credit: "Warren / Unsplash", w: 5771, h: 3951 },
  ],
  "people:6": [
    { id: "OFSQ6bHjFjs", src: "https://images.unsplash.com/photo-1611403119860-57c4937ef987", alt: "Man smiling against a weathered wall", credit: "Hà Nguyễn / Unsplash", w: 4360, h: 6535 },
  ],
  "people:7": [
    { id: "4ZBng8sJmhw", src: "https://images.unsplash.com/photo-1668879355609-8bdda74bda53", alt: "Young woman smiling in dappled sunlight", credit: "oktavianus mulyadi / Unsplash", w: 4000, h: 6000 },
  ],
  "people:8": [
    { id: "gPShMkwc-fQ", src: "https://images.unsplash.com/photo-1566761284295-af58908238bb", alt: "Older man resting outdoors among trees", credit: "Mihai Lazăr / Unsplash", w: 3264, h: 4928 },
  ],
  "hero:lavender": [
    { id: "0d7ckLu3_t4", src: "https://images.unsplash.com/photo-1684746742697-dd830100ba5c", alt: "Lavender rows and a farm track leading towards Mont Ventoux", credit: "Thomas Despeyroux / Unsplash", w: 5828, h: 3278 },
    { id: "wGTNqHqqYbA", src: "https://images.unsplash.com/photo-1783587311914-fdfa1f3097fe", alt: "Path through lavender fields at sunset", credit: "CHRIS ROYER Photographie / Unsplash", w: 6048, h: 4032 },
    { id: "LvCsPy0XNlw", src: "https://images.unsplash.com/photo-1656850855717-6a62f59a0a79", alt: "Grassy track running between lavender rows to the horizon", credit: "Lynn Danielson / Unsplash", w: 4096, h: 2730 },
  ],
  "hero:calendar": [
    { id: "cBPZtVH1pM8", src: "https://images.unsplash.com/photo-1729980263619-6d354cf18658", alt: "Road curving through patchwork vineyards in autumn", credit: "Lucas Gallone / Unsplash", w: 3831, h: 2250 },
    { id: "m-r4OozGeN8", src: "https://images.unsplash.com/photo-1444214058525-761aeb793113", alt: "Village rooftops above a valley at sunset", credit: "Łukasz Czechowicz / Unsplash", w: 6016, h: 3384 },
  ],
  "hero:why": [
    { id: "KvEF44L8AMo", src: "https://images.unsplash.com/photo-1608650645244-404669dc7eb9", alt: "Walled hilltop village surrounded by green countryside", credit: "Max Zed / Unsplash", w: 3628, h: 2719 },
    { id: "muMn0QEeiiw", src: "https://images.unsplash.com/photo-1469806580075-c8309682eaeb", alt: "Patchwork farmland in a green valley", credit: "freddie marriage / Unsplash", w: 4896, h: 3264 },
  ],
  "hero:plan": [
    { id: "3NCA3tbaE5I", src: "https://images.unsplash.com/photo-1496950866446-3253e1470e8e", alt: "Travel planning flat lay with a map, cameras and coffee", credit: "ian dooley / Unsplash", w: 5497, h: 3665 },
    { id: "ZWD3Dx6aUJg", src: "https://images.unsplash.com/photo-1499591934245-40b55745b905", alt: "Hands tracing a route on a map beside a camera", credit: "Glenn Carstens-Peters / Unsplash", w: 4256, h: 2832 },
  ],
};
