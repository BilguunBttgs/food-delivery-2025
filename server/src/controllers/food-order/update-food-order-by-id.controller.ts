import { Request, Response } from "express";
import { FoodOrderModel } from "../../models";

export const updateFoodOrderById = async (req: Request, res: Response) => {
  try {
    const { foodOrderId } = req.params;
    const updateData = req.body;

    const updatedFoodOrder = await FoodOrderModel.findByIdAndUpdate(
      foodOrderId,
      updateData,
      {
        new: true,
      }
    );

    if (!updatedFoodOrder) {
      res.status(404).json({ message: "Food order not found" });
      return;
    }

    res
      .status(200)
      .json({ message: "Food order successfully updated", updatedFoodOrder });
  } catch (error) {
    console.error("Error updating food order:", error);

    res.status(500).json({
      message: "An error occurred while updating the food order",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
