import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { OrderSheetCart, OrderSheetOrders, OrderSheetPayment } from ".";

export const OrderSheetContents = ({
  openModal,
}: {
  openModal: () => void;
}) => {
  return (
    <Tabs defaultValue="cart" className="space-y-6 h-full">
      <TabsList className="w-full rounded-full mt-6">
        <TabsTrigger
          value="cart"
          className="w-full rounded-full data-[state=active]:bg-[#EF4444] data-[state=active]:text-white"
        >
          Cart
        </TabsTrigger>

        <TabsTrigger
          value="order"
          className="w-full rounded-full data-[state=active]:bg-[#EF4444] data-[state=active]:text-white"
        >
          Order
        </TabsTrigger>
      </TabsList>

      <TabsContent value="cart">
        <OrderSheetCart />
        <OrderSheetPayment openModal={openModal} />
      </TabsContent>

      <TabsContent value="order" className="h-full">
        <OrderSheetOrders />
      </TabsContent>
    </Tabs>
  );
};
