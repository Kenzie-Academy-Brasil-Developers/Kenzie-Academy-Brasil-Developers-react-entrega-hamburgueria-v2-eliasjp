import { useRef, useEffect } from "react";
import { iProductsObject } from "../../context/ProductsContext/interface";
import { iSearchBar } from "./interface";
import { StyledSearchContainer } from "./styled";

export function SearchBar (props: iSearchBar){
    const inputRef = useRef<HTMLInputElement>(null)

    function teste (event: any){
        event.preventDefault()
        if (inputRef.current !== null){
            const searchValue = inputRef.current.value
            const searchProduct = props.products.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase())) as any
            props.setFilterProducts(searchProduct)
            props.setOpenSearch(!props.openSearch)
        }
    }

    return (
        <span>
            <form onSubmit={(event) => teste(event)}>
                <StyledSearchContainer>
                    <span>
                        <input placeholder="Digite o nome do produto" ref={inputRef}/>
                        <button><span className="material-symbols-outlined">search</span></button>
                    </span>
                </StyledSearchContainer>
            </form>
        </span>
    )
}