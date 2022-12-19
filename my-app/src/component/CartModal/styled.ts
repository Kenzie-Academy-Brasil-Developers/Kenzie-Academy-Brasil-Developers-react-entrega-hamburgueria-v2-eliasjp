import styled from "styled-components";

export const StyledCartHeader = styled.header`
    display: flex;
    padding: 13px 22px;
    justify-content: space-between;
    background: var(--color-primary);
    border-radius: var(--border-radius-1) var(--border-radius-1) 0 0;
`

export const StyledCartSection = styled.section`
    padding: 0 20px;
    border-radius: 0 0 var(--border-radius-1) var(--border-radius-1);
    background: #FFFFFF;

    ul {
        width: 100%;
        max-height: 350px;
        list-style: none;
        overflow-y: scroll;
        padding: 20px 20px;
    }
`

export const StyledEmptyCart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
    gap: 10px;

    h3 {
        text-align: center;
    }
`