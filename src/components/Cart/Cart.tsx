"use client";
import { Dialog, Transition } from "@headlessui/react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";
import { PropTypes as TCartItem } from "./CartItem/CartItem";

import { storeContext } from "@/lib/Providers/store-provider";
import { useContext } from "react";
import CartPanel from "./CartPanel/CartPanel";

export interface PropTypes {
  items: TCartItem[] | [];
  cartTotal: number;
  checkoutUrl: string | null;
}

export const UICart = ({ items, cartTotal, checkoutUrl }: PropTypes) => {
  const noAsync = true;
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
        onClick={() => {
          setIsOpen((prevState) => !prevState);
        }}
      >
        <ShoppingCartIcon className="w-6 transition focus-within:text-adp-tangerine-400 hover:text-adp-tangerine-400" />
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
              className="fixed inset-0 top-[5.996875rem] bg-black/30"
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
                    items={items}
                    cartTotal={cartTotal}
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
