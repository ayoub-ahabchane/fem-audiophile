"use client";

import { useState } from "react";
import CartItem, { PropTypes as TCartItem } from "../CartItem/CartItem";

interface PropTypes {
  items: TCartItem[] | [];
  cartTotal: number;
  onCheckout: () => void;
  closePanel: () => void;
  onClearItems: () => void;
}

const CartPanel = ({
  items,
  cartTotal,
  onCheckout,
  closePanel,
  onClearItems,
}: PropTypes) => {
  let [cartItems, setCartItems] = useState(items);

  return (
    <div className="flex flex-col gap-8 rounded-lg bg-white px-7 py-8">
      <div className="flex items-baseline justify-between">
        <h4 className="text-h6 font-bold uppercase">
          Cart {cartItems.length > 0 ? `(${cartItems.length})` : null}
        </h4>
        <button
          className="underline opacity-50"
          onClick={() => {
            setCartItems([]);
            onClearItems();
          }}
        >
          Remove all
        </button>
      </div>
      {cartItems.length ? (
        <ul className="flex flex-col gap-4">
          {cartItems.map((item) => (
            <li key={item.slug}>
              <CartItem {...item} />
            </li>
          ))}
        </ul>
      ) : (
        <p>Cart is empty!</p>
      )}
      <div className="flex items-baseline justify-between">
        <h4 className="uppercase opacity-50">Total</h4>
        <p className="text-h6 font-bold">
          {cartTotal.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0,
          })}
        </p>
      </div>
      <button
        disabled={!cartItems.length}
        className="btn-primary"
        onClick={() => {
          onCheckout();
          closePanel();
        }}
      >
        checkout
      </button>
    </div>
  );
};

export default CartPanel;
