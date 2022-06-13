/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const StyledCardLeft = styled.div`
  padding: 1rem;

  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0;

    table {
      margin-line: auto;
    }
  }
`;

const CardLeft = ({ children, ...attr }) => {
  return <StyledCardLeft {...attr}>{children}</StyledCardLeft>;
};

export default CardLeft;
