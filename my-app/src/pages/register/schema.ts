import * as yup from "yup"

export const registerFormSchema = yup.object().shape({
    name: yup.string().required("Esse campo é obrigatório."),
    email: yup.string().required("Esse campo é obrigatório.").email("Formato do email é inválido."),
    password: yup.string().required("Esse campo é obrigatório."),
    confirmPassword: yup.string().required("Esse campo é obrigatório.").oneOf([yup.ref("password")], "As senhas precisam ser idênticas.")
})