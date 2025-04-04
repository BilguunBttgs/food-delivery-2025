import { Request, Response } from "express";
import { FoodCategoryModel } from "../../models";

export const createFoodCategory = async (req: Request, res: Response) => {
  try {
    const foodCategoryData = req.body;

    const newFoodCategory = await FoodCategoryModel.create(foodCategoryData);

    res.status(201).json({ message: "Food category created successfully", newFoodCategory });
  } catch (error) {
    console.error("Error creating food category:", error);

    res.status(500).json({
      message: "Error occurred while creating the food category",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
