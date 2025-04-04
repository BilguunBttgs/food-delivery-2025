"use client";

import { Check } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

type AddToCartAlertProps = {
  isVisible?: boolean;
  onHide?: () => void;
};

export const AddToCartAlert = ({
  isVisible = false,
  onHide,
}: AddToCartAlertProps) => {
  const [show, setShow] = useState(isVisible);

  useEffect(() => {
    setShow(isVisible);
    if (isVisible) {
      const timer = setTimeout(() => {
        setShow(false);
        onHide?.();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onHide]);

  if (!show) return null;

  return (
    <Alert
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-50 w-fit flex justify-center bg-black text-white shadow-lg animate-in fade-in slide-in-from-top-4 duration-300 border-[1px] border-white"
      )}
    >
      <AlertDescription className="flex items-center gap-1 text-base text-white">
        <Check size={16} />
        <p>Food is added to the cart!</p>
      </AlertDescription>
    </Alert>
  );
};
