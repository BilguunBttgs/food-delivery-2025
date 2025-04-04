import { UserModel } from "../models";
import { verifyToken } from "../utils";
import { NextFunction, Response, Request } from "express";

export const authenticateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authorization = req.headers.authorization;

    if (!authorization || !authorization.startsWith("Bearer ")) {
      res.status(401).json({ message: "Unauthorized access. Please provide a valid token." });
      return;
    }

    const token = authorization.split(" ")[1];

    if (!token) {
      res.status(401).json({ message: "Unauthorized access. Token is missing." });
      return;
    }

    const decodedToken = verifyToken(token) as { userId: string };

    if (!decodedToken || !decodedToken.userId) {
      res.status(401).json({ message: "Unauthorized access. User ID is missing from token." });
      return;
    }

    const foundUser = await UserModel.findById(decodedToken.userId);

    if (!foundUser) {
      res.status(401).json({ message: "Unauthorized access. User not found." });
      return;
    }

    req.body.user = foundUser;

    next();
  } catch (error) {
    console.error("Authentication Error:", error);
    res.status(500).json({ message: "Internal server error. Please try again later." });
  }
};
