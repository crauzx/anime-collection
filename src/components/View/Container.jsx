/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const StyledContainer = styled.div`
  padding: 2rem;
`;

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
