/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import NavbarLogo from "./NavbarLogo";
import { NavLink, useLocation } from "react-router-dom";
import { primaryColor } from "../Colors/Colors";
import Overlay from "../View/Overlay";
import Nav from "./Nav";
import NavWrapper from "./NavWrapper";

const Navbar = () => {
  const location = useLocation();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [currentLocation, setCurrentLocation] = useState("");

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
    if (location.pathname.includes("collection"))
      setCurrentLocation("collection");
    else setCurrentLocation("anime");
  }, [location]);

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
      <NavWrapper navbarOpen={navbarOpen}>
        <NavbarLogo
          navbarOpen={navbarOpen}
          setNavbarOpen={setNavbarOpen}
          show={true}
        />
        <NavLink
          css={[navbarItem, currentLocation === "anime" && active]}
          exact="true"
          to="/"
          onClick={() => setNavbarOpen(false)}
        >
          Anime List
        </NavLink>
        <NavLink
          css={[navbarItem, currentLocation === "collection" && active]}
          to="/collection"
          onClick={() => setNavbarOpen(false)}
        >
          Collection List
        </NavLink>
      </NavWrapper>
    </Nav>
  );
};

export default Navbar;
