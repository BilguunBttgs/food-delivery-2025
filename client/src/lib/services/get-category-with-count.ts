import { CategoryWithCount } from "@/components/admin/food-menu/DishesCategory";
import { axiosInstance } from "@/lib";
import { toast } from "sonner";

export const fetchCategoriesWithCount = async () => {
  const endPoint = "/food-category/with-count";

  try {
    const { data } = await axiosInstance.get<CategoryWithCount[]>(endPoint);

    if (data) {
      return { data };
    }

    throw new Error("No data received");
  } catch (error) {
    if (error instanceof Error) {
      toast.error(`{"Error fetching categories" : ${error.message})}`);
    }
    return { error: true, data: undefined };
  }
};
