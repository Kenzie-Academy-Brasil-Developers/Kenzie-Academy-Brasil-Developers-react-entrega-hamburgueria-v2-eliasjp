import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { Link, useNavigate } from "react-router-dom";

import { iRegisterForm } from "./interface";

import { SiteInformation } from "../../component/SiteInformation/SiteInformation";
import { StyledButton } from "../../styles/button";
import { StyledInput } from "../../styles/input";
import { RegisterContainer, RegisterContentContainer, RegisterForm, RegisterMain } from "./styled";

import { registerFormSchema } from "./schema";
import { api } from "../../services/api";

import { toast } from "react-toastify"

export function RegisterPage (){
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors }, reset } = useForm<iRegisterForm>({
        resolver: yupResolver(registerFormSchema)
    })

    const submitLogin: SubmitHandler<iRegisterForm> = async (data) => {
        const { confirmPassword, ...registerData } = data
        try {
            await api.post("/users", registerData)
            toast.success("Conta criada com sucesso. Você será redirecionado em breve.", {
                position: "bottom-right",
                autoClose: 3000
            })
            setTimeout(() => navigate("/"), 3000)
        }
        catch(err: any) {
            toast.error(err.response.data, {
                position: "bottom-right",
                autoClose: 10000   
            })
            reset()
        }
    }
    
    return (
        <RegisterContainer>
            <RegisterContentContainer>
                <SiteInformation />

                <RegisterMain>
                    <div>
                        <h4>Cadastro</h4>
                        <Link to="/">Retornar para o login</Link>
                    </div>
                    <RegisterForm noValidate onSubmit={handleSubmit(submitLogin)}>
                        <div>
                            <StyledInput placeholder="Digite seu nome." {...register("name")}/>
                            <p>Nome</p>
                            { errors.name && <span>{errors.name.message}</span>}
                        </div>

                        <div>
                            <StyledInput placeholder="Digite seu email." {...register("email")}/>
                            <p>Email</p>
                            { errors.email && <span>{errors.email.message}</span> }
                        </div>
                        <div>
                            <StyledInput placeholder="Digite sua senha." type="password" {...register("password")}/>
                            <p>Senha</p>
                            { errors.password && <span>{errors.password.message}</span> }
                        </div>
                        <div>
                            <StyledInput placeholder="Digite novamente sua senha" type="password" {...register("confirmPassword")}/>
                            <p>Confirmar senha</p>
                            { errors.confirmPassword && <span>{errors.confirmPassword.message}</span> }
                        </div>

                        <StyledButton radius="1" color="grey" large>Cadastrar</StyledButton>
                    </RegisterForm>
                </RegisterMain>

            </RegisterContentContainer>
        </RegisterContainer>
    )
}