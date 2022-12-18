import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (min-width: 1024px){
        padding: 20px 20%;
    }

    nav {
        display: flex;
        align-items: center;
        gap: 10px;
    }
`

export const StyledProductList = styled.ul`
    display: flex;
    flex-direction: row;

    overflow-x: scroll;
    list-style: none;
    gap: 20px;
`