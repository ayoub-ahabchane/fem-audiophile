import { getCategory } from "@/lib/swell/categories";
import { getProduct } from "@/lib/swell/products";
import UIHero, { PropTypes } from "./UIHero";

const Hero = async ({ productSlug }: { productSlug: string }) => {
  const heroData = await getProduct(productSlug, [
    "name",
    "slug",
    "content.media_assets",
    "category_index.id",
    "is_new",
  ]);
  const categoryId = heroData.category_index.id[0];
  const { slug: heroProductCategory } = await getCategory(categoryId, ["slug"]);

  const heroProps: PropTypes = {
    headline: heroData.name,
    overline: heroData.is_new && "new product",
    subhead: heroData.content.media_assets[0].hero_image[0].subhead,
    bg: {
      mobile: heroData.content.media_assets[0].hero_image[0].mobile.file.url,
      tablet: heroData.content.media_assets[0].hero_image[0].tablet.file.url,
      desktop: heroData.content.media_assets[0].hero_image[0].desktop.file.url,
    },
    cta: {
      anchorProps: {
        href: `/${heroProductCategory}/${heroData.slug}`,
        "aria-label": `Check out ${heroData.name}`,
      },
      label: "See product",
    },
  };

  return <UIHero {...heroProps} />;
};
export default Hero;
