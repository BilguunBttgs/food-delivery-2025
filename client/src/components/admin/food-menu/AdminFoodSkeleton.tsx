import { AdminFoodCardSkeleton } from "./AdminFoodCardSkeleton";

export const AdminFoodSkeleton = () => {
  return (
    <div className="flex flex-col gap-6">
      {Array(3)
        .fill(null)
        .map((_, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 p-6 bg-gray-200 animate-pulse rounded-xl"
          >
            <div className="flex items-center text-xl font-semibold gap-2">
              <div className="h-6 bg-gray-300 rounded w-32"></div>
              <div className="h-6 bg-gray-300 rounded w-10"></div>
            </div>

            <div className="flex flex-wrap gap-3">
              {Array(4)
                .fill(null)
                .map((_, foodIndex) => (
                  <AdminFoodCardSkeleton key={foodIndex} />
                ))}
            </div>
          </div>
        ))}
    </div>
  );
};
