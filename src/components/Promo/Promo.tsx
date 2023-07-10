import { getBlurURL } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import promoImgDesktop from "../../../public/promo/image-best-gear_desktop.jpg";
import promoImgMobile from "../../../public/promo/image-best-gear_mobile.jpg";
import promoImgTablet from "../../../public/promo/image-best-gear_tablet.jpg";
import { TImage } from "../Featured/FeaturedStacked/FeaturedStacked";
type PropTypes = {
  headline: string | React.ReactElement;
  copy: string;
  image: {
    mobile: TImage;
    tablet: TImage;
    desktop: TImage;
  };
  blurImage: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
};

export const UIPromo = ({ headline, copy, image, blurImage }: PropTypes) => {
  return (
    <article className="grid grid-cols-1 grid-rows-[repeat(2,_auto)] gap-y-10 md:gap-y-16 lg:grid-cols-2 lg:grid-rows-1 lg:gap-x-32">
      <Image
        src={image.mobile.src}
        alt={image.mobile.alt}
        className="place-self-center rounded-md object-cover md:hidden"
        placeholder="blur"
        blurDataURL={blurImage.mobile}
      />
      <Image
        src={image.tablet.src}
        alt={image.tablet.alt}
        className="hidden rounded-md object-cover md:block lg:hidden"
        placeholder="blur"
        blurDataURL={blurImage.tablet}
      />
      <Image
        src={image.desktop.src}
        alt={image.desktop.alt}
        blurDataURL={blurImage.desktop}
        placeholder="blur"
        className="hidden rounded-md object-cover lg:col-start-2 lg:block"
      />

      <div className="mx-auto max-w-[35.8125rem] lg:col-start-1 lg:row-start-1 lg:self-center">
        <h2 className="mb-8 text-center text-h4 uppercase tracking-[0.0357em] md:text-h2 lg:text-left">
          {headline}
        </h2>
        <p className="text-center opacity-50 lg:text-left">{copy}</p>
      </div>
    </article>
  );
};

const Promo = async () => {
  const promoFeatures: PropTypes = {
    headline: (
      <>
        Bringing you the
        <br />
        <span>best</span> audio gear
      </>
    ),
    copy: "Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.",
    image: {
      mobile: {
        src: promoImgMobile,
        alt: "Man wearing XX99 Mark 2 headphones",
      },
      tablet: {
        src: promoImgTablet,
        alt: "Man wearing XX99 Mark 2 headphones",
      },
      desktop: {
        src: promoImgDesktop,
        alt: "Man wearing XX99 Mark 2 headphones",
      },
    },

    blurImage: {
      mobile: await getBlurURL(
        "https://raw.githubusercontent.com/ayoub-ahabchane/fem-audiophile/901491c185dde2277fcca76fc3969c28445b86ee/public/promo/image-best-gear_mobile.jpg"
      ),
      tablet: await getBlurURL(
        "https://raw.githubusercontent.com/ayoub-ahabchane/fem-audiophile/901491c185dde2277fcca76fc3969c28445b86ee/public/promo/image-best-gear_tablet.jpg"
      ),
      desktop: await getBlurURL(
        "https://raw.githubusercontent.com/ayoub-ahabchane/fem-audiophile/901491c185dde2277fcca76fc3969c28445b86ee/public/promo/image-best-gear_desktop.jpg"
      ),
    },
  };

  return <UIPromo {...promoFeatures} />;
};

export default Promo;
