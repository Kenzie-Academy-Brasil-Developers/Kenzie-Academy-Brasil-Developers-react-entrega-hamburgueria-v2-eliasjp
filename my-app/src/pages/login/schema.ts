import * as yup from "yup"

export const loginFormSchema = yup.object().shape({
    email: yup.string().email("Esse email não é valido").required("Esse campo é obrigatório."),
    password: yup.string().required("Digite sua senha.")    
})