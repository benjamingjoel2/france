import { NextResponse } from "next/server";
import { z } from "zod";

const Body = z.object({
  name: z.string().trim().max(120).optional().default(""),
  email: z.email(),
});

export async function POST(req: Request) {
  const json = await req.json().catch(() => null);
  const parsed = Body.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
  }
  console.log("[newsletter] signup", parsed.data);
  // TODO: send to the newsletter provider (e.g. Mailchimp/Brevo) with double opt-in.
  return NextResponse.json({ ok: true });
}
