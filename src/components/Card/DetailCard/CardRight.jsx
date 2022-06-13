/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const StyledCardRight = styled.div`
  margin-left: 1rem;
  padding: 1rem;

  @media (max-width: 576px) {
    margin-left: 0;
    text-align: center;
  }
`;

const CardRight = ({ children, ...attr }) => {
  return <StyledCardRight {...attr}>{children}</StyledCardRight>;
};

export default CardRight;
