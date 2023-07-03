import { Meta, StoryObj } from "@storybook/react";
import g1Desktop from "../../../storybook/assets/product_page/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg";
import g2Desktop from "../../../storybook/assets/product_page/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg";
import g3Desktop from "../../../storybook/assets/product_page/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg";
import porductImageDedsktop from "../../../storybook/assets/product_page/product-xx99-mark-two-headphones/desktop/image-product.jpg";
import g1Mobile from "../../../storybook/assets/product_page/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg";
import g2Mobile from "../../../storybook/assets/product_page/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg";
import g3Mobile from "../../../storybook/assets/product_page/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg";
import porductImageMobile from "../../../storybook/assets/product_page/product-xx99-mark-two-headphones/mobile/image-product.jpg";
import g1Tablet from "../../../storybook/assets/product_page/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg";
import g2Tablet from "../../../storybook/assets/product_page/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg";
import g3Tablet from "../../../storybook/assets/product_page/product-xx99-mark-two-headphones/tablet/image-gallery-3.jpg";
import porductImageTablet from "../../../storybook/assets/product_page/product-xx99-mark-two-headphones/tablet/image-product.jpg";

import ProductProfile from "./ProductProfile";

const meta: Meta<typeof ProductProfile> = {
  title: "Components/ProductProfile",
  component: ProductProfile,
  decorators: [
    (Story) => {
      return (
        <div className="max-w-[1110px] lg:mx-auto">
          <Story />
        </div>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof ProductProfile>;

export const Default: Story = {
  args: {
    title: "XX99 Mark II Headphones",
    copy: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    overline: "new product",
    price: 2999,
    images: {
      productImages: {
        alt: "XX99 Mark II Headphones",
        src: {
          mobile: porductImageMobile,
          tablet: porductImageTablet,
          desktop: porductImageDedsktop,
        },
      },
      galleryImages: [
        {
          alt: "Man wearing X99 Mark II headphones",
          src: {
            mobile: g1Mobile,
            tablet: g1Tablet,
            desktop: g1Desktop,
          },
        },
        {
          alt: "X99 Mark II headphones resting on a coffee table",
          src: {
            mobile: g2Mobile,
            tablet: g2Tablet,
            desktop: g2Desktop,
          },
        },
        {
          alt: "Close up shot of X99 Mark II headphone earcups",
          src: {
            mobile: g3Mobile,
            tablet: g3Tablet,
            desktop: g3Desktop,
          },
        },
      ],
    },
    literature: [
      "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.",
      "The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hourbattery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
    ],
    boxContents: [
      { quantity: 1, name: "headphone unit" },
      { quantity: 2, name: "replacement earcups" },
      { quantity: 1, name: "user manual" },
      { quantity: 1, name: "3.5mm 5m audio cable" },
      { quantity: 1, name: "travel bag" },
    ],
    maxQuantity: 5,
    onAddToCart: () => {
      console.log("boop");
    },
  },
};
