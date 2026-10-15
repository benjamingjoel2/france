import { photo } from "@/lib/media";
import type { Stay } from "./types";

/**
 * Placeholder stays. Every name is invented and deliberately playful;
 * none refers to a real business. Replace once partner agreements are signed.
 */
export const stays: Stay[] = [
  // Provence
  {
    slug: "mas-des-trois-sorties",
    name: "Le Mas des Trois Sorties",
    regionSlug: "provence",
    style: "countryside",
    blurb:
      "A honey-stone farmhouse below a Luberon village, with a pool among the olive trees and a breakfast table that runs to four kinds of jam. Three exits from the drive, all of them lead somewhere lovely.",
    image: photo(["theme:countryside-farmhouse", "region:provence"], 0),
    placeholder: true,
  },
  {
    slug: "bastide-de-la-quatrieme-sortie",
    name: "La Bastide de la Quatrième Sortie",
    regionSlug: "provence",
    style: "boutique",
    blurb:
      "A small bastide between the lavender of Valensole and the cliffs of Moustiers. Shutters the colour of the plateau in July, and a terrace built for long evenings.",
    image: photo(["theme:boutique-room", "region:provence"], 0),
    placeholder: true,
  },
  {
    slug: "villa-contre-sens",
    name: "Villa Contre-Sens",
    regionSlug: "provence",
    style: "coastal",
    blurb:
      "A white villa above the harbour at Cassis, where you can watch the fishing boats come in from the breakfast table. The only wrong way here is leaving early.",
    image: photo(["theme:beach-atlantic", "region:provence"], 2),
    placeholder: true,
  },
  {
    slug: "auberge-de-la-sortie-manquee",
    name: "L'Auberge de la Sortie Manquée",
    regionSlug: "provence",
    style: "countryside",
    blurb:
      "A stone inn near Castellane for everyone who missed the motorway exit and found the Route Napoléon instead. Hearty dinners, thick walls and the Verdon on the doorstep.",
    image: photo(["theme:countryside-farmhouse", "region:provence"], 1),
    placeholder: true,
  },
  // Côte d'Azur & Alps
  {
    slug: "villa-du-grand-contour",
    name: "Villa du Grand Contour",
    regionSlug: "cote-d-azur",
    style: "coastal",
    blurb:
      "A pastel villa on the hillside above Villefranche-sur-Mer, with a sea view from every room. Close enough to Nice for dinner, far enough for peace.",
    image: photo(["region:cote-d-azur", "theme:beach-atlantic"], 1),
    placeholder: true,
  },
  {
    slug: "chalet-du-col-tournant",
    name: "Chalet du Col Tournant",
    regionSlug: "french-alps",
    style: "countryside",
    blurb:
      "A larch-wood chalet in the Ubaye valley at Barcelonnette, surrounded by some of the highest passes in Europe. Big breakfasts for big climbs.",
    image: photo(["region:french-alps", "theme:countryside-farmhouse"], 1),
    placeholder: true,
  },
  {
    slug: "hotel-du-lacet-suivant",
    name: "L'Hôtel du Lacet Suivant",
    regionSlug: "french-alps",
    style: "boutique",
    blurb:
      "A mountain hotel in Valloire, between the Galibier and the Télégraphe. Named for the question every driver asks on the way up: how many more hairpins?",
    image: photo(["theme:boutique-room", "region:french-alps"], 1),
    placeholder: true,
  },
  // Loire
  {
    slug: "chateau-de-la-grande-boucle",
    name: "Château de la Grande Boucle",
    regionSlug: "loire-valley",
    style: "chateau",
    blurb:
      "A turreted château near Amboise with a walled potager, a moat that's mostly decorative and bikes waiting by the door. Fairy tale, with good Wi-Fi.",
    image: photo(["theme:chateau-hotel", "region:loire-valley"], 0),
    placeholder: true,
  },
  {
    slug: "logis-du-sens-giratoire",
    name: "Le Logis du Sens Giratoire",
    regionSlug: "loire-valley",
    style: "boutique",
    blurb:
      "A townhouse in medieval Chinon with a garden that looks up at the fortress. Cool tufa cellars below, warm welcome above.",
    image: photo(["theme:boutique-room", "region:loire-valley"], 1),
    placeholder: true,
  },
  // Burgundy & Champagne & Alsace
  {
    slug: "maison-du-clos-giratoire",
    name: "La Maison du Clos Giratoire",
    regionSlug: "burgundy",
    style: "boutique",
    blurb:
      "A winemaker's house inside the ramparts of Beaune, with vaulted cellars and a courtyard made for apéritifs. The Côte d'Or starts at the end of the street.",
    image: photo(["theme:boutique-room", "region:burgundy"], 2),
    placeholder: true,
  },
  {
    slug: "maison-de-la-bulle-ronde",
    name: "La Maison de la Bulle Ronde",
    regionSlug: "champagne",
    style: "boutique",
    blurb:
      "A belle-époque house in Épernay, a short stroll from the avenue of famous cellars. Breakfast comes with a view of the vines and, on request, a little fizz.",
    image: photo(["theme:boutique-room", "region:champagne"], 0),
    placeholder: true,
  },
  {
    slug: "cour-du-sens-unique",
    name: "La Cour du Sens Unique",
    regionSlug: "alsace",
    style: "boutique",
    blurb:
      "A half-timbered house around a flowery courtyard in a Route des Vins village. Window boxes, wooden beams and a winstub two doors down.",
    image: photo(["theme:boutique-room", "region:alsace"], 1),
    placeholder: true,
  },
  // Dordogne & Bordeaux
  {
    slug: "manoir-du-demi-tour",
    name: "Le Manoir du Demi-Tour",
    regionSlug: "dordogne-perigord",
    style: "chateau",
    blurb:
      "A golden-stone manor above the Dordogne near Beynac, with a pool facing three castles. You'll want to turn back for one more night. Everyone does.",
    image: photo(["theme:chateau-hotel", "region:dordogne-perigord"], 1),
    placeholder: true,
  },
  {
    slug: "chateau-tourne-autour",
    name: "Château Tourne-Autour",
    regionSlug: "bordeaux-atlantic",
    style: "chateau",
    blurb:
      "A small wine château outside Saint-Émilion with rooms above the chai and vines up to the terrace. Dinner is paired, naturally.",
    image: photo(["theme:chateau-hotel", "region:bordeaux-atlantic"], 2),
    placeholder: true,
  },
  // Normandy
  {
    slug: "hotel-de-la-derniere-sortie",
    name: "Hôtel de la Dernière Sortie",
    regionSlug: "normandy-mont-saint-michel",
    style: "coastal",
    blurb:
      "A slate-hung townhouse a few steps from Honfleur's old harbour, the last exit before the sea. Painters came for the light; you'll stay for the breakfast butter.",
    image: photo(["region:normandy-mont-saint-michel", "theme:boutique-room"], 1),
    placeholder: true,
  },
  {
    slug: "clos-du-detour-obligatoire",
    name: "Le Clos du Détour Obligatoire",
    regionSlug: "normandy-mont-saint-michel",
    style: "countryside",
    blurb:
      "A half-timbered farmhouse outside Bayeux, among apple orchards and very calm cows. The ideal base for the D-Day beaches.",
    image: photo(["theme:countryside-farmhouse", "region:normandy-mont-saint-michel"], 2),
    placeholder: true,
  },
  {
    slug: "greves-de-la-grande-boucle",
    name: "Les Grèves de la Grande Boucle",
    regionSlug: "normandy-mont-saint-michel",
    style: "coastal",
    blurb:
      "A stone house on the edge of the bay, with Mont-Saint-Michel framed in the bedroom window. Set an alarm for sunrise; you won't regret it.",
    image: photo(["region:normandy-mont-saint-michel", "theme:beach-atlantic"], 0),
    placeholder: true,
  },
  // Brittany
  {
    slug: "malouiniere-du-petit-detour",
    name: "La Malouinière du Petit Détour",
    regionSlug: "brittany",
    style: "chateau",
    blurb:
      "A privateer's country manor on the edge of Saint-Malo, with walled gardens and granite fireplaces. Swashbuckling optional.",
    image: photo(["theme:chateau-hotel", "region:brittany"], 2),
    placeholder: true,
  },
  {
    slug: "ty-boucle",
    name: "Ty Boucle",
    regionSlug: "brittany",
    style: "coastal",
    blurb:
      "A Breton 'ty' (house) on the Pink Granite Coast, with a garden that runs down to the coastal path. Fall asleep to the tide, wake up to salted-butter everything.",
    image: photo(["region:brittany", "theme:beach-atlantic"], 1),
    placeholder: true,
  },
  {
    slug: "ker-virage",
    name: "Ker Virage",
    regionSlug: "brittany",
    style: "coastal",
    blurb:
      "Whitewashed rooms by the water near Concarneau, with the walled Ville Close across the bay. Fishing boats at dawn, crêpes at dusk.",
    image: photo(["region:brittany", "theme:beach-atlantic"], 2),
    placeholder: true,
  },
  {
    slug: "manoir-du-tour-du-golfe",
    name: "Le Manoir du Tour du Golfe",
    regionSlug: "brittany",
    style: "chateau",
    blurb:
      "A granite manor on the Gulf of Morbihan, the inland sea with an island for every day of the year (give or take). Boats leave from the bottom of the garden.",
    image: photo(["theme:chateau-hotel", "region:brittany"], 1),
    placeholder: true,
  },
  // Basque Country
  {
    slug: "etxe-biribila",
    name: "Etxe Biribila",
    regionSlug: "french-basque-country",
    style: "coastal",
    blurb:
      "A red-shuttered Basque house above Saint-Jean-de-Luz. 'Biribil' means round in Euskara, which seemed right. Surfboards and e-bikes in the garage.",
    image: photo(["region:french-basque-country", "theme:beach-atlantic"], 1),
    placeholder: true,
  },
  {
    slug: "borda-itzulia",
    name: "Borda Itzulia",
    regionSlug: "french-basque-country",
    style: "countryside",
    blurb:
      "A restored shepherd's farmhouse in the hills near Saint-Jean-Pied-de-Port, among Irouléguy vines and grazing sheep. Itzulia means 'the return'; you'll see why.",
    image: photo(["theme:countryside-farmhouse", "region:french-basque-country"], 2),
    placeholder: true,
  },
  // Corsica
  {
    slug: "belvedere-des-mille-virages",
    name: "Le Belvédère des Mille Virages",
    regionSlug: "corsica",
    style: "coastal",
    blurb:
      "A cliff-top hotel at Piana looking over the red granite Calanches and the Gulf of Porto. A thousand bends to get here, one view that makes them all worth it.",
    image: photo(["region:corsica", "theme:corsica-road"], 1),
    placeholder: true,
  },
  {
    slug: "maison-des-deux-boucles",
    name: "La Maison des Deux Boucles",
    regionSlug: "corsica",
    style: "boutique",
    blurb:
      "A stone house in a Balagne hill village, with a terrace over olive groves and the sea beyond. Two loops of the island on the guestbook, and counting.",
    image: photo(["theme:boutique-room", "region:corsica"], 2),
    placeholder: true,
  },
  {
    slug: "casa-di-u-giru",
    name: "Casa di u Giru",
    regionSlug: "corsica",
    style: "countryside",
    blurb:
      "A mountain guesthouse near Corte, the island's old capital, at the mouth of the Restonica gorge. Chestnut flour on the breakfast table and silence at night.",
    image: photo(["theme:countryside-farmhouse", "region:corsica"], 0),
    placeholder: true,
  },
  {
    slug: "hotel-du-retour-au-point-de-depart",
    name: "Hôtel du Retour au Point de Départ",
    regionSlug: "corsica",
    style: "coastal",
    blurb:
      "A beach-side hotel on the Gulf of Valinco, where the loop starts thinking about coming home. Four nights here, so unpack properly.",
    image: photo(["region:corsica", "theme:beach-atlantic"], 0),
    placeholder: true,
  },
];

export function getStay(slug: string): Stay | undefined {
  return stays.find((s) => s.slug === slug);
}
