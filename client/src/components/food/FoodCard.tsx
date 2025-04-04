"use client";

import { Card } from "@/components/ui/card";
import Image from "next/legacy/image";
import { FoodDetailModal } from "./FoodDetailModal";
import { Food } from "@/types";
import { MouseEventHandler, useContext, useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import { CartContext } from "@/app/(main)/context";
import { AddToCartAlert } from "./AddToCartAlert";

type FoodCardsProps = {
  food: Food;
};

export const FoodCard = ({ food }: FoodCardsProps) => {
  const { addItem } = useContext(CartContext);
  const { foodName, price, ingredients, image } = food;
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    addItem({ food: { ...food }, quantity: 1 });
    setShowAlert(true);
    return;
  };
  const handleAlertRemove = () => {
    setShowAlert(false);
  };

  return (
    <>
      <div onClick={handleModal}>
        <Card className="flex flex-col gap-5 p-4 bg-white border-none shadow-none cursor-pointer w-99 h-86 rounded-3xl">
          <div className="relative flex items-end justify-end overflow-hidden h-52 rounded-3xl">
            <Image src={image} alt={foodName} objectFit="cover" layout="fill" />
            <Button
              className="absolute bg-white rounded-full w-11 h-11 bottom-5 right-5"
              onClick={handleAddToCart}
            >
              <Plus color="red" />
            </Button>
          </div>

          <div className="w-full ">
            <div className="flex justify-between">
              <p className="text-2xl font-semibold text-red-500">{foodName}</p>
              <p className="text-lg font-semibold text-[#09090B]">${price}</p>
            </div>

            <div className="mt-2 text-sm text-[#09090B] font-normal">
              {ingredients}
            </div>
          </div>
        </Card>
      </div>
      <FoodDetailModal
        food={food}
        isModalOpen={isModalOpen}
        setIsModalOpen={() => setIsModalOpen(!isModalOpen)}
      />
      <AddToCartAlert isVisible={showAlert} onHide={handleAlertRemove} />
    </>
  );
};
