import ProductProfile, {
  PropTypes as TProductProfile,
} from "@/components/ProductPage/ProductProfile/ProductProfile";
import SuggestionCard, {
  PropTypes as TSuggestionCard,
} from "@/components/SuggestionCard/SuggestionCard";
import { getCategoryBySlug } from "@/lib/swell/categories";
import { swellnode } from "@/lib/swell/init/node";
import { getAllProductsByCategory, getProduct } from "@/lib/swell/products";
import { getBlurURL } from "@/lib/utils";
import Link from "next/link";

export const dynamicParams = false;

export const generateStaticParams = async ({
  params: { product, category },
}: {
  params: {
    category: string;
    product: string;
  };
}) => {
  const categoryData = await getCategoryBySlug(category, ["id"]);
  const categoryId = categoryData.id;
  const products = await getAllProductsByCategory(categoryId, ["slug"]);
  return products.map(({ slug: productSlug }) => ({
    category,
    product: productSlug,
  }));
};

export const generateMetadata = async ({
  params: { product },
}: {
  params: {
    category: string;
    product: string;
  };
}) => {
  const { name, description } = await getProduct(product, [
    "name",
    "description",
  ]);
  return {
    title: name,
    description,
  };
};
const Page = async ({
  params: { product: productSlug, category },
}: {
  params: {
    category: string;
    product: string;
  };
}) => {
  const product = await getProduct(productSlug, [
    "id",
    "name",
    "price",
    "description",
    "box_contents",
    "content",
    "is_new",
    "up_sells",
    "stock_level",
  ]);

  const sortedShowcaseImgs = await Promise.all(
    product.content.media_assets[0].showcase_image[0].tile
      .sort((a: any, b: any) => {
        a.tile_position - b.tile_position;
      })
      .map(async ({ image_set, alt }: { image_set: any; alt: string }) => ({
        src: {
          mobile: image_set[0].mobile.file.url,
          tablet: image_set[0].tablet.file.url,
          desktop: image_set[0].desktop.file.url,
        },
        blurUrl: {
          mobile: await getBlurURL(image_set[0].mobile.file.url),
          tablet: await getBlurURL(image_set[0].tablet.file.url),
          desktop: await getBlurURL(image_set[0].desktop.file.url),
        },
        alt,
      }))
  );

  const productProfileProps: TProductProfile = {
    id: product.id,
    title: product.name,
    copy: product.description,
    price: product.price,
    overline: product.is_new ? "new product" : null,
    boxContents: product.box_contents[0].item.map((item: any) => ({
      quantity: item.quantity,
      name: item.name,
    })),
    maxQuantity: product.stock_level,
    literature: product.content.features,
    images: {
      productImages: {
        src: {
          mobile:
            product.content.media_assets[0].profile_image[0].mobile.file.url,
          tablet:
            product.content.media_assets[0].profile_image[0].tablet.file.url,
          desktop:
            product.content.media_assets[0].profile_image[0].desktop.file.url,
        },
        alt: product.name,
        blurUrl: {
          mobile: await getBlurURL(
            product.content.media_assets[0].profile_image[0].mobile.file.url
          ),
          tablet: await getBlurURL(
            product.content.media_assets[0].profile_image[0].tablet.file.url
          ),
          desktop: await getBlurURL(
            product.content.media_assets[0].profile_image[0].desktop.file.url
          ),
        },
      },

      galleryImages: sortedShowcaseImgs,
    },
  };

  const suggestionProps: TSuggestionCard[] = await Promise.all(
    product.up_sells.map(async ({ product_id }: { product_id: string }) => {
      const productData = await swellnode.get(`/products/${product_id}`, {
        fields: [
          "name",
          "slug",
          "attributes",
          "content.media_assets",
          "backup",
        ],
      });

      const suggestionCardProps: TSuggestionCard = {
        title: productData.name,
        cta: {
          label: "see product",
          anchorProps: {
            "aria-label": `Check out our ${productData.name}`,
            href: `/${productData.attributes.product_category}/${productData.slug}`,
          },
        },
        productImages: {
          alt: productData.name,
          src: {
            mobile: productData.backup.suggestion_image_mobile.file.url,
            tablet: productData.backup.suggestion_image_tablet.file.url,
            desktop: productData.backup.suggestion_image_desktop.file.url,
          },
          blurUrl: {
            mobile: await getBlurURL(
              productData.backup.suggestion_image_mobile.file.url
            ),
            tablet: await getBlurURL(
              productData.backup.suggestion_image_tablet.file.url
            ),
            desktop: await getBlurURL(
              productData.backup.suggestion_image_desktop.file.url
            ),
          },
        },
      };
      return suggestionCardProps;
    })
  );

  return (
    <div className="wrapper flex flex-col gap-[7.5rem] pb-[7.5rem] pt-8 md:pb-[7.5rem] md:pt-10 lg:gap-40 lg:pb-40 lg:pt-20">
      <section>
        <Link
          href={`/${category}`}
          className="inline-block pb-6 text-adp-copy-black/50 transition focus-within:text-adp-tangerine-400 hover:text-adp-tangerine-400"
        >
          Go back
        </Link>
        <ProductProfile {...productProfileProps} />
      </section>
      <section>
        <h2 className="mb-10 text-center text-h5 uppercase md:mb-14 md:text-h3 lg:mb-16">
          You may also like
        </h2>
        <div className="grid auto-cols-fr grid-flow-row auto-rows-fr gap-y-14 md:grid-flow-col md:gap-x-2.5 lg:gap-x-[1.875rem]">
          {suggestionProps.map((suggestion) => (
            <SuggestionCard key={suggestion.title} {...suggestion} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Page;
