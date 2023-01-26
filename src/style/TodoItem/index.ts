import styled from "styled-components";
import { isThemeDark } from "@/hooks";

const StyledTodoItem = styled.li`
  list-style: none;
  position: relative;
  background-color: ${({ theme }) =>
    isThemeDark(theme) ? "#424448" : "#d8d1b8"};
  padding: 10px;
  padding-right: 20px;
  .description {
    white-space: pre-line;
    line-height: 20px;
  }
  & ~ li {
    margin-top: 20px;
  }
  .anticon {
    position: absolute;
    right: 5px;
    top: 5px;
    cursor: pointer;
  }
`;

export default StyledTodoItem;
