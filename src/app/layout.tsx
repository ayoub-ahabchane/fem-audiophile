import { Manrope } from "next/font/google";
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log(manrope.variable);
  return (
    <html lang="en" className={`${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
