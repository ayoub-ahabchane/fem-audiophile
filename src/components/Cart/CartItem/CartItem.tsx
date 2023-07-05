"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export interface PropTypes {
  /**Action to be performed when the user increases or decreases the cart item's quantity */
  onChangeQuantity: () => void;
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
  onChangeQuantity,
  orderedQuantity = 1,
  maxQuantity,
  price,
  shortname,
  slug,
  category,
  thumbnail,
  name,
}: PropTypes) => {
  const [quantity, setQuantity] = useState(orderedQuantity);

  const decreaseQty = () => setQuantity((prevQty) => prevQty - 1);
  const increaseQty = () => setQuantity((prevQty) => prevQty + 1);

  useEffect(() => {
    onChangeQuantity;
  }, [quantity, onChangeQuantity]);

  const MyLink = () => (
    <Link href={`/${category}/${slug}`} className="font-bold">
      {shortname}
    </Link>
  );

  return (
    <div className="flex items-center gap-4">
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
          className="font-bold"
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
          disabled={quantity === 0}
          aria-label={`Decrease the order quantity of ${name} by one`}
        >
          -
        </button>
        <span
          className="col-start-2 inline-block p-[0.44rem]"
          aria-label="Quanitity to add to cart"
        >
          {quantity}
        </span>
        <button
          onClick={increaseQty}
          className="col-start-3 inline-block px-4 py-4 opacity-25 transition [&:not(:disabled)]:focus-within:text-adp-tangerine-400 [&:not(:disabled)]:focus-within:opacity-100 [&:not(:disabled)]:hover:text-adp-tangerine-400 [&:not(:disabled)]:hover:opacity-100"
          disabled={quantity === maxQuantity}
          aria-label={`Increase the order quantity of ${name}`}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
