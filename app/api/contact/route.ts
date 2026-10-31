import { NextResponse } from "next/server";
import { z } from "zod";

const Body = z.object({
  name: z.string().trim().min(2),
  email: z.email(),
  phone: z.string().trim().max(30).optional().default(""),
  method: z.enum(["email", "telephone"]),
  message: z.string().trim().min(5).max(5000),
});

export async function POST(req: Request) {
  const json = await req.json().catch(() => null);
  const parsed = Body.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, issues: parsed.error.issues.slice(0, 10) }, { status: 400 });
  }
  console.log("[contact] new message", { ...parsed.data, receivedAt: new Date().toISOString() });
  // TODO: forward to the shared inbox / CRM.
  return NextResponse.json({ ok: true });
}
