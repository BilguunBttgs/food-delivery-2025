import { Food } from "@/types";
import { FoodCard } from "./FoodCard";

type FoodCardsProps = {
  foods: Food[];
};

export const FoodCards = ({ foods }: FoodCardsProps) => {
  if (foods.length === 0) {
    return <div>No food items available</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {foods.map((food) => (
        <FoodCard key={food._id} food={food} />
      ))}
    </div>
  );
};
