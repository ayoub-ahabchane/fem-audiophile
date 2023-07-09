import { PropTypes as TCategoryCard } from "@/components/CategoryCard/CategoryCard";
import Footer from "@/components/Footer/Footer";
import NavBarMain from "@/components/NavBarMain/NavBarMain";
import { StoreProvider } from "@/lib/Providers/store-provider";
import { getAllCategories } from "@/lib/swell/categories";
import { Manrope } from "next/font/google";
import { TLink } from "../components/NavLink/NavLinkLarge/NavLinkLarge";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata = {
  title: "Audiophile",
  description: "A frontend mentor challenge solution",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categoriesData = await getAllCategories(["name", "slug", "images"]);
  const categories: TCategoryCard[] = categoriesData.map(
    ({ name, slug, images }): TCategoryCard => ({
      categoryName: name,
      link: {
        href: `/${slug}`,
        ariaLabel: `Discover Audiophile ${name}`,
      },
      image: images[0].file.url,
      ctaTitle: "Shop",
    })
  );

  const links: TLink[] = [
    { label: "Home", href: "/" },
    { label: "headphones", href: "/headphones" },
    { label: "speakers", href: "/speakers" },
    { label: "earphones", href: "/earphones" },
  ];

  return (
    <html lang="en" className={`${manrope.variable}`}>
      <body className="font-sans">
        <StoreProvider>
          <NavBarMain categories={categories} links={links} />
          {children}
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
