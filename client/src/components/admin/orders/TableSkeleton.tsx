import { Skeleton } from "@/components/ui/skeleton";

const TableSkeleton = () => {
  return (
    <div className="py-6 pl-6 pr-10 ">
      <div className="border rounded-sm">
        <div className="p-4 h-[76px] flex justify-between w-full">
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-foreground">Orders</h1>
            <Skeleton className="w-10 h-4" />
          </div>
          <div className="flex gap-3">
            <Skeleton className="w-[300px] h-9 rounded-full" />
            <Skeleton className="w-[167px] h-9 rounded-full" />
          </div>
        </div>
        <Skeleton className="w-full rounded-none h-60" />
      </div>
    </div>
  );
};

export default TableSkeleton;
