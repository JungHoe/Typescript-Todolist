import React from "react";
import type { Preview } from "@storybook/react";
import "@/style/global.css";
import { Theme } from "../src/types/enums";
import WithTheme from "../src/hoc/withTheme";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story: any, arg) => {
      const initState = arg.parameters.theme === Theme.dark;
      const Comp = WithTheme(Story, initState);
      return <Comp></Comp>;
    },
  ],
};

export default preview;
