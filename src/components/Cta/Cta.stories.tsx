import { Meta, StoryObj } from "@storybook/react";
import Cta from "./Cta";

const meta: Meta<typeof Cta> = {
  title: "Controls/CTA",
  component: Cta,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Cta>;

export const Primary: Story = {
  args: {
    anchorProps: {
      href: "/",
      "aria-label": "Learn more about product X",
    },
    label: "See product",
    variation: "primary",
  },
};

export const Dark: Story = {
  args: {
    ...Primary.args,
    variation: "dark",
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
