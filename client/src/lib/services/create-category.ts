import { axiosInstance } from "@/lib";
import { toast } from "sonner";

export const createCategory = async (payload: { categoryName: string }) => {
  const endPoint = "/food-category";
  const token = localStorage.getItem("token");

  if (!token) {
    toast.error("Token not found");
    return undefined;
  }

  try {
    const response = await axiosInstance.post(endPoint, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (response.status !== 201) {
      throw new Error("Cannot create category");
    }

    toast.success("Category created successfully");
  } catch (error) {
    toast.error(`Error fetching categories: ${error}`);
    return undefined;
  }
};
