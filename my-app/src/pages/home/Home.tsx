import { useState, useContext, useEffect } from "react"

import { CartModal } from "../../component/Cart/CartModal/CartModal"
import { ProductCard } from "../../component/ProductCard/ProductCard"
import { SearchBar } from "../../component/SearchBar/SearchBar"

import { LoginContext } from "../../context/LoginContext.tsx/LoginContext"
import { ModalContext } from "../../context/ModalContext.tsx/ModalContext"
import { ProductsContext } from "../../context/ProductsContext/ProductsContext"

import { StyledHeader, StyledProductSection } from "./styled"

export function HomePage (){
    const { products, getProducts } = useContext(ProductsContext)
    const { modalOpen, setModalOpen, setContent } = useContext(ModalContext)
    const { checkAccount, logout } = useContext(LoginContext)

    const [ openSearch, setOpenSearch ] = useState(false)
    const [ filterProducts, setFilterProducts ] = useState<any[]>([])

    useEffect(() => {
        try {
            checkAccount ("/")
            getProducts ()
        }
        catch {
            return
        }
        finally {
        }
    }, [])

    function loadProducts (){
        if (!filterProducts.length){
            return products.map(element => {
                return <ProductCard product={element} key={element.id}/>
            })
        } else if (filterProducts.length){
            return filterProducts.map(element => {
                console.log(element.id)
                return <ProductCard product={element} key={element.id}/>
            })
        }
    }

    function callSearch (){
        if (openSearch){
            return <SearchBar openSearch={openSearch} setOpenSearch={setOpenSearch} products={products} setFilterProducts={setFilterProducts}/>
        } else {
            return <button onClick={() => setOpenSearch(!openSearch)}><span className="material-symbols-outlined">search</span></button>
        }
    }

    function callModal (){
        setModalOpen(!modalOpen)
        setContent(<CartModal />)
    }

    return (
        <div>
            <div>
                <StyledHeader>
                    <h1>Burger <span>Kenzie</span></h1>
                    <nav>
                        { callSearch ()}
                        <button onClick={() => callModal ()}><span className="material-symbols-outlined">shopping_cart</span></button>
                        <button onClick={() => logout ()}><span className="material-symbols-outlined">logout</span></button>
                    </nav>
                </StyledHeader>
                
                <StyledProductSection>
                    <ul>
                        { loadProducts ()}
                    </ul>
                </StyledProductSection>
            </div>
        </div>

    )
}