"use client";

import { createContext } from "react";
import { useCart } from "../swell/useCart";

interface TStoreContext {
  cart: any;
}

export const storeContext = createContext<TStoreContext>({
  cart: {},
});

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const { cart } = useCart();

  return (
    <storeContext.Provider value={{ cart }}>{children}</storeContext.Provider>
  );
};
