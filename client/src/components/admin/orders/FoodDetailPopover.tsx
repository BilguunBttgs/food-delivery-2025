import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FoodOrderItem } from "@/types";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import React from "react";

type FoodDetailPopoverProps = {
  foodOrderItems: FoodOrderItem[];
};

const isSingleFood = (count: number) => {
  if (count === 1) return `${count} food`;
  return `${count} foods`;
};

const FoodDetailPopover = ({ foodOrderItems }: FoodDetailPopoverProps) => {
  return (
    <Popover>
      <PopoverTrigger
        asChild
        className="flex items-center justify-between w-40 h-full px-4 border-none shadow-none bg-inherit"
      >
        <Button
          variant="outline"
          className="p-0 border-none shadow-none hover:bg-inheret"
        >
          <h1>{isSingleFood(foodOrderItems.length)}</h1>
          <ChevronDown />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="flex flex-col gap-3"
        alignOffset={-16}
      >
        {foodOrderItems.map(({ food, quantity }, index) => (
          <div key={index} className="flex gap-2.5 items-center text-sm">
            <div className="relative w-8 h-8">
              <Image
                src={food.image}
                layout="fill"
                className="absolute rounded-sm"
                alt="food-image"
              />
            </div>
            <h1 className="w-[171px]">{food.foodName}</h1>
            <h1>{`x ${quantity}`}</h1>
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
};

export default FoodDetailPopover;
