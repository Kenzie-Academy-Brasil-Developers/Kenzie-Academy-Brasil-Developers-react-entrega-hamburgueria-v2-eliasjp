import { ReactNode } from "react";

export interface iLoginContext {
    loginRequest: (data: {}) => void;
    checkAccount: (pathError?: string, pathSuccess?: string) => void;
}

export interface iLoginProvider {
    children: ReactNode
}