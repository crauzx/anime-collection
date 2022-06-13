/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const TextContainer = styled.div`
    display:flex;
    flex-wrap: wrap;
    font-weight: 600px;
    width: 100%;
    height: 100%;
    font-size: 20px;
    padding-block: 20px;

    @media (max-width: 576px) {
        font-size: 16px;
        justify-content: center;
    }
`;

const EmptyPage = ({children}) => {
  return (
    <TextContainer>{children}</TextContainer>
  )
}

export default EmptyPage