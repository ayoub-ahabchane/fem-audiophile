import Image, { StaticImageData } from "next/image";
import Cta, { PropTypes as TCta } from "../Cta/Cta";

export interface PropTypes {
  /**Specifies the display order of the product image and text on large breakpoints */
  reversed: boolean;
  /** Product name */
  title: React.ReactNode | string;
  /** Product description */
  copy: string;
  /** Product flags */
  overline: string | null;
  /** Call to action button */
  cta: TCta;
  productImages: {
    src: {
      mobile: string | StaticImageData;
      tablet: string | StaticImageData;
      desktop: string | StaticImageData;
    };
    blurImg: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    alt: string;
  };
}

const PreviewCard = ({
  reversed = false,
  title,
  copy,
  overline,
  cta,
  productImages,
}: PropTypes) => {
  const imageOrderClasses = reversed && "lg:col-start-2 lg:col-span-1";
  const bodyOrderClasses = reversed && "lg:col-start-1 lg:col-span-1";

  return (
    <article className="grid grid-flow-row grid-rows-[repeat(2,_auto)] items-center gap-y-8 md:gap-y-14 lg:grid-flow-col lg:grid-cols-2 lg:grid-rows-1 lg:gap-x-32">
      <div
        className={`relative flex h-[22rem] overflow-hidden rounded-lg md:w-full lg:h-[35rem] lg:self-stretch ${imageOrderClasses}`}
      >
        <Image
          src={productImages.src.mobile}
          alt={productImages.alt}
          className="w-full rounded-lg object-cover object-center md:hidden"
          fill
          placeholder={"blur"}
          blurDataURL={productImages.blurImg.mobile}
        />
        <Image
          src={productImages.src.tablet}
          alt={productImages.alt}
          className="hidden object-cover md:block lg:hidden"
          placeholder={"blur"}
          blurDataURL={productImages.blurImg.tablet}
          fill
        />
        <Image
          src={productImages.src.desktop}
          alt={productImages.alt}
          className="hidden object-cover lg:block"
          placeholder={"blur"}
          blurDataURL={productImages.blurImg.desktop}
          fill
        />
      </div>
      <div
        className={`flex flex-col items-center gap-6 text-center md:px-14 lg:items-start lg:gap-8 lg:px-0 lg:text-left ${bodyOrderClasses}`}
      >
        <h2 className="order-2 text-h4 uppercase md:text-h2">{title}</h2>
        {overline && (
          <span className="order-1 text-overline uppercase text-adp-tangerine-400">
            {overline}
          </span>
        )}
        <p className="order-3 text-body opacity-50">{copy}</p>
        <div className="order-4">
          <Cta {...cta} />
        </div>
      </div>
    </article>
  );
};

export default PreviewCard;
