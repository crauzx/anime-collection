/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const StyledTitle = styled.div`
  font-weight: bold;
  font-size: 24px;
`;

const Title = ({ children, ...attr }) => {
  return <StyledTitle {...attr}>{children}</StyledTitle>;
};

export default Title;
