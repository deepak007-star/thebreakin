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

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

interface EmailData {
  type: FormType;
  name?: string | null;
  email: string;
  phone?: string | null;
  subject?: string | null;
  message?: string | null;
  preferredDate?: string | null;
  linkedin?: string | null;
  referrer?: string | null;
  hasResume?: boolean;
  resumeFilename?: string | null;
}

function getEmailContent(data: EmailData) {
  const { type, name, email, phone, subject, message, preferredDate, linkedin, referrer, hasResume, resumeFilename } = data;

  switch (type) {
    case "contact":
      return {
        subject: `New Contact: ${subject || "Website Inquiry"}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name || "Not provided"}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Subject:</strong> ${subject || "Not provided"}</p>
          ${hasResume ? `<p><strong>Resume:</strong> Attached (${resumeFilename})</p>` : ""}
          <hr />
          <p><strong>Message:</strong></p>
          <p>${message || "No message provided"}</p>
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
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>LinkedIn:</strong> <a href="${linkedin}">${linkedin}</a></p>
          ${hasResume ? `<p><strong>Resume:</strong> Attached (${resumeFilename})</p>` : `<p><strong>Resume:</strong> Not provided</p>`}
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
    const formData = await request.formData();

    const type = formData.get("type") as FormType;
    const email = formData.get("email") as string;
    const name = formData.get("name") as string | null;
    const phone = formData.get("phone") as string | null;
    const subject = formData.get("subject") as string | null;
    const message = formData.get("message") as string | null;
    const preferredDate = formData.get("preferredDate") as string | null;
    const linkedin = formData.get("linkedin") as string | null;
    const referrer = formData.get("referrer") as string | null;
    const resumeFile = formData.get("resume") as File | null;

    if (!email || !type) {
      return NextResponse.json(
        { error: "Email and type are required" },
        { status: 400 }
      );
    }

    // Validate file if present
    if (resumeFile && resumeFile.size > 0) {
      if (resumeFile.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          { error: "File too large. Maximum size is 5MB." },
          { status: 400 }
        );
      }

      if (!ALLOWED_FILE_TYPES.includes(resumeFile.type)) {
        return NextResponse.json(
          { error: "Invalid file type. Only PDF, DOC, and DOCX are allowed." },
          { status: 400 }
        );
      }
    }

    // Prepare email data
    const data: EmailData = {
      type,
      email,
      name,
      phone,
      subject,
      message,
      preferredDate,
      linkedin,
      referrer,
      hasResume: !!(resumeFile && resumeFile.size > 0),
      resumeFilename: resumeFile?.name || null,
    };

    const { subject: emailSubject, html } = getEmailContent(data);

    // Prepare attachments
    const attachments: nodemailer.SendMailOptions["attachments"] = [];
    if (resumeFile && resumeFile.size > 0) {
      const buffer = Buffer.from(await resumeFile.arrayBuffer());
      attachments.push({
        filename: resumeFile.name,
        content: buffer,
        contentType: resumeFile.type,
      });
    }

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: emailSubject,
      html,
      attachments,
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
