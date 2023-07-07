import { Meta, StoryObj } from "@storybook/react";
import headphonesImg from "../../storybook/assets/category_thumbnails/image-category-thumbnail-headphones.png";
import { CategoryCard } from "./CategoryCard";

const meta: Meta<typeof CategoryCard> = {
  title: "Components/Product Category/Card",
  component: CategoryCard,
  parameters: { layout: "centered" },
  decorators: [
    (Story) => {
      return (
        <div className="max-w-[21.875rem]">
          <Story />
        </div>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof CategoryCard>;

export const Default: Story = {
  args: {
    categoryName: "headphones",
    ctaTitle: "shop",
    image: headphonesImg,
    link: { href: "/" },
  },
};
