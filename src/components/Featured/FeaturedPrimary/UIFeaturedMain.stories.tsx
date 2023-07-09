import { Meta, StoryObj } from "@storybook/react";
import speakersImg from "../../../storybook/assets/product_images/zx9_speakers/feature/primary/image-speaker-zx9.png";
import UIFeaturedMain from "./UIFeaturedMain";

const meta: Meta<typeof UIFeaturedMain> = {
  title: "Components/Featured Products/Main",
  component: UIFeaturedMain,
  decorators: [
    (Story) => (
      <div className="max-w-[1110px] lg:mx-auto">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof UIFeaturedMain>;

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
        "aria-label": "Check out the new zx9 speakers",
      },
    },
  },
};
