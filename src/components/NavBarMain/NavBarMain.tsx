import { Bars3Icon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Logo from "../Logo/Logo";
import { TLink } from "../NavLink/NavLinkLarge/NavLinkLarge";
import NavListLarge from "../NavList/NavListLarge/NavListLarge";

/** The main navigation bar */
const NavBarMain = () => {
  const links: TLink[] = [
    { label: "Home", href: "/" },
    { label: "headphones", href: "/headphones" },
    { label: "speakers", href: "/speakers" },
    { label: "earphones", href: "/earphones" },
  ];

  return (
    <header className="fixed inset-x-0 border-b border-adp-slate-500 bg-adp-slate-800 px-6 py-8 lg:px-0">
      <div className=" mx-auto grid grid-cols-[1fr_minmax(max-content,_100%)_1fr]  grid-rows-1 gap-x-6 text-adp-copy-white  md:gap-x-10 lg:max-w-[79.375rem] lg:px-20 ">
        <button className="lg:hidden" arial-label="Navigation menu">
          <Bars3Icon className="w-6" />
        </button>
        <div className="flex items-center justify-center md:justify-start">
          <Link href={"/"} aria-label="Go to Audiophile's homepage">
            <Logo />
          </Link>
        </div>
        <div className="hidden lg:block">
          <NavListLarge links={links} />
        </div>
        <button aria-label="Your cart">
          <ShoppingCartIcon className="w-6" />
        </button>
      </div>
    </header>
  );
};

export default NavBarMain;
