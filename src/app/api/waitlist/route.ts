import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Send confirmation email to the subscriber
    await resend.emails.send({
      from: "ContentForge <waitlist@contentforge.ai>",
      to: email,
      subject: "You're on the ContentForge waitlist!",
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 480px; margin: 0 auto; padding: 32px;">
          <h2 style="color: #4f46e5;">Welcome to the ContentForge waitlist!</h2>
          <p>Thanks for signing up. We'll notify you when ContentForge launches with early access and founding-member pricing.</p>
          <p style="color: #64748b; font-size: 14px;">— The ContentForge Team</p>
        </div>
      `,
    });

    // Notify the founder about the new signup
    await resend.emails.send({
      from: "ContentForge Waitlist <waitlist@contentforge.ai>",
      to: "martinyu@enalchemy.com",
      subject: `New waitlist signup: ${email}`,
      html: `<p>New ContentForge waitlist signup: <strong>${email}</strong></p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Waitlist error:", error);
    return NextResponse.json(
      { error: "Failed to process signup" },
      { status: 500 }
    );
  }
}
