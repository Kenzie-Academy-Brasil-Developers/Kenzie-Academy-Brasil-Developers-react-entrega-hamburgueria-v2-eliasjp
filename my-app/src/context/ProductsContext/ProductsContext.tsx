import { useState, useEffect, createContext } from "react";
import { iProductsProvider, iProductsContext } from "./interface";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


export const ProductsContext = createContext({} as iProductsContext)

export function ProductsProvider ({ children }: iProductsProvider){
    const [ products, setProducts ] = useState([])
    const [ cartProducts, setCartProducts ] = useState([])
    const navigate = useNavigate()

    async function getProducts (){
        try {
        const array = await api.get("/products", {
            headers: {
                Authorization: `Bearer ${JSON.parse(window.localStorage.getItem("@user_token") as string)}`
            }
        })
        .then(resp => resp.data)
        const addCount = array.map((element: {}) => ({...element, count: 1}))
        setProducts(addCount)
        }
        catch {
            toast.error("Ocorreu um problema, por favor faça o login novamente.", {
                position: "bottom-right"   
            })
            navigate("/")
        }
    }

    return (
        <ProductsContext.Provider value={{ products, getProducts, cartProducts, setCartProducts }}>
            { children }
        </ProductsContext.Provider>
    )
}