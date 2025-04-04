import { NextFunction, Response, Request } from "express";

export const authorize =
  (...roles: string[]) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      const { user } = req.body;

      if (!roles.includes(user.role)) {
        res.status(403).json({ message: "Уучлаарай таны эрх энэ үйлдлийг хийх боломжгүй байна" });
        return;
      }

      next();
    } catch (error) {
      res.status(500).json({
        message: "Internal server error. Please try again later.",
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  };
