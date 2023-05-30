import Image, { StaticImageData } from "next/image";
import Cta, { PropTypes as TCta } from "../../Cta/Cta";

type PropTypes = {
  productImg: StaticImageData;
  headline: string;
  subhead: string;
  cta: TCta;
};

const FeaturedMain = ({
  productImg,
  headline,
  subhead,
  cta: { variation, label, anchorProps },
}: PropTypes) => {
  return (
    <article className="grid grid-cols-1 grid-rows-[repeat(2,_auto)] place-items-center gap-y-9 overflow-y-hidden rounded-lg bg-adp-tangerine-400 bg-loops bg-[size:558px_558px] bg-[position:center_-185%] bg-no-repeat px-6 py-[3.7rem] text-adp-copy-white md:gap-16 md:bg-[size:944px_944px] md:bg-[position:center_135%] md:py-16  lg:grid-cols-[repeat(2,_auto)] lg:grid-rows-1 lg:bg-[position:-75%_20%] lg:py-9">
      <Image
        className="max-w-[10.75rem] md:max-w-[12.3125rem] lg:max-w-[25.625rem] lg:translate-y-14 lg:place-self-end"
        src={productImg}
        alt="zx9 speakers"
        sizes="(max-width: 768px) 320px, (max-width: 1024px) 366px, 410px"
      />
      <div className="flex flex-col items-center gap-6 lg:items-start">
        <h2 className=" max-w-[10.75rem] text-center text-h2-mobile uppercase md:max-w-[16.3125rem] md:text-h1 lg:text-left">
          {headline}
        </h2>

        <p className=" max-w-[17.5rem] text-center opacity-[0.75] md:mb-5 md:max-w-[21.875rem] lg:text-left">
          {subhead}
        </p>
        <div>
          <Cta
            variation={variation}
            label={label}
            anchorProps={{ ...anchorProps }}
          />
        </div>
      </div>
    </article>
  );
};

export default FeaturedMain;
