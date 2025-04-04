import { FoodOrderStatusEnum } from "@/types";
import { clsx, type ClassValue } from "clsx";
import { format } from "date-fns";
import { DateRange } from "react-day-picker";
import { twMerge } from "tailwind-merge";

type emailValidTypes = {
  errors?: { email?: string };
  values: { email: string };
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isEmailValid = ({ errors, values }: emailValidTypes) => {
  return !!errors?.email || !values.email;
};

export const getMenuColor = (currentPath: string, menuPath: string) => {
  return (
    currentPath === menuPath &&
    "bg-primary rounded-full text-primary-foreground"
  );
};

export const getBorderColor = (
  status: FoodOrderStatusEnum
): string | undefined => {
  switch (status) {
    case FoodOrderStatusEnum.PENDING:
      return "rgb(239, 68, 68)";
    case FoodOrderStatusEnum.CANCELED:
      return "rgb(229, 231, 235)";
    case FoodOrderStatusEnum.DELIVERED:
      return "rgb(34, 197, 94)";
    default:
      return undefined;
  }
};

export const getOptionStyles = (statusState: string, option: string) => {
  if (statusState === option) {
    return {
      backgroundColor: "rgb(254, 226, 226)", // light red
      border: "1px solid rgb(248, 113, 113)", // red-500
      color: "rgb(220, 38, 38)", // red-600
    };
  }
  return undefined;
};

export const formatDate = (date?: DateRange) =>
  date?.from
    ? `${format(date.from, "LLL dd, y")}${
        date.to ? ` - ${format(date.to, "LLL dd, y")}` : ""
      }`
    : "Pick a date";
