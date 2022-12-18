import { Routes, Route } from "react-router-dom"

import { HomePage } from "../pages/home/Home"
import { LoginPage } from "../pages/login/Login"
import { RegisterPage } from "../pages/register/Register"

export function PagesRoutes (){
    return (
        <Routes>
            <Route path="/" element={<LoginPage />}/>
            <Route path="/home" element={<HomePage />}/>
            <Route path="/register" element={<RegisterPage />}/>
        </Routes>
    )
}