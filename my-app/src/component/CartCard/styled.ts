import styled from "styled-components";

export const StyledCartCard = styled.li`
    display: flex;

    button {
        width: 50px;
        height: 50px;
        align-self: top;
    }
`

export const StyledCartCaraInformation = styled.div`
    display: flex;

    img {
        width: 80px;
        object-fit: scale-down;
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
`

export const StyledCartCardCounter = styled.span`
    display: flex;
    align-items: center;
    gap: 10px;

    button {
        width: 20px;
        height: 20px;
        font-weight: var(--font-weight-1);
        color: var(--color-secondary);
        background: none;
        border: none;
        cursor: pointer;
    }
`