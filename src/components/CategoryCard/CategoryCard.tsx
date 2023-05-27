import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { TLink } from "../NavLink/NavLinkLarge/NavLinkLarge";

export type PropTypes = {
  categoryName: string;
  image: StaticImageData;
  ctaTitle: string;
  link: TLink;
};

export const UICategoryCard = ({
  categoryName,
  image,
  ctaTitle,
  link: { href, ariaLabel },
}: PropTypes) => {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className="group isolate grid min-w-[13.9375rem] grid-cols-1 grid-rows-[1fr_2fr_repeat(2,_auto)]"
    >
      <Image
        src={image}
        width={200}
        height={200}
        alt="Audophile Headphones"
        className="z-10 col-span-1 col-start-1 row-span-2 row-start-1 w-36 translate-y-1 justify-self-center transition group-hover:translate-y-3 group-hover:scale-110 lg:w-[12.5rem]"
      />
      <div className="-z-1 col-span-1 col-start-1 row-span-3 row-start-2 w-full rounded-lg bg-adp-slate-300"></div>
      <div className="z-20 col-span-1 col-start-1 row-span-2 row-start-3 flex flex-col items-center gap-4 pb-[1.375rem] lg:pb-[1.875rem]">
        <h3 className="text-body font-bold uppercase tracking-[0.0713em] lg:text-h6">
          {categoryName}
        </h3>
        <div className="btn-muted group-hover:text-adp-tangerine-400">
          <span className="uppercase">{ctaTitle}</span>
          <ChevronRightIcon className="w-4 text-adp-tangerine-400 transition group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};

// const CategoryCard = ({}) => {
//   return <UICategoryCard />
// }
