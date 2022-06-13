/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { RiErrorWarningLine } from "react-icons/ri";

const ToastContainer = styled.div`
  background-color: red;
  width: 15rem;
  position: fixed;
  top: 2%;
  right: 1%;
  z-index: 11;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 10px;

  @media (max-width: 576px) {
    width: 13rem;
  }
`;

const ToastIcon = styled.div`
  display: flex;
  align-items: center;
  svg {
    width: 50px;
    height: 50px;
  }

  @media (max-width: 576px) {
    width: 30px;
    height: 30px;
  }
`;

const ToastMessage = styled.div`
  text-align: center;
  width: 100%;
  margin-left: 0.5rem;
`;

const Toast = ({ children }) => {
  return (
    <ToastContainer>
      <ToastIcon>
        <RiErrorWarningLine />
      </ToastIcon>
      <ToastMessage>{children}</ToastMessage>
    </ToastContainer>
  );
};

export default Toast;