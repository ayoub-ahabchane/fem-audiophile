import { getCategoryById } from "@/lib/swell/categories";
import { getProduct } from "@/lib/swell/products";
import UIFeaturedMain, { PropTypes } from "./UIFeaturedMain";

const FeaturedMain = async ({ productSlug }: { productSlug: string }) => {
  const productData = await getProduct(productSlug, [
    "name",
    "slug",
    "category_index",
    "content.media_assets",
  ]);
  const categoryId = productData.category_index.id[0];
  const { slug: categorySlug } = await getCategoryById(categoryId, ["slug"]);
  const featureProps: PropTypes = {
    headline: productData.name,
    productImg:
      productData.content.media_assets[0].feature_image[0].primary.file.url,
    subhead: productData.content.media_assets[0].feature_image[0].subhead,
    cta: {
      variation: "dark",
      label: "see product",
      anchorProps: {
        "aria-label": `Check out our ${productData.name}`,
        href: `/${categorySlug}/${productData.slug}`,
      },
    },
  };

  return <UIFeaturedMain {...featureProps} />;
};

export default FeaturedMain;
