import { axiosInstance } from "@/lib";
import { AllFoodOrders } from "@/types";
import { toast } from "sonner";

export const updateMultipleOrder = async (
  ids: string[],
  updateData: Partial<AllFoodOrders>
): Promise<AllFoodOrders | undefined> => {
  const endPoint = `/food-order`;
  const token = localStorage.getItem("token");

  try {
    await axiosInstance.put(
      endPoint,
      { ids, updateData },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    toast.success(`${ids.length} orders updated successfully`);
  } catch (error) {
    toast.error(`Failed to update selected order ${error}.`);
    return undefined;
  }
};
