import { NomNomLogo } from "@/components/icons";

export const OrderSheetEmptyCard = () => {
  return (
    <div className="flex flex-col items-center bg-secondary px-12 py-8 gap-2">
      <NomNomLogo width={61} height={50} />

      <h3 className="font-bold">Your cart is empty</h3>

      <p className="text-center text-xs w-80">
        Hungry? 🍔 Add some delicious dishes to your cart and satisfy your
        cravings!
      </p>
    </div>
  );
};
