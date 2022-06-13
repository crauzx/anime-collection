/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const StyledModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 10;
  transform: translate(-50%, -50%);
`;

const ModalContainer = ({ children }) => {
  return <StyledModalContainer>{children}</StyledModalContainer>;
};

export default ModalContainer;
