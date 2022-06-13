/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const StyledCardBody = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 180px;
  padding: 20px;
`;

const CardBody = ({ children, ...attr }) => {
  return <StyledCardBody {...attr}>{children}</StyledCardBody>;
};

export default CardBody;
