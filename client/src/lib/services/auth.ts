import {
  LoginResponse,
  PasswordResetResponse,
  PasswordResetTypes,
  SendPasswordResetMail,
  SignUpResponse,
  SignUpTypes,
} from "@/constants/auth";
import { axiosInstance } from "../axios-instance";
import { toast } from "sonner";

export const handleSignUp = async ({ email, password }: SignUpTypes) => {
  const endPoint = "/auth/sign-up";
  const payload = {
    email: email,
    password: password,
  };

  try {
    const { data } = await axiosInstance.post<SignUpResponse>(
      endPoint,
      payload
    );
    if (data) {
      toast.success(data.message);
      return data;
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      toast.error("Error signing up", { description: error.message });
    }
  }
};

export const handleSignIn = async ({ email, password }: SignUpTypes) => {
  const endPoint = "/auth/sign-in";

  const payload = {
    email: email,
    password: password,
  };

  try {
    const { data } = await axiosInstance.post<LoginResponse>(endPoint, payload);

    toast.success(data?.message);

    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      toast.error("Error signing up", { description: error.message });
    }
  }
};

export const handleSendPasswordResetMail = async ({
  email,
}: SendPasswordResetMail) => {
  const endPoint = "/auth/forgot-password";
  const payload = {
    email: email,
  };
  try {
    const { data } = await axiosInstance.post<PasswordResetResponse>(
      endPoint,
      payload
    );

    toast.success(data?.message);
  } catch (error) {
    if (error instanceof Error) {
      toast.error("Error sending email", { description: error.message });
    }
  }
};

export const handlePasswordReset = async ({
  token,
  password,
}: PasswordResetTypes) => {
  const endPoint = "/auth/reset-password";
  const payload = {
    token: token,
    password: password,
  };

  try {
    const { data } = await axiosInstance.put<PasswordResetResponse>(
      endPoint,
      payload
    );

    toast.success(data?.message);

    return { error: false, data: data };
  } catch (error) {
    if (error) {
      toast.error("Error resetting password", {
        description: "Please try again",
      });
      return { error: true, data: undefined };
    }
  }
};
