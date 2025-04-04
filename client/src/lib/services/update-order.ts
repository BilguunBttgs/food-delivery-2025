import { axiosInstance } from "@/lib";
import { AllFoodOrders } from "@/types";
import { toast } from "sonner";

export const updateOrder = async (
  id: string,
  payload: Partial<AllFoodOrders>
): Promise<AllFoodOrders | undefined> => {
  const endPoint = `/food-order/${id}`;
  const token = localStorage.getItem("token");

  try {
    await axiosInstance.patch<AllFoodOrders>(endPoint, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    toast.success("Status updated successfully");
  } catch (error) {
    toast.error(`Failed to update status: ${error}`);
    return undefined;
  }
};
