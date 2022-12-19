import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 18px 10px 24px 10px;

    h1 {
        font-size: var(--font-size-1);
        span{
            font-size: var(--font-size-3);
            color: var(--color-secondary);
        }
    }

    @media (min-width: 1024px){
        padding: 20px 20%;
    }

    nav {
        display: flex;
        align-items: center;
        gap: 10px;

        button {
            border: none;
            background: none;
            cursor: pointer;
        }
    }
`

export const StyledProductSection = styled.section`
    padding: 0 9px;

    ul {
        display: flex;
        flex-direction: row;

        overflow-x: scroll;
        list-style: none;
        gap: 20px;
    }

    @media (min-width: 1024px){
        max-width: 960px;
        margin: 0 auto;

        ul {
            overflow: none;
            flex-wrap: wrap;
        }
    }
`
