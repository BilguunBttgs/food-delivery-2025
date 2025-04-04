import { axiosInstance } from "@/lib";
import { toast } from "sonner";

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

export const fetchFoodsWithCategories = async (): Promise<{
  data?: FoodCategory[];
  error?: boolean;
}> => {
  const endPoint = "/food/with-categories";

  try {
    const { data } = await axiosInstance.get<FoodCategory[]>(endPoint);

    if (data) {
      return { data };
    }

    throw new Error("No data received");
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unexpected error occurred";
    toast.error(`Error fetching categories: ${errorMessage}`);
    return { error: true, data: undefined };
  }
};
