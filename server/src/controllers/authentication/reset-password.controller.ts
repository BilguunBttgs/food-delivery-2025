import { Request, Response } from "express";
import {
  hashPassword,
  invalidateToken,
  isTokenBlacklisted,
  verifyToken,
} from "../../utils";
import { UserModel } from "../../models";

export const resetPassword = async (req: Request, res: Response) => {
  const { token, password } = req.body;

  try {
    if (isTokenBlacklisted(token)) {
      res.status(403).json({ message: "Token is invalid" });
      return;
    }

    const { userId } = verifyToken(token);
    const hashedPassword = hashPassword(password);

    const updatedUserPassword = await UserModel.findByIdAndUpdate(
      userId,
      { password: hashedPassword },
      {
        new: true,
      }
    );

    if (!updatedUserPassword) {
      res.status(404).json({ message: "Failed to reset password" });
      return;
    }

    res.status(200).json({ message: "Password successfully reset" });
    invalidateToken(token);
  } catch (error) {
    res.status(500).json({ message: "Request is invalid, try again" });
  }
};
