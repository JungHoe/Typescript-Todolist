import type { Meta, StoryObj } from "@storybook/react";
import { Form as AntdForm } from "antd";
import Form from ".";
const meta: Meta<typeof Form> = {
  title: "todo/Form",
  component: Form,
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      const [param] = AntdForm.useForm();
      return <Story form={param} />;
    },
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ItemForm: Story = {
  args: {
    initialValues: { title: "제목입니다.", description: "컨텐츠를 입력하세요" },
  },
};
