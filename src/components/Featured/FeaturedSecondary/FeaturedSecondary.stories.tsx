import { Meta, StoryObj } from "@storybook/react";
import FeaturedSecondary from "./FeaturedSecondary";

const meta: Meta<typeof FeaturedSecondary> = {
  title: "Components/Featured Products/Secondary",
  component: FeaturedSecondary,
  decorators: [
    (Story) => (
      <div className="max-w-[1110px] lg:mx-auto">
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
      "/product_images/zx7_speakers/feature/secondary/wideshot.jpg",
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
