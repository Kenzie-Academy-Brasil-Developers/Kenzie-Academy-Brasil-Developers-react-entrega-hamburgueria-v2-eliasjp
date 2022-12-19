import { useState, useContext, useEffect } from "react"
import { CartModal } from "../../component/CartModal/CartModal"
import { ProductCard } from "../../component/ProductCard/ProductCard"
import { LoginContext } from "../../context/LoginContext.tsx/LoginContext"
import { ModalContext } from "../../context/ModalContext.tsx/ModalContext"
import { ProductsContext } from "../../context/ProductsContext/ProductsContext"
import { api } from "../../services/api"
import { StyledHeader, StyledProductList } from "./styled"

export function HomePage (){
    const { products, getProducts } = useContext(ProductsContext)
    const { modalOpen, setModalOpen, setContent } = useContext(ModalContext)
    const { checkAccount } = useContext(LoginContext)

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

    function teste (){
        setModalOpen(!modalOpen)
        setContent(<CartModal />)
    }

    return (
        <div>
            <div>
                <StyledHeader>
                    <h1>Burger <span>Kenzie</span></h1>
                    <nav>
                        <button onClick={() => callSearch()}>search</button>
                        <button onClick={() => teste ()}>cart</button>
                        <button>Exit</button>
                        {openSearch && <p>opened search</p>}
                    </nav>
                </StyledHeader>
                
                <section>
                    <StyledProductList>
                        { loadProducts ()}
                    </StyledProductList>
                </section>
            </div>
        </div>

    )
}