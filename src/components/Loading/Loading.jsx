/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { primaryColor } from "../Colors/Colors";

const StyledLoading = styled.div`
  animation: spin 1s infinite linear;
  border: solid 1vmin transparent;
  border-radius: 50%;
  border-right-color: ${primaryColor};
  border-top-color: ${primaryColor};
  box-sizing: border-box;
  height: 12vmin;
  left: calc(52% - 10vmin);
  position: fixed;
  top: calc(53% - 10vmin);
  width: 12vmin;
  z-index: 1;

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loading = ({ ...attr }) => {
  return <StyledLoading {...attr}></StyledLoading>;
};

export default Loading;
