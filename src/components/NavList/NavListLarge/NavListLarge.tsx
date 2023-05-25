"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import NavLinkLarge, { TLink } from "../../NavLink/NavLinkLarge/NavLinkLarge";

export type PropTypes = {
  /**An array of navigation links, each comprising of a link and it's text label. */
  links: TLink[];
};
/** A menu of navigational links to be rendered on large displays. */
const NavListLarge = ({ links }: PropTypes) => {
  /**The current route segment */
  const segment = useSelectedLayoutSegment();

  return (
    <nav>
      <ul className="flex items-center justify-center gap-9">
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
