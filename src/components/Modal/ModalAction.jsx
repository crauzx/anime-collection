/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const StyledModalAction = styled.div`
  position: relative;
  bottom: 2px;
  margin-bottom: 10px;
  width: 100%;
`;

const ModalAction = ({ children }) => {
  return <StyledModalAction>{children}</StyledModalAction>;
};

export default ModalAction;
