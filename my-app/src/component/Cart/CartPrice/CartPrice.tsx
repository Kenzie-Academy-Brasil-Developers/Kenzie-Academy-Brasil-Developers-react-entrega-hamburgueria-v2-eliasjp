import { useContext } from "react"
import { iProductsObject } from "../../../context/ProductsContext/interface"
import { ProductsContext } from "../../../context/ProductsContext/ProductsContext"
import { PriceSection } from "./styled"

export function CartPrice (){
    const { cartProducts } = useContext(ProductsContext)

    function teste (){
        return cartProducts.reduce((acc: number, newValue: iProductsObject) => acc + newValue.price * newValue.count, 0).toFixed(2)
    }

    return (
        <PriceSection>
            <p>Total</p>
            <small>R$: {teste ()}</small>
        </PriceSection>
    )
}