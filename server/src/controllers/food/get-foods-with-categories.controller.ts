import { Request, Response } from "express";
import { FoodCategoryModel } from "../../models";

export const getFoodsWithCategories = async (_: Request, res: Response) => {
  try {
    const foodCategoriesWithCount = await FoodCategoryModel.aggregate([
      {
        $lookup: {
          from: "foods",
          localField: "_id",
          foreignField: "category",
          as: "foods",
        },
      },
      {
        $project: {
          Id: "$_id",
          categoryName: "$categoryName",
          count: { $size: "$foods" },
          foods: "$foods",
        },
      },
    ]);

    const formattedResponse = foodCategoriesWithCount.map((category) => ({
      Id: category.Id.toString(),
      categoryName: category.categoryName,
      count: category.count,
      foods:
        category.foods?.map((food: any) => ({
          _id: food._id.toString(),
          foodName: food.foodName,
          image: food.image,
          price: food.price,
          ingredients: food.ingredients,
        })) || [],
    }));

    res.status(200).json(formattedResponse);
  } catch (error) {
    console.error("Error fetching food categories:", error);

    res.status(500).json({
      message: "An error occurred while fetching food categories.",
      error: error instanceof Error ? error.message : "Unknown error.",
    });
  }
};
