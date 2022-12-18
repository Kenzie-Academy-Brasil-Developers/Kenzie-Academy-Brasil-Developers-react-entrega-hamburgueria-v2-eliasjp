import { ReactNode } from "react";

export interface iProductsObject {
    id: number;
    name: string;
    category: string;
    count: number;
    price: number;
    img: string;
}

export interface iProductsContext {
    products: iProductsObject[];
    getProducts: () => void;
    cartProducts: any;
    setCartProducts: (cartProducts: any) => void;
}

export interface iProductsProvider {
    children: ReactNode;
}