import styled from "styled-components";

export const StyledInput = styled.input`
    height: 60px;
    padding: 21px 12px;

    border: 2px solid var(--color-grey-600);
    border-radius: var(--border-radius-1);

    &:focus{
        border-color: var(--color-grey-300);
        outline: none;
    }
`