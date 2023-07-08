"use client";

import { useEffect, useState } from "react";
import { swelljs } from "./init/client";

export const useCart = () => {
  const [cart, setCart] = useState<swell.Cart>();

  const getCart = async () => {
    const cartData = await swelljs.cart.get();
    setCart(cartData);
  };

  useEffect(() => {
    getCart();
  }, []);

  return { cart };
};
