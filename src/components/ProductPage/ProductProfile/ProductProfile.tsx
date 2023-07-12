import Image, { StaticImageData } from "next/image";
import AddToCartButton from "../AddToCartButton/AddToCartButton";
import ProductGallery from "../ProductGallery/ProductGallery";
import ProductLiterature from "../ProductLiterature/ProductLiterature";

type ImageProps = {
  src: string | StaticImageData;
  alt: string;
};

type UrlByBreakpoint = {
  mobile: string;
  tablet: string;
  desktop: string;
};

export interface PropTypes {
  id: string;
  /** Product name */
  title: React.ReactNode | string;
  /** Product description */
  copy: string;
  /** Product flags */
  overline: string | null;
  /** Product price */
  price: number;
  /** Contains the product image set and a gallery set*/
  images: {
    /**Product image */
    productImages: {
      src: {
        mobile: string | StaticImageData;
        tablet: string | StaticImageData;
        desktop: string | StaticImageData;
      };
      blurUrl: UrlByBreakpoint;
      alt: string;
    };
    /** Images to be displayed in the gallery section of the product page */
    galleryImages: Array<{
      alt: string;
      src: {
        mobile: string | StaticImageData;
        tablet: string | StaticImageData;
        desktop: string | StaticImageData;
      };
      blurUrl: UrlByBreakpoint;
    }>;
  };
  /**An array of paragraphs describing the features of the product */
  literature: string;
  boxContents: Array<{
    quantity: number;
    name: string;
  }>;
  /**Maximum quanitity that a user can add to cart*/
  maxQuantity: number;
}

const ProductProfile = ({
  id,
  title,
  copy,
  overline,
  price,
  images: { productImages, galleryImages },
  literature,
  boxContents,
  maxQuantity,
}: PropTypes) => {
  return (
    <section className="flex flex-col gap-[5.5rem] md:gap-[7.5rem]">
      <article className="grid grid-flow-row grid-rows-[repeat(2,_auto)] items-center gap-y-8 md:grid-flow-col md:grid-cols-[3fr_4fr] md:grid-rows-1 md:gap-x-[4.31rem] lg:grid-cols-[6fr_5fr] lg:gap-x-32">
        <div className="relative flex overflow-hidden rounded-lg lg:max-w-[33.75rem] lg:self-stretch">
          <Image
            src={productImages.src.mobile}
            alt={productImages.alt}
            height={327}
            width={327}
            placeholder="blur"
            blurDataURL={productImages.blurUrl.mobile}
            className="w-full object-cover md:hidden"
          />
          <Image
            src={productImages.src.tablet}
            alt={productImages.alt}
            height={480}
            width={281}
            placeholder="blur"
            blurDataURL={productImages.blurUrl.tablet}
            className="hidden w-full object-cover md:block lg:hidden"
          />
          <Image
            src={productImages.src.desktop}
            alt={productImages.alt}
            placeholder="blur"
            blurDataURL={productImages.blurUrl.desktop}
            className="hidden w-full object-cover lg:block"
            width={540}
            height={560}
          />
        </div>
        <div className="flex flex-col items-start gap-6 lg:items-start lg:gap-8 lg:px-0">
          <div className="flex flex-col">
            <h1 className="order-2 text-h4 uppercase lg:text-h2">{title}</h1>
            {overline && (
              <span className="order-1 mb-6 text-overline uppercase text-adp-tangerine-400 md:mb-1 md:text-xs">
                {overline}
              </span>
            )}
          </div>
          <p className="order-3 text-body opacity-50">{copy}</p>
          <p className="order-4 text-h6 font-bold">
            {price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 0,
            })}
          </p>
          <AddToCartButton productId={id} max={maxQuantity} disabled={false} />
        </div>
      </article>
      <ProductLiterature literature={literature} boxContents={boxContents} />
      <ProductGallery galleryImages={galleryImages} />
    </section>
  );
};

export default ProductProfile;
