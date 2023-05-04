import styled from "styled-components";
import { isThemeDark } from "@/hooks";

const StyledTodoItem = styled.li`
  max-width: 500px;
  list-style: none;
  position: relative;
  background-color: ${({ theme }) =>
    isThemeDark(theme) ? "#424448" : "#d8d1b8"};
  padding: 10px;
  padding-right: 20px;
  &.dragging {
    border: 1px solid deepskyblue;
    border-style: dashed;
    opacity: 0.5;
  }
  .title {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .description {
    white-space: pre-wrap;
    line-height: 20px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  & ~ li {
    margin-top: 20px;
  }
  .anticon {
    position: absolute;
    &.dragCursor {
      cursor: grab;
      right: 25px;
      top: 5px;
    }
    &.anticon-small-dash {
      cursor: pointer;
      position: absolute;
      right: 5px;
      top: 5px;
    }
  }
  form {
    .form-title {
      margin-bottom: 0.5em;
    }
    .form-description {
      padding-bottom: 20px;
    }
  }
`;

export default StyledTodoItem;
