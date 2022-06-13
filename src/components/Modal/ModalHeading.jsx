/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const StyledModalHeading = styled.div`
  margin: 0;
  position: relative;
  padding: 10px;
`;

const ModalHeading = ({ children }) => {
  return <StyledModalHeading>{children}</StyledModalHeading>;
};

export default ModalHeading;
