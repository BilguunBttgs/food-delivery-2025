import { ShoppingCart } from "lucide-react";
import { Button } from "../../../../components/ui/button";

type HeaderCartButtonProps = {
  count?: number;
  openSidebar: () => void;
};

export const HeaderCartButton = ({
  count,
  openSidebar,
}: HeaderCartButtonProps) => {
  return (
    <Button
      onClick={openSidebar}
      className="bg-[#EF4444] w-9 h-9 rounded-full relative"
    >
      <ShoppingCart />
      <HeaderCartButtonCount count={count} />
    </Button>
  );
};

type HeaderCartButtonCountProps = {
  count?: number;
};

const HeaderCartButtonCount = ({ count }: HeaderCartButtonCountProps) => {
  if (!count) return null;

  return (
    <div className="absolute w-5 h-5 bg-white rounded-full -right-2 -top-2">
      <p className="text-black">{count}</p>
    </div>
  );
};
