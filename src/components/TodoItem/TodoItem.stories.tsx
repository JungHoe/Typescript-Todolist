import type { Meta, StoryObj } from "@storybook/react";
import TodoItem from ".";
import { Theme, Status } from "@/types/enums";
import { TodoItem as Item } from "@/types";
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
    item: new Item("다크모드 제목입니다.", "안녕하세요 내가할일", Status.Todo),
  },
  parameters: {
    theme: Theme.dark,
  },
};

export const LightTheme: Story = {
  args: {
    item: new Item(
      "라이트모드 제목입니다.",
      "설명설명설명설명설명\n설명설명설명설명설명설명설명설명설명설명설ㅜ명설명설명",
      Status.Todo
    ),
  },
  parameters: {
    theme: Theme.light,
  },
};
