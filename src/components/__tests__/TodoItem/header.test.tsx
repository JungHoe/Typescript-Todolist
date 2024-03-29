import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import * as stories from "@/components/TodoItemHeader/header.stories";
import { StatusLabel } from "@/types/enums";

const { Todo, Doing, Done } = composeStories(stories);

describe("<TodoItemHeader />", () => {
  it("Todo 텍스트 및 배경 확인", () => {
    render(<Todo />);
    const root = screen.getByTestId("todo-item-header");
    expect(root).toHaveStyle({ "background-color": "#a15767" });

    expect(screen.getByText(StatusLabel.todo)).toBeInTheDocument();
  });

  it("Doing 텍스트 및 배경 확인", () => {
    render(<Doing />);
    const root = screen.getByTestId("todo-item-header");
    expect(root).toHaveStyle({ "background-color": "#c57f40" });
    expect(screen.getByText(StatusLabel.doing)).toBeInTheDocument();
  });

  it("Done 텍스트 및 배경 확인", () => {
    render(<Done />);
    const root = screen.getByTestId("todo-item-header");
    expect(root).toHaveStyle({ "background-color": "#63ad27" });
    expect(screen.getByText(StatusLabel.done)).toBeInTheDocument();
  });
});
