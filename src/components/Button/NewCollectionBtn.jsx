/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const StyledNewCollectionBtn = styled.button`
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  font-size: 16px;
  padding: 8px 10px;
`;

const NewCollectionBtn = ({ children, ...attr }) => {
  return <StyledNewCollectionBtn {...attr}>{children}</StyledNewCollectionBtn>;
};

export default NewCollectionBtn;
