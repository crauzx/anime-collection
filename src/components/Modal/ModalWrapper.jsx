/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const StyledModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  min-width: 300px;
  color: #000;
  z-index: 10;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
`;

const ModalWrapper = ({ children }) => {
  return <StyledModalWrapper>{children}</StyledModalWrapper>;
};

export default ModalWrapper;
