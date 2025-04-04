import { compareSync, hashSync } from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const { BASE_URL, JWT_SECRET } = process.env;

export const hashPassword = (password: string): string => {
  const saltRounds = 10;
  return hashSync(password, saltRounds);
};

export const comparePassword = (password: string, hashedPassword: string) => {
  return compareSync(password, hashedPassword);
};

export const generatePasswordResetLink = (userId: string): string => {
  const token = jwt.sign({ userId }, JWT_SECRET as string, { expiresIn: "1h" });
  return `${BASE_URL}/reset-password?token=${token}`;
};
