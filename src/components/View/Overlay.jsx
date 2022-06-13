/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const StyledOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  width: 100vw;
  height: 100vh;
  z-index: 3;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
`;

const Overlay = ({...attr}) => {
  return <StyledOverlay {...attr}/>;
};

export default Overlay;
