import React from "react";
import { PlusSquareOutlined } from "@ant-design/icons";
import StyledHeader from "@/style/TodoItem/Header";
import { Status, StatusLabel } from "@/types/enums";

const TodoItemHeader: React.FC<{ type: Status; onClickIcon: Function }> = ({
  type,
  onClickIcon,
}) => {
  return (
    <StyledHeader className={type} data-testid="todo-item-header">
      <h3>{StatusLabel[type]}</h3>
      <PlusSquareOutlined
        onClick={() => {
          onClickIcon(type);
        }}
      />
    </StyledHeader>
  );
};

export default TodoItemHeader;
