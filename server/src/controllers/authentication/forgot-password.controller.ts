import { Request, Response } from "express";

import {
  generatePasswordResetLink,
  isExistingUser,
  sendPasswordResetEmail,
} from "../../utils";

export const forgotPassword = async (req: Request, res: Response) => {
  const { email } = req.body;

  if (!email) {
    res.status(400).json({ message: "Email is required" });

    return;
  }

  try {
    const user = await isExistingUser(email);

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    const passwordResetLink = generatePasswordResetLink(user.id);

    await sendPasswordResetEmail(email, passwordResetLink);

    res.status(200).json({ message: "Password reset email sent successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to send password reset email" });
  }
};
