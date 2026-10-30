import { site } from "@/config/site";
import { legal } from "@/data/legal";

/** Rond-Point's legal pages: the shared text plus what this site actually stores. */
export const legalPages = legal({
  brand: site.name,
  email: site.contact.email,
  address: site.address.lines,
  storage: [
    { name: "rp-currency", type: "local storage", duration: "until you clear it", purpose: "remembers the currency you chose for showing prices" },
    { name: "rp-planner-v1", type: "local storage", duration: "until you send the planner or clear it", purpose: "saves your road trip planner answers on this device so you can finish later; it is deleted when you send it" },
    { name: "rp-demo-session", type: "session storage", duration: "until you close the browser tab", purpose: "keeps you signed in to My account during your visit" },
  ],
  processors: [{ name: "Vercel", purpose: "hosts this website and processes the planner, contact and newsletter forms" }],
  extraPrivacy: [
    {
      h: "Newsletter",
      p: [
        "If you sign up for our newsletter we use your email address only to send it. Every issue has an unsubscribe link, and you can also ask us to remove you at any time.",
      ],
    },
  ],
});

export const getLegalPage = (slug: "privacy" | "terms" | "cookies") => legalPages.find((p) => p.slug === slug)!;
