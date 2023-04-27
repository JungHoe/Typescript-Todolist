import type { Meta, StoryObj } from "@storybook/react";
import Header from ".";
import { Status } from "@/types/enums";

const meta: Meta<typeof Header> = {
  title: "todo/Header",
  component: Header,
  tags: ["autodocs"],
  argTypes: {
    type: {
      options: [Status.Todo, Status.Doing, Status.Done],
      control: { type: "radio" },
    },
    onClickIcon: { action: "clicked" },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Todo: Story = {
  args: {
    type: Status.Todo,
  },
};

export const Doing: Story = {
  args: {
    type: Status.Doing,
  },
};

export const Done: Story = {
  args: {
    type: Status.Done,
  },
};
