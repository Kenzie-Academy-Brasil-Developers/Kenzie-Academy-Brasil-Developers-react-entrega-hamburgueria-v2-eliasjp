import { useContext } from "react"
import { ModalContext } from "../../context/ModalContext.tsx/ModalContext"
import { ModalContainer } from "./styled"

export function ModalPopUp (){
    const { content } = useContext(ModalContext)

    return (
        <ModalContainer>
            <div>
                { content }
            </div>
        </ModalContainer>
    )
}