import Cta, { PropTypes as TCta } from "../../Cta/Cta";

type PropTypes = {
  backgroundImage: string;
  headline: string;
  cta: TCta;
};

const FeaturedSecondary = ({
  cta: { anchorProps, label, variation = "secondary" },
  headline,
  backgroundImage,
}: PropTypes) => {
  return (
    <article
      style={{ backgroundImage: `url("${backgroundImage}")` }}
      className={`lg:bg-[position:] grid grid-cols-1 grid-rows-1 rounded-md bg-cover bg-[position:12%_bottom] bg-no-repeat md:bg-[position:left_90%] lg:bg-[size:auto] lg:bg-[position:25%_90%]`}
    >
      <div className="col-start-1 row-start-1 px-6 py-[6.3125rem] md:px-[3.875rem] lg:px-[5.9375rem]">
        <h2 className="mb-8 text-h4 uppercase">{headline}</h2>
        <Cta
          variation={variation}
          label={label}
          anchorProps={{ ...anchorProps }}
        />
      </div>
    </article>
  );
};

export default FeaturedSecondary;
