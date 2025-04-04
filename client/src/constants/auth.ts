export type User = {
  id: string;
  name?: string;
  email: string;
  address?: string;
  role: string;
  orderedFoods: string[];
};

export type SignUpTypes = {
  email: string;
  password: string;
};

export type SendPasswordResetMail = {
  email: string;
};

export type PasswordResetTypes = {
  token: string | null;
  password: string;
};

export type SignUpResponse = {
  message: string;
  accessToken: string;
};

export type LoginResponse = {
  message: string;
  token: string;
  user: User;
};

export type PasswordResetResponse = {
  message: string;
};
