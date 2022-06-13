/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const StyledCardContainer = styled.div`
  color: #333;
  display: grid;
  grid-template-columns: repeat(5, auto);
  justify-content: center;
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

  @media (max-width: 576px) {
    grid-template-columns: repeat(1, auto);
  }
`;

const CardContainer = ({ children, ...attr }) => {
  return <StyledCardContainer {...attr}>{children}</StyledCardContainer>;
};

export default CardContainer;
