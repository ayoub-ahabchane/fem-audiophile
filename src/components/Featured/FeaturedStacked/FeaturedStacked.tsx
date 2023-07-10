import { getCategoryById } from "@/lib/swell/categories";
import { getProduct } from "@/lib/swell/products";
import Image, { StaticImageData } from "next/image";
import Cta, { PropTypes as TCta } from "../../../components/Cta/Cta";

export type TImage = {
  src: string | StaticImageData;
  alt: string;
};

type PropTypes = {
  headline: string;
  backgroundImages: {
    mobile: TImage;
    tablet: TImage;
    desktop: TImage;
  };
  cta: TCta;
};

export const UIFeaturedStacked = ({
  backgroundImages,
  headline,
  cta: { label, anchorProps },
}: PropTypes) => {
  return (
    <article className="grid grid-rows-2 gap-y-6 md:grid-cols-2 md:grid-rows-1 md:gap-x-2.5">
      <div className="relative overflow-hidden rounded-md">
        <Image
          src={backgroundImages.mobile.src}
          alt={backgroundImages.mobile.alt}
          fill
          sizes="327px"
          className="rounded-md object-cover md:hidden"
        />
        <Image
          src={backgroundImages.tablet.src}
          alt={backgroundImages.tablet.alt}
          fill
          sizes="339px"
          className="hidden rounded-md object-cover md:block"
        />
        <Image
          src={backgroundImages.desktop.src}
          alt={backgroundImages.desktop.alt}
          fill
          sizes="320px"
          className="hidden rounded-md object-cover lg:block"
        />
      </div>
      <div className="rounded-md bg-adp-slate-300 px-6 py-10 md:px-10 md:py-[6.3125rem] lg:px-[5.9375rem]">
        <h2 className="mb-8 text-h4 uppercase">{headline}</h2>
        <Cta
          variation="secondary"
          label={label}
          anchorProps={{ ...anchorProps }}
        />
      </div>
    </article>
  );
};

const FeaturedStacked = async ({ productSlug }: { productSlug: string }) => {
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
    cta: {
      variation: "secondary",
      label: "see product",
      anchorProps: {
        "aria-label": `Check out our ${productData.name}`,
        href: `/${categorySlug}/${productData.slug}`,
      },
    },
    backgroundImages: {
      mobile: {
        src: productData.content.media_assets[0].feature_image[0].stacked[0]
          .mobile.file.url,
        alt: productData.name,
      },

      tablet: {
        src: productData.content.media_assets[0].feature_image[0].stacked[0]
          .tablet.file.url,
        alt: productData.name,
      },
      desktop: {
        src: productData.content.media_assets[0].feature_image[0].stacked[0]
          .desktop.file.url,
        alt: productData.name,
      },
    },
  };

  return <UIFeaturedStacked {...featureProps} />;
};

export default FeaturedStacked;
