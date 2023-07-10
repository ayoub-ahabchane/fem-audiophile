import { Meta, StoryObj } from "@storybook/react";
import HeadphonesImgDesktop from "../../storybook/assets/product_card/image-category-page-preview-desktop.jpg";
import HeadphonesImgMobile from "../../storybook/assets/product_card/image-category-page-preview-mobile.jpg";
import HeadphonesImgTablet from "../../storybook/assets/product_card/image-category-page-preview-tablet.jpg";
import PreviewCard from "./PreviewCard";

const meta: Meta<typeof PreviewCard> = {
  title: "Components/Product Card",
  component: PreviewCard,
  decorators: [
    (Story) => (
      <div className="mx-auto lg:max-w-[79.375rem] lg:px-20">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof PreviewCard>;

export const Default: Story = {
  args: {
    reversed: true,
    overline: "new product",
    title: (
      <>
        X99 mark ii <br />
        headphones
      </>
    ),
    copy: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    cta: {
      label: "see product",
      anchorProps: {
        "aria-label": "Check out our X99 mark 2 headphones",
        href: "/",
      },
    },
    productImages: {
      src: {
        mobile: HeadphonesImgMobile,
        tablet: HeadphonesImgTablet,
        desktop: HeadphonesImgDesktop,
      },
      alt: "X99 Mark 2 Headphones",
      blurImg: {
        mobile: "",
        tablet: "",
        desktop: "",
      },
    },
  },
};
