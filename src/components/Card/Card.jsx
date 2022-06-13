/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const StyledCard = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  height: auto;
  margin: 10px;
  overflow: hidden;
  position: relative;
  width: 250px;

  &:hover {
    cursor: pointer;
  }
`;

const Card = ({ children, ...attr }) => {
  return <StyledCard {...attr}>{children}</StyledCard>;
};

export default Card;