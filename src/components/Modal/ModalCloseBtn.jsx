/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const StyledModalCloseBtn = styled.button`
  cursor: pointer;
  font-weight: 500;
  padding: 4px 8px;
  border: none;
  font-size: 24px;
  background: transparent;
`;

const ModalCloseBtn = ({ children, ...attr }) => {
  return <StyledModalCloseBtn {...attr}>{children}</StyledModalCloseBtn>;
};

export default ModalCloseBtn;
