import "@/style/global.css";
import "antd/dist/reset.css";

import React from "react";
import { Layout } from "antd";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import type { Preview } from "@storybook/react";

import { Theme } from "../src/types/enums";
import WithTheme from "../src/hoc/withTheme";

const preview: Preview = {
  parameters: {
    theme: Theme.dark,
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
      const WrappedStory = () => (
        <DndProvider backend={HTML5Backend}>
          <Layout id="layout-wrapper" className={arg.parameters.theme}>
            <Story></Story>
          </Layout>
        </DndProvider>
      );
      const initState = arg.parameters.theme === Theme.dark;
      const Comp = WithTheme(WrappedStory, initState);
      return <Comp></Comp>;
    },
  ],
};

export default preview;
