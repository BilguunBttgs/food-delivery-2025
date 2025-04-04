import { UserModel } from "../../models";
import { createToken, verifyToken } from "../../utils";
import { Request, Response } from "express";

export const getCurrentUser = async (req: Request, res: Response) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      res.status(401).json({ message: "Authorization token is required." });
      return;
    }

    const token = authHeader.split(" ")[1];

    const decoded = verifyToken(token);

    const { userId } = decoded;

    const user = await UserModel.findById(userId);

    if (!user) {
      res.status(404).json({ message: "User not found." });
      return;
    }

    res.status(200).json({ message: "Success", user });
    return;
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
