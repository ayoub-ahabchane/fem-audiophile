import { Meta, StoryObj } from "@storybook/react";
import CartItem from "./CartItem";

const meta: Meta<typeof CartItem> = {
  title: "components/Cart Item",
  component: CartItem,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => {
      return (
        <div className="mx-auto w-[20.5rem] px-7 py-6 md:w-[23.5625rem] md:px-8">
          <Story />
        </div>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof CartItem>;

export const Default: Story = {
  args: {
    orderedQuantity: 3,
    maxQuantity: 5,
    onChangeQuantity: () => {
      console.log("boop");
    },
    price: 2999,
    shortname: "XX99 MK II",
  },
};
