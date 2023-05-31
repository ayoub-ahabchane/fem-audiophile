import { Meta, StoryObj } from "@storybook/react";
import promoImgDesktop from "../../storybook/assets/promo/image-best-gear_desktop.jpg";
import promoImgMobile from "../../storybook/assets/promo/image-best-gear_mobile.jpg";
import promoImgTablet from "../../storybook/assets/promo/image-best-gear_tablet.jpg";
import Promo from "./Promo";

const meta: Meta<typeof Promo> = {
  title: "Components/Promo",
  component: Promo,
  decorators: [
    (Story) => (
      <div className="max-w-[1110px] lg:mx-auto">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Promo>;

export const Default: Story = {
  args: {
    headline: (
      <>
        Bringing you the
        <br />
        <span>best</span> audio gear
      </>
    ),
    copy: "Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.",
    image: {
      mobile: {
        src: promoImgMobile,
        alt: "Person wearing XYZ headphones",
      },
      tablet: {
        src: promoImgTablet,
        alt: "Person wearing XYZ headphones",
      },
      desktop: {
        src: promoImgDesktop,
        alt: "Person wearing XYZ headphones",
      },
    },
  },
};
