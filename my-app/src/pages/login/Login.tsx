import { Link } from "react-router-dom"
import { StyledButton } from "../../styles/button"

export function LoginPage (){

    return (
        <>
            <p>Login</p>
            <Link to="/home">dashboard</Link>
            <Link to="/register">register</Link>
            <StyledButton radius="1" theme="green">oi</StyledButton>
        </>
    )
}