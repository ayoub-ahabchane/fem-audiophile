import { Meta, StoryObj } from "@storybook/react";
import Cta from "./Cta";

const meta: Meta<typeof Cta> = {
  title: "Controls/CTA",
  component: Cta,
};

export default meta;

type Story = StoryObj<typeof Cta>;

export const Primary: Story = {
  args: {
    href: "/",
    label: "See product",
    variation: "primary",
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    variation: "secondary",
  },
};

export const Muted: Story = {
  args: {
    ...Primary.args,
    variation: "muted",
  },
};
