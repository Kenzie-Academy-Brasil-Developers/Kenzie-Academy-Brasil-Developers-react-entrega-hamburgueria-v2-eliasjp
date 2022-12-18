import styled from "styled-components";

export const RegisterContainer = styled.div`
    height: 100%;
    
    @media (min-width: 1024px){
        display: flex;
        align-items: center;
    }
`

export const RegisterContentContainer = styled.div`
    section:first-child {
        display: none;
    }

    @media (min-width: 1024px){
        width: 100%;
        max-width: 1000px;

        display: flex;
        flex-direction: row;
        gap: 86px;

        margin: 0 auto;
        section:first-child {
            display: flex;
        }
    }
`

export const RegisterMain = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px 9px 0px 9px;
    gap: 24px;

    div:first-child {
        display: flex;
        justify-content: space-between;

        a {
            font-size: var(--font-size-5);
            color: var(--color-grey-300);
        }
    }

    @media (min-width: 1024px){
        width: 500px
    }
`

export const RegisterForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 25px;

    div {
        display: flex;
        flex-direction: column;
        position: relative;

        input {
            width: 100%;
        }

        p {
            position: absolute;
            top: -10px;
            left: 10px;

            color: #999999;
            font-size: var(--font-size-6);

            background-color: white;
            padding: 0px 7px;
        }

        span {
            display: block;
            margin: 6px 0px 0px 6px;

            font-size: var(--font-size-6);
            color: var(--color-negative);
        }
    }
`