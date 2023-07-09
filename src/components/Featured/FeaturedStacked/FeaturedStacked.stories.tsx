import { Meta, StoryObj } from "@storybook/react";
import earPhonesDesktop from "../../../storybook/assets/product_images/yx1_earphones/featured/image-earphones-yx1_desktop.jpg";
import earPhonesMobile from "../../../storybook/assets/product_images/yx1_earphones/featured/image-earphones-yx1_mobile.jpg";
import earPhonesTablet from "../../../storybook/assets/product_images/yx1_earphones/featured/image-earphones-yx1_tablet.jpg";
import UIFeaturedStacked from "./FeaturedStacked";

const meta: Meta<typeof UIFeaturedStacked> = {
  title: "Components/Featured Products/Stacked",
  component: UIFeaturedStacked,
  decorators: [
    (Story) => (
      <div className="max-w-[1110px] lg:mx-auto">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof UIFeaturedStacked>;

export const Default: Story = {
  args: {
    headline: "yx1 earphones",
    cta: {
      label: "see product",
      anchorProps: { href: "/", ariaLabel: "Check out our YX1 earphones" },
    },
    backgroundImages: {
      mobile: { src: earPhonesMobile, alt: "YX1 earphones" },
      tablet: { src: earPhonesTablet, alt: "YX1 earphones" },
      desktop: { src: earPhonesDesktop, alt: "YX1 earphones" },
    },
  },
};
