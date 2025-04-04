"use client";
import { updateOrder } from "@/lib/services/update-order";
import { AllFoodOrders, FoodOrderStatusEnum } from "@/types";
import { ChevronsUpDown } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { getBorderColor } from "@/lib";

type DeliveryStatusProps = {
  status: FoodOrderStatusEnum;
  orderId: string;
  setFoodOrders: Dispatch<SetStateAction<AllFoodOrders[]>>;
};

const statusOptions = Object.values(FoodOrderStatusEnum);

const DeliveryStatus = ({
  status,
  orderId,
  setFoodOrders,
}: DeliveryStatusProps) => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const handleSaveStatus = (option: FoodOrderStatusEnum) => async () => {
    if (status === option) return;

    setPopoverOpen(false);
    await updateOrder(orderId, { status: option });
    setFoodOrders((prev) =>
      prev.map((order) => {
        if (order._id === orderId) {
          return { ...order, status: option };
        }
        return order;
      })
    );
  };

  return (
    <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
      <PopoverTrigger>
        <div
          className={`border rounded-full px-2.5 flex items-center text-primary h-8 text-xs font-semibold gap-2.5 `}
          style={{
            borderColor: getBorderColor(status),
          }}
        >
          <p className="text-">{status}</p>
          <ChevronsUpDown size={16} />
        </div>
      </PopoverTrigger>
      <PopoverContent className="flex flex-col p-1 w-[140px]" align="start">
        {statusOptions.map((option) => (
          <div
            className="flex items-center p-2 rounded-sm cursor-pointer hover:bg-black/15"
            key={option}
            onClick={handleSaveStatus(option)}
          >
            <Badge
              variant="secondary"
              className={`text-xs font-medium rounded-full`}
            >
              {option.charAt(0).toUpperCase() + option.slice(1).toLowerCase()}
            </Badge>
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
};

export default DeliveryStatus;
