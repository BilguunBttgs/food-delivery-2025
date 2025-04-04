"use client";

import { fetchCategoriesWithCount } from "@/lib";
import { useEffect, useState } from "react";
import { DishesCategorySkeleton } from "./DishesCategorySkeleton";
import { AddCategoryModal } from "./AddCategoryModal";

export type CategoryWithCount = {
  categoryName: string;
  count: number;
};

export const DishesCategory = () => {
  const [categories, setCategories] = useState<CategoryWithCount[] | undefined>(
    []
  );

  const fetchData = async () => {
    const { data } = await fetchCategoriesWithCount();
    setCategories(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!categories) return null;

  if (!categories.length) return <DishesCategorySkeleton />;

  const allDishesCount = categories.reduce(
    (acc, category) => acc + category.count,
    0
  );

  return (
    <div className="flex flex-col gap-4 p-6 bg-background rounded-xl">
      <p className="text-xl font-semibold">Dishes category</p>
      <div className="flex flex-wrap gap-3">
        <div className="flex gap-2 px-4 py-2 border rounded-full">
          <p className="text-sm font-medium">All dishes</p>
          <p className="text-xs bg-black text-white rounded-full px-2 py-[2px] flex items-center font-semibold leading-4x">
            {allDishesCount}
          </p>
        </div>
        {categories?.map((category, index) => (
          <div key={index} className="flex gap-2 px-4 py-2 border rounded-full">
            <p className="text-sm font-medium">{category?.categoryName}</p>
            <p className="text-xs bg-black text-white rounded-full px-[10px] py-[2px] flex items-center font-semibold leading-4x">
              {category?.count}
            </p>
          </div>
        ))}
        <AddCategoryModal />
      </div>
    </div>
  );
};
