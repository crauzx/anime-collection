/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const StyledSecondaryTitle = styled.div`
  color: #c4c4c4;
  font-weight: bold;
  font-size: 20px;

  @media (max-width: 576px) {
    font-size: 18px;
  }
`;

const SecondaryTitle = ({ children, ...attr }) => {
  return <StyledSecondaryTitle {...attr}>{children}</StyledSecondaryTitle>;
};

export default SecondaryTitle;
