import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const { EMAIL_USER, EMAIL_PASS } = process.env;

export const sendPasswordResetEmail = async (
  email: string,
  resetLink: string
) => {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Food Delivery" <${EMAIL_USER}>`,
    to: email,
    subject: "Password Reset Request",
    html: `
        <h1>Password Reset Request</h1>
        <p>Click the link below to reset your password. This link is valid for 1 hour.</p>
        <a href="${resetLink}" target="_blank">Reset Password</a>
      `,
  };

  await transporter.sendMail(mailOptions);
};
