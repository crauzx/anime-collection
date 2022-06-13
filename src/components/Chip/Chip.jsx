/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { primaryColor2 } from "../Colors/Colors";

const StyledChip = styled.div`
  background: ${primaryColor2};
  border-radius: 32px;
  color: #fff;
  display: inline-block;
  font-size: 13px;
  margin: 5px 10px 5px 0px;
  padding: 0.5rem 1rem;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 576px) {
    font-size: 12px;
  }
`;

const Chip = ({ children }) => {
  return <StyledChip>{children}</StyledChip>;
};

export default Chip;
