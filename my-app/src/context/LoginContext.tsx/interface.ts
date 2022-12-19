import { ReactNode } from "react";

export interface iLoginContext {
    loginRequest: (data: {}) => void;
    checkAccount: (pathError?: string, pathSuccess?: string) => void;
    logout: () => void;
}

export interface iLoginProvider {
    children: ReactNode
}