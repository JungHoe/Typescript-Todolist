import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import * as stories from "@/components/TodoItem/TodoItem.stories";

const { DarkTheme, LightTheme } = composeStories(stories);

describe("<TodoItem />", () => {
  it("Dark mode일때 배경 확인", () => {
    render(<DarkTheme />);
    const root = screen.getByTestId("todo-item");
    expect(root).toHaveStyle({ "background-color": "#424448" });
  });

  it("Light mode일때 배경 확인", () => {
    render(<LightTheme />);
    const root = screen.getByTestId("todo-item");
    expect(root).toHaveStyle({ "background-color": "#d8d1b8" });
  });
});
