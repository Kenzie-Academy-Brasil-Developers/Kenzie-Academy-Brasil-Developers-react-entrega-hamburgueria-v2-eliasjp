import { useState, useContext, useEffect } from "react"
import { CartModal } from "../../component/CartModal/CartModal"
import { ProductCard } from "../../component/ProductCard/ProductCard"
import { LoginContext } from "../../context/LoginContext.tsx/LoginContext"
import { ModalContext } from "../../context/ModalContext.tsx/ModalContext"
import { ProductsContext } from "../../context/ProductsContext/ProductsContext"
import { api } from "../../services/api"
import { StyledHeader, StyledProductSection } from "./styled"

export function HomePage (){
    const { products, getProducts } = useContext(ProductsContext)
    const { modalOpen, setModalOpen, setContent } = useContext(ModalContext)
    const { checkAccount, logout } = useContext(LoginContext)

    const [ loading, setLoading ] = useState(false)
    const [ openSearch, setOpenSearch ] = useState(false)

    useEffect(() => {
        try {
            setLoading(true)
            checkAccount ("/")
            getProducts ()
        }
        catch {
            return
        }
        finally {
            setLoading(false)
        }
    }, [])

    function loadProducts (){
        if (!loading){
            return products.map(element => {
                return <ProductCard product={element} key ={element.id}/>
            })
        } else {
            return (<p>Carregando</p>)
        }
    }

    function callSearch (){
        setOpenSearch(!openSearch)
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
                        <button onClick={() => callSearch ()}><span className="material-symbols-outlined">search</span></button>
                        <button onClick={() => callModal ()}><span className="material-symbols-outlined">shopping_cart</span></button>
                        <button onClick={() => logout ()}><span className="material-symbols-outlined">logout</span></button>
                        {openSearch && <p>opened search</p>}
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