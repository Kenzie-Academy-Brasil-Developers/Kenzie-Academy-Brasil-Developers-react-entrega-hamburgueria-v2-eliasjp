import { useContext } from "react";

import { toast } from "react-toastify";
import { ProductsContext } from "../../context/ProductsContext/ProductsContext";
import { StyledButton } from "../../styles/button";
import { iProductCard } from "./interface";
import { StyledCard } from "./styled";


export function ProductCard ({ product }: iProductCard){
    const { cartProducts, setCartProducts } = useContext(ProductsContext)

    function sendToCart (item: any){
        if (!cartProducts.includes(item)){
            setCartProducts([...cartProducts, item])
        }else {
            toast.error("Esse item já está no carrinho.", {
                position: "bottom-right"
            })
        }
    }

    return (
        <StyledCard>
            <img src={product.img}/>
            <div>
                <h2>{product.name}</h2>
                <small>{product.category}</small>
                <p>R$ {product.price.toFixed(2)}</p>
                <StyledButton color="green" radius="1" onClick={() => sendToCart(product)}>Adicionar</StyledButton>
            </div>
        </StyledCard>
    )
}