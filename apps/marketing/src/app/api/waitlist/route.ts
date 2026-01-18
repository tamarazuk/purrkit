import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { email?: unknown };
    if (typeof body.email !== "string" || body.email.length < 3) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    return new NextResponse(null, { status: 204 });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
