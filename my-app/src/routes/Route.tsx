import { Routes, Route } from "react-router-dom"

import { HomePage } from "../pages/home/Home"
import { LoginPage } from "../pages/login/Login"

export function PagesRoutes (){
    return (
        <Routes>
            <Route path="/" element={<LoginPage />}/>
            <Route path="/home" element={<HomePage />}/>
        </Routes>
    )
}