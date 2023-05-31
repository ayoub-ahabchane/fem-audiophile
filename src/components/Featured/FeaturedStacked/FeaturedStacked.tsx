import Image, { StaticImageData } from "next/image";
import Cta, { PropTypes as TCta } from "../../../components/Cta/Cta";

type TImage = {
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

const FeaturedStacked = ({
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
          className="rounded-md object-cover md:hidden"
        />
        <Image
          src={backgroundImages.tablet.src}
          alt={backgroundImages.tablet.alt}
          fill
          className="hidden rounded-md object-cover md:block"
        />
        <Image
          src={backgroundImages.desktop.src}
          alt={backgroundImages.desktop.alt}
          fill
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

export default FeaturedStacked;
