"use client";

import { storeContext } from "@/lib/Providers/store-provider";
import { useContext } from "react";
import UICart, { PropTypes } from "./UICart";

const Cart = () => {
  const { cart } = useContext(storeContext);
  const cartData: PropTypes = {
    items: cart ? cart.items : [],
    cartTotal: cart ? cart.grandTotal : 0,
    checkoutUrl: cart ? cart.checkoutUrl : null,
  };
  return <UICart {...cartData} />;
};

export default Cart;
