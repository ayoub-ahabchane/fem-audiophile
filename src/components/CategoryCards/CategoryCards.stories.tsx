import { Meta, StoryObj } from "@storybook/react";
import earphonesImg from "../../storybook/assets/category_thumbnails/image-category-thumbnail-earphones.png";
import headphonesImg from "../../storybook/assets/category_thumbnails/image-category-thumbnail-headphones.png";
import speakersImg from "../../storybook/assets/category_thumbnails/image-category-thumbnail-speakers.png";
import { PropTypes as TCategoryCard } from "../CategoryCard/CategoryCard";
import CategoryCards from "./CategoryCards";

const meta: Meta<typeof CategoryCards> = {
  title: "Components/Product Category/List",
  component: CategoryCards,
  parameters: {
    // layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof CategoryCards>;

const categoriesData: TCategoryCard[] = [
  {
    categoryName: "headphones",
    ctaTitle: "shop",
    image: headphonesImg,
    link: { href: "/" },
  },
  {
    categoryName: "speakers",
    ctaTitle: "shop",
    image: speakersImg,
    link: { href: "/" },
  },
  {
    categoryName: "earphones",
    ctaTitle: "shop",
    image: earphonesImg,
    link: { href: "/" },
  },
];

export const Default: Story = {
  args: { categories: categoriesData },
};
