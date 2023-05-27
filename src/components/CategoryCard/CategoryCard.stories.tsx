import { Meta, StoryObj } from "@storybook/react";
import { UICategoryCard } from "./CategoryCard";
import headphonesImg from "./assets/image-category-thumbnail-headphones.png";

const meta: Meta<typeof UICategoryCard> = {
  title: "Components/Product Category Card",
  component: UICategoryCard,
  parameters: { layout: "centered" },
};

export default meta;

type Story = StoryObj<typeof UICategoryCard>;

export const Default: Story = {
  args: {
    categoryName: "headphones",
    ctaTitle: "shop",
    image: headphonesImg,
    link: { href: "/" },
  },
  decorators: [
    (Story) => {
      return (
        <div className="min-w-[13.9375rem] max-w-[21.875rem]">
          <Story />
        </div>
      );
    },
  ],
};
