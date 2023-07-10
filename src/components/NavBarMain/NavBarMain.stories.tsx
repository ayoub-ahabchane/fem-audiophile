import { Meta, StoryObj } from "@storybook/react";
import earphonesImg from "../../storybook/assets/category_thumbnails/image-category-thumbnail-earphones.png";
import headphonesImg from "../../storybook/assets/category_thumbnails/image-category-thumbnail-headphones.png";
import speakersImg from "../../storybook/assets/category_thumbnails/image-category-thumbnail-speakers.png";
import NavBarMain from "./NavBarMain";

const meta: Meta<typeof NavBarMain> = {
  title: "Components/Navigation/Navigation bar",
  component: NavBarMain,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof NavBarMain>;

export const Default: Story = {
  args: {
    categories: [
      {
        categoryName: "headphones",
        ctaTitle: "shop",
        image: headphonesImg,
        link: { href: "/headphones" },
        blurUrl: ""
      },
      {
        categoryName: "speakers",
        ctaTitle: "shop",
        image: speakersImg,
        link: { href: "/speakers" },
        blurUrl: ""
      },
      {
        categoryName: "earphones",
        ctaTitle: "shop",
        image: earphonesImg,
        link: { href: "/earphones" },
        blurUrl: ""
      },
    ],
    links: [
      { label: "Home", href: "/" },
      { label: "headphones", href: "/headphones" },
      { label: "speakers", href: "/speakers" },
      { label: "earphones", href: "/earphones" },
    ],
  },
};
