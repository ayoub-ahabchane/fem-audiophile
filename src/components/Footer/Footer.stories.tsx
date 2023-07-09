import { Meta, StoryObj } from "@storybook/react";
import UIFooter from "./Footer";

const meta: Meta<typeof UIFooter> = {
  title: "Components/Footer",
  component: UIFooter,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof UIFooter>;

export const Default: Story = {
  args: {
    navLinks: [
      { label: "Home", href: "/" },
      { label: "headphones", href: "/headphones" },
      { label: "speakers", href: "/speakers" },
      { label: "earphones", href: "/earphones" },
    ],
  },
};
