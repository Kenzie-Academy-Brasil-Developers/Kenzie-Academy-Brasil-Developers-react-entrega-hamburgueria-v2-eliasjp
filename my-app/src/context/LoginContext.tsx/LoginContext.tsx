import { createContext } from "react"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { api } from "../../services/api";
import { iLoginContext, iLoginProvider } from "./interface";

export const LoginContext = createContext({} as iLoginContext)

export function LoginProvider ({ children }: iLoginProvider){
    const navigate = useNavigate()

    async function loginRequest (data: {}){
        try {
            const loginPost = await api.post("/login", data)
            .then(resp => resp.data)
            window.localStorage.setItem("@user_token", JSON.stringify(loginPost.accessToken))
            api.defaults.headers.common["Authorization"] = `Bearer ${loginPost.accessToken}`
            navigate("/home")
        }
        catch(err: any) {
            toast.error(err.response.data, {
                position: "bottom-right"    
            })
        }
    }

    async function checkAccount (path?: string){
        const token = window.localStorage.getItem("@user_token")
        if (token){
            try { 
                await api.get("/products", { headers: { Authorization: `Bearer ${JSON.parse(token)}` } })
                api.defaults.headers.common["Authorization"] = `Bearer ${token}`

            }
            catch(error: any) {
                window.localStorage.clear()
                path && navigate(`/${path}`)
            }
        }
    }

    return (
        <LoginContext.Provider value={{ loginRequest, checkAccount }}>
            { children }
        </LoginContext.Provider>
    )
}