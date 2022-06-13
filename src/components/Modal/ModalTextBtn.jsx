/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import TextButton from "../Button/TextButton";

const styledTextBtn = css`
  font-weight: 600;
  text-transform: uppercase;
  margin-right: 0;
  margin-top: 10px;
  margin-left: auto;
  display: block;
`;

const ModalTextBtn = ({ children, ...attr }) => {
  return (
    <TextButton css={styledTextBtn} {...attr}>
      {children}
    </TextButton>
  );
};

export default ModalTextBtn;
