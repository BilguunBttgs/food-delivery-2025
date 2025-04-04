"use client";

import { CartDataTypes } from "@/types";
import React, { createContext, useEffect, useState } from "react";

type CartContextType = {
  cartData: CartDataTypes[];
  totalPrice: string;
  setCartData: (_cartData: CartDataTypes[]) => void;
  addItem: (item: CartDataTypes, quantity?: number) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
};

export const CartContext = createContext<CartContextType>(
  {} as CartContextType
);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartData, setCartData] = useState<CartDataTypes[]>([]);
  const [totalPrice, setTotalPrice] = useState<string>("0");

  useEffect(() => {
    const storedCartData = localStorage.getItem("cartData");
    if (storedCartData) {
      setCartData(JSON.parse(storedCartData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartData", JSON.stringify(cartData));
  }, [cartData]);

  useEffect(() => {
    const total = cartData.reduce(
      (sum, item) => sum + item.food.price * item.quantity,
      0
    );
    setTotalPrice(total.toFixed(2));
  }, [cartData]);

  const addItem = (item: CartDataTypes, quantity: number = 1) => {
    setCartData((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) => cartItem.food._id === item.food._id
      );

      if (!existingItem) {
        return [...prevCart, { ...item, quantity }];
      }
      const updatedCartItems = prevCart.map((cartItem) => {
        if (cartItem.food._id !== item.food._id) {
          return cartItem;
        }

        return { ...cartItem, quantity: cartItem.quantity + quantity };
      });

      return updatedCartItems;
    });
  };

  const removeItem = (itemId: string) => {
    setCartData((prevCart) =>
      prevCart.filter((cartItem) => cartItem.food._id !== itemId)
    );
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    setCartData((prevCart) =>
      prevCart.map((cartItem) => {
        if (cartItem.food._id !== itemId) {
          return cartItem;
        }
        return {
          ...cartItem,
          quantity: Math.max(0, quantity),
        };
      })
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartData,
        totalPrice,
        setCartData,
        addItem,
        removeItem,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
