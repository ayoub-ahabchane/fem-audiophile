import { Meta, StoryObj } from "@storybook/react";
import speakersImg from "../../../storybook/assets/product_images/zx9_speakers/feature/primary/image-speaker-zx9.png";
import FeaturedMain from "./FeaturedMain";

const meta: Meta<typeof FeaturedMain> = {
  title: "Components/Featured Products/Main",
  component: FeaturedMain,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-[20.4375rem] md:w-[43.0625rem] lg:w-[69.375rem]">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof FeaturedMain>;

export const Default: Story = {
  args: {
    productImg: speakersImg,
    headline: "zx9 speakers",
    subhead:
      "Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.",
    cta: {
      variation: "dark",
      label: "see product",
      anchorProps: {
        href: "/",
        ariaLabel: "Check out the new zx9 speakers",
      },
    },
  },
};
