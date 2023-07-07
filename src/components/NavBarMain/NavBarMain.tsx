import Link from "next/link";
import Cart, { PropTypes as TCart } from "../Cart/Cart";
import Logo from "../Logo/Logo";
import { TLink } from "../NavLink/NavLinkLarge/NavLinkLarge";
import NavListLarge from "../NavList/NavListLarge";
import MobileMenu from "../MobileMenu/MobileMenu";
import { PropTypes as TCategoryCard } from "../CategoryCard/CategoryCard";

interface PropTypes {
  cartData: TCart;
  categories: TCategoryCard[];
  links: TLink[];
}

/** The main navigation bar */
const NavBarMain = ({ cartData, categories, links }: PropTypes) => {
  return (
    <header className="z-60 fixed inset-x-0 border-b border-adp-slate-500 bg-adp-slate-800 px-6 py-8 lg:px-0">
      <div className="z-60 relative mx-auto grid  grid-cols-[1fr_minmax(max-content,_100%)_1fr] grid-rows-1 gap-x-6 text-adp-copy-white md:gap-x-10 lg:max-w-[79.375rem] lg:place-items-center lg:px-20  ">
        <div className="lg:hidden" arial-label="Navigation menu">
          <MobileMenu categories={categories} />
        </div>
        <div className="flex items-center justify-center md:justify-start">
          <Link href={"/"} aria-label="Go to Audiophile's homepage">
            <Logo />
          </Link>
        </div>
        <div className="hidden lg:block">
          <NavListLarge navLinks={links} />
        </div>
        <Cart {...cartData} />
      </div>
    </header>
  );
};

export default NavBarMain;
