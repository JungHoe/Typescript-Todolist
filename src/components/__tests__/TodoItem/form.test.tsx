import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import * as stories from "@/components/TodoItemForm/form.stories";

const { ItemForm } = composeStories(stories);

describe("<TodoItemForm />", () => {
  it("TodoForm placeholder 확인", () => {
    render(<ItemForm />);
    // title placeholder확인
    const input = screen.getByPlaceholderText("Click to add title");
    // description placeholder 확인
    expect(input).not.toBeNull();
    const textarea = screen.getByPlaceholderText("Click to add text");
    expect(textarea).not.toBeNull();
  });

  it("TodoForm input값 적용확인", () => {
    render(<ItemForm />);
    const argTitle = ItemForm.args.initialValues!.title;
    const argDescription = ItemForm.args.initialValues!.description;
    expect(screen.getByDisplayValue(argTitle)).toBeInTheDocument();
    expect(screen.getByDisplayValue(argDescription)).toBeInTheDocument();
  });
});
