import Cta, { PropTypes as TCta } from "../Cta/Cta";

type BgSet = {
  mobile?: string;
  tablet?: string;
  desktop?: string;
};

interface PropTypes {
  bg?: false | string | BgSet;

  overline?: string;
  headline: string;
  subhead?: string;
  cta: TCta;
}

const Hero = ({ overline, headline, subhead, cta, bg = false }: PropTypes) => {
  let heroVariables = {};
  let heroStyles = [];

  if (bg && typeof bg === "string") {
    heroVariables = { "--heroImg": `url(${bg})` };
    heroStyles = ["bg-[image:var(--heroImg)]"];
  } else if (bg && typeof bg === "object") {
    if (bg.mobile) {
      heroVariables = {
        ...heroVariables,
        "--heroImgMobile": `url(${bg.mobile})`,
      };
      heroStyles.push("bg-[image:var(--heroImgMobile)]");
    }
    if (bg.tablet) {
      heroVariables = {
        ...heroVariables,
        "--heroImgTablet": `url(${bg.tablet})`,
      };
      heroStyles.push("md:bg-[image:var(--heroImgTablet)]");
    }
    if (bg.desktop) {
      heroVariables = {
        ...heroVariables,
        "--heroImgDesktop": `url(${bg.desktop})`,
      };
      heroStyles.push("lg:bg-[image:var(--heroImgDesktop)]");
    }
  }

  const joinedStyles = heroStyles.join(" ");
  return (
    <section
      style={{ ...heroVariables }}
      className={`${joinedStyles} bg-adp-slate-800 bg-cover bg-center px-[3.5rem] text-adp-copy-white lg:bg-right lg:px-0`}
    >
      <div className="flex flex-col items-center gap-6 pb-[7rem] pt-[12.375rem] md:pb-[10.4375rem] md:pt-[13.5rem] lg:mx-auto lg:max-w-[74.375rem] lg:items-start lg:px-20">
        <div className="flex flex-col items-center gap-4 md:gap-6 lg:items-start">
          <h1 className="order-2 max-w-[16.5rem] text-center text-[2.25rem] font-bold uppercase leading-[1.1em] tracking-[0.03em] md:max-w-[24.75rem] md:text-h1 lg:text-left">
            {headline}
          </h1>
          <span className="order-1 text-overline uppercase opacity-50">
            {overline}
          </span>
        </div>
        <p className="max-w-[16.5rem] text-center opacity-70 md:mb-5 md:max-w-[21.8125rem] lg:text-left">
          {subhead}
        </p>
        <Cta {...cta} />
      </div>
    </section>
  );
};

export default Hero;
