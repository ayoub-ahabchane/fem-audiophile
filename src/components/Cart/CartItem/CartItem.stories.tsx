import { Popover } from "@headlessui/react";
import { Meta, StoryObj } from "@storybook/react";
import CartItem from "./CartItem";
import thumbnail from "../../../storybook/assets/cart/image-xx99-mark-two-headphones.jpg";

const meta: Meta<typeof CartItem> = {
  title: "components/Cart/Cart Item",
  component: CartItem,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => {
      return (
        <div className="mx-auto w-[20.5rem] px-7 py-6 md:w-[23.5625rem] md:px-8">
          <Popover>
            <Story />
          </Popover>
        </div>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof CartItem>;

export const Default: Story = {
  args: {
    thumbnail: thumbnail,
    orderedQuantity: 3,
    maxQuantity: 5,
    price: 2999,
    shortname: "XX99 MK II",
    slug: "xx99-mkii",
    category: "headphones",
  },
};
