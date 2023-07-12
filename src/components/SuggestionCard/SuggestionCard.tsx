import Image, { StaticImageData } from "next/image";
import Cta, { PropTypes as TCta } from "../Cta/Cta";

export interface PropTypes {
  /**Product name */
  title: string;
  /** Call to action button */
  cta: TCta;
  /**Product image set (Mobile, tablet and desktop variations) */
  productImages: {
    src: {
      mobile: string | StaticImageData;
      tablet: string | StaticImageData;
      desktop: string | StaticImageData;
    };
    blurUrl: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    alt: string;
  };
}

const SuggestionCard = ({
  title,
  cta,
  productImages: { src, alt, blurUrl },
}: PropTypes) => {
  return (
    <article className="flex flex-col items-center gap-8 md:gap-10">
      <h3 className="order-2 text-center text-h5 uppercase">{title}</h3>
      <div className="relative order-1 h-full min-h-[120px] w-full overflow-hidden rounded-lg">
        <Image
          src={src.mobile}
          alt={alt}
          width={654}
          placeholder="blur"
          blurDataURL={blurUrl.desktop}
          height={240}
          className="w-full rounded-lg object-cover md:hidden"
        />
        <Image
          src={src.tablet}
          alt={alt}
          width={446}
          height={636}
          placeholder="blur"
          blurDataURL={blurUrl.tablet}
          className="hidden w-full rounded-lg object-cover md:block lg:hidden"
        />
        <Image
          src={src.desktop}
          alt={alt}
          width={700}
          height={636}
          placeholder="blur"
          blurDataURL={blurUrl.desktop}
          className="hidden w-full rounded-lg object-cover lg:block"
        />
      </div>
      <div className="order-3">
        <Cta {...cta} />
      </div>
    </article>
  );
};

export default SuggestionCard;
