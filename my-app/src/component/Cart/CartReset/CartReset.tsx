import { useContext } from "react"
import { ProductsContext } from "../../../context/ProductsContext/ProductsContext";

import { StyledButton } from "../../../styles/button";
import { StyledResetContainer } from "./styled";

export function CartReset (){
    const { setCartProducts } = useContext(ProductsContext)

    return (
        <StyledResetContainer>
            <StyledButton large radius="1" color="grey" onClick={() => setCartProducts([])}>Remover Todos</StyledButton>   
        </StyledResetContainer>
    )
}