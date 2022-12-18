import styled from "styled-components"

export const StyledInfoSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 22px;

    padding: 40px 9px 0px 9px;
    h1 {
        font-size: var(--font-size-1);
        span{
            font-size: var(--font-size-3);
            color: var(--color-secondary);
        }
    }

    @media (min-width: 1024px){
        width: 100%;
        max-width: 377px;
    }
`

export const StyledInfoDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 13px 23px;

    border: 1px solid var(--color-grey-100);
    border-radius: var(--border-radius-1);

    .material-symbols-outlined {
        display: flex;
        justify-content: center;
        align-items: center;

        min-width: 60px;
        min-height: 60px;

        background-color: rgba(39, 174, 96, 0.1);
        border: 1px solid rgba(39, 174, 96, 0.1);
        border-radius: var(--border-radius-2);
        color: var(--color-primary);

        font-variation-settings:
        'FILL' 0,
        'wght' 400,
        'GRAD' 0,
        'opsz' 48,
    }

    
    p {
        font-size: var(--font-size-5);
        color: var(--color-grey-300);
        span {
            color: #000000;
        }
    }
`