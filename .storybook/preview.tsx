import type { Preview } from "@storybook/react";
import { Manrope } from "next/font/google";
import React from "react";
import "../src/app/globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

const preview: Preview = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: {
        mobile: {
          name: "Mobile",
          styles: {
            width: "375px",
            height: "823px",
          },
          type: "mobile",
        },
        tablet: {
          name: "Tablet",
          styles: {
            width: "768px",
            height: "1024px",
          },
          type: "tablet",
        },
        desktop: {
          name: "Desktop",
          styles: {
            width: "1440px",
            height: "1024px",
          },
          type: "desktop",
        },
      },
      defaultViewport: "responsive",
    },
  },
  decorators: [
    // withThemeByDataAttribute({
    //   themes: {
    //     light: "light",
    //     dark: "dark",
    //   },
    //   defaultTheme: "light",
    //   attributeName: "data-mode",
    // }),

    // This is a global decorator that applies the Manrope font to all stories

    (Story) => {
      return (
        <div
          className={`${manrope.variable}`}
          style={{ fontFamily: "var(--font-manrope)" }}
        >
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
