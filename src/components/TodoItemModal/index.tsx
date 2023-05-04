import React from "react";
import { Form } from "antd";
import { Status, StatusLabel } from "@/types/enums";
import { TodoItemInterface } from "@/types";

import TodoItemForm from "@/components/TodoItemForm";
import StyledTodoModal from "@/style/TodoItem/Modal";

interface ModalProperty {
  isOpen: boolean;
  toggleModal: Function;
  onAddItem: (payload: TodoItemInterface) => void;
  status: Status;
}

const TodoItemModal: React.FC<ModalProperty> = ({
  isOpen,
  toggleModal,
  onAddItem,
  status,
}) => {
  const [form] = Form.useForm();

  return (
    <StyledTodoModal
      open={isOpen}
      onCancel={() => toggleModal()}
      destroyOnClose={true}
      onOk={() => form.submit()}
    >
      <h3>{StatusLabel[status]}</h3>
      <ul>
        <TodoItemForm form={form} onFinish={onAddItem}></TodoItemForm>
      </ul>
    </StyledTodoModal>
  );
};

export default TodoItemModal;
