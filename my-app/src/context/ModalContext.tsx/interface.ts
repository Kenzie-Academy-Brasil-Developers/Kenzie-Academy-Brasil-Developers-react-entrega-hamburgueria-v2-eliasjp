import { ReactNode } from "react"

export interface iModalContext {
    modalOpen: boolean;
    setModalOpen: (active: boolean) => void;
    content: any;
    setContent: any;
}

export interface iModalProvider {
    children: ReactNode;
}