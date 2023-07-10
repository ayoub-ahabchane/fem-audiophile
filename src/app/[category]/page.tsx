import CategoryCards from "@/components/CategoryCards/CategoryCards";
import CategoryHeader from "@/components/CategoryHeader/CategoryHeader";
import PreviewCard, {
  PropTypes as TPreviewCard,
} from "@/components/PreviewCard/PreviewCard";
import Promo from "@/components/Promo/Promo";
import { getAllCategories, getCategoryBySlug } from "@/lib/swell/categories";
import { getAllProductsByCategory } from "@/lib/swell/products";

export const dynamicParams = false;
export const generateStaticParams = async () => {
  const categories = await getAllCategories(["name", "slug"]);
  return categories.map(({ slug }) => ({ category: slug }));
};

const Page = async ({
  params: { category },
}: {
  params: { category: string };
}) => {
  const categoryData = await getCategoryBySlug(category, ["name", "id"]);

  const products = await getAllProductsByCategory(categoryData.id, [
    "name",
    "slug",
    "content.media_assets",
    "is_new",
    "description",
  ]);

  return (
    <main className="belowBar">
      <CategoryHeader title={categoryData.name} />
      <div className="wrapper flex flex-col gap-[7.5rem] py-16 lg:gap-40 lg:py-40">
        <section className="flex flex-col gap-[7.5rem] lg:gap-40">
          {products.map((product, index) => {
            const previewProps: TPreviewCard = {
              title: product.name,
              overline: product.is_new ? "new product" : null,
              copy: product.description,
              cta: {
                label: "see product",
                anchorProps: {
                  href: `/${category}/${product.slug}`,
                  "aria-label": `Check out our ${product.name}`,
                },
              },
              productImages: {
                src: {
                  mobile:
                    product.content.media_assets[0].preview_image[0].mobile.file
                      .url,
                  tablet:
                    product.content.media_assets[0].preview_image[0].tablet.file
                      .url,
                  desktop:
                    product.content.media_assets[0].preview_image[0].desktop
                      .file.url,
                },
                alt: product.name,
              },
              reversed: index % 2 !== 0,
            };

            return <PreviewCard key={product.slug} {...previewProps} />;
          })}
        </section>
        {/* @ts-expect-error Server Component */}
        <CategoryCards />
        <Promo />
      </div>
    </main>
  );
};

export default Page;
