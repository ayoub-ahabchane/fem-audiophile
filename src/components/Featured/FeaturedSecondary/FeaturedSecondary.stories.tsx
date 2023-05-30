import { Meta, StoryObj } from "@storybook/react";
import FeaturedSecondary from "./FeaturedSecondary";

const meta: Meta<typeof FeaturedSecondary> = {
  title: "Components/Featured Products/Secondary Feature",
  component: FeaturedSecondary,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="md: w-[327px] md:w-[689px] lg:w-[1110px]">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof FeaturedSecondary>;

export const Default: Story = {
  args: {
    headline: "zx7 speaker",
    backgroundImage:
      "http://localhost:6006/product_images/zx7_speakers/feature/secondary/wideshot.jpg",
    cta: {
      variation: "secondary",
      label: "see product",
      anchorProps: {
        href: "/",
        ariaLabel: "Check out the ZX7 speaker",
      },
    },
  },
};
