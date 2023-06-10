import { Meta, StoryObj } from "@storybook/react";
import Footer from "./Footer";

const meta: Meta<typeof Footer> = {
  title: "Components/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof Footer>;

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
