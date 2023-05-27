import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface PropTypes {
  /** The CTA's style variation */
  variation: "primary" | "secondary" | "muted" | "dark";
  /** The CTA's text label */
  label: string;
  /** Native anchor link attributes */
  anchorProps: {
    /** The route to which the CTA leads */
    href: string;
    /** Text to be announced to screen reader users */
    ariaLabel: string;
  };
}

/**
 * A call to action UI component
 * @param variation The CTA's style variation
 * @param label The CTA's text label
 * @param anchorProps Native anchor link attributes
 * @returns JSX
 */
const Cta = ({ variation, label, anchorProps }: PropTypes) => {
  const linkStyle =
    variation === "primary"
      ? "btn-primary"
      : variation === "secondary"
      ? "btn-secondary"
      : variation === "dark"
      ? "btn-dark"
      : "btn-muted";
  return (
    <Link className={`${linkStyle}`} {...anchorProps}>
      {label}
      {linkStyle == "btn-muted" && (
        <ChevronRightIcon className="w-4 text-adp-tangerine-400" />
      )}
    </Link>
  );
};

export default Cta;
