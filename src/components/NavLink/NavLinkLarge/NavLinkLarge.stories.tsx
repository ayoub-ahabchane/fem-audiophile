import { Meta, StoryObj } from "@storybook/react";
import NavLinkLarge from "./NavLinkLarge";

const meta: Meta<typeof NavLinkLarge> = {
  title: "Components/Navigation/Navigation Link",
  component: NavLinkLarge,
  parameters: { layout: "centered" },
};

export default meta;

type Story = StoryObj<typeof NavLinkLarge>;

export const Idle: Story = {
  args: {
    link: { label: "Products", href: "#" },
    active: false,
  },
};
export const Active: Story = {
  args: {
    ...Idle.args,
    active: true,
  },
};
