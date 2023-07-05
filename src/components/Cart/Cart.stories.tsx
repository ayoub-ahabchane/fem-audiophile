import { Meta, StoryObj } from "@storybook/react";
import thumbnail from "../../storybook/assets/cart/image-xx99-mark-two-headphones.jpg";
import Cart from "./Cart";

const meta: Meta<typeof Cart> = {
  title: "Components/Cart/Cart",
  component: Cart,
};

export default meta;

type Story = StoryObj<typeof Cart>;

export const Default: Story = {
  args: {
    items: [
      {
        thumbnail: thumbnail,
        orderedQuantity: 3,
        maxQuantity: 5,
        onChangeQuantity: () => {
          console.log("boop");
        },
        price: 2999,
        shortname: "XX99 MK II",
        slug: "xx99-mkii",
        name: "XX99 Mark 2 headphones",
        category: "headphones",
      },
      {
        thumbnail: thumbnail,
        orderedQuantity: 3,
        maxQuantity: 5,
        onChangeQuantity: () => {
          console.log("boop");
        },
        price: 2999,
        shortname: "XX99 MK II",
        name: "XX99 Mark 2 headphones",
        slug: "xx99-mkii",
        category: "headphones",
      },
      {
        thumbnail: thumbnail,
        orderedQuantity: 3,
        maxQuantity: 5,
        name: "XX99 Mark 2 headphones",
        onChangeQuantity: () => {
          console.log("boop");
        },
        price: 2999,
        shortname: "XX99 MK II",
        slug: "xx99-mkii",
        category: "headphones",
      },
    ],
    cartTotal: 5396,
    onCheckout: () => {
      console.log("boop!");
    },
  },
};
