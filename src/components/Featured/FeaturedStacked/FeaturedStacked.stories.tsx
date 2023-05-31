import { Meta, StoryObj, StrictArgs } from "@storybook/react";
import FeaturedStacked from "./FeaturedStacked";
import earPhonesMobile from "../../../storybook/assets/product_images/yx1_earphones/featured/image-earphones-yx1_mobile.jpg";
import earPhonesTablet from "../../../storybook/assets/product_images/yx1_earphones/featured/image-earphones-yx1_tablet.jpg";
import earPhonesDesktop from "../../../storybook/assets/product_images/yx1_earphones/featured/image-earphones-yx1_desktop.jpg";

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
