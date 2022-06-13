/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { primaryColor } from "../Colors/Colors";

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  color: ${primaryColor};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  @media (max-width: 576px) {
    padding: 0;
  }
`;

const Nav = ({ children, ...attr }) => {
  return <StyledNav {...attr}>{children}</StyledNav>;
};

export default Nav;
