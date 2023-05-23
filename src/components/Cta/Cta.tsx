import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

type PropTypes = {
  /** The CTA's style variation */
  variation: "primary" | "secondary" | "muted";
  /** The CTA's text label */
  label: string;
  /** The route to which the CTA leads */
  href: string;
};

/**
 * A call to action UI component
 * @param variation The CTA's style variation
 * @param label The CTA's text label
 * @param href The route to which the CTA leads
 * @returns JSX
 */
const Cta = ({ variation, label, href }: PropTypes) => {
  const linkStyle =
    variation === "primary"
      ? "btn-primary"
      : variation === "secondary"
      ? "btn-secondary"
      : "btn-muted";
  return (
    <Link className={`${linkStyle}`} href={href}>
      {label}
      {linkStyle == "btn-muted" && (
        <ChevronRightIcon className="w-4 text-adp-tangerine-400" />
      )}
    </Link>
  );
};

export default Cta;
