import { FoodModel } from "../../models";
import { Request, Response } from "express";

export const createFood = async (req: Request, res: Response) => {
  try {
    const foodData = req.body;

    const newFood = await FoodModel.create(foodData);

    res.status(201).json({ message: "Food successfully created", newFood });
  } catch (error) {
    console.error("Error creating food:", error);

    res.status(500).json({
      message: "Error occurred while creating food",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
