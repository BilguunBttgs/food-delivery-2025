import { SidebarDashLine } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Food } from "@/types";
import { CircleX, Minus, Plus } from "lucide-react";
import Image from "next/image";

export const OrderSheetFoodItem = ({ food }: { food: Food }) => {
  return (
    <>
      <div className="flex gap-3">
        <div className="w-[124px] h-[120px] relative rounded-lg overflow-hidden">
          <Image
            className="fill"
            src={food?.image}
            objectFit="cover"
            layout="fill"
            alt={food?.foodName}
          />
        </div>

        <div className="w-[300px] flex flex-col justify-between">
          <div className="flex">
            <div className="w-full">
              <h3 className="font-bold text-red-500">{food?.foodName}</h3>
              <div className="flex flex-wrap">
                <p className="text-xs font-light">{food.ingredients}</p>
              </div>
            </div>
            <CircleX strokeWidth={0.5} size={50} color="red" />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Button variant="ghost">
                <Minus />
              </Button>

              <div className="text-lg font-semibold">1</div>

              <Button variant="ghost">
                <Plus />
              </Button>
            </div>

            <h4 className="font-bold">{food?.price}</h4>
          </div>
        </div>
      </div>
      <SidebarDashLine />
    </>
  );
};
