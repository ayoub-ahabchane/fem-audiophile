"use client";

import { useCart } from "@/lib/swell/useCart";
import { Dialog, Transition } from "@headlessui/react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";
import { useSWRConfig } from "swr";
import { PropTypes as TCartItem } from "./CartItem/CartItem";
import CartPanel from "./CartPanel/CartPanel";

export interface TCart {
  cartItems: TCartItem[] | [];
  checkoutUrl: string | undefined;
  grandTotal: number;
  isLoading: boolean;
  isValidating: boolean;
  emptyCart: () => Promise<void>;
}

const Cart = () => {
  let [isOpen, setIsOpen] = useState(false);
  const {
    cart: { cartItems, grandTotal, checkoutUrl },
    isLoading,
    isValidating,
    emptyCart,
  } = useCart();
  const { mutate } = useSWRConfig();
  const router = useRouter();

  const closeModal = () => {
    setIsOpen(false);
  };
  const clearAll = async () => {
    await emptyCart();
    await mutate("cart");
  };

  const onCheckout = () => {
    checkoutUrl && router.push(checkoutUrl);
  };
  return (
    <div>
      <div className="relative">
        <span
          className={`absolute -right-[30%] -top-[30%] grid aspect-square w-5 place-content-center rounded-full bg-adp-tangerine-400 text-xs font-bold text-adp-copy-white transition ${
            (isLoading || isValidating) &&
            "bg-adp-slate-600/50 text-adp-copy-white/50"
          }`}
        >
          {isLoading || isValidating ? (
            <div
              className="inline-block aspect-square w-3 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            />
          ) : (
            cartItems.length
          )}
        </span>
        <button
          className="group"
          disabled={isLoading || isValidating}
          onClick={() => {
            setIsOpen((prevState) => !prevState);
          }}
        >
          <ShoppingCartIcon
            className="w-6 transition  group-disabled:text-adp-copy-white/30
        group-[&:not(:disabled)]:focus-within:text-adp-tangerine-300 group-[&:not(:disabled)]:hover:text-adp-tangerine-300"
          />
        </button>
      </div>
      <Transition show={isOpen} as={Fragment}>
        <Dialog onClose={closeModal} className={"z-10"}>
          <Transition.Child
            enter="transition"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            as={Fragment}
          >
            <div
              className="fixed inset-0 top-[5.934375rem] bg-black/30"
              aria-hidden="true"
            />
          </Transition.Child>
          <Transition.Child
            enter="transition"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            as={Fragment}
          >
            <div className="fixed inset-0">
              <div className="mx-auto px-6 pt-[7.4375rem] lg:max-w-[79.375rem] lg:px-20">
                <Dialog.Panel
                  className={`z-20 mx-auto transition md:mx-0 md:ml-auto md:max-w-[23.5rem]`}
                >
                  <CartPanel
                    items={cartItems ?? []}
                    cartTotal={grandTotal}
                    onCheckout={onCheckout}
                    closePanel={closeModal}
                    onClearItems={clearAll}
                  />
                </Dialog.Panel>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </div>
  );
};

export default Cart;
