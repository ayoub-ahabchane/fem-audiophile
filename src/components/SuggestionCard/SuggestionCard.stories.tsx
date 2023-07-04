import { Meta, StoryObj } from "@storybook/react";
import suggestionImgDesktop from "../../storybook/assets/suggestions/product-xx99-mark-one-headphones/image-xx99-mark-one-headphones-desktop.jpg";
import suggestionImgMobile from "../../storybook/assets/suggestions/product-xx99-mark-one-headphones/image-xx99-mark-one-headphones-mobile.jpg";
import suggestionImgTablet from "../../storybook/assets/suggestions/product-xx99-mark-one-headphones/image-xx99-mark-one-headphones-tablet.jpg";
import SuggestionCard from "./SuggestionCard";

const meta: Meta<typeof SuggestionCard> = {
  title: "components/Suggestion Card",
  component: SuggestionCard,
  decorators: [
    (Story) => {
      return (
        <div className="mx-auto md:max-w-[14rem] lg:max-w-[22rem]">
          <Story />
        </div>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof SuggestionCard>;

export const Default: Story = {
  args: {
    title: "XX99 mark I",
    productImages: {
      src: {
        mobile: suggestionImgMobile,
        tablet: suggestionImgTablet,
        desktop: suggestionImgDesktop,
      },
      alt: "XX99 Mark 1 headphones",
    },
    cta: {
      label: "See product",
      anchorProps: {
        ariaLabel: "Check out our XX99 MarK 1 headphones",
        href: "/",
      },
    },
  },
};
