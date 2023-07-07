import CategoryCards from "../../CategoryCards/CategoryCards";

import earphonesImg from "../../../storybook/assets/category_thumbnails/image-category-thumbnail-earphones.png";
import headphonesImg from "../../../storybook/assets/category_thumbnails/image-category-thumbnail-headphones.png";
import speakersImg from "../../../storybook/assets/category_thumbnails/image-category-thumbnail-speakers.png";
const categories = [
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
const MobileMenuPanel = () => {
  return (
    <div>
      <CategoryCards categories={categories} />
    </div>
  );
};

export default MobileMenuPanel;
