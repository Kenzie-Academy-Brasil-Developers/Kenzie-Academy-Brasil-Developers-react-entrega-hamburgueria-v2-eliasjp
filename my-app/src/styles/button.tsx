import styled from "styled-components"

interface iButton {
    large?: boolean;
    radius: string;
    theme: string;
}

function themeColors (theme: string){
    if (theme === "green"){
    return (`
        background: var(--color-primary);
        border: 2px solid var(--color-primary);
        color: #FFFFFF;

        &:hover {
            opacity: 0.5;
        }
    `)
    }else if (theme === "gray") {
        return (`
        background: var(--color-grey-100);
        border: 2px solid var(--color-grey-100);
        color: var(--color-grey-300);

        &:hover {
            background: var(--color-grey-300);
            border: 2px solid var(--color-grey-300);
            color: var(--color-grey-100);
        }
    `)
    }
}

export const StyledButton = styled.button<iButton>`
    height: ${props => props.large ? "60px" : "48px"};

    ${props => props.theme && themeColors(props.theme)}
    border-radius: 8px;

    cursor: pointer;
`

// border-radius: ${props => props.radius && `var(--border-radius-${props.radius}`};