import { Meta, StoryObj } from "@storybook/react";
import CategoryHeader from "./CategoryHeader";

const meta: Meta<typeof CategoryHeader> = {
  title: "Components/Category Header",
  component: CategoryHeader,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof CategoryHeader>;

export const Default: Story = {
  args: {
    title: "headphones",
  },
};
