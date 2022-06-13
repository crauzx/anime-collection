/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { GiHamburgerMenu } from "react-icons/gi";
import { primaryColor } from "../Colors/Colors";

const StyledBurgerButton = styled.button`
  display: none;
  padding: 0.5rem;
  background-color: transparent;
  border: none;

  @media (max-width: 576px) {
    display: flex;
  }
`;

const BurgerButton = ({ navbarOpen, setNavbarOpen }) => {
  return (
    <StyledBurgerButton onClick={() => setNavbarOpen(!navbarOpen)}>
      <GiHamburgerMenu css={css`color: ${primaryColor}`}/>
    </StyledBurgerButton>
  );
};

export default BurgerButton;
