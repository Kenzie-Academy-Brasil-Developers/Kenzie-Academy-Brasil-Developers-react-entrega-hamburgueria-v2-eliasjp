import { Link } from "react-router-dom"
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useState, useContext, useEffect } from "react"
import { loginFormSchema } from "./schema"

import { StyledLoginMain, StyledLoginForm, ContainerLogin, LoginContentContainer } from "./styled"
import { StyledButton } from "../../styles/button"
import { StyledInput } from "../../styles/input"

import { SiteInformation } from "../../component/SiteInformation/SiteInformation"
import { LoginContext } from "../../context/LoginContext.tsx/LoginContext"
import { iLoginFormData } from "./interface"

export function LoginPage (){
    const { loginRequest, checkAccount } = useContext(LoginContext)
    const { register, handleSubmit, formState: { errors } } = useForm<iLoginFormData>({
        resolver: yupResolver(loginFormSchema)
    })

    const submitLogin: SubmitHandler<iLoginFormData> = (data) => {
        loginRequest(data)
    }
    
    useEffect(() => {
        checkAccount ()
    }, [])

    return (
        <ContainerLogin>
            <LoginContentContainer>
                <SiteInformation />

                <StyledLoginMain>
                    <h4>Login</h4>
                    <StyledLoginForm noValidate onSubmit={handleSubmit(submitLogin)}>
                        <div className="inputDiv">
                            <StyledInput placeholder="Digite seu email" type="email" {...register("email")}/> 
                            <p>Email</p>
                            {errors.email && <span>{errors.email.message}</span>}
                        </div>

                        <div className="inputDiv">
                            <StyledInput placeholder="Digite sua senha" type="password" {...register("password")}/> 
                            <p>Senha</p>
                            {errors.password && <span>{errors.password.message}</span>}
                        </div>
                        <StyledButton large radius="1" color="green" type="submit">Logar</StyledButton>
                    </StyledLoginForm>
                    <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
                    <Link to="/register">Cadastrar</Link>
                </StyledLoginMain>
            </LoginContentContainer>
        </ContainerLogin>
    )
}