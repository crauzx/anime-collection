/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import NavbarLogo from "./NavbarLogo";
import { NavLink, useLocation } from "react-router-dom";
import { primaryColor } from "../Colors/Colors";
import Overlay from "../View/Overlay";

const Navbar = () => {
  const location = useLocation();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");

  const Nav = styled.nav`
    display: flex;
    align-items: center;
    padding: 0 1rem;
    color: ${primaryColor};
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

    @media (max-width: 576px) {
      padding: 0;
    }
  `;

  const NavWrapper = styled.div`
    display: flex;

    @media (max-width: 576px) {
      background-color: #fff;
      position: fixed;
      z-index: 4;
      left: ${navbarOpen ? "0" : "-100%"};
      top: 0;
      width: 30%;
      height: 100vh;
      flex-direction: column;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    }
  `;

  const navbarItem = css`
    text-decoration: none;
    color: ${primaryColor};
    padding: 1.5rem 0;
    margin: 0 1rem;
    font-weight: 900px;

    &:hover {
      border-bottom: 2px solid ${primaryColor};
      cursor: pointer;
    }

    @media (max-width: 576px) {
      font-size: 12px;
      margin: 0 0.5rem;
      padding: 0.5rem 0;
    }
  `;

  const active = css`
    border-bottom: 2px solid ${primaryColor};
  `;

  useEffect(() => {
    setCurrentUrl(location.pathname);
  }, []);

  return (
    <Nav>
      <NavbarLogo
        navbarOpen={navbarOpen}
        setNavbarOpen={setNavbarOpen}
        show={false}
      />
      {navbarOpen && (
        <Overlay
          onClick={() => setNavbarOpen(false)}
          css={css`
            z-index: 3;
          `}
        />
      )}
      <NavWrapper>
        <NavbarLogo
          navbarOpen={navbarOpen}
          setNavbarOpen={setNavbarOpen}
          show={true}
        />
        <NavLink
          css={[navbarItem, currentUrl === "/" && active]}
          exact="true"
          to="/"
          onClick={() => {
            setCurrentUrl("/");
            setNavbarOpen(false);
          }}
        >
          Anime List
        </NavLink>
        <NavLink
          css={[navbarItem, currentUrl === "/collection" && active]}
          to="/collection"
          onClick={() => {
            setCurrentUrl("/collection");
            setNavbarOpen(false);
          }}
        >
          Collection List
        </NavLink>
      </NavWrapper>
    </Nav>
  );
};

export default Navbar;
