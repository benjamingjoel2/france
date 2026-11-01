/**
 * Legal pages: Privacy Policy, Booking Terms and Cookie Policy, written per language
 * (not through the i18n dictionaries). In the text, [text](/path) becomes a link; a section
 * may carry a table (the cookie policy's storage list).
 */
import type { Locale } from "@/lib/i18n/config";

export const UPDATED = "2026-11-01";

export interface LegalSection { h: string; p: string[]; table?: { head: string[]; rows: string[][] } }
export interface LegalPage { slug: "privacy" | "terms" | "cookies"; title: string; lede: string; updated: string; sections: LegalSection[] }

export const legalByLocale: Record<Locale, LegalPage[]> = {
  "en": [
    {
      "slug": "privacy",
      "title": "Privacy policy",
      "lede": "How Rond-Point collects, uses and protects your personal data, and your rights.",
      "updated": "2026-11-01",
      "sections": [
        {
          "h": "Who we are",
          "p": [
            "This website is run by Rond-Point, WeWork La Fayette, 33 rue La Fayette, 75009 Paris, France. In this policy \"we\", \"us\" and \"our\" mean Rond-Point. We decide how and why your personal data is used, so we are the data controller.",
            "For anything about your personal data, email rondpoint@tourground.com."
          ]
        },
        {
          "h": "What data we collect",
          "p": [
            "Details you send us through the enquiry or trip-planning forms on this website: usually your name, email address, preferred travel dates, the number of travellers, the kind of trip you have in mind, your budget range and anything you write in your message. If you sign up for our newsletter, your email address.",
            "Emails and other messages you send us, and our replies.",
            "If you book, what is needed to arrange the trip: the names of everyone travelling, dates of birth and passport details where suppliers or authorities require them, dietary, medical and accessibility needs you choose to share, emergency contacts, and records of the payments you make. We do not collect or store payment card numbers on this website.",
            "Technical data: when you visit, our hosting provider automatically records your IP address, browser type, the pages requested and the time of the request in server logs, to keep the site running and secure.",
            "We do not use analytics or advertising tools, and we do not build profiles of visitors."
          ]
        },
        {
          "h": "Why we use it and our legal bases",
          "p": [
            "To reply to your enquiry and prepare a proposal: steps you ask us to take before entering into a contract, and our legitimate interest in answering people who contact us.",
            "To book, run and support your trip, and to take payments: performance of our contract with you.",
            "To handle health, dietary or accessibility information so that suppliers can look after you: your explicit consent, which you can withdraw at any time.",
            "To keep accounting and booking records: our legal obligations.",
            "To keep the website secure and working: our legitimate interests. To send you our newsletter: your consent, which you can withdraw with the link in every email.",
            "We do not sell your personal data and we do not use it for automated decision-making."
          ]
        },
        {
          "h": "Who we share it with",
          "p": [
            "Service providers who process data for us under contract: Vercel Inc. (United States), which hosts this website, runs its form handling and keeps short-lived server logs; and our email provider, which stores the messages we exchange with you.",
            "If you book: the hotels, lodges, transport companies, activity operators and local partners in France who deliver your trip, and only the details each of them needs. If you ask us to, your travel insurer.",
            "Public authorities, courts or professional advisers where the law requires it or to establish or defend legal claims."
          ]
        },
        {
          "h": "International transfers",
          "p": [
            "Our hosting and email providers are based in the United States. Where your data leaves the UK or the European Economic Area, the transfer relies on the EU-US Data Privacy Framework and its UK extension where the provider is certified, or on the European Commission's standard contractual clauses (with the UK addendum), which oblige the provider to protect it to European standards.",
            "When you book, we pass the details needed to deliver your trip to suppliers in France. That transfer is necessary to perform the contract you have asked us to arrange."
          ]
        },
        {
          "h": "How long we keep it",
          "p": [
            "Enquiries that do not become a booking: 24 months after our last contact, then deleted.",
            "Booking records: six years after the end of your trip, the period accounting and tax rules require. Health and dietary details are deleted once your trip is over and any claim has been settled.",
            "Server logs: a short period, normally no more than 30 days. Newsletter: until you unsubscribe."
          ]
        },
        {
          "h": "How we protect it",
          "p": [
            "The site is served only over an encrypted connection (HTTPS). Your details are kept in password-protected accounts that only the people planning your trip can open, and we share with suppliers only what they need."
          ]
        },
        {
          "h": "Your rights",
          "p": [
            "Under data-protection law (including the GDPR and the UK GDPR) you have the right to: access the personal data we hold about you; have it rectified if it is wrong; have it erased; restrict how we use it; receive it in a portable format; object to processing based on our legitimate interests; and withdraw your consent at any time, without affecting what we did before you withdrew it.",
            "To use any of these rights, email rondpoint@tourground.com. We reply within one month and do not charge for this.",
            "You also have the right to complain to a data-protection supervisory authority, in particular in the country where you live or work (for example the Information Commissioner's Office in the UK, or your national authority in the EU). We would appreciate the chance to put things right first."
          ]
        },
        {
          "h": "Cookies",
          "p": [
            "This site uses no analytics or advertising cookies. Our [cookie policy](/cookies) explains exactly what it stores in your browser."
          ]
        },
        {
          "h": "Children",
          "p": [
            "This website and our services are not aimed at children under 16, and we do not knowingly collect their data online. We hold details of children only when a parent or guardian gives them to us to book a family trip."
          ]
        },
        {
          "h": "Changes to this policy",
          "p": [
            "We will update this page if the way we handle personal data changes, and change the date below. Last updated: 1 November 2026."
          ]
        },
        {
          "h": "Contact",
          "p": [
            "Rond-Point, WeWork La Fayette, 33 rue La Fayette, 75009 Paris, France. Email: rondpoint@tourground.com."
          ]
        }
      ]
    },
    {
      "slug": "terms",
      "title": "Booking terms",
      "lede": "The terms that apply when you book a trip with Rond-Point: deposit, balance, changes, cancellation and insurance.",
      "updated": "2026-11-01",
      "sections": [
        {
          "h": "Who we are",
          "p": [
            "These booking terms apply to every trip arranged by Rond-Point, WeWork La Fayette, 33 rue La Fayette, 75009 Paris, France (\"we\", \"us\"). Email: rondpoint@tourground.com. Please read them before you book: together with your written quote and booking confirmation, they form the contract between us."
          ]
        },
        {
          "h": "Prices on this website",
          "p": [
            "Prices on this website are shown \"from\": they are guide prices per person, usually based on two people sharing, and depend on dates, availability, group size and the choices you make. They are not an offer. The price you pay is the one in your final written quote, confirmed in writing before you book."
          ]
        },
        {
          "h": "How a booking is made and confirmed",
          "p": [
            "Sending an enquiry is free and commits neither of us. We send you a proposal, shape it with you and then send a written quote, valid for the period stated on it.",
            "Your booking is confirmed, and a contract exists, when you have accepted the quote in writing, paid the deposit and received our written confirmation. The person who books must be 18 or over and accepts these terms for everyone in the party. Please check your confirmation and tell us straight away if anything is wrong."
          ]
        },
        {
          "h": "Deposit and balance",
          "p": [
            "The deposit is stated on your quote; it is normally 30% of the trip price. The balance is due no later than 60 days before departure, unless your confirmation gives another date. If you book within 60 days of departure, the full price is due when you book.",
            "If the balance is not paid on time, we may treat the booking as cancelled by you and apply the cancellation charges below."
          ]
        },
        {
          "h": "What is included and not included",
          "p": [
            "Your trip includes exactly what is listed in your quote and confirmation, such as accommodation, the transport, activities and entrance fees named there, and the meals shown.",
            "Unless your quote says otherwise, it does not include international flights, travel insurance, visas and entry fees, vaccinations, tips, drinks, meals not listed, optional activities or personal expenses."
          ]
        },
        {
          "h": "Changes by you",
          "p": [
            "If you want to change a confirmed trip, tell us in writing. We will try to help, but cannot guarantee every change. You pay any extra costs charged by suppliers, and we tell you the cost before making the change. You may transfer your booking to another person who meets all the conditions of the trip if you tell us in writing at least 14 days before departure and pay any costs the transfer causes."
          ]
        },
        {
          "h": "Cancellation by you",
          "p": [
            "You can cancel at any time by telling us in writing; the cancellation takes effect on the day we receive it. Because we commit and pay for services on your behalf, the following charges apply, as a percentage of the total trip price:",
            "More than 60 days before departure: loss of the deposit. 60 to 31 days: 50%. 30 to 15 days: 75%. 14 days or less, or if you do not travel: 100%.",
            "Where your quote lists a supplier cost that is non-refundable once paid (for example certain permits, park fees or flights), that cost is also payable whenever you cancel. Your travel insurance may cover cancellation charges."
          ]
        },
        {
          "h": "Changes and cancellation by us",
          "p": [
            "We sometimes have to make minor changes, such as a different hotel of the same standard or an adjusted route; we tell you as soon as we can.",
            "If we have to make a significant change before departure, or cancel, you can accept the change, take a comparable alternative if we can offer one, or cancel and receive a full refund of everything you have paid us. We will not cancel after the balance is due except for unavoidable and extraordinary circumstances or your non-payment."
          ]
        },
        {
          "h": "Travel insurance",
          "p": [
            "Comprehensive travel insurance is a condition of booking. It must cover medical treatment, emergency evacuation and repatriation, cancellation and curtailment, and every activity in your trip. Please send us your policy details before you travel."
          ]
        },
        {
          "h": "Passports, visas and health",
          "p": [
            "You are responsible for holding a valid passport, any visa or travel authorisation, and the vaccinations and health documents required for France and any country you pass through, and for being fit to take part. The [FAQ](/faq) page on this site sets out the main entry and health points we know of, but it is general guidance and you must confirm it with official sources. Entry rules change, so check your government's travel advice and the relevant embassy before you book and again before you travel. Tell us before booking about any medical condition or mobility need that could affect your trip."
          ]
        },
        {
          "h": "Our responsibility",
          "p": [
            "We take reasonable care to plan your trip and to choose reliable suppliers, and we are responsible for the services in your confirmation being provided as described. We are not responsible where a problem is caused by you, by a third party unconnected with the trip, or by unavoidable and extraordinary circumstances.",
            "Except for death or personal injury caused by our negligence, or anything else that cannot be limited by law, our liability is limited to the total price of your trip. Where an international convention limits the liability of an airline, hotel or other carrier, our liability is limited in the same way. Some activities carry inherent risks, which we explain and you accept when you choose them."
          ]
        },
        {
          "h": "Your behaviour",
          "p": [
            "Please respect local laws, customs and communities, follow the safety instructions of drivers, crews and other suppliers, and do not put others at risk. If your behaviour endangers anyone or seriously disrupts the trip, we may end your trip without refund, and you are responsible for any damage you cause."
          ]
        },
        {
          "h": "Complaints",
          "p": [
            "If something is wrong during your trip, tell the supplier and us straight away so that we can try to put it right on the spot. If it cannot be resolved, write to rondpoint@tourground.com within 28 days of your return; we will acknowledge your complaint within 7 days and reply in full within 28 days."
          ]
        },
        {
          "h": "Force majeure",
          "p": [
            "We are not liable for any failure or delay caused by unavoidable and extraordinary circumstances beyond our control, such as war, terrorism, civil unrest, natural disaster, epidemics, severe weather, government action or the closure of airports or borders. If such an event stops your trip going ahead, we refund what we have paid on your behalf and can recover from suppliers, or offer an alternative."
          ]
        },
        {
          "h": "Data protection",
          "p": [
            "We use your personal data as described in our [privacy policy](/privacy)."
          ]
        },
        {
          "h": "Governing law",
          "p": [
            "These terms and any contract with us are governed by the laws of France, the country of our business address, and disputes are subject to the jurisdiction of the courts of France. If you are a consumer living in another country, you keep the protection of the mandatory consumer law of that country and may also bring proceedings there."
          ]
        },
        {
          "h": "Contact",
          "p": [
            "Rond-Point, WeWork La Fayette, 33 rue La Fayette, 75009 Paris, France. Email: rondpoint@tourground.com. Last updated: 1 November 2026."
          ]
        }
      ]
    },
    {
      "slug": "cookies",
      "title": "Cookie policy",
      "lede": "What the Rond-Point website stores in your browser, and how to manage it.",
      "updated": "2026-11-01",
      "sections": [
        {
          "h": "What cookies are",
          "p": [
            "Cookies are small text files that a website saves in your browser. Similar technologies, such as your browser's local storage and session storage, let a site keep small pieces of information on your device. This policy covers all of them."
          ]
        },
        {
          "h": "What this site uses",
          "p": [
            "This site sets no cookies. It uses only the browser storage listed below, which stays on your device and is never sent to us. There are no analytics, advertising or tracking cookies, and no tracking pixels."
          ]
        },
        {
          "h": "What is stored",
          "p": [],
          "table": {
            "head": [
              "Name",
              "Purpose",
              "Duration",
              "Type"
            ],
            "rows": [
              [
                "rp-currency",
                "Remembers the display currency you chose for prices.",
                "Until you clear it in your browser",
                "Local storage · Preference (functional)"
              ],
              [
                "rp-planner-v1",
                "Keeps your answers in the trip planner so you can pick up where you left off; cleared when you send it.",
                "Until you send the form, or clear it in your browser",
                "Local storage · Strictly necessary"
              ],
              [
                "rp-demo-session",
                "Keeps you signed in to My account during your visit.",
                "Until you close the tab",
                "Session storage · Strictly necessary"
              ]
            ]
          }
        },
        {
          "h": "Third-party content",
          "p": [
            "Some photographs are loaded from images.unsplash.com (Unsplash, United States). To fetch them, your browser sends your IP address and browser details to Unsplash, as with any web request; these image requests do not set cookies.",
            "Our hosting provider, Vercel, does not set cookies on this site."
          ]
        },
        {
          "h": "Consent",
          "p": [
            "Everything listed above is either strictly necessary or remembers a choice you make, and none of it tracks you, so the site does not ask for cookie consent. If we ever add analytics or other optional cookies, we will ask for your consent first and update this page."
          ]
        },
        {
          "h": "How to manage or remove it",
          "p": [
            "You can block cookies and clear stored site data at any time in your browser settings, usually under Privacy or Site data. The site still works if you do; it only forgets the choices listed above and any unsent form answers."
          ]
        },
        {
          "h": "Changes to this policy",
          "p": [
            "If what the site stores changes, we will update this page and the date below. Last updated: 1 November 2026."
          ]
        },
        {
          "h": "Contact",
          "p": [
            "Questions about this policy: Rond-Point, WeWork La Fayette, 33 rue La Fayette, 75009 Paris, France. Email: rondpoint@tourground.com."
          ]
        }
      ]
    }
  ],
  "fr": [
    {
      "slug": "privacy",
      "title": "Politique de confidentialité",
      "lede": "Comment Rond-Point collecte, utilise et protège vos données personnelles, et quels sont vos droits.",
      "updated": "2026-11-01",
      "sections": [
        {
          "h": "Qui sommes-nous",
          "p": [
            "Ce site est exploité par Rond-Point, WeWork La Fayette, 33 rue La Fayette, 75009 Paris, France. Dans cette politique, « nous » et « notre » désignent Rond-Point. Nous déterminons comment et pourquoi vos données personnelles sont utilisées : nous sommes donc le responsable du traitement.",
            "Pour toute question sur vos données personnelles, écrivez à rondpoint@tourground.com."
          ]
        },
        {
          "h": "Les données que nous collectons",
          "p": [
            "Les informations que vous nous envoyez par les formulaires de demande ou de préparation de voyage de ce site : en général votre nom, votre adresse e-mail, vos dates de voyage souhaitées, le nombre de voyageurs, le type de voyage envisagé, votre budget et le contenu de votre message. Si vous vous inscrivez à notre lettre d'information, votre adresse e-mail.",
            "Les e-mails et autres messages que vous nous envoyez, ainsi que nos réponses.",
            "Si vous réservez, ce qui est nécessaire pour organiser le voyage : le nom de chaque voyageur, les dates de naissance et les données de passeport lorsque les prestataires ou les autorités les exigent, les besoins alimentaires, médicaux et d'accessibilité que vous choisissez de nous communiquer, les contacts d'urgence et l'historique de vos paiements. Nous ne collectons ni ne conservons de numéros de carte bancaire sur ce site.",
            "Des données techniques : lors de votre visite, notre hébergeur enregistre automatiquement dans des journaux serveur votre adresse IP, le type de navigateur, les pages demandées et l'heure de la requête, afin d'assurer le fonctionnement et la sécurité du site.",
            "Nous n'utilisons aucun outil d'analyse d'audience ni de publicité et nous ne créons pas de profils des visiteurs."
          ]
        },
        {
          "h": "Pourquoi nous les utilisons et sur quelles bases légales",
          "p": [
            "Pour répondre à votre demande et préparer une proposition : les mesures précontractuelles que vous nous demandez de prendre et notre intérêt légitime à répondre aux personnes qui nous contactent.",
            "Pour réserver, organiser et assurer le suivi de votre voyage et encaisser vos paiements : l'exécution du contrat qui nous lie.",
            "Pour traiter les informations de santé, d'alimentation ou d'accessibilité afin que les prestataires puissent prendre soin de vous : votre consentement explicite, que vous pouvez retirer à tout moment.",
            "Pour tenir notre comptabilité et nos dossiers de réservation : nos obligations légales.",
            "Pour assurer la sécurité et le bon fonctionnement du site : notre intérêt légitime. Pour vous envoyer notre lettre d'information : votre consentement, que vous pouvez retirer grâce au lien présent dans chaque e-mail.",
            "Nous ne vendons pas vos données personnelles et ne les utilisons pour aucune décision automatisée."
          ]
        },
        {
          "h": "Avec qui nous les partageons",
          "p": [
            "Des prestataires qui traitent des données pour notre compte, sous contrat : Vercel Inc. (États-Unis), qui héberge ce site, traite l'envoi des formulaires et conserve des journaux serveur de courte durée; et notre fournisseur de messagerie, qui conserve les messages que nous échangeons avec vous.",
            "Si vous réservez : les hôtels, lodges, transporteurs, organisateurs d'activités et partenaires locaux sur place (France) qui assurent votre voyage, avec uniquement les informations dont chacun a besoin ; votre assureur voyage, si vous nous le demandez.",
            "Les autorités publiques, les tribunaux ou nos conseillers professionnels, lorsque la loi l'exige ou pour constater, exercer ou défendre un droit en justice."
          ]
        },
        {
          "h": "Transferts internationaux",
          "p": [
            "Nos prestataires d'hébergement et d'e-mail sont établis aux États-Unis. Lorsque vos données quittent le Royaume-Uni ou l'Espace économique européen, le transfert repose sur le cadre de protection des données UE-États-Unis (Data Privacy Framework) et son extension britannique lorsque le prestataire est certifié, ou sur les clauses contractuelles types de la Commission européenne (avec l'avenant britannique), qui l'obligent à protéger vos données selon les normes européennes.",
            "Lorsque vous réservez, nous transmettons aux prestataires sur place (France) les informations nécessaires à votre voyage. Ce transfert est nécessaire à l'exécution du contrat que vous nous avez demandé d'organiser."
          ]
        },
        {
          "h": "Durée de conservation",
          "p": [
            "Demandes qui n'aboutissent pas à une réservation : 24 mois après notre dernier échange, puis suppression.",
            "Dossiers de réservation : six ans après la fin de votre voyage, durée imposée par les règles comptables et fiscales. Les informations de santé et d'alimentation sont supprimées une fois le voyage terminé et toute réclamation réglée.",
            "Journaux serveur : une courte durée, normalement 30 jours au maximum. Lettre d'information : jusqu'à votre désinscription."
          ]
        },
        {
          "h": "Comment nous les protégeons",
          "p": [
            "Le site est servi uniquement par une connexion chiffrée (HTTPS). Vos informations sont conservées dans des comptes protégés par mot de passe, accessibles seulement aux personnes qui préparent votre voyage, et nous ne transmettons aux prestataires que ce dont ils ont besoin."
          ]
        },
        {
          "h": "Vos droits",
          "p": [
            "En vertu de la réglementation sur la protection des données (notamment le RGPD et le RGPD britannique), vous avez le droit : d'accéder aux données personnelles que nous détenons sur vous ; de les faire rectifier si elles sont inexactes ; de les faire effacer ; d'en limiter l'utilisation ; de les recevoir dans un format portable ; de vous opposer aux traitements fondés sur notre intérêt légitime ; et de retirer votre consentement à tout moment, sans remettre en cause les traitements effectués auparavant.",
            "Pour exercer ces droits, écrivez à rondpoint@tourground.com. Nous répondons dans un délai d'un mois, sans frais.",
            "Vous avez également le droit d'introduire une réclamation auprès d'une autorité de contrôle de la protection des données, notamment dans le pays où vous résidez ou travaillez (par exemple la CNIL en France). Nous apprécierions toutefois de pouvoir d'abord corriger la situation."
          ]
        },
        {
          "h": "Cookies",
          "p": [
            "Ce site n'utilise aucun cookie d'analyse ni de publicité. Notre [politique de cookies](/cookies) détaille exactement ce qu'il enregistre dans votre navigateur."
          ]
        },
        {
          "h": "Enfants",
          "p": [
            "Ce site et nos services ne s'adressent pas aux enfants de moins de 16 ans et nous ne collectons pas sciemment leurs données en ligne. Nous ne détenons des informations sur des enfants que lorsqu'un parent ou tuteur nous les transmet pour réserver un voyage en famille."
          ]
        },
        {
          "h": "Modifications de cette politique",
          "p": [
            "Nous mettrons cette page à jour si notre manière de traiter les données personnelles change, et modifierons la date ci-dessous. Dernière mise à jour : 1er novembre 2026."
          ]
        },
        {
          "h": "Contact",
          "p": [
            "Rond-Point, WeWork La Fayette, 33 rue La Fayette, 75009 Paris, France. E-mail : rondpoint@tourground.com."
          ]
        }
      ]
    },
    {
      "slug": "terms",
      "title": "Conditions de réservation",
      "lede": "Les conditions applicables lorsque vous réservez un voyage avec Rond-Point : acompte, solde, modifications, annulation et assurance.",
      "updated": "2026-11-01",
      "sections": [
        {
          "h": "Qui sommes-nous",
          "p": [
            "Les présentes conditions de réservation s'appliquent à tout voyage organisé par Rond-Point, WeWork La Fayette, 33 rue La Fayette, 75009 Paris, France (« nous »). E-mail : rondpoint@tourground.com. Merci de les lire avant de réserver : avec votre devis écrit et votre confirmation de réservation, elles forment le contrat qui nous lie."
          ]
        },
        {
          "h": "Les prix affichés sur ce site",
          "p": [
            "Les prix de ce site sont indiqués « à partir de » : ce sont des prix indicatifs par personne, généralement sur la base de deux personnes partageant une chambre, qui varient selon les dates, les disponibilités, la taille du groupe et vos choix. Ils ne constituent pas une offre. Le prix que vous payez est celui de votre devis écrit définitif, confirmé par écrit avant votre réservation."
          ]
        },
        {
          "h": "Comment une réservation est faite et confirmée",
          "p": [
            "Envoyer une demande est gratuit et n'engage ni vous ni nous. Nous vous adressons une proposition, l'ajustons avec vous, puis vous envoyons un devis écrit, valable pendant la durée qui y est indiquée.",
            "Votre réservation est confirmée, et le contrat conclu, lorsque vous avez accepté le devis par écrit, versé l'acompte et reçu notre confirmation écrite. La personne qui réserve doit avoir au moins 18 ans et accepte ces conditions pour l'ensemble des voyageurs. Vérifiez votre confirmation et signalez-nous immédiatement toute erreur."
          ]
        },
        {
          "h": "Acompte et solde",
          "p": [
            "Le montant de l'acompte figure sur votre devis ; il correspond normalement à 30 % du prix du voyage. Le solde est dû au plus tard 60 jours avant le départ, sauf si votre confirmation indique une autre date. Si vous réservez moins de 60 jours avant le départ, la totalité du prix est due à la réservation.",
            "Si le solde n'est pas réglé à temps, nous pouvons considérer la réservation comme annulée par vous et appliquer les frais d'annulation ci-dessous."
          ]
        },
        {
          "h": "Ce qui est inclus et ce qui ne l'est pas",
          "p": [
            "Votre voyage comprend exactement ce qui figure sur votre devis et votre confirmation : par exemple l'hébergement, les transports, les activités et droits d'entrée qui y sont mentionnés, et les repas indiqués.",
            "Sauf mention contraire sur votre devis, ne sont pas inclus : les vols internationaux, l'assurance voyage, les visas et taxes d'entrée, les vaccins, les pourboires, les boissons, les repas non mentionnés, les activités optionnelles et les dépenses personnelles."
          ]
        },
        {
          "h": "Modifications de votre part",
          "p": [
            "Si vous souhaitez modifier un voyage confirmé, prévenez-nous par écrit. Nous ferons notre possible, sans pouvoir garantir chaque modification. Les frais supplémentaires facturés par les prestataires sont à votre charge, et nous vous en indiquons le montant avant d'effectuer la modification. Vous pouvez céder votre réservation à une personne remplissant toutes les conditions du voyage, en nous prévenant par écrit au moins 14 jours avant le départ et en réglant les frais éventuels de cette cession."
          ]
        },
        {
          "h": "Annulation de votre part",
          "p": [
            "Vous pouvez annuler à tout moment en nous prévenant par écrit ; l'annulation prend effet le jour où nous la recevons. Comme nous engageons et payons des prestations pour votre compte, les frais suivants s'appliquent, en pourcentage du prix total du voyage :",
            "Plus de 60 jours avant le départ : perte de l'acompte. De 60 à 31 jours : 50 %. De 30 à 15 jours : 75 %. 14 jours ou moins, ou si vous ne vous présentez pas : 100 %.",
            "Lorsque votre devis mentionne un coût de prestataire non remboursable une fois payé (par exemple certains permis, droits d'entrée dans les parcs ou vols), ce coût reste dû quelle que soit la date d'annulation. Votre assurance voyage peut couvrir les frais d'annulation."
          ]
        },
        {
          "h": "Modifications et annulation de notre part",
          "p": [
            "Nous devons parfois apporter des modifications mineures, comme un autre hôtel de même catégorie ou un itinéraire ajusté ; nous vous en informons dès que possible.",
            "Si nous devons apporter une modification importante avant le départ, ou annuler, vous pouvez accepter la modification, choisir une alternative équivalente si nous pouvons vous en proposer une, ou annuler et obtenir le remboursement intégral des sommes versées. Nous n'annulons pas après l'échéance du solde, sauf circonstances exceptionnelles et inévitables ou défaut de paiement de votre part."
          ]
        },
        {
          "h": "Assurance voyage",
          "p": [
            "Une assurance voyage complète est une condition de réservation. Elle doit couvrir les frais médicaux, l'évacuation d'urgence et le rapatriement, l'annulation et l'interruption de voyage, ainsi que toutes les activités prévues. Merci de nous transmettre les références de votre contrat avant le départ."
          ]
        },
        {
          "h": "Passeports, visas et santé",
          "p": [
            "Il vous appartient de disposer d'un passeport valide, des visas ou autorisations de voyage, ainsi que des vaccins et documents sanitaires exigés pour votre destination (France) et pour tout pays de transit, et d'être en état de participer au voyage. La page [FAQ](/faq) de ce site résume les principales règles d'entrée et de santé que nous connaissons, mais il s'agit d'informations générales que vous devez vérifier auprès des sources officielles. Les règles d'entrée évoluent : consultez les conseils aux voyageurs de votre gouvernement et l'ambassade concernée avant de réserver, puis à nouveau avant de partir. Signalez-nous avant de réserver tout problème de santé ou de mobilité susceptible d'avoir une incidence sur votre voyage."
          ]
        },
        {
          "h": "Notre responsabilité",
          "p": [
            "Nous apportons un soin raisonnable à la préparation de votre voyage et au choix de prestataires fiables, et nous sommes responsables de la bonne exécution des prestations figurant sur votre confirmation. Nous ne sommes pas responsables lorsqu'un problème est imputable à vous-même, à un tiers étranger au voyage, ou à des circonstances exceptionnelles et inévitables.",
            "Sauf en cas de décès ou de dommage corporel causé par notre négligence, ou pour tout ce qui ne peut être limité par la loi, notre responsabilité est limitée au prix total de votre voyage. Lorsqu'une convention internationale limite la responsabilité d'une compagnie aérienne, d'un hôtel ou d'un autre transporteur, notre responsabilité est limitée de la même manière. Certaines activités comportent des risques inhérents, que nous vous expliquons et que vous acceptez en les choisissant."
          ]
        },
        {
          "h": "Votre comportement",
          "p": [
            "Merci de respecter les lois, les coutumes et les communautés locales, de suivre les consignes de sécurité des chauffeurs, équipages et autres prestataires, et de ne mettre personne en danger. Si votre comportement met autrui en danger ou perturbe gravement le voyage, nous pouvons y mettre fin sans remboursement, et vous êtes responsable des dommages que vous causez."
          ]
        },
        {
          "h": "Réclamations",
          "p": [
            "Si quelque chose ne va pas pendant votre voyage, prévenez immédiatement le prestataire et nous-mêmes afin que nous puissions tenter d'y remédier sur place. Si le problème ne peut être résolu, écrivez à rondpoint@tourground.com dans les 28 jours suivant votre retour ; nous accusons réception sous 7 jours et répondons de manière complète sous 28 jours."
          ]
        },
        {
          "h": "Force majeure",
          "p": [
            "Nous ne sommes pas responsables d'une inexécution ou d'un retard dus à des circonstances exceptionnelles et inévitables échappant à notre contrôle, telles que guerre, terrorisme, troubles civils, catastrophe naturelle, épidémie, conditions météorologiques extrêmes, décision des autorités ou fermeture d'aéroports ou de frontières. Si un tel événement empêche votre voyage d'avoir lieu, nous vous remboursons les sommes versées pour votre compte que nous pouvons récupérer auprès des prestataires, ou vous proposons une alternative."
          ]
        },
        {
          "h": "Protection des données",
          "p": [
            "Nous utilisons vos données personnelles comme décrit dans notre [politique de confidentialité](/privacy)."
          ]
        },
        {
          "h": "Droit applicable",
          "p": [
            "Les présentes conditions et tout contrat conclu avec nous sont régis par le droit de la France, pays de notre adresse professionnelle, et les litiges relèvent de la compétence des tribunaux de la France. Si vous êtes un consommateur résidant dans un autre pays, vous conservez la protection des dispositions impératives du droit de la consommation de ce pays et pouvez également y engager une action."
          ]
        },
        {
          "h": "Contact",
          "p": [
            "Rond-Point, WeWork La Fayette, 33 rue La Fayette, 75009 Paris, France. E-mail : rondpoint@tourground.com. Dernière mise à jour : 1er novembre 2026."
          ]
        }
      ]
    },
    {
      "slug": "cookies",
      "title": "Politique de cookies",
      "lede": "Ce que le site de Rond-Point enregistre dans votre navigateur et comment le gérer.",
      "updated": "2026-11-01",
      "sections": [
        {
          "h": "Qu'est-ce qu'un cookie",
          "p": [
            "Les cookies sont de petits fichiers texte qu'un site enregistre dans votre navigateur. Des technologies similaires, comme le stockage local (localStorage) et le stockage de session de votre navigateur, permettent à un site de conserver de petites informations sur votre appareil. Cette politique les couvre toutes."
          ]
        },
        {
          "h": "Ce que ce site utilise",
          "p": [
            "Ce site ne dépose aucun cookie. Il utilise uniquement le stockage du navigateur décrit ci-dessous, qui reste sur votre appareil et ne nous est jamais transmis. Il n'y a ni cookie d'analyse, ni cookie publicitaire ou de suivi, ni pixel de suivi."
          ]
        },
        {
          "h": "Ce qui est enregistré",
          "p": [],
          "table": {
            "head": [
              "Nom",
              "Finalité",
              "Durée",
              "Type"
            ],
            "rows": [
              [
                "rp-currency",
                "Mémorise la devise d'affichage des prix que vous avez choisie.",
                "Jusqu'à ce que vous l'effaciez dans votre navigateur",
                "Stockage local · Préférence (fonctionnel)"
              ],
              [
                "rp-planner-v1",
                "Conserve vos réponses dans le planificateur de voyage pour que vous puissiez reprendre plus tard ; effacé à l'envoi.",
                "Jusqu'à l'envoi du formulaire, ou jusqu'à ce que vous l'effaciez",
                "Stockage local · Strictement nécessaire"
              ],
              [
                "rp-demo-session",
                "Vous garde connecté à Mon compte pendant votre visite.",
                "Jusqu'à la fermeture de l'onglet",
                "Stockage de session · Strictement nécessaire"
              ]
            ]
          }
        },
        {
          "h": "Contenus tiers",
          "p": [
            "Certaines photographies sont chargées depuis images.unsplash.com (Unsplash, États-Unis). Pour les récupérer, votre navigateur transmet votre adresse IP et des informations sur le navigateur à Unsplash, comme pour toute requête web ; ces requêtes d'images ne déposent pas de cookies.",
            "Notre hébergeur, Vercel, ne dépose pas de cookies sur ce site."
          ]
        },
        {
          "h": "Consentement",
          "p": [
            "Tout ce qui est décrit ci-dessus est soit strictement nécessaire, soit destiné à mémoriser un choix que vous faites, et rien ne sert à vous suivre : le site ne vous demande donc pas de consentement aux cookies. Si nous ajoutons un jour des cookies d'analyse ou d'autres cookies facultatifs, nous vous demanderons d'abord votre consentement et mettrons cette page à jour."
          ]
        },
        {
          "h": "Comment les gérer ou les supprimer",
          "p": [
            "Vous pouvez à tout moment bloquer les cookies et effacer les données enregistrées par le site dans les paramètres de votre navigateur, généralement sous Confidentialité ou Données de site. Le site continue de fonctionner ; il oublie seulement les choix décrits ci-dessus et les réponses de formulaire non envoyées."
          ]
        },
        {
          "h": "Modifications de cette politique",
          "p": [
            "Si ce que le site enregistre change, nous mettrons cette page et la date ci-dessous à jour. Dernière mise à jour : 1er novembre 2026."
          ]
        },
        {
          "h": "Contact",
          "p": [
            "Pour toute question sur cette politique : Rond-Point, WeWork La Fayette, 33 rue La Fayette, 75009 Paris, France. E-mail : rondpoint@tourground.com."
          ]
        }
      ]
    }
  ],
  "de": [
    {
      "slug": "privacy",
      "title": "Datenschutzerklärung",
      "lede": "Wie Rond-Point Ihre personenbezogenen Daten erhebt, verwendet und schützt, und welche Rechte Sie haben.",
      "updated": "2026-11-01",
      "sections": [
        {
          "h": "Wer wir sind",
          "p": [
            "Diese Website wird von Rond-Point, WeWork La Fayette, 33 rue La Fayette, 75009 Paris, France, betrieben. In dieser Erklärung bedeuten „wir“, „uns“ und „unser“ Rond-Point. Wir entscheiden, wie und wofür Ihre personenbezogenen Daten verwendet werden, und sind daher der Verantwortliche.",
            "Bei Fragen zu Ihren personenbezogenen Daten schreiben Sie an rondpoint@tourground.com."
          ]
        },
        {
          "h": "Welche Daten wir erheben",
          "p": [
            "Angaben, die Sie uns über die Anfrage- oder Reiseplanungsformulare dieser Website senden: in der Regel Ihren Namen, Ihre E-Mail-Adresse, gewünschte Reisedaten, die Zahl der Reisenden, die Art der Reise, Ihr Budget und den Inhalt Ihrer Nachricht. Wenn Sie unseren Newsletter abonnieren, Ihre E-Mail-Adresse.",
            "E-Mails und andere Nachrichten, die Sie uns senden, sowie unsere Antworten.",
            "Wenn Sie buchen, was für die Organisation der Reise nötig ist: die Namen aller Reisenden, Geburtsdaten und Passdaten, sofern Leistungsträger oder Behörden sie verlangen, Ernährungs-, Gesundheits- und Barrierefreiheitsbedürfnisse, die Sie uns mitteilen möchten, Notfallkontakte und Belege Ihrer Zahlungen. Kartennummern erheben oder speichern wir auf dieser Website nicht.",
            "Technische Daten: Bei Ihrem Besuch speichert unser Hosting-Anbieter automatisch Ihre IP-Adresse, den Browsertyp, die aufgerufenen Seiten und den Zeitpunkt der Anfrage in Server-Logs, um den Betrieb und die Sicherheit der Website zu gewährleisten.",
            "Wir setzen keine Analyse- oder Werbewerkzeuge ein und erstellen keine Besucherprofile."
          ]
        },
        {
          "h": "Wofür wir sie verwenden und auf welcher Rechtsgrundlage",
          "p": [
            "Um Ihre Anfrage zu beantworten und einen Vorschlag zu erstellen: vorvertragliche Maßnahmen auf Ihre Anfrage (Art. 6 Abs. 1 lit. b DSGVO) und unser berechtigtes Interesse, Anfragen zu beantworten (Art. 6 Abs. 1 lit. f DSGVO).",
            "Um Ihre Reise zu buchen, durchzuführen und zu betreuen und Zahlungen abzuwickeln: Erfüllung unseres Vertrags mit Ihnen.",
            "Um Gesundheits-, Ernährungs- oder Barrierefreiheitsangaben zu verarbeiten, damit Leistungsträger sich um Sie kümmern können: Ihre ausdrückliche Einwilligung, die Sie jederzeit widerrufen können.",
            "Um Buchhaltungs- und Buchungsunterlagen aufzubewahren: unsere gesetzlichen Pflichten.",
            "Um die Website sicher und funktionsfähig zu halten: unser berechtigtes Interesse. Um Ihnen unseren Newsletter zu senden: Ihre Einwilligung, die Sie über den Link in jeder E-Mail widerrufen können.",
            "Wir verkaufen Ihre personenbezogenen Daten nicht und nutzen sie nicht für automatisierte Entscheidungen."
          ]
        },
        {
          "h": "An wen wir sie weitergeben",
          "p": [
            "Dienstleister, die Daten in unserem Auftrag und auf vertraglicher Grundlage verarbeiten: Vercel Inc. (USA), die diese Website hostet, die Formularverarbeitung ausführt und kurzlebige Server-Logs speichert; und unser E-Mail-Anbieter, der die Nachrichten speichert, die wir mit Ihnen austauschen.",
            "Wenn Sie buchen: die Hotels, Lodges, Transportunternehmen, Aktivitätsanbieter und örtlichen Partner vor Ort (Frankreich), die Ihre Reise durchführen, jeweils nur mit den Angaben, die sie benötigen; auf Ihren Wunsch Ihr Reiseversicherer.",
            "Behörden, Gerichte oder unsere Berater, wenn das Gesetz es verlangt oder um Rechtsansprüche geltend zu machen oder abzuwehren."
          ]
        },
        {
          "h": "Internationale Übermittlungen",
          "p": [
            "Unsere Hosting- und E-Mail-Anbieter haben ihren Sitz in den USA. Verlassen Ihre Daten das Vereinigte Königreich oder den Europäischen Wirtschaftsraum, stützt sich die Übermittlung auf das EU-US Data Privacy Framework und dessen britische Erweiterung, sofern der Anbieter zertifiziert ist, oder auf die Standardvertragsklauseln der Europäischen Kommission (mit dem britischen Zusatz), die den Anbieter zu einem Schutz nach europäischem Standard verpflichten.",
            "Wenn Sie buchen, geben wir die für Ihre Reise nötigen Angaben an Leistungsträger vor Ort (Frankreich) weiter. Diese Übermittlung ist für die Erfüllung des Vertrags erforderlich, den Sie mit uns schließen (Art. 49 Abs. 1 lit. b DSGVO)."
          ]
        },
        {
          "h": "Wie lange wir sie speichern",
          "p": [
            "Anfragen, aus denen keine Buchung wird: 24 Monate nach unserem letzten Kontakt, danach werden sie gelöscht.",
            "Buchungsunterlagen: sechs Jahre nach Ende Ihrer Reise, wie es Buchhaltungs- und Steuervorschriften verlangen. Gesundheits- und Ernährungsangaben löschen wir, sobald die Reise beendet und etwaige Ansprüche erledigt sind.",
            "Server-Logs: kurze Zeit, in der Regel höchstens 30 Tage. Newsletter: bis Sie sich abmelden."
          ]
        },
        {
          "h": "Wie wir sie schützen",
          "p": [
            "Die Website wird ausschließlich über eine verschlüsselte Verbindung (HTTPS) ausgeliefert. Ihre Angaben liegen in passwortgeschützten Konten, auf die nur die Personen zugreifen können, die Ihre Reise planen, und Leistungsträger erhalten nur, was sie benötigen."
          ]
        },
        {
          "h": "Ihre Rechte",
          "p": [
            "Nach dem Datenschutzrecht (einschließlich DSGVO und UK GDPR) haben Sie das Recht auf Auskunft über die bei uns gespeicherten Daten, auf Berichtigung unrichtiger Daten, auf Löschung, auf Einschränkung der Verarbeitung, auf Datenübertragbarkeit, auf Widerspruch gegen Verarbeitungen auf Grundlage unseres berechtigten Interesses sowie das Recht, eine Einwilligung jederzeit mit Wirkung für die Zukunft zu widerrufen.",
            "Um diese Rechte auszuüben, schreiben Sie an rondpoint@tourground.com. Wir antworten innerhalb eines Monats und kostenlos.",
            "Sie haben außerdem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren, insbesondere in dem Land, in dem Sie leben oder arbeiten (in Deutschland etwa bei der Datenschutzbehörde Ihres Bundeslandes). Wir würden uns freuen, wenn Sie uns zuerst die Gelegenheit geben, die Sache zu klären."
          ]
        },
        {
          "h": "Cookies",
          "p": [
            "Diese Website verwendet keine Analyse- oder Werbe-Cookies. Unsere [Cookie-Richtlinie](/cookies) erklärt genau, was sie in Ihrem Browser speichert."
          ]
        },
        {
          "h": "Kinder",
          "p": [
            "Diese Website und unsere Leistungen richten sich nicht an Kinder unter 16 Jahren, und wir erheben online nicht wissentlich deren Daten. Angaben zu Kindern speichern wir nur, wenn ein Elternteil oder Erziehungsberechtigter sie uns für die Buchung einer Familienreise übermittelt."
          ]
        },
        {
          "h": "Änderungen",
          "p": [
            "Wenn sich unser Umgang mit personenbezogenen Daten ändert, aktualisieren wir diese Seite und das Datum unten. Zuletzt aktualisiert: 1. November 2026."
          ]
        },
        {
          "h": "Kontakt",
          "p": [
            "Rond-Point, WeWork La Fayette, 33 rue La Fayette, 75009 Paris, France. E-Mail: rondpoint@tourground.com."
          ]
        }
      ]
    },
    {
      "slug": "terms",
      "title": "Buchungsbedingungen",
      "lede": "Die Bedingungen für Reisebuchungen bei Rond-Point: Anzahlung, Restzahlung, Änderungen, Rücktritt und Versicherung.",
      "updated": "2026-11-01",
      "sections": [
        {
          "h": "Wer wir sind",
          "p": [
            "Diese Buchungsbedingungen gelten für jede Reise, die von Rond-Point, WeWork La Fayette, 33 rue La Fayette, 75009 Paris, France („wir“), organisiert wird. E-Mail: rondpoint@tourground.com. Bitte lesen Sie sie vor der Buchung: Zusammen mit Ihrem schriftlichen Angebot und Ihrer Buchungsbestätigung bilden sie den Vertrag zwischen uns."
          ]
        },
        {
          "h": "Preise auf dieser Website",
          "p": [
            "Die Preise auf dieser Website sind „ab“-Preise: Richtpreise pro Person, meist bei zwei Personen im Doppelzimmer, die von Reisedaten, Verfügbarkeit, Gruppengröße und Ihren Wünschen abhängen. Sie sind kein Angebot. Maßgeblich ist der Preis in Ihrem endgültigen schriftlichen Angebot, den wir Ihnen vor der Buchung schriftlich bestätigen."
          ]
        },
        {
          "h": "Wie eine Buchung zustande kommt",
          "p": [
            "Eine Anfrage ist kostenlos und für beide Seiten unverbindlich. Wir senden Ihnen einen Vorschlag, passen ihn mit Ihnen an und schicken dann ein schriftliches Angebot, das für den darin genannten Zeitraum gilt.",
            "Ihre Buchung ist bestätigt und der Vertrag geschlossen, wenn Sie das Angebot schriftlich angenommen, die Anzahlung geleistet und unsere schriftliche Bestätigung erhalten haben. Wer bucht, muss mindestens 18 Jahre alt sein und akzeptiert diese Bedingungen für alle Mitreisenden. Bitte prüfen Sie Ihre Bestätigung und melden Sie Fehler sofort."
          ]
        },
        {
          "h": "Anzahlung und Restzahlung",
          "p": [
            "Die Höhe der Anzahlung steht in Ihrem Angebot; sie beträgt in der Regel 30 % des Reisepreises. Der Restbetrag ist spätestens 60 Tage vor Abreise fällig, sofern Ihre Bestätigung kein anderes Datum nennt. Bei Buchung weniger als 60 Tage vor Abreise ist der volle Preis sofort fällig.",
            "Wird der Restbetrag nicht rechtzeitig gezahlt, können wir die Buchung als von Ihnen storniert behandeln und die unten genannten Stornogebühren berechnen."
          ]
        },
        {
          "h": "Was enthalten ist und was nicht",
          "p": [
            "Ihre Reise umfasst genau die in Angebot und Bestätigung aufgeführten Leistungen, etwa die dort genannten Unterkünfte, Transporte, Aktivitäten und Eintrittsgelder sowie die angegebenen Mahlzeiten.",
            "Sofern Ihr Angebot nichts anderes sagt, nicht enthalten sind: internationale Flüge, Reiseversicherung, Visa und Einreisegebühren, Impfungen, Trinkgelder, Getränke, nicht genannte Mahlzeiten, optionale Aktivitäten und persönliche Ausgaben."
          ]
        },
        {
          "h": "Änderungen durch Sie",
          "p": [
            "Wenn Sie eine bestätigte Reise ändern möchten, teilen Sie uns das schriftlich mit. Wir helfen gern, können aber nicht jede Änderung garantieren. Zusätzliche Kosten der Leistungsträger tragen Sie; wir nennen sie Ihnen, bevor wir die Änderung vornehmen. Sie können Ihre Buchung auf eine andere Person übertragen, die alle Reisebedingungen erfüllt, wenn Sie uns dies spätestens 14 Tage vor Abreise schriftlich mitteilen und die dadurch entstehenden Kosten übernehmen."
          ]
        },
        {
          "h": "Rücktritt durch Sie",
          "p": [
            "Sie können jederzeit schriftlich zurücktreten; der Rücktritt wird mit Eingang bei uns wirksam. Da wir Leistungen in Ihrem Namen verbindlich buchen und bezahlen, fallen folgende Gebühren an, in Prozent des gesamten Reisepreises:",
            "Mehr als 60 Tage vor Abreise: Verfall der Anzahlung. 60 bis 31 Tage: 50 %. 30 bis 15 Tage: 75 %. 14 Tage oder weniger oder bei Nichtantritt: 100 %.",
            "Nennt Ihr Angebot Kosten eines Leistungsträgers, die nach Zahlung nicht erstattet werden (etwa bestimmte Genehmigungen, Parkgebühren oder Flüge), sind diese bei jedem Rücktritt zusätzlich zu zahlen. Ihre Reiseversicherung kann Stornokosten abdecken."
          ]
        },
        {
          "h": "Änderungen und Absage durch uns",
          "p": [
            "Manchmal müssen wir kleinere Änderungen vornehmen, etwa ein anderes Hotel gleicher Kategorie oder eine angepasste Route; wir informieren Sie so früh wie möglich.",
            "Müssen wir vor Abreise eine erhebliche Änderung vornehmen oder die Reise absagen, können Sie die Änderung annehmen, eine gleichwertige Alternative wählen, sofern wir eine anbieten können, oder zurücktreten und alle gezahlten Beträge vollständig zurückerhalten. Nach Fälligkeit des Restbetrags sagen wir nur bei unvermeidbaren, außergewöhnlichen Umständen oder bei Nichtzahlung ab."
          ]
        },
        {
          "h": "Reiseversicherung",
          "p": [
            "Eine umfassende Reiseversicherung ist Voraussetzung für die Buchung. Sie muss medizinische Behandlung, Notfallevakuierung und Rücktransport, Reiserücktritt und Reiseabbruch sowie alle Aktivitäten Ihrer Reise abdecken. Bitte senden Sie uns die Angaben zu Ihrer Police vor der Abreise."
          ]
        },
        {
          "h": "Pässe, Visa und Gesundheit",
          "p": [
            "Sie sind selbst verantwortlich für einen gültigen Reisepass, etwaige Visa oder Reisegenehmigungen sowie die Impfungen und Gesundheitsnachweise, die für Ihr Reiseziel (Frankreich) und alle Transitländer verlangt werden, und dafür, dass Sie gesundheitlich reisefähig sind. Die Seite [FAQ](/faq) auf dieser Website fasst die wichtigsten uns bekannten Einreise- und Gesundheitsbestimmungen zusammen; sie ist jedoch nur ein allgemeiner Hinweis, den Sie bei offiziellen Stellen überprüfen müssen. Einreisebestimmungen ändern sich; prüfen Sie die Reisehinweise Ihrer Regierung und die zuständige Botschaft vor der Buchung und erneut vor der Abreise. Informieren Sie uns vor der Buchung über gesundheitliche Einschränkungen oder Mobilitätsbedürfnisse, die Ihre Reise beeinflussen könnten."
          ]
        },
        {
          "h": "Unsere Verantwortung",
          "p": [
            "Wir planen Ihre Reise mit angemessener Sorgfalt, wählen zuverlässige Leistungsträger aus und sind dafür verantwortlich, dass die Leistungen Ihrer Bestätigung wie beschrieben erbracht werden. Nicht verantwortlich sind wir, wenn ein Problem von Ihnen, von einem unbeteiligten Dritten oder durch unvermeidbare, außergewöhnliche Umstände verursacht wird.",
            "Außer bei Tod oder Körperverletzung durch unsere Fahrlässigkeit oder sonst gesetzlich nicht beschränkbarer Haftung ist unsere Haftung auf den Gesamtpreis Ihrer Reise begrenzt. Soweit internationale Übereinkommen die Haftung einer Fluggesellschaft, eines Hotels oder eines anderen Beförderers begrenzen, ist unsere Haftung in gleicher Weise begrenzt. Manche Aktivitäten bergen naturgemäße Risiken, die wir Ihnen erklären und die Sie mit der Wahl der Aktivität akzeptieren."
          ]
        },
        {
          "h": "Ihr Verhalten",
          "p": [
            "Bitte respektieren Sie Gesetze, Bräuche und Gemeinschaften vor Ort, befolgen Sie die Sicherheitsanweisungen von Fahrern, Crews und anderen Leistungsträgern und gefährden Sie niemanden. Gefährdet Ihr Verhalten andere oder stört es die Reise erheblich, können wir Ihre Reise ohne Erstattung beenden; für von Ihnen verursachte Schäden haften Sie."
          ]
        },
        {
          "h": "Beschwerden",
          "p": [
            "Wenn während der Reise etwas nicht stimmt, sagen Sie es sofort dem Leistungsträger und uns, damit wir es möglichst vor Ort beheben können. Lässt es sich nicht lösen, schreiben Sie innerhalb von 28 Tagen nach Ihrer Rückkehr an rondpoint@tourground.com; wir bestätigen den Eingang innerhalb von 7 Tagen und antworten vollständig innerhalb von 28 Tagen."
          ]
        },
        {
          "h": "Höhere Gewalt",
          "p": [
            "Wir haften nicht für Ausfälle oder Verzögerungen durch unvermeidbare, außergewöhnliche Umstände außerhalb unserer Kontrolle, etwa Krieg, Terrorismus, Unruhen, Naturkatastrophen, Epidemien, extreme Wetterlagen, behördliche Maßnahmen oder die Schließung von Flughäfen oder Grenzen. Verhindert ein solches Ereignis Ihre Reise, erstatten wir Ihnen, was wir in Ihrem Namen gezahlt haben und von Leistungsträgern zurückerhalten können, oder bieten Ihnen eine Alternative an."
          ]
        },
        {
          "h": "Datenschutz",
          "p": [
            "Wir verwenden Ihre personenbezogenen Daten wie in unserer [Datenschutzerklärung](/privacy) beschrieben."
          ]
        },
        {
          "h": "Anwendbares Recht",
          "p": [
            "Diese Bedingungen und jeder Vertrag mit uns unterliegen französischem Recht, da sich unsere Geschäftsadresse in Frankreich befindet; für Streitigkeiten sind die Gerichte Frankreichs zuständig. Sind Sie Verbraucher mit Wohnsitz in einem anderen Land, behalten Sie den Schutz der zwingenden Verbraucherschutzvorschriften dieses Landes und können auch dort klagen."
          ]
        },
        {
          "h": "Kontakt",
          "p": [
            "Rond-Point, WeWork La Fayette, 33 rue La Fayette, 75009 Paris, France. E-Mail: rondpoint@tourground.com. Zuletzt aktualisiert: 1. November 2026."
          ]
        }
      ]
    },
    {
      "slug": "cookies",
      "title": "Cookie-Richtlinie",
      "lede": "Was die Website von Rond-Point in Ihrem Browser speichert und wie Sie das verwalten.",
      "updated": "2026-11-01",
      "sections": [
        {
          "h": "Was Cookies sind",
          "p": [
            "Cookies sind kleine Textdateien, die eine Website in Ihrem Browser speichert. Ähnliche Techniken wie der lokale Speicher (localStorage) und der Sitzungsspeicher Ihres Browsers erlauben es einer Website, kleine Informationen auf Ihrem Gerät abzulegen. Diese Richtlinie gilt für all diese Techniken."
          ]
        },
        {
          "h": "Was diese Website verwendet",
          "p": [
            "Diese Website setzt keine Cookies. Sie nutzt nur den unten aufgeführten Browserspeicher, der auf Ihrem Gerät bleibt und nie an uns gesendet wird. Es gibt keine Analyse-, Werbe- oder Tracking-Cookies und keine Tracking-Pixel."
          ]
        },
        {
          "h": "Was gespeichert wird",
          "p": [],
          "table": {
            "head": [
              "Name",
              "Zweck",
              "Dauer",
              "Art"
            ],
            "rows": [
              [
                "rp-currency",
                "Merkt sich die Währung, die Sie für die Preisanzeige gewählt haben.",
                "Bis Sie ihn im Browser löschen",
                "Lokaler Speicher · Präferenz (funktional)"
              ],
              [
                "rp-planner-v1",
                "Speichert Ihre Antworten im Reiseplaner, damit Sie später weitermachen können; wird beim Absenden gelöscht.",
                "Bis Sie das Formular absenden oder ihn im Browser löschen",
                "Lokaler Speicher · Unbedingt erforderlich"
              ],
              [
                "rp-demo-session",
                "Hält Sie während Ihres Besuchs in „Mein Konto“ angemeldet.",
                "Bis Sie den Tab schließen",
                "Sitzungsspeicher · Unbedingt erforderlich"
              ]
            ]
          }
        },
        {
          "h": "Inhalte Dritter",
          "p": [
            "Einige Fotos werden von images.unsplash.com (Unsplash, USA) geladen. Dazu übermittelt Ihr Browser, wie bei jeder Webanfrage, Ihre IP-Adresse und Browserangaben an Unsplash; diese Bildanfragen setzen keine Cookies.",
            "Unser Hosting-Anbieter Vercel setzt auf dieser Website keine Cookies."
          ]
        },
        {
          "h": "Einwilligung",
          "p": [
            "Alles oben Genannte ist entweder unbedingt erforderlich oder merkt sich eine von Ihnen getroffene Wahl, und nichts davon verfolgt Sie; deshalb fragt die Website nicht nach einer Cookie-Einwilligung. Sollten wir jemals Analyse- oder andere optionale Cookies einführen, holen wir vorher Ihre Einwilligung ein und aktualisieren diese Seite."
          ]
        },
        {
          "h": "Verwalten oder löschen",
          "p": [
            "Sie können Cookies jederzeit in Ihren Browsereinstellungen blockieren und gespeicherte Website-Daten löschen, meist unter Datenschutz oder Website-Daten. Die Website funktioniert weiterhin; sie vergisst nur die oben genannten Einstellungen und noch nicht gesendete Formularangaben."
          ]
        },
        {
          "h": "Änderungen",
          "p": [
            "Wenn sich ändert, was die Website speichert, aktualisieren wir diese Seite und das Datum unten. Zuletzt aktualisiert: 1. November 2026."
          ]
        },
        {
          "h": "Kontakt",
          "p": [
            "Fragen zu dieser Richtlinie: Rond-Point, WeWork La Fayette, 33 rue La Fayette, 75009 Paris, France. E-Mail: rondpoint@tourground.com."
          ]
        }
      ]
    }
  ],
  "es": [
    {
      "slug": "privacy",
      "title": "Política de privacidad",
      "lede": "Cómo Rond-Point recoge, usa y protege sus datos personales, y cuáles son sus derechos.",
      "updated": "2026-11-01",
      "sections": [
        {
          "h": "Quiénes somos",
          "p": [
            "Este sitio web lo gestiona Rond-Point, WeWork La Fayette, 33 rue La Fayette, 75009 Paris, France. En esta política, «nosotros» y «nuestro» se refieren a Rond-Point. Decidimos cómo y para qué se usan sus datos personales, por lo que somos el responsable del tratamiento.",
            "Para cualquier cuestión sobre sus datos personales, escriba a rondpoint@tourground.com."
          ]
        },
        {
          "h": "Qué datos recogemos",
          "p": [
            "Los datos que nos envía mediante los formularios de consulta o de planificación de viaje de este sitio: normalmente su nombre, correo electrónico, fechas de viaje preferidas, número de viajeros, el tipo de viaje que tiene en mente, su presupuesto y lo que escriba en su mensaje. Si se suscribe a nuestro boletín, su correo electrónico.",
            "Los correos y otros mensajes que nos envía, y nuestras respuestas.",
            "Si reserva, lo necesario para organizar el viaje: el nombre de cada viajero, fechas de nacimiento y datos del pasaporte cuando los proveedores o las autoridades los exigen, las necesidades alimentarias, médicas y de accesibilidad que decida compartir, contactos de emergencia y el registro de sus pagos. No recogemos ni guardamos números de tarjeta en este sitio.",
            "Datos técnicos: cuando nos visita, nuestro proveedor de alojamiento registra automáticamente en los registros del servidor su dirección IP, el tipo de navegador, las páginas solicitadas y la hora de la petición, para mantener el sitio en funcionamiento y seguro.",
            "No usamos herramientas de analítica ni de publicidad, ni elaboramos perfiles de los visitantes."
          ]
        },
        {
          "h": "Para qué los usamos y bases legales",
          "p": [
            "Para responder a su consulta y preparar una propuesta: medidas precontractuales que usted nos pide y nuestro interés legítimo en responder a quien nos contacta.",
            "Para reservar, organizar y atender su viaje, y gestionar los pagos: la ejecución de nuestro contrato con usted.",
            "Para tratar información de salud, alimentación o accesibilidad de modo que los proveedores puedan atenderle: su consentimiento explícito, que puede retirar en cualquier momento.",
            "Para conservar registros contables y de reservas: nuestras obligaciones legales.",
            "Para mantener el sitio seguro y en funcionamiento: nuestro interés legítimo. Para enviarle nuestro boletín: su consentimiento, que puede retirar con el enlace de cada correo.",
            "No vendemos sus datos personales ni los usamos para decisiones automatizadas."
          ]
        },
        {
          "h": "Con quién los compartimos",
          "p": [
            "Proveedores que tratan datos por cuenta nuestra y bajo contrato: Vercel Inc. (Estados Unidos), que aloja este sitio web, gestiona el envío de los formularios y conserva registros del servidor durante poco tiempo; y nuestro proveedor de correo electrónico, que guarda los mensajes que intercambiamos con usted.",
            "Si reserva: los hoteles, lodges, empresas de transporte, operadores de actividades y socios locales en destino (Francia) que prestan su viaje, solo con los datos que cada uno necesita; su aseguradora de viaje, si nos lo pide.",
            "Autoridades públicas, tribunales o asesores profesionales cuando la ley lo exija o para formular, ejercer o defender reclamaciones."
          ]
        },
        {
          "h": "Transferencias internacionales",
          "p": [
            "Nuestros proveedores de alojamiento web y de correo están en Estados Unidos. Cuando sus datos salen del Reino Unido o del Espacio Económico Europeo, la transferencia se basa en el Marco de Privacidad de Datos UE-EE. UU. y su extensión británica si el proveedor está certificado, o en las cláusulas contractuales tipo de la Comisión Europea (con el anexo británico), que obligan al proveedor a protegerlos según los estándares europeos.",
            "Cuando reserva, facilitamos a los proveedores en destino (Francia) los datos necesarios para su viaje. Esa transferencia es necesaria para ejecutar el contrato que nos ha pedido organizar."
          ]
        },
        {
          "h": "Cuánto tiempo los conservamos",
          "p": [
            "Consultas que no terminan en reserva: 24 meses desde nuestro último contacto; después se eliminan.",
            "Registros de reservas: seis años después del final del viaje, el plazo que exigen las normas contables y fiscales. Los datos de salud y alimentación se eliminan cuando termina el viaje y se resuelve cualquier reclamación.",
            "Registros del servidor: poco tiempo, normalmente no más de 30 días. Boletín: hasta que se dé de baja."
          ]
        },
        {
          "h": "Cómo los protegemos",
          "p": [
            "El sitio se sirve solo mediante conexión cifrada (HTTPS). Sus datos se guardan en cuentas protegidas con contraseña a las que solo acceden las personas que preparan su viaje, y a los proveedores solo les damos lo que necesitan."
          ]
        },
        {
          "h": "Sus derechos",
          "p": [
            "Según la normativa de protección de datos (incluidos el RGPD y el RGPD del Reino Unido), tiene derecho a: acceder a los datos personales que tenemos sobre usted; rectificarlos si son incorrectos; suprimirlos; limitar su uso; recibirlos en un formato portátil; oponerse al tratamiento basado en nuestro interés legítimo; y retirar su consentimiento en cualquier momento, sin que ello afecte a lo realizado antes.",
            "Para ejercer estos derechos, escriba a rondpoint@tourground.com. Respondemos en el plazo de un mes y sin coste.",
            "También tiene derecho a presentar una reclamación ante una autoridad de control de protección de datos, en particular en el país donde vive o trabaja (por ejemplo, la Agencia Española de Protección de Datos en España). Le agradeceríamos que antes nos diera la oportunidad de resolverlo."
          ]
        },
        {
          "h": "Cookies",
          "p": [
            "Este sitio no usa cookies de analítica ni de publicidad. Nuestra [política de cookies](/cookies) explica exactamente qué guarda en su navegador."
          ]
        },
        {
          "h": "Menores",
          "p": [
            "Este sitio y nuestros servicios no están dirigidos a menores de 16 años y no recogemos conscientemente sus datos en línea. Solo tenemos datos de menores cuando un padre, madre o tutor nos los facilita para reservar un viaje en familia."
          ]
        },
        {
          "h": "Cambios en esta política",
          "p": [
            "Actualizaremos esta página, y la fecha que figura abajo, si cambia la forma en que tratamos los datos personales. Última actualización: 1 de noviembre de 2026."
          ]
        },
        {
          "h": "Contacto",
          "p": [
            "Rond-Point, WeWork La Fayette, 33 rue La Fayette, 75009 Paris, France. Correo electrónico: rondpoint@tourground.com."
          ]
        }
      ]
    },
    {
      "slug": "terms",
      "title": "Condiciones de reserva",
      "lede": "Las condiciones que se aplican al reservar un viaje con Rond-Point: depósito, saldo, cambios, cancelación y seguro.",
      "updated": "2026-11-01",
      "sections": [
        {
          "h": "Quiénes somos",
          "p": [
            "Estas condiciones de reserva se aplican a todos los viajes organizados por Rond-Point, WeWork La Fayette, 33 rue La Fayette, 75009 Paris, France («nosotros»). Correo electrónico: rondpoint@tourground.com. Léalas antes de reservar: junto con su presupuesto escrito y su confirmación de reserva, forman el contrato entre nosotros."
          ]
        },
        {
          "h": "Precios en este sitio",
          "p": [
            "Los precios de este sitio se muestran «desde»: son precios orientativos por persona, normalmente para dos personas en habitación compartida, y dependen de las fechas, la disponibilidad, el tamaño del grupo y sus elecciones. No constituyen una oferta. El precio que paga es el de su presupuesto escrito definitivo, que le confirmamos por escrito antes de reservar."
          ]
        },
        {
          "h": "Cómo se hace y se confirma una reserva",
          "p": [
            "Enviar una consulta es gratis y no compromete a nadie. Le enviamos una propuesta, la ajustamos con usted y después le enviamos un presupuesto escrito, válido durante el plazo indicado en él.",
            "Su reserva queda confirmada, y el contrato celebrado, cuando ha aceptado el presupuesto por escrito, ha pagado el depósito y ha recibido nuestra confirmación escrita. Quien reserva debe ser mayor de 18 años y acepta estas condiciones en nombre de todo el grupo. Revise su confirmación y avísenos enseguida si algo no es correcto."
          ]
        },
        {
          "h": "Depósito y saldo",
          "p": [
            "El depósito figura en su presupuesto; normalmente es el 30 % del precio del viaje. El saldo debe pagarse a más tardar 60 días antes de la salida, salvo que su confirmación indique otra fecha. Si reserva con menos de 60 días de antelación, el precio total se paga al reservar.",
            "Si el saldo no se paga a tiempo, podemos considerar la reserva cancelada por usted y aplicar los gastos de cancelación indicados abajo."
          ]
        },
        {
          "h": "Qué incluye y qué no",
          "p": [
            "Su viaje incluye exactamente lo que figura en su presupuesto y confirmación, como el alojamiento, los transportes, las actividades y entradas allí indicados y las comidas señaladas.",
            "Salvo que su presupuesto diga lo contrario, no incluye vuelos internacionales, seguro de viaje, visados y tasas de entrada, vacunas, propinas, bebidas, comidas no indicadas, actividades opcionales ni gastos personales."
          ]
        },
        {
          "h": "Cambios por su parte",
          "p": [
            "Si quiere cambiar un viaje confirmado, díganoslo por escrito. Haremos lo posible, aunque no podemos garantizar todos los cambios. Usted paga los costes adicionales que cobren los proveedores, y se los indicamos antes de hacer el cambio. Puede ceder su reserva a otra persona que cumpla todas las condiciones del viaje si nos avisa por escrito al menos 14 días antes de la salida y paga los costes que genere la cesión."
          ]
        },
        {
          "h": "Cancelación por su parte",
          "p": [
            "Puede cancelar en cualquier momento avisándonos por escrito; la cancelación surte efecto el día en que la recibimos. Como contratamos y pagamos servicios en su nombre, se aplican los siguientes gastos, en porcentaje del precio total del viaje:",
            "Más de 60 días antes de la salida: pérdida del depósito. De 60 a 31 días: 50 %. De 30 a 15 días: 75 %. 14 días o menos, o si no se presenta: 100 %.",
            "Cuando su presupuesto indique un coste de proveedor no reembolsable una vez pagado (por ejemplo, ciertos permisos, entradas a parques o vuelos), ese coste también se paga sea cual sea la fecha de cancelación. Su seguro de viaje puede cubrir los gastos de cancelación."
          ]
        },
        {
          "h": "Cambios y cancelación por nuestra parte",
          "p": [
            "A veces debemos hacer cambios menores, como otro hotel de la misma categoría o una ruta ajustada; se lo comunicamos lo antes posible.",
            "Si antes de la salida tenemos que hacer un cambio significativo o cancelar, puede aceptar el cambio, elegir una alternativa equivalente si podemos ofrecerla, o cancelar y recibir el reembolso íntegro de todo lo que nos ha pagado. No cancelaremos después del vencimiento del saldo salvo por circunstancias inevitables y extraordinarias o por impago."
          ]
        },
        {
          "h": "Seguro de viaje",
          "p": [
            "Un seguro de viaje completo es condición para reservar. Debe cubrir asistencia médica, evacuación de emergencia y repatriación, cancelación e interrupción del viaje, y todas las actividades previstas. Envíenos los datos de su póliza antes de viajar."
          ]
        },
        {
          "h": "Pasaportes, visados y salud",
          "p": [
            "Usted es responsable de tener un pasaporte válido, los visados o autorizaciones de viaje y las vacunas y documentos sanitarios exigidos para su destino (Francia) y para cualquier país de tránsito, así como de estar en condiciones de participar. La página [Preguntas frecuentes](/faq) de este sitio resume los principales requisitos de entrada y de salud que conocemos, pero es información general que debe confirmar con fuentes oficiales. Los requisitos de entrada cambian: consulte las recomendaciones de viaje de su gobierno y la embajada correspondiente antes de reservar y de nuevo antes de viajar. Avísenos antes de reservar de cualquier problema de salud o de movilidad que pueda afectar a su viaje."
          ]
        },
        {
          "h": "Nuestra responsabilidad",
          "p": [
            "Ponemos un cuidado razonable en planificar su viaje y elegir proveedores fiables, y somos responsables de que los servicios de su confirmación se presten tal como se describen. No somos responsables cuando un problema lo causa usted, un tercero ajeno al viaje o circunstancias inevitables y extraordinarias.",
            "Salvo en caso de muerte o lesiones causadas por nuestra negligencia, o de cualquier otra responsabilidad que la ley no permita limitar, nuestra responsabilidad se limita al precio total de su viaje. Cuando un convenio internacional limita la responsabilidad de una aerolínea, hotel u otro transportista, nuestra responsabilidad queda limitada del mismo modo. Algunas actividades conllevan riesgos inherentes, que le explicamos y que usted acepta al elegirlas."
          ]
        },
        {
          "h": "Su comportamiento",
          "p": [
            "Respete las leyes, costumbres y comunidades locales, siga las instrucciones de seguridad de conductores, tripulaciones y otros proveedores y no ponga a nadie en riesgo. Si su comportamiento pone en peligro a otros o altera gravemente el viaje, podemos darlo por terminado sin reembolso, y usted responde de los daños que cause."
          ]
        },
        {
          "h": "Reclamaciones",
          "p": [
            "Si algo no va bien durante el viaje, dígaselo de inmediato al proveedor y a nosotros para intentar resolverlo sobre la marcha. Si no se resuelve, escriba a rondpoint@tourground.com en los 28 días siguientes a su regreso; acusaremos recibo en 7 días y responderemos por completo en 28 días."
          ]
        },
        {
          "h": "Fuerza mayor",
          "p": [
            "No somos responsables de incumplimientos o retrasos causados por circunstancias inevitables y extraordinarias ajenas a nuestro control, como guerra, terrorismo, disturbios, catástrofes naturales, epidemias, fenómenos meteorológicos extremos, decisiones de las autoridades o el cierre de aeropuertos o fronteras. Si un hecho así impide su viaje, le reembolsamos lo que hayamos pagado en su nombre y podamos recuperar de los proveedores, o le ofrecemos una alternativa."
          ]
        },
        {
          "h": "Protección de datos",
          "p": [
            "Usamos sus datos personales tal como se describe en nuestra [política de privacidad](/privacy)."
          ]
        },
        {
          "h": "Ley aplicable",
          "p": [
            "Estas condiciones y cualquier contrato con nosotros se rigen por las leyes de Francia, el país de nuestra dirección comercial, y las controversias se someten a los tribunales de Francia. Si es usted un consumidor residente en otro país, conserva la protección de las normas imperativas de consumo de ese país y también puede presentar una demanda allí."
          ]
        },
        {
          "h": "Contacto",
          "p": [
            "Rond-Point, WeWork La Fayette, 33 rue La Fayette, 75009 Paris, France. Correo electrónico: rondpoint@tourground.com. Última actualización: 1 de noviembre de 2026."
          ]
        }
      ]
    },
    {
      "slug": "cookies",
      "title": "Política de cookies",
      "lede": "Qué guarda el sitio web de Rond-Point en su navegador y cómo gestionarlo.",
      "updated": "2026-11-01",
      "sections": [
        {
          "h": "Qué son las cookies",
          "p": [
            "Las cookies son pequeños archivos de texto que un sitio web guarda en su navegador. Tecnologías similares, como el almacenamiento local (localStorage) y el almacenamiento de sesión del navegador, permiten a un sitio guardar pequeños datos en su dispositivo. Esta política se aplica a todas ellas."
          ]
        },
        {
          "h": "Qué usa este sitio",
          "p": [
            "Este sitio no instala cookies. Solo usa el almacenamiento del navegador que se detalla abajo, que se queda en su dispositivo y nunca se nos envía. No hay cookies de analítica, de publicidad ni de seguimiento, ni píxeles de seguimiento."
          ]
        },
        {
          "h": "Qué se guarda",
          "p": [],
          "table": {
            "head": [
              "Nombre",
              "Finalidad",
              "Duración",
              "Tipo"
            ],
            "rows": [
              [
                "rp-currency",
                "Recuerda la moneda que eligió para mostrar los precios.",
                "Hasta que lo borre en su navegador",
                "Almacenamiento local · Preferencia (funcional)"
              ],
              [
                "rp-planner-v1",
                "Guarda sus respuestas en el planificador de viaje para que pueda continuar más tarde; se borra al enviarlo.",
                "Hasta que envíe el formulario o lo borre en su navegador",
                "Almacenamiento local · Estrictamente necesaria"
              ],
              [
                "rp-demo-session",
                "Mantiene abierta su sesión en Mi cuenta durante la visita.",
                "Hasta que cierre la pestaña",
                "Almacenamiento de sesión · Estrictamente necesaria"
              ]
            ]
          }
        },
        {
          "h": "Contenido de terceros",
          "p": [
            "Algunas fotografías se cargan desde images.unsplash.com (Unsplash, Estados Unidos). Para obtenerlas, su navegador envía a Unsplash su dirección IP y datos del navegador, como en cualquier petición web; estas peticiones de imágenes no instalan cookies.",
            "Nuestro proveedor de alojamiento, Vercel, no instala cookies en este sitio."
          ]
        },
        {
          "h": "Consentimiento",
          "p": [
            "Todo lo anterior es estrictamente necesario o recuerda una elección suya, y nada sirve para seguirle; por eso el sitio no pide consentimiento para cookies. Si algún día añadimos cookies de analítica u otras opcionales, le pediremos antes su consentimiento y actualizaremos esta página."
          ]
        },
        {
          "h": "Cómo gestionarlo o eliminarlo",
          "p": [
            "Puede bloquear las cookies y borrar los datos guardados por el sitio en cualquier momento desde la configuración de su navegador, normalmente en Privacidad o Datos de sitios. El sitio sigue funcionando; solo olvida las elecciones descritas arriba y las respuestas de formularios no enviadas."
          ]
        },
        {
          "h": "Cambios en esta política",
          "p": [
            "Si cambia lo que guarda el sitio, actualizaremos esta página y la fecha que figura abajo. Última actualización: 1 de noviembre de 2026."
          ]
        },
        {
          "h": "Contacto",
          "p": [
            "Preguntas sobre esta política: Rond-Point, WeWork La Fayette, 33 rue La Fayette, 75009 Paris, France. Correo electrónico: rondpoint@tourground.com."
          ]
        }
      ]
    }
  ]
};
