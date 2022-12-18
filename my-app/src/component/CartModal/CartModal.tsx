import { useContext } from "react"

import { ModalContext } from "../../context/ModalContext.tsx/ModalContext"
import { ProductsContext } from "../../context/ProductsContext/ProductsContext"
import { CartCard } from "../CartCard/CartCard"
import { StyledCartHeader, StyledCartSection } from "./styled"

export function CartModal (){
    const { setModalOpen } = useContext(ModalContext)
    const { cartProducts } = useContext(ProductsContext)

    function renderCart (){
        if (!cartProducts.length){
            return (
                <>
                    <h3>Carrinho está vazio</h3>
                    <small>Adicione itens</small>
                </>
            )
        } else {
            return (
                <>
                    <ul>
                        { cartProducts.map((element: any) => {
                            return (
                            <CartCard element={element}/>
                            )
                        })}
                    </ul>
                </>
            )
        }
    }

    return (
        <>
            <StyledCartHeader>
                <h3>Carrinho de Compras</h3>
                <button onClick={() => setModalOpen(false)}>X</button>
            </StyledCartHeader>

            <StyledCartSection>
                { renderCart () }
            </StyledCartSection>
        </>
    )
}