import {
  PropTypes as TCategoryCard,
  UICategoryCard,
} from "../CategoryCard/CategoryCard";

enum ListDirection {
  "column" = "flex-column",
  "row" = "flex-row",
}

type PropTypes = {
  categories: TCategoryCard[];
};

const CategoryCards = ({ categories }: PropTypes) => {
  return (
    <ul
      className={`grid grid-rows-3 gap-x-4 gap-y-4 md:auto-rows-fr md:grid-cols-3 md:grid-rows-none`}
    >
      {categories.map((cat) => (
        <li key={cat.categoryName}>
          <UICategoryCard {...cat} />
        </li>
      ))}
    </ul>
  );
};

export default CategoryCards;
