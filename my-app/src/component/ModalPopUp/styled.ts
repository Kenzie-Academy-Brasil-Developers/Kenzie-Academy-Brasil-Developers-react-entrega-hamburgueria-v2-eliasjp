import styled from "styled-components";

export const ModalContainer = styled.section`
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.3);

    position: fixed;
    top: 0;
    left: 0;
    padding: 20px 20px 0 20px;

    div {
        width: 100%;
    }

    @media (min-width: 1024px){
        padding: 0;
        display: flex;
        align-items: center;

        div {
            max-width: 500px;
            margin: 0 auto;
        }
    }
`