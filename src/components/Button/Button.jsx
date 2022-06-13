/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { accentColor, secondaryColor, primaryColor } from "../Colors/Colors";

const StyledButton = styled.button`
  align-items: center;
  background-color: ${primaryColor};
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui, -apple-system, system-ui, "Helvetica Neue", Helvetica,
    Arial, sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  min-height: 2.5rem;
  padding: calc(0.175rem - 1px) calc(1rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;

  &:hover {
    border-color: ${secondaryColor};
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    color: ${accentColor};
  }
  
  &:active {
    background-color: ${accentColor};
    border-color: ${accentColor};
    box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
    color: ${primaryColor};
    transform: translateY(0);
  }

  @media (max-width: 576px) {
    min-height: 2rem;
    font-size: 12px;
    border-radius: 0.8rem;
  }
`;

const Button = ({
  text = "",
  leftIcon = false,
  rightIcon = false,
  icon = <></>,
  ...attr
}) => {
  return (
    <StyledButton {...attr}>
      {leftIcon ? icon : <></>}
      {text}
      {rightIcon ? icon : <></>}
    </StyledButton>
  );
};

export default Button;
