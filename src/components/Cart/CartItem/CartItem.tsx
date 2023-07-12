"use client";

import { useCart } from "@/lib/swell/useCart";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import { useSWRConfig } from "swr";
export interface PropTypes {
  productId: string;
  cartItemId: string;
  /**The cart item's quantity */
  orderedQuantity: number;
  /**The maximum quantity that a user can add to cart */
  maxQuantity: number;
  /**The cart item's price */
  price: number;
  /**The short version of the product's name */
  shortname: string;
  /**The product's route parameter */
  slug: string;
  /**Product category */
  category: string;
  /**The product's thumbnail image*/
  thumbnail: string | StaticImageData;
  /**The product's name */
  name: string;
}

const CartItem = ({
  orderedQuantity,
  maxQuantity,
  price,
  shortname,
  slug,
  category,
  thumbnail,
  name,
  cartItemId,
}: PropTypes) => {
  const { mutate } = useSWRConfig();
  const {
    updateCartItemQuantity,
    isValidating,
    isLoading,
    removeItemFromCart,
  } = useCart();
  const [isItemLoading, setIsItemLoading] = useState(false);
  const decreaseQty = async () => {
    setIsItemLoading(true);
    if (orderedQuantity > 1) {
      await updateCartItemQuantity(cartItemId, orderedQuantity - 1);
    } else {
      await removeItemFromCart(cartItemId);
    }
    await mutate("cart");
    setIsItemLoading(false);
  };
  const increaseQty = async () => {
    setIsItemLoading(true);
    await updateCartItemQuantity(cartItemId, orderedQuantity + 1);
    await mutate("cart");
    setIsItemLoading(false);
  };

  return (
    <div
      className={`flex items-center gap-4 transition ${
        isItemLoading && "pointer-events-none opacity-50"
      }`}
    >
      <Image
        src={thumbnail}
        alt="XX99 Mark 2 headphones"
        width={64}
        height={64}
        className="aspect-square w-16 shrink-0 rounded-lg"
      />
      <div className="grow">
        <Link
          href={`/${category}/${slug}`}
          className="font-bold uppercase transition focus-within:text-adp-tangerine-400 hover:text-adp-tangerine-400"
          aria-label={`${name} ${category}`}
        >
          {shortname}
        </Link>
        <p className="text-[0.875rem] font-bold opacity-50">
          {price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0,
          })}
        </p>
      </div>
      <div className="grid shrink-0 grid-cols-[repeat(3,_2rem)] grid-rows-[2rem] place-items-center bg-adp-slate-300 font-bold">
        <button
          onClick={decreaseQty}
          className="col-start-1 inline-block px-4 py-4 opacity-25 transition  [&:not(:disabled)]:focus-within:text-adp-tangerine-400 [&:not(:disabled)]:focus-within:opacity-100 [&:not(:disabled)]:hover:text-adp-tangerine-400 [&:not(:disabled)]:hover:opacity-100 "
          disabled={orderedQuantity === 0}
          aria-label={`Decrease the order quantity of ${name} by one`}
        >
          -
        </button>
        <span
          className="col-start-2 inline-block p-[0.44rem]"
          aria-label="Quanitity to add to cart"
        >
          {orderedQuantity}
        </span>
        <button
          onClick={increaseQty}
          className="col-start-3 inline-block px-4 py-4 opacity-25 transition [&:not(:disabled)]:focus-within:text-adp-tangerine-400 [&:not(:disabled)]:focus-within:opacity-100 [&:not(:disabled)]:hover:text-adp-tangerine-400 [&:not(:disabled)]:hover:opacity-100"
          disabled={orderedQuantity === maxQuantity}
          aria-label={`Increase the order quantity of ${name}`}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
