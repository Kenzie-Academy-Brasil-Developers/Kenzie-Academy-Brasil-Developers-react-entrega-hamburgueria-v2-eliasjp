import { Link } from "react-router-dom"

export function LoginPage (){

    return (
        <>
            <p>Login</p>
            <Link to="/home">dashboard</Link>
            <Link to="/register">register</Link>
        </>
    )
}