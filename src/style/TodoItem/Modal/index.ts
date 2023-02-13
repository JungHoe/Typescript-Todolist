import styled from "styled-components";
import { Modal } from "antd";
import { isThemeDark } from "@/hooks";

const StyledTodoModal = styled(Modal)`
  h3 {
    display: inline-block;
  }
  ul {
    padding: 10px;
    margin-bottom: 0px;
    margin-top: 20px;
  }
  .ant-modal-content {
    background-color: ${({ theme }) =>
      isThemeDark(theme) ? "#212226" : "#f1e9cd"};
  }
`;

export default StyledTodoModal;
