import { FoodModel } from "../../models";
import { Request, Response } from "express";

export const getAllFoods = async (req: Request, res: Response) => {
  try {
    const { foodCategoryId, offset = 0, limit = 20 } = req.query;

    const filter = foodCategoryId ? { category: foodCategoryId } : {};

    const foods = await FoodModel.find(filter).sort({ createdAt: -1 }).limit(Number(limit)).skip(Number(offset));

    const totalFoods = await FoodModel.countDocuments(filter);

    res.status(200).json({ total: totalFoods, foods });
  } catch (error) {
    console.error("Error fetching foods:", error);

    res.status(500).json({
      message: "An error occurred while fetching foods",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
