import Logo from "../Logo/Logo";
import { TLink } from "../NavLink/NavLinkLarge/NavLinkLarge";
import NavListLarge from "../NavList/NavListLarge";
import IconFacebook from "../Socials/IconFacebook";
import IconInstagram from "../Socials/IconInstagram";
import IconTwitter from "../Socials/IconTwitter";

type PropTypes = {
  navLinks: TLink[];
};

export const UIFooter = ({ navLinks }: PropTypes) => {
  return (
    <footer className="bg-adp-slate-800 text-adp-copy-white">
      <div className="relative mx-auto px-6 py-14 after:absolute after:left-1/2 after:top-0 after:h-[0.25rem] after:w-[6.25rem] after:-translate-x-[50%] after:bg-adp-tangerine-400 md:px-10 md:py-16 md:after:left-10 md:after:translate-x-0 lg:max-w-[79.375rem] lg:px-20 lg:after:left-20">
        <div className="mb-12 flex flex-col items-center gap-12 md:mb-8 md:items-start md:gap-8 lg:mb-9 lg:flex-row lg:items-center lg:justify-between">
          <Logo />
          <NavListLarge navLinks={navLinks} />
        </div>
        <div className="grid grid-rows-[repeat(3,_auto)] gap-y-12 md:grid-cols-2 md:grid-rows-[repeat(2,_auto)] md:gap-y-20">
          <p className="grid-cols-2 text-center opacity-50 md:col-span-2 md:row-start-1 md:text-left lg:col-span-1 lg:col-start-1">
            Audiophile is an all in one stop to fulfill your audio needs. We’re
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <p className="md:ustify-self-start text-center font-bold opacity-50 md:col-start-1 md:row-start-2 md:text-left">
            Copyright 2021. All Rights Reserved
          </p>
          <ul className="flex flex-row items-center justify-center gap-4 md:col-start-2 md:row-start-2 md:justify-self-end lg:row-span-2 lg:row-start-1">
            <li>
              <a
                href={"https://www.facebook.com"}
                aria-label="Audiophile's Facebook page"
              >
                <IconFacebook />
              </a>
            </li>
            <li>
              <a
                href={"https://www.twitter.com"}
                aria-label="Audiophile's Twitter page"
              >
                <IconTwitter />
              </a>
            </li>
            <li>
              <a
                href={"https://www.instagram.com"}
                aria-label="Audiophile's Instagram page"
              >
                <IconInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

const Footer = () => {
  const footerProps: PropTypes = {
    navLinks: [
      { label: "Home", href: "/" },
      { label: "headphones", href: "/headphones" },
      { label: "speakers", href: "/speakers" },
      { label: "earphones", href: "/earphones" },
    ],
  };
  return <UIFooter {...footerProps} />;
};

export default Footer;
