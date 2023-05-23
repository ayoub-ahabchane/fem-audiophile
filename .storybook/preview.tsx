import { withThemeByDataAttribute } from "@storybook/addon-styling";
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
