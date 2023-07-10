import { getAllCategories } from "@/lib/swell/categories";
import {
  CategoryCard,
  PropTypes as TCategoryCard,
} from "../CategoryCard/CategoryCard";
import { getBlurURL } from "@/lib/utils";

type PropTypes = {
  categories: TCategoryCard[];
};

export const UICategoryCards = ({ categories }: PropTypes) => {
  return (
    <ul
      className={`grid grid-rows-3 gap-x-4 gap-y-4 md:auto-rows-fr md:grid-cols-3 md:grid-rows-none`}
    >
      {categories.map((cat) => (
        <li key={cat.categoryName}>
          <CategoryCard {...cat} />
        </li>
      ))}
    </ul>
  );
};

const CategoryCards = async () => {
  const categoriesData = await getAllCategories(["name", "slug", "images"]);

  const categories = await Promise.all(
    categoriesData.map(async ({ name, slug, images }) => {
      const blurUrl = await getBlurURL(images[0].file.url);

      const props: TCategoryCard = {
        categoryName: name,
        link: {
          href: `/${slug}`,
          ariaLabel: `Discover Audiophile ${name}`,
        },
        image: images[0].file.url,
        ctaTitle: "Shop",
        blurUrl,
      };

      return props;
    })
  );

  return <UICategoryCards categories={categories} />;
};

export default CategoryCards;
