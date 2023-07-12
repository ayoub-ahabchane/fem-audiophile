"use client";

import { useCart } from "@/lib/swell/useCart";
import CartItem, { PropTypes as TCartItem } from "../CartItem/CartItem";
import { useState } from "react";

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
  const { isValidating } = useCart();

  return (
    <div
      className={`flex flex-col gap-8 rounded-lg bg-white px-7 py-8 transition ${
        isValidating && "pointer-events-none"
      }`}
    >
      <div className="flex items-baseline justify-between">
        <h4 className="text-h6 font-bold uppercase">
          Cart {items.length > 0 ? `(${items.length})` : null}
        </h4>
        <button
          className="underline opacity-50"
          onClick={() => {
            onClearItems();
          }}
        >
          Remove all
        </button>
      </div>
      {items.length ? (
        <ul className="flex flex-col gap-4">
          {items.map((item) => {
            return (
              <li key={item.name}>
                <CartItem {...item} />
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="text-center font-bold">Your cart is empty!</p>
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
        disabled={!items.length || isValidating}
        className="btn-primary"
        onClick={() => {
          onCheckout();
          closePanel();
        }}
      >
        {isValidating ? (
          <div
            className="inline-block aspect-square w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          />
        ) : (
          "checkout"
        )}
      </button>
    </div>
  );
};

export default CartPanel;
