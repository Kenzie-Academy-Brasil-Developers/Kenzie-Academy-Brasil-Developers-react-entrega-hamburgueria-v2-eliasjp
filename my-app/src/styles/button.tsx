import styled, { css } from "styled-components"

interface iButton {
    large?: boolean;
    radius: string;
    color: "green" | "grey";
}

const themeColor2 = {
    green: css`
        background: var(--color-primary);
        border: 2px solid var(--color-primary);
        color: #FFFFFF;
        transition: 300ms;

        &:hover {
            opacity: 0.5;
        }
    `,
    grey: css`
        background: var(--color-grey-100);
        border: 2px solid var(--color-grey-100);
        color: var(--color-grey-300);
        transition: 300ms;

        &:hover {
            background: var(--color-grey-300);
            border: 2px solid var(--color-grey-300);
            color: var(--color-grey-100);
        }
    `
}

export const StyledButton = styled.button<iButton>`
    height: ${props => props.large ? "60px" : "48px"};

    ${props => themeColor2[props.color]};
    border-radius: ${props => props.radius && `var(--border-radius-${props.radius})`};

    cursor: pointer;
`