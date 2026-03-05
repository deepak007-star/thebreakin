import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 465,
  secure: true, // Use SSL for port 465
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

type FormType = "contact" | "consultation" | "lead";

interface EmailData {
  type: FormType;
  name?: string;
  email: string;
  phone?: string;
  subject?: string;
  message?: string;
  preferredDate?: string;
  linkedin?: string;
  referrer?: string;
}

function getEmailContent(data: EmailData) {
  const { type, name, email, phone, subject, message, preferredDate, linkedin, referrer } = data;

  switch (type) {
    case "contact":
      return {
        subject: `New Contact: ${subject || "Website Inquiry"}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      };

    case "consultation":
      const formattedDate = preferredDate
        ? new Date(preferredDate).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })
        : "Not provided";
      return {
        subject: `New Consultation Request - ${formattedDate}`,
        html: `
          <h2>New Free Consultation Request</h2>
          <p>A visitor has requested a free consultation.</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Name:</strong> ${name || "Not provided"}</p>
          <p><strong>Preferred Date:</strong> ${formattedDate}</p>
          <hr />
          <p>Please reach out to confirm the consultation for their preferred date.</p>
        `,
      };

    case "lead":
      return {
        subject: `New Lead from ${referrer || "direct"}: ${name || "Unknown"}`,
        html: `
          <h2>New Influencer Referral Lead</h2>
          <p><strong>Referrer:</strong> ${referrer || "direct"}</p>
          <hr />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>LinkedIn:</strong> <a href="${linkedin}">${linkedin}</a></p>
          <hr />
          <p><em>This lead was captured through the influencer referral system.</em></p>
        `,
      };

    default:
      return {
        subject: "New Form Submission",
        html: `<p>New submission received: ${JSON.stringify(data)}</p>`,
      };
  }
}

export async function POST(request: NextRequest) {
  try {
    const data: EmailData = await request.json();

    if (!data.email || !data.type) {
      return NextResponse.json(
        { error: "Email and type are required" },
        { status: 400 }
      );
    }

    const { subject, html } = getEmailContent(data);

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.EMAIL_TO,
      replyTo: data.email,
      subject,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: "Failed to send email", details: errorMessage },
      { status: 500 }
    );
  }
}
