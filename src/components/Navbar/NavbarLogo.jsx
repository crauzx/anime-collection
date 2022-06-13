/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { primaryColor } from "../Colors/Colors";
import BurgerButton from "./BurgerButton";

const StyledNavbarLogo = styled.div`
  padding: 1.5rem 0;
  margin: 0 2rem 0 1rem;
  font-weight: bold;
  color: ${primaryColor};

  &:hover {
    cursor: default;
  }

  @media (max-width: 576px) {
    font-size: 12px;
    margin: 0;
    padding: 0.5rem 0;
  }
`;

const navbarLogoResp = css`
  display: none;
  @media (max-width: 576px) {
    display: block;
  }
`;

const NavbarLogo = ({ navbarOpen, setNavbarOpen, show }) => {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
      `}
    >
      <BurgerButton navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
      <StyledNavbarLogo css={show && navbarLogoResp}>
        Animetion
      </StyledNavbarLogo>
    </div>
  );
};

export default NavbarLogo;
