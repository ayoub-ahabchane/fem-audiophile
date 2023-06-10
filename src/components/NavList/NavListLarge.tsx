"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import NavLinkLarge, { TLink } from "../NavLink/NavLinkLarge/NavLinkLarge";

enum flexDirection {
  row = "flex-row",
  column = "flex-column",
}

export type PropTypes = {
  /**An array of navigation links, each comprising of a link and it's text label. */
  navLinks: TLink[];
};
/** A menu of navigational links to be rendered on large displays. */
const NavListLarge = ({ navLinks: links }: PropTypes) => {
  /**The current route segment */
  const segment = useSelectedLayoutSegment();
  return (
    <nav>
      <ul className="flex flex-col items-center gap-4 md:flex-row md:gap-9">
        {links.map((link) => (
          <li key={link.label}>
            <NavLinkLarge link={link} active={segment === link.href} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavListLarge;
