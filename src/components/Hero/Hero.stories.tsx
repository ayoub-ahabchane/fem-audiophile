import { Meta, StoryObj } from "@storybook/react";
import UIHero from "./UIHero";

const meta: Meta<typeof UIHero> = {
  title: "Components/Hero",
  component: UIHero,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof UIHero>;

const heroMobile =
  "http://localhost:6006/product_images/x99_mark_ii/mobile/x99_mark_ii_hero.jpg";
const heroTablet =
  "http://localhost:6006/product_images/x99_mark_ii/tablet/x99_mark_ii_hero.jpg";
const heroDesktop =
  "http://localhost:6006/product_images/x99_mark_ii/desktop/x99_mark_ii_hero.jpg";

export const Default: Story = {
  args: {
    bg: {
      mobile: heroMobile,
      tablet: heroTablet,
      desktop: heroDesktop,
    },
    overline: "new product",
    headline: "xx99 mark ii headphones",
    subhead:
      "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
    cta: {
      variation: "primary",
      label: "see product",
      anchorProps: {
        href: "/",
        "aria-label": "Explore our new xx99 mark ii headphones",
      },
    },
  },
};
