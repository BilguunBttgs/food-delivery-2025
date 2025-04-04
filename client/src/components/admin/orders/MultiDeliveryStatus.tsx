"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { getOptionStyles } from "@/lib";
import { updateMultipleOrder } from "@/lib/services/update-multiple-order";
import { AllFoodOrders, FoodOrderStatusEnum } from "@/types";
import { X } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";

type MultiDeliveryStatusProps = {
  selectedColumnIds: string[];
  setRowSelection: Dispatch<SetStateAction<"">>;

  setFoodOrders: Dispatch<SetStateAction<AllFoodOrders[] | undefined>>;
};

const statusOptions = Object.values(FoodOrderStatusEnum);

const renderSelectedRow = (selectedColumnCount: number) => {
  if (!selectedColumnCount) return null;
  return (
    <Badge className="rounded-full" variant="secondary">
      {selectedColumnCount}
    </Badge>
  );
};

const MultiDeliveryStatus = ({
  selectedColumnIds,
  setRowSelection,
  setFoodOrders,
}: MultiDeliveryStatusProps) => {
  const [statusState, setStatusState] = useState<FoodOrderStatusEnum>(
    FoodOrderStatusEnum.PENDING
  );

  const handleChangeStatus = (status: FoodOrderStatusEnum) => () => {
    setStatusState(status);
  };

  const handleSaveStatus = async () => {
    await updateMultipleOrder(selectedColumnIds, { status: statusState });
    setFoodOrders((prev) =>
      prev?.map((order) => {
        if (selectedColumnIds.includes(order._id)) {
          return { ...order, status: statusState };
        }
        return order;
      })
    );
    setRowSelection("");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-full" disabled={!selectedColumnIds.length}>
          Change delivery state {renderSelectedRow(selectedColumnIds.length)}
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[364px] gap-6">
        <DialogHeader className="flex flex-row items-center justify-between space-y-0">
          <DialogTitle className="mt-1 text-sm font-medium">
            Change delivery state
          </DialogTitle>
          <DialogClose asChild>
            <Button
              type="button"
              className="px-2 py-2 -mt-2 rounded-full bg-muted w-7 h-7"
              variant="secondary"
            >
              <X size={12} strokeWidth={1.2} className="text-border/" />
            </Button>
          </DialogClose>
        </DialogHeader>
        <div className="flex justify-between ">
          {statusOptions.map((option) => (
            <Button
              onClick={handleChangeStatus(option)}
              variant="secondary"
              className={`w-24 h-8 text-xs font-medium rounded-full `}
              key={option}
              style={getOptionStyles(statusState, option)}
            >
              {option.charAt(0).toUpperCase() + option.slice(1).toLowerCase()}
            </Button>
          ))}
        </div>
        <DialogFooter className="w-full">
          <DialogClose asChild>
            <Button
              className="w-full h-8 rounded-full"
              onClick={handleSaveStatus}
            >
              Save
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MultiDeliveryStatus;
