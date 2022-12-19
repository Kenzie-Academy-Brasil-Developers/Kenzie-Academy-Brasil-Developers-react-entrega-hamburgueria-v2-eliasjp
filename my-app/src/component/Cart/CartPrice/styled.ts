import styled from "styled-components";

export const PriceSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;

    border-top: 2px solid var(--color-grey-100);

    p {
        font-size: var(--font-size-5);
        font-weight: var(--font-weight-2);
    }

    small {
        font-size: var(--font-size-5);
        font-weight: var(--font-weight-2);
        color: var(--color-grey-300);
    }
`