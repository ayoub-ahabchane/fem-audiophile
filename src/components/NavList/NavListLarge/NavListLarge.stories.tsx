import { Meta, StoryObj } from "@storybook/react";
import NavListLarge from "./NavListLarge";

const meta: Meta<typeof NavListLarge> = {
  title: "Components/Navigation/Navigation Lists/Desktop Navigation",
  component: NavListLarge,
  parameters: { layout: "centered" },
};

export default meta;

type Story = StoryObj<typeof NavListLarge>;

export const Default: Story = {
  args: {
    links: [
      { label: "Home", href: "/" },
      { label: "headphones", href: "/headphones" },
      { label: "speakers", href: "/speakers" },
      { label: "earphones", href: "/earphones" },
    ],
  },
};
