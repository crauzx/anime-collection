/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const StyledModalContent = styled.div`
  padding: 10px;
  font-size: 14px;
  color: #2c3e50;
`;

const ModalContent = ({ children }) => {
  return <StyledModalContent>{children}</StyledModalContent>;
};

export default ModalContent;
