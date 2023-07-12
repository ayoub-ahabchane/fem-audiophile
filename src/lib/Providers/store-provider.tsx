"use client";

import { Dispatch, SetStateAction, createContext, useState } from "react";
import CartItem, {
  PropTypes as TCartItem,
} from "@/components/Cart/CartItem/CartItem";
import { useCart } from "../swell/useCart";
import { TCart } from "@/components/Cart/Cart";

export const storeContext = createContext<any>({});

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  // const [isStoreLoading, setIsStoreLoading] = useState(false);

  const {
    cart,
    addItemToCart,
    removeItemFromCart,
    updateCartItemQuantity,
    getCart,
    isCartLoading,
    setIsCartLoading,
  } = useCart();

  return (
    <storeContext.Provider
      value={{
        cart,
        addItemToCart,
        removeItemFromCart,
        updateCartItemQuantity,
        getCart,
        isCartLoading,
        setIsCartLoading,
      }}
    >
      {children}
    </storeContext.Provider>
  );
};
