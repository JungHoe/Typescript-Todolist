import React, { useEffect } from "react";
import { Form, FormInstance, Input } from "antd";
import { TodoItemFormInterface } from "@/types";
import StyleItem from "@/style/TodoItem";

interface FormProps {
  form: FormInstance;
  onFinish: (value: TodoItemFormInterface) => void;
}
const TodoItemForm: React.FC<FormProps> = ({ form, onFinish }) => {
  useEffect(() => {
    return () => {
      form.resetFields();
    };
  }, []);
  return (
    <StyleItem>
      <Form form={form} name="basic" onFinish={onFinish}>
        <Form.Item name={"title"} noStyle={true}>
          <Input
            className="form-title"
            placeholder="Click to add title"
          ></Input>
        </Form.Item>
        <Form.Item name={"description"} noStyle={true}>
          <Input.TextArea
            autoSize={{ minRows: 5 }}
            className="form-description"
            placeholder="Click to add text"
            maxLength={1000}
            showCount
          ></Input.TextArea>
        </Form.Item>
      </Form>
    </StyleItem>
  );
};

export default TodoItemForm;
