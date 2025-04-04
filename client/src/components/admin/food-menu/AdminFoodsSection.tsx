"use client";

import { fetchFoodsWithCategories } from "@/lib/services/get-foods-with-categories";
import { useEffect, useState } from "react";
import { AdminFoodCard } from "./AdminFoodCard";
import { AdminFoodSkeleton } from "./AdminFoodSkeleton";

type FoodCategory = {
  _id: string;
  categoryName: string;
  count: number;
  foods: {
    foodName: string;
    price: number;
    image: string;
    ingredients: string;
  }[];
};

export const AdminFoodsSection = () => {
  const [foodsWithCategories, setFoodsWithCategories] = useState<
    FoodCategory[]
  >([]);

  const fetchData = async () => {
    const { data } = await fetchFoodsWithCategories();
    setFoodsWithCategories(data || []);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!foodsWithCategories) return null;

  if (!foodsWithCategories.length) return <AdminFoodSkeleton />;

  return (
    <div className="flex flex-col gap-6">
      {foodsWithCategories.map((category) => (
        <div
          key={category._id}
          className="flex flex-col gap-4 p-6 bg-background rounded-xl"
        >
          <div className="flex items-center text-xl font-semibold gap-2">
            <p>{category.categoryName}</p>
            <p className="flex items-center">{category.count}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            {category.foods.map((food) => (
              <div
                key={`${category._id}-${food.foodName}`}
                className="flex gap-2"
              >
                <AdminFoodCard
                  image={food.image}
                  price={food.price}
                  ingredients={food.ingredients}
                  foodName={food.foodName}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
