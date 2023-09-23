import sendgrid from "@sendgrid/mail";
import { NextResponse } from "next/server";

sendgrid.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

export async function POST(req) {
  const { email, fullname, subject, message } = await req.json();
  try {
    const response = await sendgrid.send({
      to: "lentesk@gmail.com", // Your email where you'll receive emails
      from: "lentesk@gmail.com", // your website email address here
      subject: subject,
      html: `<div>Message from: ${fullname} at ${email}: ${message}</div>`,
    });
    const data = await response.json();

    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ message: "Internal server error" });
  }
}
