import { z } from "zod";

/** Shared between the planner UI (per-step validation) and the API route. */

export const PICKUP_CITIES = ["paris", "nice", "lyon", "bordeaux", "marseille", "toulouse", "other"] as const;
export const CAR_TYPES = ["compact", "convertible", "suv", "electric"] as const;
export const STAY_STYLES = ["chateau", "boutique", "countryside", "mix"] as const;
export const CONTACT_METHODS = ["email", "whatsapp", "telephone"] as const;
export const INTERESTS = ["wine", "food", "history", "beaches", "mountains", "villages", "cities"] as const;
/** Budget bands per person, base EUR (converted for display). */
export const BUDGETS = [
  { value: "lt1500", min: 0, max: 1500 },
  { value: "1500-2500", min: 1500, max: 2500 },
  { value: "2500-4000", min: 2500, max: 4000 },
  { value: "gt4000", min: 4000, max: null },
] as const;

export const DIAL_CODES = [
  { code: "+44", label: "UK +44" },
  { code: "+1", label: "US / Canada +1" },
  { code: "+61", label: "Australia +61" },
  { code: "+64", label: "New Zealand +64" },
  { code: "+353", label: "Ireland +353" },
  { code: "+33", label: "France +33" },
  { code: "+49", label: "Germany +49" },
  { code: "+31", label: "Netherlands +31" },
  { code: "+32", label: "Belgium +32" },
  { code: "+41", label: "Switzerland +41" },
  { code: "+34", label: "Spain +34" },
  { code: "+39", label: "Italy +39" },
  { code: "+46", label: "Sweden +46" },
  { code: "+47", label: "Norway +47" },
  { code: "+45", label: "Denmark +45" },
  { code: "+27", label: "South Africa +27" },
  { code: "+65", label: "Singapore +65" },
  { code: "+852", label: "Hong Kong +852" },
  { code: "+81", label: "Japan +81" },
  { code: "+55", label: "Brazil +55" },
  { code: "+52", label: "Mexico +52" },
  { code: "+971", label: "UAE +971" },
] as const;

const todayISO = () => new Date().toISOString().slice(0, 10);

export const whenSchema = z.object({
  startDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Pick a start date.")
    .refine((d) => d > todayISO(), "Your start date needs to be in the future."),
  days: z.number().int().min(3, "Minimum 3 days.").max(30, "Maximum 30 days."),
  dateFlex: z.enum(["exact", "approximate"], { error: "Are your dates exact or approximate?" }),
});

export const whereSchema = z
  .object({
    regions: z.array(z.string()),
    helpMeChoose: z.boolean(),
  })
  .refine((v) => v.helpMeChoose || v.regions.length > 0, {
    message: "Choose at least one exit, or keep circling and we'll help.",
    path: ["regions"],
  });

export const styleSchema = z
  .object({
    tripType: z.enum(["self-drive", "drive-and-e-bike"], { error: "Choose a trip type." }),
    pace: z.enum(["gentle", "balanced", "ambitious"], { error: "Choose a pace." }),
    interests: z.array(z.enum(INTERESTS)).min(1, "Pick at least one interest."),
    carType: z.enum(CAR_TYPES, { error: "Choose a car type." }),
    automatic: z.boolean(),
    pickup: z.enum(PICKUP_CITIES, { error: "Choose a pick-up city." }),
    pickupOther: z.string().trim().max(80),
  })
  .refine((v) => v.pickup !== "other" || v.pickupOther.length >= 2, {
    message: "Tell us where you'd like to pick up the car.",
    path: ["pickupOther"],
  });

export const whoSchema = z
  .object({
    adults: z.number().int().min(1, "At least one adult.").max(12),
    children: z.number().int().min(0).max(8),
    childAges: z.array(
      z.object({
        age: z.number({ error: "Add an age." }).int().min(0, "Add an age.").max(17, "Under 18 please."),
        carSeat: z.boolean(),
      }),
    ),
    stayStyle: z.enum(STAY_STYLES, { error: "Choose a stay style." }),
    budget: z.enum(BUDGETS.map((b) => b.value) as [string, ...string[]], { error: "Choose a budget." }),
  })
  .refine((v) => v.childAges.length === v.children, { message: "Add each child's age.", path: ["childAges"] });

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Tell us your name."),
  email: z.email("Enter a valid email address."),
  dialCode: z.string().min(2),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9 ()-]{6,20}$/, "Enter a valid phone number."),
  contactMethods: z.array(z.enum(CONTACT_METHODS)).min(1, "How should we get in touch?"),
  notes: z.string().max(3000),
  consent: z.literal(true, { error: "Please agree so we can contact you about your trip." }),
});

export const plannerSchema = z.object({
  when: whenSchema,
  where: whereSchema,
  style: styleSchema,
  who: whoSchema,
  contact: contactSchema,
});

export type PlannerData = z.infer<typeof plannerSchema>;

export type PlannerDraft = {
  when: { startDate: string; days: number; dateFlex: "" | "exact" | "approximate" };
  where: { regions: string[]; helpMeChoose: boolean };
  style: {
    tripType: "" | "self-drive" | "drive-and-e-bike";
    pace: "" | "gentle" | "balanced" | "ambitious";
    interests: (typeof INTERESTS)[number][];
    carType: "" | (typeof CAR_TYPES)[number];
    automatic: boolean;
    pickup: "" | (typeof PICKUP_CITIES)[number];
    pickupOther: string;
  };
  who: {
    adults: number;
    children: number;
    childAges: { age: number; carSeat: boolean }[];
    stayStyle: "" | (typeof STAY_STYLES)[number];
    budget: string;
  };
  contact: {
    name: string;
    email: string;
    dialCode: string;
    phone: string;
    contactMethods: (typeof CONTACT_METHODS)[number][];
    notes: string;
    consent: boolean;
  };
};

export const emptyDraft = (): PlannerDraft => ({
  when: { startDate: "", days: 8, dateFlex: "" },
  where: { regions: [], helpMeChoose: false },
  style: { tripType: "", pace: "", interests: [], carType: "", automatic: false, pickup: "", pickupOther: "" },
  who: { adults: 2, children: 0, childAges: [], stayStyle: "", budget: "" },
  contact: { name: "", email: "", dialCode: "+44", phone: "", contactMethods: [], notes: "", consent: false },
});

export const stepSchemas = [whenSchema, whereSchema, styleSchema, whoSchema, contactSchema] as const;
export const stepKeys = ["when", "where", "style", "who", "contact"] as const;

/** Flatten zod issues into { "path.to.field": "message" } (first message wins). */
export function issuesToErrors(issues: { path: PropertyKey[]; message: string }[]) {
  const out: Record<string, string> = {};
  for (const i of issues) {
    const k = i.path.map(String).join(".");
    if (!out[k]) out[k] = i.message;
  }
  return out;
}
