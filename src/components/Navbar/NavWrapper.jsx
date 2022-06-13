/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const NavWrapper = ({ navbarOpen, children, ...attr }) => {
  const StyledNavWrapper = styled.div`
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
  return <StyledNavWrapper {...attr}>{children}</StyledNavWrapper>;
};

export default NavWrapper;
