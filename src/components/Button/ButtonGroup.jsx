/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const StyledButtonGroup = styled.div`
  align-items: center;
  display: flex;
`;

const ButtonGroup = ({ children, ...attr }) => {
  return <StyledButtonGroup {...attr}>{children}</StyledButtonGroup>;
};

export default ButtonGroup;
