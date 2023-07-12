"use client";

import { storeContext } from "@/lib/Providers/store-provider";
import { useContext } from "react";
import { PropTypes as TCartItem } from "./CartItem/CartItem";
import UICart from "./UICart";

export interface TCart {
  cartItems: TCartItem[] | [];
  checkoutUrl: string | undefined;
  grandTotal: number;
}

const Cart = () => {
  const { cart } = useContext(storeContext);
  console.log(cart);
  return (
    <>
      <UICart {...cart} />
    </>
  );
};

export default Cart;
