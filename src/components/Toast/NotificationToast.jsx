/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { primaryColor } from "../Colors/Colors";

const ToastContainer = styled.div`
  background-color: ${primaryColor};
  width: 15rem;
  position: fixed;
  bottom: 2%;
  left: 1%;
  z-index: 11;
  color: #fff;
  display: flex;
  padding: 0.7rem;
  border-radius: 10px;

  @media (max-width: 576px) {
    width: 13rem;
  }
`;

const ToastMessage = styled.div`
  text-align: center;
  font-size: 13px;
  width: 100%;
`;

const NotificationToast = ({ children }) => {
  return (
    <ToastContainer>
      <ToastMessage>{children}</ToastMessage>
    </ToastContainer>
  );
};

export default NotificationToast;