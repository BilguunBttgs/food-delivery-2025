import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { SidebarDashLine } from "@/components/icons";

export const OrderSheetPayment = ({ openModal }: { openModal: () => void }) => {
  return (
    <Card className="mt-6">
      <CardHeader className="p-4 ">
        <CardTitle>Payment info</CardTitle>
      </CardHeader>

      <CardContent className="p-4">
        <div className="flex justify-between">
          <p className="text-[#71717A] font-light">Items</p>
          <p className="font-bold">$25.99</p>
        </div>

        <div className="flex justify-between">
          <p className="text-[#71717A] font-light">Shipping</p>
          <p className="font-bold">$0.99</p>
        </div>

        <SidebarDashLine />

        <div className="flex justify-between">
          <p className="text-[#71717A] font-light">Total</p>
          <p className="font-bold">$0.99</p>
        </div>
      </CardContent>

      <CardFooter className="p-4">
        <Button
          size="lg"
          className="w-full bg-red-500 rounded-full"
          onClick={openModal}
        >
          Checkout
        </Button>
      </CardFooter>
    </Card>
  );
};
