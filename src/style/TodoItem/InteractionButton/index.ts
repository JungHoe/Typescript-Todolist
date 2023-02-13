import styled from "styled-components";

const InteractionButton = styled.div`
  width: 100px;
  text-align: center;
  button {
    width: 80%;
  }
  button ~ button {
    margin-top: 10px;
  }
`;

export default InteractionButton;
