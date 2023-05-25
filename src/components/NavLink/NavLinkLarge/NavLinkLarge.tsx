import Link from "next/link";

export type TLink = {
  /**The link's text label */
  label: string;
  href: string;
};

type PropTypes = {
  /**An object containing the navigation link and it's text label */
  link: TLink;
  /**Indicates whether this navigation link corresponds to the current route segment */
  active: boolean;
};

/** Navigational link */
const NavLinkLarge = ({ link: { href, label }, active }: PropTypes) => {
  return (
    <Link href={href} className={`navlink--large ${active && "active"}`}>
      {label}
    </Link>
  );
};

export default NavLinkLarge;
