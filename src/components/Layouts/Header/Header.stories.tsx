import type { Meta, StoryObj } from "@storybook/react";
import Header from ".";
import { Theme } from "@/types/enums";

// const meta = {
//   title: "layout/Header",
//   component: Header,
//   tags: ["autodocs"],
//   decorators: [
//     (Story, arg) => {
//       return (
//         <Layout id="layout-wrapper" className={arg.theme}>
//           <Story />
//         </Layout>
//       );
//     },
//   ],
// } satisfies Meta<typeof Header>;

const meta: Meta<typeof Header> = {
  title: "layout/Header",
  component: Header,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DarkTheme: Story = {
  args: {
    isDark: true,
  },
  parameters: {
    theme: Theme.dark,
  },
};

export const LightTheme: Story = {
  args: {
    isDark: false,
  },
  parameters: {
    theme: Theme.light,
  },
};
