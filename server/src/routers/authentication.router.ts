import { Router } from "express";
import { authenticateUser } from "../middleware";
import {
  signIn,
  signUp,
  getUserById,
  forgotPassword,
  resetPassword,
  getCurrentUser,
} from "../controllers";

export const authenticationRouter = Router();

authenticationRouter.post("/sign-in", signIn);
authenticationRouter.post("/sign-up", signUp);

authenticationRouter.post("/forgot-password", forgotPassword);
authenticationRouter.put("/reset-password", resetPassword);

authenticationRouter.get("/refresh", authenticateUser, getUserById);
authenticationRouter.get("/get-current-user", getCurrentUser);
