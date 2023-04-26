import styled from "styled-components";
import { Col } from "antd";
import { isThemeDark } from "@/hooks";

const StyledTodoItemWrapper = styled(Col)`
  border-radius: 10px;
  background-color: ${({ theme }) =>
    isThemeDark(theme) ? "#212226" : "#f1e9cd"};
  padding-bottom: 10px;
`;

export const StyledTodoItemList = styled.ul`
  padding: 10px;
  margin-bottom: 0px;
`;

export default StyledTodoItemWrapper;
