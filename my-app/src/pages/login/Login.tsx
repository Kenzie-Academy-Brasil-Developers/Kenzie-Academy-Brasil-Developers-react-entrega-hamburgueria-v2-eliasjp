import { Link } from "react-router-dom"
import { StyledButton } from "../../styles/button"

import { api } from "../../services/api"

export function LoginPage (){

    return (
        <>
            <p>Login</p>
            <Link to="/home">dashboard</Link>
            <Link to="/register">register</Link>
            <StyledButton large radius="2" color="green">oi</StyledButton>
        </>
    )
}