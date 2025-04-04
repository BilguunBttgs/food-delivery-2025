import { UserModel } from "../../models";
import { Request, Response } from "express";
import { comparePassword, createToken } from "../../utils";

export const signIn = async (req: Request, res: Response) => {
  try {
    const { password, email } = req.body;

    const user = await UserModel.findOne({ email }).select("+password");

    if (!user) {
      res.status(401).json({ message: "No user found with this email." });
      return;
    }

    const isPasswordCorrect = comparePassword(password, user.password);

    if (!isPasswordCorrect) {
      res.status(401).json({ message: "Incorrect email or password." });
      return;
    }

    const accessToken = createToken({ userId: user._id });

    res
      .status(200)
      .json({ message: "Successfully logged in.", token: accessToken, user });
  } catch (error) {
    console.error("Error during sign-in:", error);

    res.status(500).json({
      message: "Internal Server Error",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
