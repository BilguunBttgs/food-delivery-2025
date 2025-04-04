import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ShoppingCart } from "lucide-react";
import { OrderSheetContents } from ".";

type OrderSheetProps = {
  open: boolean;
  closeSidebar: () => void;
  openModal: () => void;
};

export const OrderSheet = ({
  open,
  closeSidebar,
  openModal,
}: OrderSheetProps) => {
  return (
    <Sheet open={open} onOpenChange={closeSidebar}>
      <SheetContent className="sm:max-w-[535px] rounded-s-lg border-none bg-[#404040]">
        <SheetHeader>
          <SheetTitle className="text-white flex items-center gap-3">
            <ShoppingCart size={24} />
            Order detail
          </SheetTitle>
        </SheetHeader>

        <OrderSheetContents openModal={openModal} />
      </SheetContent>
    </Sheet>
  );
};
