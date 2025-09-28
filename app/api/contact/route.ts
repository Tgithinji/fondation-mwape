import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, message } = body;
    const fullName = `${firstName} ${lastName}`;

    // Send email to organization
    await resend.emails.send({
      from: "onboarding@fmmps.org",
      to: "contact@fmmps.org",
      replyTo: email,
      subject: `New Contact Form Submission from ${fullName}`,
      text: `New contact form submission received:

Name: ${fullName}
Email: ${email}
Message:
${message}

Please respond to this inquiry as soon as possible.`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2d3748;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <div style="background-color: #f8f9fa; padding: 15px; border-left: 4px solid #4f46e5; margin: 10px 0;">
            ${message.replace(/\n/g, "<br>")}
          </div>
          <p style="margin-top: 20px; color: #666; font-size: 0.9em;">
            Please respond to this inquiry as soon as possible.
          </p>
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #718096; font-size: 0.8em;">
            <p>This is an automated message from Fondation Mwape contact form.</p>
          </div>
        </div>
      `,
    });

    // Send confirmation to user
    await resend.emails.send({
      from: "onboarding@fmmps.org",
      to: email,
      replyTo: "contact@fmmps.org",
      subject: "Thank you for contacting Fondation Mwape",
      text: `Dear ${firstName},

Thank you for reaching out to Fondation Mwape. We have received your message and will respond to you as soon as possible.

Here's a copy of your message for your records:

${message}

Best regards,
The Fondation Mwape Team`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2d3748;">Thank You for Contacting Us</h2>
          <p>Dear ${firstName},</p>
          <p>Thank you for reaching out to Fondation Mwape. We have received your message and will respond to you as soon as possible.</p>
          
          <div style="background-color: #f8f9fa; padding: 15px; border-left: 4px solid #4f46e5; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #4a5568;">Your Message:</h3>
            <p>${message.replace(/\n/g, "<br>")}</p>
          </div>
          
          <p>If you have any further questions, please don't hesitate to contact us at contact@fmmps.org.</p>
          
          <p style="margin-top: 30px;">Best regards,<br>The Fondation Mwape Team</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #718096; font-size: 0.8em;">
            <p>This is an automated message. Please do not reply to this email.</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form submission error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send message" },
      { status: 500 },
    );
  }
}
