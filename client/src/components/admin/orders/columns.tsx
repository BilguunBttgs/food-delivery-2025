"use client";

import { format } from "date-fns";
import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import FoodDetailPopover from "./FoodDetailPopover";
import DeliveryStatus from "./DeliveryStatus";
import { AllFoodOrders } from "@/types";
import { Dispatch, SetStateAction } from "react";
import { Button } from "@/components/ui/button";
import { ChevronsUpDown } from "lucide-react";

export const columns: ColumnDef<AllFoodOrders>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <div className="px-4">
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "_id",
    header: () => <h1 className="text-foreground">№</h1>,
    cell: ({ row }) => (
      <h1 className="px-4 text-foreground">{Number(row.id) + 1}</h1>
    ),
  },
  {
    accessorFn: (row) => row.user.email,
    header: "Customer",
    cell: ({ row }) => <h1 className="px-4">{row.original.user.email}</h1>,
  },
  {
    accessorFn: (row) => row.foodOrderItems,
    size: 160,
    header: "Food",
    cell: ({ row }) => (
      <div className="flex items-center h-full px-4">
        <FoodDetailPopover foodOrderItems={row.original.foodOrderItems} />
      </div>
    ),
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <Button
          className="flex justify-between w-full -mx-4"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <h1>Date</h1>
          <ChevronsUpDown className="w-4 h-4 ml-2" />
        </Button>
      );
    },
    size: 160,
    filterFn: (row, columnId, filterValue) => {
      if (!filterValue?.from || !filterValue?.to) return true;
      const rowDate = new Date(row.getValue(columnId));
      return (
        rowDate >= new Date(filterValue.from) &&
        rowDate <= new Date(filterValue.to)
      );
    },
    cell: ({ row }) => (
      <h1 className="flex items-center w-40 p-4 h-7">
        {format(row.original.createdAt, "yyyy/MM/dd")}
      </h1>
    ),
  },
  {
    accessorKey: "total",
    header: "Total",
    size: 160,
    cell: ({ row }) => (
      <h1 className="flex items-center w-40 p-4 h-7">{`$${row.original.totalPrice}`}</h1>
    ),
  },
  {
    accessorFn: (row) => row.user.address,
    size: 235,
    header: "Delivery Address",
    cell: ({ row }) => (
      <div className="max-w-[435px] text-xs leading-4">
        <h1 className="h-8 px-4 overflow-hidden truncate text-wrap text-ellipsis">
          {row.original.user.address}
        </h1>
      </div>
    ),
  },
  {
    accessorFn: (row) => row.status,
    size: 160,
    header: "Delivery State",
    cell: (cell) => (
      <div className="w-40 px-4 py-3">
        <DeliveryStatus
          status={cell.row.original.status}
          orderId={cell.row.original._id}
          setFoodOrders={
            (
              cell.table.options.meta as {
                setFoodOrders: Dispatch<SetStateAction<AllFoodOrders[]>>;
              }
            )?.setFoodOrders
          }
        />
      </div>
    ),
  },
];
