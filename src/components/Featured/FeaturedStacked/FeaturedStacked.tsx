import Image from "next/image";
import Cta from "../../../components/Cta/Cta";
import earPhonesMobile from "../../../storybook/assets/product_images/yx1_earphones/featured/image-earphones-yx1_mobile.jpg";
import earPhonesTablet from "../../../storybook/assets/product_images/yx1_earphones/featured/image-earphones-yx1_tablet.jpg";
import earPhonesDesktop from "../../../storybook/assets/product_images/yx1_earphones/featured/image-earphones-yx1_desktop.jpg";

const FeaturedStacked = () => {
  return (
    <article className="grid grid-rows-2 gap-y-6 md:grid-cols-2 md:grid-rows-1 md:gap-x-2.5">
      <div className="relative overflow-hidden rounded-md">
        <Image
          src={earPhonesMobile}
          alt="YX1 Earphones"
          fill
          className="rounded-md object-cover md:hidden"
        />
        <Image
          src={earPhonesTablet}
          alt="YX1 Earphones"
          fill
          className="hidden rounded-md object-cover md:block"
        />
        <Image
          src={earPhonesDesktop}
          alt="YX1 Earphones"
          fill
          className="hidden rounded-md object-cover lg:block"
        />
      </div>
      <div className="rounded-md bg-adp-slate-300 px-6 py-10 md:px-10 md:py-[6.3125rem] lg:px-[5.9375rem]">
        <h2 className="mb-8 text-h4 uppercase">yx1 earphones</h2>
        <Cta
          variation="secondary"
          label="see product"
          anchorProps={{ href: "/", ariaLabel: "Check out our YX1 earphones" }}
        />
      </div>
    </article>
  );
};

export default FeaturedStacked;
