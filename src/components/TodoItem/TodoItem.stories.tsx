import type { Meta, StoryObj } from "@storybook/react";
import TodoItem from ".";
import { Theme } from "@/types/enums";
import { StyledTodoItemList } from "@/style/TodoItem/wrapper";

const meta: Meta<typeof TodoItem> = {
  title: "todo/Item",
  component: TodoItem,
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      return (
        <StyledTodoItemList>
          <Story />
        </StyledTodoItemList>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DarkTheme: Story = {
  args: {
    title: "다크모드 제목입니다.",
    description: "안녕하세요 내가할일",
  },
  parameters: {
    theme: Theme.dark,
  },
};

export const LightTheme: Story = {
  args: {
    title: "라이트모드 제목입니다.",
    description:
      "설명설명설명설명설명\n설명설명설명설명설명설명설명설명설명설명설ㅜ명설명설명",
  },
  parameters: {
    theme: Theme.light,
  },
};
