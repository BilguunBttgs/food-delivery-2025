import { UserModel } from "../../models";
import { createToken } from "../../utils";
import { Request, Response } from "express";

export const getUserById = async (req: Request, res: Response) => {
  try {
    const { _id } = req.body.user;

    const user = await UserModel.findById(_id);

    if (!user) {
      res.status(404).json({ message: "User not found." });
      return;
    }

    const accessToken = createToken({ userId: _id });

    res.status(200).json({ message: "Success", user, accessToken });
  } catch (error) {
    console.error("Error retrieving user:", error);

    res.status(500).json({
      message: "Internal Server Error",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
