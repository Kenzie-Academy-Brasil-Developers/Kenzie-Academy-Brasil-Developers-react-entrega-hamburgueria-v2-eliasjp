import styled from "styled-components";

export const StyledSearchContainer = styled.div`
    width: 100vw;
    height: 60px;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 0;
    left: 0;
    
    background: #FFFFFF;
    span {
        display: flex;
        justify-content: center;
        align-items: center;
        
        border: 2px solid var(--color-grey-300);
        border-radius: var(--border-radius-1);
        padding: 5px;

        input {
            height: 30px;
            padding: 0 5px;
            border: transparent;

            &:focus{
                outline: transparent;
            }
        }

        button {
            img {
                background: transparent;
                border-color: transparent;
            }
        }
    }

    @media (min-width: 1024px){
        width: max-content;
        position: static;
        height: 30px;
    }
`