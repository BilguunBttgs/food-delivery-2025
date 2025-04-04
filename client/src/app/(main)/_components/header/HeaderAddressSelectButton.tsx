import { ChevronRight, MapPin } from "lucide-react";

export const HeaderAddressSelectButton = () => {
  return (
    <div className="flex w-full h-full gap-1 px-3 py-2 bg-white rounded-full cursor-pointer">
      <MapPin color="#EF4444" />
      <div className="flex gap-1">
        <p className="text-[#EF4444]">Delivery address:</p>
        <p className="text-muted-foreground">Add Location</p>
      </div>
      <ChevronRight color="#71717A" />
    </div>
  );
};
