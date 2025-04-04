"use client";

import * as React from "react";
import { CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn, formatDate } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Column } from "@tanstack/react-table";
import { useEffect, useState } from "react";

type TableRangeSelectorProps<TData> = {
  tableColumn: Column<TData, unknown> | undefined;
};

export const TableRangeSelector = <TData,>({
  tableColumn,
}: TableRangeSelectorProps<TData>) => {
  const [dateRange, setDateRange] = useState<DateRange | undefined>();

  useEffect(() => {
    if (tableColumn) {
      tableColumn.setFilterValue(dateRange);
    }
  }, [dateRange, tableColumn]);

  return (
    <div className={cn("grid gap-2")}>
      <Popover>
        <PopoverTrigger asChild className="shadow-none">
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal rounded-full",
              !dateRange && "text-muted-foreground"
            )}
          >
            <CalendarIcon />
            {formatDate(dateRange)}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={dateRange?.from}
            selected={dateRange}
            onSelect={setDateRange}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};
