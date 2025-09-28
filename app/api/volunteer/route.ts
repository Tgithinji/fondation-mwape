import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(
  process.env.RESEND_API_KEY,
);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, email, phone, availability, skills, motivation } = body;

    // Send email to organization
    await resend.emails.send({
      from: "onboarding@fmmps.org",
      to: "contact@fmmps.org",
      replyTo: email,
      subject: `New Volunteer Application: ${fullName}`,
      text: `New volunteer application received:

Name: ${fullName}
Email: ${email}
Phone: ${phone}

Availability:
${availability}

Skills:
${skills}

Motivation:
${motivation}

Please review this application and follow up with the applicant.`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2d3748;">New Volunteer Application</h2>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          
          <h3 style="color: #4a5568; margin-top: 20px;">Availability</h3>
          <div style="background-color: #f8f9fa; padding: 15px; border-left: 4px solid #4f46e5; margin: 10px 0;">
            ${availability.replace(/\n/g, "<br>")}
          </div>
          
          <h3 style="color: #4a5568; margin-top: 20px;">Skills</h3>
          <div style="background-color: #f8f9fa; padding: 15px; border-left: 4px solid #4f46e5; margin: 10px 0;">
            ${skills.replace(/\n/g, "<br>")}
          </div>
          
          <h3 style="color: #4a5568; margin-top: 20px;">Motivation</h3>
          <div style="background-color: #f8f9fa; padding: 15px; border-left: 4px solid #4f46e5; margin: 10px 0 20px 0;">
            ${motivation.replace(/\n/g, "<br>")}
          </div>
          
          <p>Please review this application and follow up with the applicant.</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #718096; font-size: 0.8em;">
            <p>This is an automated message from Fondation Mwape volunteer application form.</p>
          </div>
        </div>
      `,
    });

//     // Send confirmation to user
    await resend.emails.send({
      from: "onboarding@fmmps.org",
      to: email,
      replyTo: "contact@fmmps.org",
      subject: "Thank you for your volunteer application",
      text: `Dear ${fullName},

Thank you for your interest in volunteering with Fondation Mwape. We have received your application and will review it carefully.

Here's a summary of the information you provided:

Name: ${fullName}
Email: ${email}
Phone: ${phone || "Not provided"}

Availability:
${availability}

Skills:
${skills}

Motivation:
${motivation}

We appreciate your interest in our cause and will be in touch soon regarding the next steps in the volunteer application process.

Best regards,
The Fondation Mwape Team`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2d3748;">Thank You for Your Application</h2>
          <p>Dear ${fullName},</p>
          <p>Thank you for your interest in volunteering with Fondation Mwape. We have received your application and will review it carefully.</p>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #4a5568; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px;">Your Application Summary</h3>
            
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
            
            <h4 style="margin: 20px 0 10px 0; color: #4a5568;">Availability</h4>
            <div style="background-color: white; padding: 10px; border-radius: 4px; margin-bottom: 15px;">
              ${availability.replace(/\n/g, "<br>")}
            </div>
            
            <h4 style="margin: 20px 0 10px 0; color: #4a5568;">Skills</h4>
            <div style="background-color: white; padding: 10px; border-radius: 4px; margin-bottom: 15px;">
              ${skills.replace(/\n/g, "<br>")}
            </div>
            
            <h4 style="margin: 20px 0 10px 0; color: #4a5568;">Motivation</h4>
            <div style="background-color: white; padding: 10px; border-radius: 4px;">
              ${motivation.replace(/\n/g, "<br>")}
            </div>
          </div>
          
          <p>We appreciate your interest in our cause and will be in touch soon regarding the next steps in the volunteer application process.</p>
          
          <p style="margin-top: 30px;">Best regards,<br>The Fondation Mwape Team</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #718096; font-size: 0.8em;">
            <p>This is an automated message. Please do not reply to this email.</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Volunteer form submission error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit application" },
      { status: 500 },
    );
  }
}
