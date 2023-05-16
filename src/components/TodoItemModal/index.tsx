import React from "react";
import { Descriptions, Form } from "antd";
import { Mode, Status, StatusLabel } from "@/types/enums";
import { TodoItem, TodoItemInterface } from "@/types";

import TodoItemForm from "@/components/TodoItemForm";
import StyledTodoModal from "@/style/TodoItem/Modal";

interface ModalProperty {
  isOpen: boolean;
  mode: Mode;
  selectedItem?: TodoItem;
  toggleModal: Function;
  onAddItem: (payload: TodoItemInterface) => void;
  onEditItem: (payload: TodoItemInterface) => void;
  status: Status;
}

const TodoItemModal: React.FC<ModalProperty> = ({
  isOpen,
  selectedItem,
  toggleModal,
  onAddItem,
  onEditItem,
  status,
  mode,
}) => {
  const [form] = Form.useForm();
  const handleFinish = (payload: TodoItemInterface) => {
    if (mode === Mode.create) {
      onAddItem(payload);
    } else {
      onEditItem({ ...payload, id: selectedItem!.id });
    }
  };
  const initialValues = React.useMemo(() => {
    if (selectedItem) {
      return {
        title: selectedItem.title,
        description: selectedItem.description,
      };
    }
    return { title: "", description: "" };
  }, [selectedItem]);
  return (
    <StyledTodoModal
      open={isOpen}
      onCancel={() => toggleModal()}
      destroyOnClose={true}
      onOk={() => form.submit()}
    >
      <h3>{StatusLabel[status]}</h3>
      <ul>
        <TodoItemForm
          form={form}
          onFinish={handleFinish}
          initialValues={initialValues}
        ></TodoItemForm>
      </ul>
    </StyledTodoModal>
  );
};

export default TodoItemModal;
