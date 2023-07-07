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
      <Menu.Button arial-label="Navigation menu">
        <Bars3Icon className="w-6" />
      </Menu.Button>
      <Transition.Child
        enter="transition"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        as={Fragment}
      >
        <div className="fixed inset-0 top-[5.996875rem] overflow-scroll bg-black/30">
          <Menu.Items
            className={
              "absolute grid w-full grid-rows-3 gap-x-4 gap-y-4 bg-adp-copy-white px-6 py-8 md:auto-rows-fr md:grid-cols-3 md:grid-rows-none"
            }
          >
            {categories.map((category) => (
              <Menu.Item key={category.categoryName}>
                {({ close }) => <CategoryCard {...category} onClick={close} />}
              </Menu.Item>
            ))}
          </Menu.Items>
        </div>
      </Transition.Child>
    </Menu>
  );
};

export default MobileMenu;
