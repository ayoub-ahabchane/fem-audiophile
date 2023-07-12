"use client";

import { storeContext } from "@/lib/Providers/store-provider";
import { Dialog, Transition } from "@headlessui/react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { Fragment, useContext, useState } from "react";
import { TCart } from "./Cart";
import CartPanel from "./CartPanel/CartPanel";

const UICart = ({ cartItems, grandTotal, checkoutUrl }: TCart) => {
  const noAsync = true;
  const { isCartLoading } = useContext(storeContext);
  let [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    noAsync && setIsOpen(false);
  };
  const clearAll = () => {
    console.log("Cart cleared!");
  };

  const onCheckout = () => {
    checkoutUrl && router.push(checkoutUrl);
  };
  return (
    <div>
      <button
        className="group"
        disabled={isCartLoading}
        onClick={() => {
          setIsOpen((prevState) => !prevState);
        }}
      >
        <ShoppingCartIcon
          className="w-6 transition  group-disabled:text-adp-copy-white/30
        group-[&:not(:disabled)]:focus-within:text-adp-tangerine-300 group-[&:not(:disabled)]:hover:text-adp-tangerine-300"
        />
      </button>
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
                  className={
                    "z-20 mx-auto md:mx-0 md:ml-auto md:max-w-[23.5rem]"
                  }
                >
                  <CartPanel
                    items={cartItems}
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

export default UICart;
