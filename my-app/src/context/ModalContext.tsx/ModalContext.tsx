import { useState, createContext } from "react";
import { iModalContext, iModalProvider } from "./interface";

export const ModalContext = createContext({} as iModalContext)

export function ModalProvider ({ children }: iModalProvider){
    const [ modalOpen, setModalOpen ] = useState(false)
    const [ content, setContent ] = useState(<></>)

    return (
        <ModalContext.Provider value={{ modalOpen, setModalOpen, content, setContent }}>
            { children }
        </ModalContext.Provider>
    )
}