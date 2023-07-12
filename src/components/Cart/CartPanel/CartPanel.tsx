"use client";

import { useEffect, useState } from "react";
import CartItem, { PropTypes as TCartItem } from "../CartItem/CartItem";
import { swelljs } from "@/lib/swell/init/client";
import { TCart } from "../Cart";

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
  return (
    <div className="flex flex-col gap-8 rounded-lg bg-white px-7 py-8">
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
        disabled={!items.length}
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
