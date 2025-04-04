export const DishesCategorySkeleton = () => {
  return (
    <div className="flex flex-col gap-4 p-6 bg-gray-200 rounded-xl animate-pulse">
      <div className="h-6 bg-gray-300 rounded w-40"></div>
      <div className="flex flex-wrap gap-3">
        <div className="flex gap-2 px-4 py-2 border rounded-full bg-gray-300">
          <div className="h-4 bg-gray-400 rounded w-24"></div>
          <div className="h-4 bg-gray-400 rounded w-10"></div>
        </div>
        {Array(9)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              className="flex gap-2 px-4 py-2 border rounded-full bg-gray-300"
            >
              <div className="h-4 bg-gray-400 rounded w-24"></div>
              <div className="h-4 bg-gray-400 rounded w-10"></div>
            </div>
          ))}
      </div>
    </div>
  );
};
