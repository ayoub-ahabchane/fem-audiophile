import { getProduct } from "@/lib/swell/products";
import Cta, { PropTypes as TCta } from "../../Cta/Cta";
import { getCategory } from "@/lib/swell/categories";

type PropTypes = {
  backgroundImage: string;
  headline: string;
  cta: TCta;
};

export const UIFeaturedSecondary = ({
  cta: { anchorProps, label, variation = "secondary" },
  headline,
  backgroundImage,
}: PropTypes) => {
  return (
    <article
      style={{ backgroundImage: `url("${backgroundImage}")` }}
      className={`lg:bg-[position:] grid grid-cols-1 grid-rows-1 rounded-md bg-cover bg-[position:12%_bottom] bg-no-repeat md:bg-[position:left_90%] lg:bg-[size:auto] lg:bg-[position:25%_90%]`}
    >
      <div className="col-start-1 row-start-1 px-6 py-[6.3125rem] md:px-[3.875rem] lg:px-[5.9375rem]">
        <h2 className="mb-8 text-h4 uppercase">{headline}</h2>
        <Cta
          variation={variation}
          label={label}
          anchorProps={{ ...anchorProps }}
        />
      </div>
    </article>
  );
};

const FeaturedSecondary = async ({ productSlug }: { productSlug: string }) => {
  const productData = await getProduct(productSlug, [
    "name",
    "slug",
    "category_index",
    "content.media_assets",
  ]);
  const categoryId = productData.category_index.id[0];
  const { slug: categorySlug } = await getCategory(categoryId, ["slug"]);

  const featureProps: PropTypes = {
    headline: productData.name,
    cta: {
      variation: "secondary",
      label: "see product",
      anchorProps: {
        "aria-label": `Check out our ${productData.name}`,
        href: `/${categorySlug}/${productData.slug}`,
      },
    },
    backgroundImage: productData.content.media_assets[0].feature_image[0].secondary.file.url,
  };

  return <UIFeaturedSecondary {...featureProps} />
};

export default FeaturedSecondary;
