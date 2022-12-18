import styled from "styled-components"

export const ContainerLogin = styled.div`
    height: 100%;

    @media (min-width: 1024px){
        display: flex;
        align-items: center;
    }
    
`

export const LoginContentContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 1024px){
        width: 100%;
        max-width: 1000px;
        height: 461px;

        flex-direction: row-reverse;
        margin: 0 auto;
        gap: 86px;
    }
`

export const StyledLoginMain = styled.main`
    display: flex;
    flex-direction: column;

    padding: 20px 9px 0px 9px;
    gap: 24px;

    p {
        font-size: var(--font-size-5);
        color: #999999;
        text-align: center;
    }

    a {
        width: 100%;
        height: 60px;
        padding: 0px 40px;

        display: flex;
        justify-content: center;
        align-items: center;
        
        background: var(--color-grey-100);
        border: 2px solid var(--color-grey-100);
        border-radius: var(--border-radius-1);

        color: #999999;
        text-decoration: none;
        transition: 300ms;

        &:hover {
            background: var(--color-grey-0);
            border-color: var(--color-grey-0);
        }
    }

    @media (min-width: 1024px){
        width: 500px;
        height: 461px;  
    }
`

export const StyledLoginForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 25px;

        .inputDiv {
            position: relative;
            input {
                width: 100%;
            }
            p{
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