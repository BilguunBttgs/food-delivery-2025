import dotenv from "dotenv";
import jwt, { JwtPayload } from "jsonwebtoken";

interface TokenPayload extends JwtPayload {
  userId: string;
}

dotenv.config();

const TOKEN_EXPIRATION = "1d";
const SECRET_KEY = process.env.JWT_SECRET || "my_secret";

export const createToken = (
  payload: object,
  expiresIn: string = TOKEN_EXPIRATION
) => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
};

export const verifyToken = (token: string): TokenPayload => {
  try {
    const decoded = jwt.verify(token, SECRET_KEY) as TokenPayload;
    if (!decoded.userId) {
      throw new Error("Invalid token payload");
    }
    return decoded;
  } catch (error) {
    throw new Error("Invalid or expired token");
  }
};

const tokenBlacklist = new Set();

export const invalidateToken = (token: string) => {
  tokenBlacklist.add(token);
};

export const isTokenBlacklisted = (token: string) => {
  return tokenBlacklist.has(token);
};
