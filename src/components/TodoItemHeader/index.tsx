import React from "react";
import { PlusSquareOutlined } from "@ant-design/icons";
import StyledHeader from "@/style/TodoItem/Header";
import { Status } from "@/types/enums";

const TodoItemHeader: React.FC<{ type: Status }> = ({ type }) => {
  switch (type) {
    case Status.Todo:
      return (
        <StyledHeader className={Status.Todo}>
          <h3>TO-DO</h3>
          <PlusSquareOutlined />
        </StyledHeader>
      );
    case Status.Doing:
      return (
        <StyledHeader className={Status.Doing}>
          <h3>DOING</h3>
          <PlusSquareOutlined />
        </StyledHeader>
      );
    case Status.Done:
      return (
        <StyledHeader className={Status.Done}>
          <h3>DONE</h3>
          <PlusSquareOutlined />
        </StyledHeader>
      );
    default:
      return <React.Fragment></React.Fragment>;
  }
};

export default TodoItemHeader;
