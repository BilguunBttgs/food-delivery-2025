import { ROUTES } from "./routes";
import { LayoutDashboard, Truck, Settings } from "lucide-react";

export const ADMIN_SIDEBAR_MENUS = [
  {
    value: "Food menu",
    path: ROUTES.APP.FOOD_MENU,
    Icon: LayoutDashboard,
  },
  {
    value: "Orders",
    path: ROUTES.APP.ORDERS,
    Icon: Truck,
  },
  {
    value: "Settings",
    path: ROUTES.APP.SETTINGS,
    Icon: Settings,
  },
];
