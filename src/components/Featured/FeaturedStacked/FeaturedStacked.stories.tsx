import { Meta, StoryObj } from "@storybook/react";
import FeaturedStacked from "./FeaturedStacked";

const meta: Meta<typeof FeaturedStacked> = {
  title: "Components/Featured Products/Stacked",
  component: FeaturedStacked,
  decorators: [
    (Story) => (
      <div className="max-w-[1110px] lg:mx-auto">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof FeaturedStacked>;

export const Default: Story = {};
