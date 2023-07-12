"use client";

import { storeContext } from "@/lib/Providers/store-provider";
import { useCart } from "@/lib/swell/useCart";
// import { swelljs } from "@/lib/swell/init/client";
// import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

interface PropTypes {
  productId: string;
  max: number;
  disabled: boolean;
}

const AddToCartButton = ({ max, disabled, productId }: PropTypes) => {
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(disabled);
  const { addItemToCart, setIsCartLoading } = useContext(storeContext);
  const { getCart } = useCart();
  const increase = () => {
    setQuantity((prevQty) => prevQty + 1);
  };
  const decrease = () => {
    setQuantity((prevQty) => prevQty - 1);
  };

  const addToCart = async () => {
    setIsLoading(true);
    setIsCartLoading(true);
    await addItemToCart!(productId, quantity);
    setIsLoading(false);
    setIsCartLoading(false);
  };

  return (
    <div className="order-5 flex gap-x-4">
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
        className="btn-primary inline-block w-40"
        disabled={disabled || isLoading}
        onClick={addToCart}
      >
        {disabled || isLoading ? (
          <div
            className="inline-block aspect-square w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          />
        ) : (
          "Add to cart"
        )}
      </button>
    </div>
  );
};

export default AddToCartButton;
