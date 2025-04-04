import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_FOOD_DELIVERY_SERVER_API,
  headers: {
    "Content-Type": "application/json",
  },
});
