/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { primaryColor } from "../Colors/Colors";

const StyledTextButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${primaryColor};
  font-size: 16px;
  padding: 8px 10px;

  &:hover {
    filter: brightness(70%);
  }
`;

const TextButton = ({ children, ...attr }) => {
  return <StyledTextButton {...attr}>{children}</StyledTextButton>;
};

export default TextButton;
