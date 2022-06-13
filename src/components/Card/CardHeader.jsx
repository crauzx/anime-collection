/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const StyledCardHeader = styled.div`
  img {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    height: 350px;
    width: 100%;
  }
`;

const CardHeader = ({ children, ...attr }) => {
  return <StyledCardHeader {...attr}>{children}</StyledCardHeader>;
};

export default CardHeader;
