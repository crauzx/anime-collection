/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const StyledModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  overflow: hidden;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

const ModalHeader = ({ children }) => {
  return <StyledModalHeader>{children}</StyledModalHeader>;
};

export default ModalHeader;
