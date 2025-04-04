import { axiosInstance } from "@/lib";
import { FoodOrder } from "@/types";

export const fetchAllOrders = async (): Promise<FoodOrder | undefined> => {
  const endPoint = "/food-order";
  const token = localStorage.getItem("token");

  try {
    const { data } = await axiosInstance.get<FoodOrder>(endPoint, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (data) {
      return data;
    }

    throw new Error("No data received");
  } catch (error) {
    console.error("Error fetching orders:", error);
    return undefined;
  }
};
