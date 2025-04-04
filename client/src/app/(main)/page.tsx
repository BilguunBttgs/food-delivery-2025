import { mockFoodItems } from "@/lib/food-data";
import { FoodCards } from "../../components/food/FoodCards";

export default function Home() {
  return (
    <div className="container mx-auto my-9">
      <FoodCards foods={mockFoodItems} />
    </div>
  );
}
