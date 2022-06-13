/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const StyledHeaderContent = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 576px) {
    align-items: center;
    flex-direction: column;
    margin-bottom: 2rem;
  }
`;

const HeaderContent = ({ children }) => {
  return <StyledHeaderContent>{children}</StyledHeaderContent>;
};

export default HeaderContent;
