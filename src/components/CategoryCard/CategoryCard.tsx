import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { TLink } from "../NavLink/NavLinkLarge/NavLinkLarge";

export type PropTypes = {
  categoryName: string;
  image: StaticImageData | string;
  blurUrl: string;
  ctaTitle: string;
  link: TLink;
  onClick?: () => void;
  active?: boolean;
};

export const CategoryCard = ({
  categoryName,
  image,
  ctaTitle,
  link: { href, ariaLabel },
  onClick,
  active,
  blurUrl,
  ...rest
}: PropTypes) => {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={
        "group isolate grid min-w-[13.9375rem] grid-cols-1 grid-rows-[1fr_2fr_repeat(2,_auto)] md:h-full"
      }
      onClick={onClick}
      {...rest}
    >
      <Image
        priority={true}
        src={image}
        width={200}
        height={200}
        placeholder="blur"
        blurDataURL={blurUrl}
        alt="Audophile Headphones"
        className={`col-span-1 col-start-1 row-span-2 row-start-1 w-36 translate-y-1 justify-self-center transition
        group-focus-within:translate-y-3
        group-focus-within:scale-110
        group-hover:translate-y-3
        group-hover:scale-110
        ${active && "translate-y-3"} ${active && "scale-110"} lg:w-[12.5rem]`}
      />
      <div className="col-span-1 col-start-1 row-span-3 row-start-2 w-full rounded-lg bg-adp-slate-300"></div>
      <div className="col-span-1 col-start-1 row-span-2 row-start-3 flex flex-col items-center gap-4 pb-[1.375rem] lg:pb-[1.875rem]">
        <h3 className="text-body font-bold uppercase tracking-[0.0713em] text-adp-copy-black lg:text-h6">
          {categoryName}
        </h3>
        <div
          className={`btn-muted group-focus-within:text-adp-tangerine-400 group-hover:text-adp-tangerine-400 ${
            active && "text-adp-tangerine-400"
          }`}
        >
          <span className="uppercase">{ctaTitle}</span>
          <ChevronRightIcon
            className={`w-4 text-adp-tangerine-400 transition group-focus-within:translate-x-1 group-hover:translate-x-1 ${
              active && "translate-x-1"
            }`}
          />
        </div>
      </div>
    </Link>
  );
};
