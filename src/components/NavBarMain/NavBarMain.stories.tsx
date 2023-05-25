import { Meta, StoryObj } from "@storybook/react";
import NavBarMain from "./NavBarMain";

const meta: Meta<typeof NavBarMain> = {
  title: "Components/Navigation/Navigation bar",
  component: NavBarMain,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof NavBarMain>;

export const Default: Story = {};
