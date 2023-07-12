import Image, { StaticImageData } from "next/image";

type UrlByBreakpoint = {
  mobile: string;
  tablet: string;
  desktop: string;
};

interface PropTypes {
  galleryImages: Array<{
    alt: string;
    src: {
      mobile: string | StaticImageData;
      tablet: string | StaticImageData;
      desktop: string | StaticImageData;
    };
    blurUrl: UrlByBreakpoint;
  }>;
}

const ProductGallery = ({ galleryImages }: PropTypes) => {
  return (
    <article className="grid grid-cols-1 grid-rows-[1fr_1fr_2fr] gap-x-6 gap-y-6 md:grid-cols-[3fr_4fr] md:grid-rows-2">
      <div className="relative min-h-[10.875rem] overflow-hidden rounded-lg md:col-span-1 md:col-start-1 md:row-start-1">
        <Image
          src={galleryImages[0].src.mobile}
          alt={galleryImages[0].alt}
          height={348}
          width={654}
          placeholder="blur"
          blurDataURL={galleryImages[0].blurUrl.mobile}
          className="h-full w-full rounded-lg object-cover md:hidden"
        />
        <Image
          src={galleryImages[0].src.tablet}
          alt={galleryImages[0].alt}
          fill
          placeholder="blur"
          blurDataURL={galleryImages[0].blurUrl.tablet}
          sizes="554px"
          className="hidden rounded-lg object-cover md:block lg:hidden "
        />
        <Image
          src={galleryImages[0].src.desktop}
          alt={galleryImages[0].alt}
          fill
          placeholder="blur"
          blurDataURL={galleryImages[0].blurUrl.desktop}
          sizes="445px"
          className="hidden w-full rounded-lg object-cover lg:block"
        />
      </div>
      <div className="relative min-h-[10.875rem] place-self-stretch overflow-hidden rounded-lg md:col-span-1 md:col-start-1 md:row-start-2">
        <Image
          src={galleryImages[1].src.mobile}
          alt={galleryImages[1].alt}
          placeholder="blur"
          blurDataURL={galleryImages[1].blurUrl.mobile}
          height={348}
          width={654}
          className="h-full w-full rounded-lg object-cover md:hidden"
        />
        <Image
          src={galleryImages[1].src.tablet}
          alt={galleryImages[1].alt}
          placeholder="blur"
          blurDataURL={galleryImages[1].blurUrl.tablet}
          fill
          sizes="554px"
          className="hidden rounded-lg object-cover md:block lg:hidden"
        />
        <Image
          src={galleryImages[1].src.desktop}
          alt={galleryImages[1].alt}
          placeholder="blur"
          blurDataURL={galleryImages[1].blurUrl.desktop}
          fill
          sizes="445px"
          className="hidden w-full rounded-lg object-cover lg:block"
        />
      </div>
      <div className="relative overflow-hidden rounded-lg md:col-span-1 md:col-start-2 md:row-span-2 md:row-start-1">
        <Image
          src={galleryImages[2].src.mobile}
          alt={galleryImages[2].alt}
          placeholder="blur"
          blurDataURL={galleryImages[2].blurUrl.mobile}
          fill
          sizes="654px"
          className="w-full rounded-lg object-cover md:hidden"
        />
        <Image
          src={galleryImages[2].src.tablet}
          alt={galleryImages[2].alt}
          placeholder="blur"
          blurDataURL={galleryImages[2].blurUrl.tablet}
          width={790}
          height={736}
          className="hidden rounded-lg object-cover md:block md:h-full lg:hidden"
        />
        <Image
          src={galleryImages[2].src.desktop}
          alt={galleryImages[2].alt}
          placeholder="blur"
          blurDataURL={galleryImages[2].blurUrl.desktop}
          width={592}
          height={635}
          className="hidden rounded-lg object-cover lg:block"
        />
      </div>
    </article>
  );
};

export default ProductGallery;
