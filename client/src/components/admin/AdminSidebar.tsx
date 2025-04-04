"use client";

import { cn, getMenuColor } from "@/lib";
import { ADMIN_SIDEBAR_MENUS } from "@/constants";
import { usePathname, useRouter } from "next/navigation";
import { HeaderLogo } from "@/app/(main)/_components/header/HeaderLogo";

export const AdminSidebar = () => {
  const { push } = useRouter();
  const pathname = usePathname();

  const handleClickMenu = (path: string) => () => push(path);

  return (
    <div className="w-[205px] px-5 py-9 space-y-10 h-[100vh] bg-background">
      <HeaderLogo textColor={["black", "black", "#71717A"]} />
      <div className="space-y-6">
        {ADMIN_SIDEBAR_MENUS.map(({ value, path, Icon }, index) => (
          <div
            key={index}
            onClick={handleClickMenu(path)}
            className={cn(
              "flex gap-[10px] px-6 py-2 items-center cursor-pointer",
              getMenuColor(pathname, path)
            )}
          >
            <Icon size={22} strokeWidth={1} />
            <p className="text-sm">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
