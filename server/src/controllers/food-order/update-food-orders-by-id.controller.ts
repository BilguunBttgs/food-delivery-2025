import { Request, Response } from "express";
import { FoodOrderModel } from "../../models";

export const updateFoodsOrderById = async (req: Request, res: Response) => {
  try {
    const { ids, updateData } = req.body;

    const result = await FoodOrderModel.updateMany(
      { _id: { $in: ids } },
      { $set: updateData },
      { new: true }
    );

    res.status(200).json({
      message: "Food orders successfully updated",
      updatedCount: result.modifiedCount,
    });
  } catch (error) {
    console.error("Error updating food orders:", error);

    res.status(500).json({
      message: "An error occurred while updating the food orders",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
