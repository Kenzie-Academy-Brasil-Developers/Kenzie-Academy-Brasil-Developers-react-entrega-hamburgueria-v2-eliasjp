import { useContext } from "react"

import { ModalContext } from "../../context/ModalContext.tsx/ModalContext"
import { ProductsContext } from "../../context/ProductsContext/ProductsContext"
import { CartCard } from "../CartCard/CartCard"
import { CartPrice } from "../CartPrice/CartPrice"
import { CartReset } from "../CartReset/CartReset"
import { StyledCartHeader, StyledCartSection, StyledEmptyCart } from "./styled"

export function CartModal (){
    const { setModalOpen } = useContext(ModalContext)
    const { cartProducts } = useContext(ProductsContext)

    function renderCart (){
        if (!cartProducts.length){
            return (
                <StyledEmptyCart>
                    <h3>Carrinho está vazio</h3>
                    <small>Adicione itens</small>
                </StyledEmptyCart>
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
                    <CartPrice />
                    <CartReset />
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