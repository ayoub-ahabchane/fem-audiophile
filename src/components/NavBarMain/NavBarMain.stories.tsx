import { Meta, StoryObj } from "@storybook/react";
import thumbnail from "../../storybook/assets/cart/image-xx99-mark-two-headphones.jpg";
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
    cartData: {
      items: [
        {
          thumbnail: thumbnail,
          orderedQuantity: 3,
          maxQuantity: 5,
          onChangeQuantity: () => {
            console.log("boop");
          },
          price: 2999,
          shortname: "XX99 MK II",
          slug: "xx99-mkii",
          name: "XX99 Mark 2 headphones",
          category: "headphones",
        },
        {
          thumbnail: thumbnail,
          orderedQuantity: 3,
          maxQuantity: 5,
          onChangeQuantity: () => {
            console.log("boop");
          },
          price: 2999,
          shortname: "XX99 MK II",
          name: "XX99 Mark 2 headphones",
          slug: "xx99-mkii",
          category: "headphones",
        },
        {
          thumbnail: thumbnail,
          orderedQuantity: 3,
          maxQuantity: 5,
          name: "XX99 Mark 2 headphones",
          onChangeQuantity: () => {
            console.log("boop");
          },
          price: 2999,
          shortname: "XX99 MK II",
          slug: "xx99-mkii",
          category: "headphones",
        },
      ],
      cartTotal: 5396,
      onCheckout: () => {
        console.log("boop!");
      },
    },
    categories: [
      {
        categoryName: "headphones",
        ctaTitle: "shop",
        image: headphonesImg,
        link: { href: "/headphones" },
      },
      {
        categoryName: "speakers",
        ctaTitle: "shop",
        image: speakersImg,
        link: { href: "/speakers" },
      },
      {
        categoryName: "earphones",
        ctaTitle: "shop",
        image: earphonesImg,
        link: { href: "/earphones" },
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
