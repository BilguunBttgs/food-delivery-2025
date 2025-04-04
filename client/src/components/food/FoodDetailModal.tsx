"use client";
import { Button } from "@/components/ui/button";
import { Plus, X, Minus } from "lucide-react";
import Image from "next/legacy/image";
import { Food } from "@/types";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { useContext, useState } from "react";
import { CartContext } from "@/app/(main)/context";

type FoodDetailModalProps = {
  food: Food;
  isModalOpen: boolean;
  setIsModalOpen: () => void;
};

export const FoodDetailModal = ({
  food,
  isModalOpen,
  setIsModalOpen,
}: FoodDetailModalProps) => {
  const { addItem } = useContext(CartContext);
  const [quantity, setQuantity] = useState<number>(1);
  const { foodName, image, ingredients, price } = food;

  const addQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const subtractQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleAddToCart = () => {
    addItem({ food, quantity }, quantity);
    setQuantity(1);
    setIsModalOpen();
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogContent className="bg-white flex flex-col max-w-[826px] max-h-[412px] sm:rounded-3xl">
        <div className="flex w-full h-full gap-6 rounded-3xl">
          <div className="w-1/2 overflow-hidden rounded-xl">
            <Image
              src={image}
              alt={foodName}
              objectFit="cover"
              layout="responsive"
              width={377}
              height={364}
              className="rounded-xl"
            />
          </div>
          <div className="flex flex-col items-end w-1/2">
            <div>
              <Button
                className="bg-white h-9 w-9  hover:bg-secondary !rounded-full"
                onClick={setIsModalOpen}
              >
                <X className="text-black" />
              </Button>
            </div>

            <div className="flex flex-col justify-between h-full">
              <DialogHeader>
                <DialogTitle className="text-3xl font-semibold text-red-500">
                  {foodName}
                </DialogTitle>
                <DialogDescription className="text-base font-normal text-[#09090B]">
                  {ingredients}
                </DialogDescription>
              </DialogHeader>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="flex flex-col text-base font-normal text-[#09090B]">
                    Total price:
                  </p>
                  <div className="text-lg font-semibold text-[#09090B]">
                    <p>${price}</p>
                  </div>
                </div>
                <div className="flex w-[121px] justify-around">
                  <Button
                    onClick={subtractQuantity}
                    className="bg-white rounded-full w-9 h-9"
                    variant="outline"
                  >
                    <Minus className="text-black" />
                  </Button>
                  <p className="flex items-center font-bold">{quantity}</p>
                  <Button
                    onClick={addQuantity}
                    className="bg-white border-current rounded-full w-9 h-9"
                    variant="outline"
                  >
                    <Plus className="text-black" />
                  </Button>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button
                className="bg-black font-medium text-sm px-4 py-2 h-11 w-[377px] rounded-full"
                onClick={handleAddToCart}
              >
                Add to cart
              </Button>
            </DialogFooter>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
