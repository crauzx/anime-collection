/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const StyledCard = styled.div`
  display: flex;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  padding: 5rem;
  border-radius: 1rem;

  @media (max-width: 576px) {
    flex-direction: column-reverse;
    padding: 3rem;
  }
`;

const Card = ({ children, ...attr }) => {
  return <StyledCard {...attr}>{children}</StyledCard>;
};

export default Card;
