import { PropTypes as TCta } from "../Cta/Cta";
import Image, { StaticImageData } from "next/image";
import Cta from "../Cta/Cta";

interface PropTypes {
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
    alt: string;
  };
}

const SuggestionCard = ({
  title,
  cta,
  productImages: { src, alt },
}: PropTypes) => {
  return (
    <article className="flex flex-col items-center gap-8 md:gap-10">
      <h3 className="order-2 text-h5 uppercase">{title}</h3>
      <div className="order-1 overflow-hidden rounded-lg">
        <Image
          src={src.mobile}
          alt={alt}
          className="w-full rounded-lg object-cover md:hidden"
        />
        <Image
          src={src.tablet}
          alt={alt}
          className="hidden w-full rounded-lg object-cover md:block lg:hidden"
        />
        <Image
          src={src.desktop}
          alt={alt}
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
