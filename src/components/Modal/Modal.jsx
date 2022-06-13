/** @jsxImportSource @emotion/react */
import Overlay from "../View/Overlay";
import ModalContainer from "./ModalContainer";

const Modal = ({ click, children }) => {
  return (
    <>
      <Overlay onClick={click} />
      <ModalContainer>{children}</ModalContainer>
    </>
  );
};

export default Modal;
