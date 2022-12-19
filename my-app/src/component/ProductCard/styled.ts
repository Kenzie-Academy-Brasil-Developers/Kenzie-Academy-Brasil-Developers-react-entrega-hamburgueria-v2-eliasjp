import styled from "styled-components";

export const StyledCard = styled.li`
    min-width: 300px;
    border: 2px solid var(--color-grey-300);
    border-radius: var(--border-radius-1);
    transition: 300;

    &:hover {
        border-color: var(--color-primary);
    }

    img {
        width: 100%;
        height: 150px;
        object-fit: scale-down;
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 14px;
        padding: 0 0 23px 21px;

        h2 {
            font-size: var(--font-size-3);
            font-weight: var(--font-weight-1);
            color: var(--color-grey-600);
        }

        small {
            font-size: var(--font-size-6);
            font-weight: var(--font-weight-3);
            color: var(--color-grey-300);
        }

        p {
            font-size: var(--font-size-5);
            font-weight: var(--font-weight-2);
            color: var(--color-primary);
        }

        button {
            padding: 0 20px;
            align-self: flex-start;
        }
    }
`