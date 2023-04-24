import { render, fireEvent } from "@testing-library/react";
import StaticPage from "./static";
import DynamicPage from "./dynamic";

function makeId(pre: string, key: string) {
  return pre + key;
}

describe("<StaticPage />", () => {
  const pre = "static-page-";
  it("Root Element가 그려지나요", () => {
    const { getByTestId } = render(<StaticPage />);
    const root = getByTestId(makeId(pre, "root"));
    expect(root).toBeInTheDocument();
  });

  it("header의 내용이 정상적으로 나오나요", () => {
    const { getByTestId } = render(<StaticPage />);
    const header = getByTestId(makeId(pre, "header"));
    // expect(header).toHaveTextContent("헤더입니까?"); <<<에러
    expect(header).toHaveTextContent("헤더입니다");
  });

  it("Image태그가 정상적으로 나오나요", () => {
    const { getByAltText } = render(<StaticPage />);
    getByAltText("notFound");
  });
});

describe("<DynamicPage />", () => {
  const pre = "dynamic-page-";
  const mockSubmit = jest.fn();

  it("버튼은 최초 비활성화", () => {
    const { getByTestId } = render(<DynamicPage onSubmit={mockSubmit} />);
    const button = getByTestId(makeId(pre, "submit-button"));
    expect(button).toBeDisabled();
  });

  it("id의 PlaceHolder가 정상적으로 나오나요", () => {
    const { getByTestId } = render(<DynamicPage onSubmit={mockSubmit} />);
    const input = getByTestId(makeId(pre, "id-input"));
    expect(input).toHaveAttribute("placeholder", "아이디를 입력하세요.");
  });

  it("id를 입력해보자.", () => {
    const { getByLabelText } = render(<DynamicPage onSubmit={mockSubmit} />);
    const input = getByLabelText("아이디");
    fireEvent.change(input, {
      target: {
        value: "admin1",
      },
    });
    expect(input).toHaveAttribute("value", "admin1");
  });

  it("password PlaceHolder가 정상적으로 나오나요", () => {
    const { getByTestId } = render(<DynamicPage onSubmit={mockSubmit} />);
    const input = getByTestId(makeId(pre, "password-input"));
    expect(input).toHaveAttribute(
      "placeholder",
      "6-15자의 영문 대소문자, 숫자 및 특수문자 조합"
    );
  });

  it("password를 입력해보자.", () => {
    const { getByLabelText } = render(<DynamicPage onSubmit={mockSubmit} />);
    const input = getByLabelText("비밀번호");
    fireEvent.change(input, {
      target: {
        value: "abCd@#1",
      },
    });
    expect(input).toHaveAttribute("value", "abCd@#1");
  });

  it("제출이 ", () => {
    const { getByTestId, getByLabelText } = render(
      <DynamicPage onSubmit={mockSubmit} />
    );
    const button = getByTestId(makeId(pre, "submit-button"));

    const idInput = getByLabelText("아이디");
    fireEvent.change(idInput, {
      target: {
        value: "admin1",
      },
    });

    const pwdInput = getByLabelText("비밀번호");
    fireEvent.change(pwdInput, {
      target: {
        value: "abCd@#1",
      },
    });

    expect(button).not.toBeDisabled();
    fireEvent.click(button);
    expect(mockSubmit).toBeCalled();
  });
});
