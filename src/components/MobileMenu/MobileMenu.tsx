"use client";

import { Menu, Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { Fragment } from "react";
import {
  CategoryCard,
  PropTypes as TCategoryCad,
} from "../CategoryCard/CategoryCard";

interface PropTypes {
  categories: TCategoryCad[];
}

export const MobileMenu = ({ categories }: PropTypes) => {
  return (
    <Menu>
      <div>
        <Menu.Button arial-label="Navigation menu" as={Fragment}>
          <button>
            <Bars3Icon className="w-6" />
          </button>
        </Menu.Button>
      </div>
      <Transition
        enter="transition"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        as={Fragment}
      >
        <div className="fixed inset-0 top-[5.934375rem]  z-50 overflow-scroll bg-black/30">
          <Menu.Items
            className={
              "absolute z-50 grid w-full grid-rows-3 gap-x-4 gap-y-4 bg-adp-copy-white px-6 py-8 md:auto-rows-fr md:grid-cols-3 md:grid-rows-none"
            }
          >
            {categories.map((category) => (
              <Menu.Item key={category.categoryName} as={Fragment}>
                {({ close, active }) => (
                  <CategoryCard {...category} onClick={close} active={active} />
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </div>
      </Transition>
    </Menu>
  );
};

export default MobileMenu;
