import { NextResponse } from "next/server";

const SECRET_HEADER_KEY = "x-jvg-client";
const SECRET_HEADER_VALUE = "secure-jvg-portal-2026";

export async function POST(request: Request) {
  try {
    const clientToken = request.headers.get(SECRET_HEADER_KEY);
    if (clientToken !== SECRET_HEADER_VALUE) {
      return NextResponse.json({ success: true, message: "Valuation request received" }, { status: 200 });
    }

    const body = await request.json();
    const { address, city, propertyType, beds, baths, name, email, phone, _gotcha } = body;

    // Honeypot check
    if (_gotcha && _gotcha.trim() !== "") {
      return NextResponse.json({ success: true, message: "Valuation request received" }, { status: 200 });
    }

    // Cyrillic & spam check
    const cyrillicRegex = /[\u0400-\u04FF]/;
    const combinedText = `${address || ""} ${name || ""} ${city || ""}`;
    if (cyrillicRegex.test(combinedText)) {
      return NextResponse.json({ success: true, message: "Valuation request received" }, { status: 200 });
    }

    if (!address || !email) {
      return NextResponse.json({ success: false, error: "Please provide property address and contact email." }, { status: 400 });
    }

    console.log(`[VALUATION REQUEST] Property: ${address}, ${city || "Silicon Valley"}, From: ${name} (${email}), Beds/Baths: ${beds}/${baths}`);

    return NextResponse.json({
      success: true,
      message: "Your property valuation request has been submitted. Joe Velasco will prepare a custom market comparative analysis for you."
    });
  } catch {
    return NextResponse.json({ success: false, error: "Unable to process valuation request." }, { status: 500 });
  }
}
