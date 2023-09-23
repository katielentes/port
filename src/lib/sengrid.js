import sgMail from "@sendgrid/mail";

export const sendEmail = async ({ email, fullname, subject, message }) => {
  sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);
  console.log("email", email);
  console.log(process.env, "process.env");
  console.log(
    process.env.NEXT_PUBLIC_SENDGRID_API_KEY,
    "process.env.NEXT_PUBLIC_SENDGRID_API_KEY"
  );

  const msg = {
    to: "lentesk@gmail.com",
    from: "lentesk@gmail.com",
    subject,
    text: `${message} from ${fullname} at ${email}`,
  };

  try {
    await sgMail.send(msg);
    console.log(`Email sent to ${to}`);
  } catch (error) {
    console.error(error);
  }
};
