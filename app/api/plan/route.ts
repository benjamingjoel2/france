import { NextResponse } from "next/server";
import { plannerSchema } from "@/lib/planner-schema";

export async function POST(req: Request) {
  const json = await req.json().catch(() => null);
  const parsed = plannerSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, issues: parsed.error.issues.slice(0, 20) }, { status: 400 });
  }
  const enquiry = { ...parsed.data, receivedAt: new Date().toISOString(), source: "plan-my-road-trip" };
  console.log("[plan-my-road-trip] new enquiry", JSON.stringify(enquiry, null, 2));
  // TODO: email the enquiry to the specialists' inbox and create a lead in the CRM.
  return NextResponse.json({ ok: true });
}
