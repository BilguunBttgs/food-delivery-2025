import { LoginResponse } from "@/constants/auth";
import { axiosInstance } from "../axios-instance";

export const getCurrentUser = async (token: string | false | null) => {
  const endPoint = "/auth/get-current-user";

  try {
    const { data } = await axiosInstance.get<LoginResponse>(endPoint, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (data) {
      return data;
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      return;
    }
  }
};
