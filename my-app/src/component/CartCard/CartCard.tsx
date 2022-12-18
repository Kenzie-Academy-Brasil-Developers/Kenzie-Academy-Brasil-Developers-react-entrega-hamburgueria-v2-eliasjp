import { useContext } from "react"

import { iProductsObject } from "../../context/ProductsContext/interface"
import { ProductsContext } from "../../context/ProductsContext/ProductsContext"


export function CartCard ({ element }: any){
    const { cartProducts, setCartProducts } = useContext(ProductsContext)

    function itemCounter (){
        return (
            <span>
                {element.count > 1 && <button onClick={() => renderCount (element, "-")}>-</button>}
                <p>{element.count}</p>
                <button onClick={() => renderCount (element, "+")}>+</button>
            </span>
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
        setCartProducts(filteredCart)
    }

    return (
        <>
            <li key={element.id}>
                <div>
                    <img src={element.img} />
                    <div>
                        <h2>{element.name}</h2>
                        {itemCounter()}
                    </div>
                </div>
                <button onClick={() => removeFromCart(element)}>Excluir</button>
            </li>
        </>
    )
}