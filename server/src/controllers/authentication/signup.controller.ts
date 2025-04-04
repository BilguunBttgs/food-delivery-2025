import { UserModel } from "../../models";
import { Request, Response } from "express";
import { hashPassword, createToken, isExistingUser } from "../../utils";

export const signUp = async (req: Request, res: Response) => {
  try {
    const { address, email, password } = req.body;

    if (!email) {
      res.status(400).json({ message: "Email is required." });
      return;
    }

    const existingUser = await isExistingUser(email);

    if (existingUser) {
      res.status(409).json({ message: "User is already registered." });
      return;
    }

    const hashedPassword = hashPassword(password);

    const { _id: userId } = await UserModel.create({
      email,
      address,
      password: hashedPassword,
    });

    const accessToken = createToken({ userId });

    res
      .status(201)
      .json({ message: "User successfully registered.", accessToken });
  } catch (error) {
    console.error("Error during signup:", error);

    res.status(500).json({
      message: "Internal Server Error",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
