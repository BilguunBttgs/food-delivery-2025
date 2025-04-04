export const AdminFoodCardSkeleton = () => {
  return (
    <div className="border rounded-[20px] p-4 border-border bg-background bg-blue-30 flex flex-col gap-5 w-[270px] animate-pulse">
      <div className="bg-gray-300 w-full h-[129px] rounded-xl flex justify-end items-end p-5">
        <div className="h-11 w-11 bg-gray-400 rounded-full"></div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <div className="h-4 bg-gray-300 rounded w-20"></div>
          <div className="h-4 bg-gray-300 rounded w-10"></div>
        </div>
        <div className="h-3 bg-gray-300 rounded w-full"></div>
      </div>
    </div>
  );
};
