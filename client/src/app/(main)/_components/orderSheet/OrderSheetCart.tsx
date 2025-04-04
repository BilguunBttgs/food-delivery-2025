import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { mockFoodItems } from "@/lib/food-data";
import { Button } from "@/components/ui/button";
import { OrderSheetFoodItem } from "./OrderSheetFoodItem";
import { OrderSheetEmptyCard } from "./OrderSheetEmptyCard";

export const OrderSheetCart = () => {
  const renderFoodCard = () => {
    if (mockFoodItems?.length) {
      return mockFoodItems?.map((food) => {
        return <OrderSheetFoodItem key={food._id} food={food} />;
      });
    }
    return <OrderSheetEmptyCard />;
  };

  return (
    <Card className="h-[470px]">
      <CardHeader className="p-4">
        <CardTitle>My cart</CardTitle>
      </CardHeader>

      <CardContent className="p-4 pb-0 overflow-scroll max-h-72">
        {renderFoodCard()}
      </CardContent>

      <CardFooter className="p-4">
        <Button
          size="lg"
          className="w-full text-red-500 border-red-500 rounded-full"
          variant="outline"
        >
          Add Food
        </Button>
      </CardFooter>
    </Card>
  );
};
