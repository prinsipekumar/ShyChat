import { transporter } from "../lib/nodemailer.js";
import { ENV } from "../lib/env.js";
import { createWelcomeEmailTemplate } from "./emailTemplates.js";

export const sendWelcomeEmail = async (email, name, clientURL) => {
  const mailOptions = {
    from: `ShyChat <${ENV.EMAIL}>`,
    to: email,
    subject: "Welcome to ShyChat!",
    html: createWelcomeEmailTemplate(name, clientURL),
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Welcome Email sent successfully:", info.messageId);
    return info;
  } catch (error) {
    console.error("Error sending welcome email:", error);
    throw new Error("Failed to send welcome email");
  }
};
