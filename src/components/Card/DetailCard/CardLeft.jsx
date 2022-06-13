/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const StyledCardLeft = styled.div`
  padding: 1rem;

  img {
    margin-bottom: 0.5rem;
  }

  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0;

    table {
      margin: 1rem;
      padding: 0.5rem;
      width: 80%;
    }
  }
`;

const CardLeft = ({ children, ...attr }) => {
  return <StyledCardLeft {...attr}>{children}</StyledCardLeft>;
};

export default CardLeft;
