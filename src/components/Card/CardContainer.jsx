/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const StyledCardContainer = styled.div`
  color: #333;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(1, auto);
  margin: auto;
  margin: 5px 15px;
  padding: 0;
  position: relative;

  a {
    text-decoration: none;
    color: inherit;
    margin: 0;
    padding: 0;
  }

  @media (min-width: 577px) {
    grid-template-columns: repeat(2, auto);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, auto);
  }

  @media (min-width: 1320px) {
    grid-template-columns: repeat(5, auto);
  }
`;

const CardContainer = ({ children, ...attr }) => {
  return <StyledCardContainer {...attr}>{children}</StyledCardContainer>;
};

export default CardContainer;
