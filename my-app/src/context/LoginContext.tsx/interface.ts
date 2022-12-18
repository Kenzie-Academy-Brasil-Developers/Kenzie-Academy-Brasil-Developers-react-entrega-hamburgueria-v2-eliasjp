import { ReactNode } from "react";

export interface iLoginContext {
    loginRequest: (data: {}) => void;
    checkAccount: (path?: string) => void;
}

export interface iLoginProvider {
    children: ReactNode
}