import styled from "styled-components";

const StyledTodoItemHeader = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
  position: relative;
  h3 {
    min-height: 40px;
    line-height: 40px;
    text-align: center;
    color: #fff;
  }
  &.todo {
    background-color: #a15767;
    .anticon-plus-square:hover {
      color: pink;
    }
  }
  &.doing {
    background-color: #c57f40;
    .anticon-plus-square:hover {
      color: orange;
    }
  }
  &.done {
    background-color: #63ad27;
    .anticon-plus-square:hover {
      color: #7cfc00;
    }
  }
  .anticon-plus-square {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 21px;
    cursor: pointer;

    &:hover {
      transition-duration: 2s;
    }
  }
`;

export default StyledTodoItemHeader;
