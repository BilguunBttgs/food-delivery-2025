import { UserModel } from "../models";

export const isExistingUser = async (email: string) => {
  return await UserModel.findOne({ email });
};
