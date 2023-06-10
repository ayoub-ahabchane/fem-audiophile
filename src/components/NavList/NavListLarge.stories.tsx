import { Meta, StoryObj } from "@storybook/react";
import NavListLarge from "./NavListLarge";

const meta: Meta<typeof NavListLarge> = {
  title: "Components/Navigation/Navigation List",
  component: NavListLarge,
  parameters: { layout: "centered" },
};

export default meta;

type Story = StoryObj<typeof NavListLarge>;

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
