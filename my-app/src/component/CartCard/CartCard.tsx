import { useContext } from "react"

import { iProductsObject } from "../../context/ProductsContext/interface"
import { ProductsContext } from "../../context/ProductsContext/ProductsContext"
import { StyledCartCaraInformation, StyledCartCard, StyledCartCardCounter } from "./styled"


export function CartCard ({ element }: any){
    const { cartProducts, setCartProducts } = useContext(ProductsContext)

    function itemCounter (){
        return (
            <StyledCartCardCounter>
                <button onClick={() => renderCount (element, "-")} disabled={element.count > 1 ? false : true}>{element.count > 1 ? "-" : ""}</button>
                <p>{element.count}</p>
                <button onClick={() => renderCount (element, "+")}>+</button>
            </StyledCartCardCounter>
        )
    }

    function renderCount (element: iProductsObject, type: string){
        if (type === "+"){
            element.count++
        } else {
            element.count--
        }
        setCartProducts([...cartProducts])
    }

    function removeFromCart (element: iProductsObject){
        const filteredCart = cartProducts.filter((item: iProductsObject) => item.id !== element.id)
        element.count = 1
        setCartProducts(filteredCart)
    }

    return (
        <>
            <StyledCartCard key={element.id}>
                <StyledCartCaraInformation>
                    <img src={element.img} />
                    <div>
                        <h3>{element.name}</h3>
                        {itemCounter()}
                    </div>
                </StyledCartCaraInformation>
                <button onClick={() => removeFromCart(element)}>Excluir</button>
            </StyledCartCard>
        </>
    )
}