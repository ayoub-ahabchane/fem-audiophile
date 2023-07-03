"use client";

import { useState } from "react";

interface PropTypes {
  max: number;
  disabled: boolean;
  onAddToCart: () => void;
}

const AddToCartButton = ({ max, disabled }: PropTypes) => {
  const [quantity, setQuantity] = useState(1);

  const increase = () => {
    setQuantity((prevQty) => prevQty + 1);
  };
  const decrease = () => {
    setQuantity((prevQty) => prevQty - 1);
  };

  return (
    <div className="gap order-5 flex gap-4">
      <div className="grid grid-cols-[repeat(3,_3rem)] grid-rows-[3rem] place-items-center bg-adp-slate-300 font-bold">
        <button
          onClick={decrease}
          className="col-start-1 inline-block px-4 py-4 opacity-25 transition  [&:not(:disabled)]:focus-within:text-adp-tangerine-400 [&:not(:disabled)]:focus-within:opacity-100 [&:not(:disabled)]:hover:text-adp-tangerine-400 [&:not(:disabled)]:hover:opacity-100 "
          disabled={quantity === 1}
        >
          -
        </button>
        <span
          className="col-start-2 inline-block px-4 py-4"
          aria-label="Quanitity to add to cart"
        >
          {quantity}
        </span>
        <button
          onClick={increase}
          className="col-start-3 inline-block px-4 py-4 opacity-25 transition [&:not(:disabled)]:focus-within:text-adp-tangerine-400 [&:not(:disabled)]:focus-within:opacity-100 [&:not(:disabled)]:hover:text-adp-tangerine-400 [&:not(:disabled)]:hover:opacity-100"
          disabled={quantity === max}
        >
          +
        </button>
      </div>
      <button
        className="btn-primary"
        disabled={disabled}
        onClick={() => {
          console.log("boop!");
        }}
      >
        Add to cart
      </button>
    </div>
  );
};

export default AddToCartButton;
