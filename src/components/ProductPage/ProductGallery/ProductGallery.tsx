import Image, { StaticImageData } from "next/image";
import React from "react";

interface PropTypes {
  galleryImages: Array<{
    alt: string;
    src: {
      mobile: string | StaticImageData;
      tablet: string | StaticImageData;
      desktop: string | StaticImageData;
    };
  }>;
}

const ProductGallery = ({ galleryImages }: PropTypes) => {
  return (
    <article className="grid grid-cols-1 grid-rows-[1fr_1fr_2fr] gap-x-6 gap-y-6 md:grid-cols-[3fr_4fr] md:grid-rows-2">
      <div className="relative overflow-hidden rounded-lg md:col-span-1 md:col-start-1 md:row-start-1">
        <Image
          src={galleryImages[0].src.mobile}
          alt={galleryImages[0].alt}
          className="w-full rounded-lg object-cover md:hidden"
        />
        <Image
          src={galleryImages[0].src.tablet}
          alt={galleryImages[0].alt}
          className="hidden rounded-lg md:block lg:hidden"
        />
        <Image
          src={galleryImages[0].src.desktop}
          alt={galleryImages[0].alt}
          className="hidden w-full rounded-lg object-cover lg:block"
        />
      </div>
      <div className="relative place-self-stretch overflow-hidden rounded-lg md:col-span-1 md:col-start-1 md:row-start-2">
        <Image
          src={galleryImages[1].src.mobile}
          alt={galleryImages[1].alt}
          className="w-full rounded-lg md:hidden"
        />
        <Image
          src={galleryImages[1].src.tablet}
          alt={galleryImages[1].alt}
          className="hidden rounded-lg md:block lg:hidden"
        />
        <Image
          src={galleryImages[1].src.desktop}
          alt={galleryImages[1].alt}
          className="hidden w-full rounded-lg object-cover lg:block"
        />
      </div>
      <div className="relative overflow-hidden rounded-lg md:col-span-1 md:col-start-2 md:row-span-2 md:row-start-1">
        <Image
          src={galleryImages[2].src.mobile}
          alt={galleryImages[2].alt}
          className="w-full rounded-lg object-cover md:hidden"
        />
        <Image
          src={galleryImages[2].src.tablet}
          alt={galleryImages[2].alt}
          fill
          className="hidden rounded-lg md:block lg:hidden"
        />
        <Image
          src={galleryImages[2].src.desktop}
          alt={galleryImages[2].alt}
          fill
          className="hidden rounded-lg lg:block"
        />
      </div>
    </article>
  );
};

export default ProductGallery;
