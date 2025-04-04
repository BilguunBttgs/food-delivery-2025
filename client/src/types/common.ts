export enum FoodOrderStatusEnum {
  DELIVERED = "DELIVERED",
  PENDING = "PENDING",
  CANCELED = "CANCELED",
}

export const statusClasses: Record<FoodOrderStatusEnum, string> = {
  [FoodOrderStatusEnum.PENDING]: "border-red-500",
  [FoodOrderStatusEnum.CANCELED]: "border-border",
  [FoodOrderStatusEnum.DELIVERED]: "border-green-500",
};

export enum UserRoleEnum {
  USER = "USER",
  ADMIN = "ADMIN",
}
