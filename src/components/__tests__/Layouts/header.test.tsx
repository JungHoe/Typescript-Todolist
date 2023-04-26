import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import * as stories from "@/components/Layouts/Header.stories";

const { DarkTheme, LightTheme } = composeStories(stories);

describe("<LayoutHeader />", () => {
  it("Dark mode일때 배경 확인", () => {
    render(<DarkTheme />);
    const header = screen.getByTestId("layout-header");
    expect(header).toHaveStyle({ "background-color": "#001529" });
  });

  it("Dark mode일때 버튼 활성화 여부 확인", () => {
    render(<DarkTheme />);
    const toggleSwitch = screen.getByRole("switch");
    expect(toggleSwitch).not.toBeChecked();
  });

  it("Light mode일때 배경 확인", () => {
    render(<LightTheme />);
    const header = screen.getByTestId("layout-header");
    expect(header).toHaveStyle({ "background-color": "#de483a" });
  });

  it("Light mode일때 버튼 활성화 여부 확인", () => {
    render(<LightTheme />);
    const toggleSwitch = screen.getByRole("switch");
    expect(toggleSwitch).toBeChecked();
  });
});
