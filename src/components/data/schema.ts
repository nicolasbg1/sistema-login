'use client';


import * as Yup from 'yup';

export const createUser = Yup.object().shape({
    email: Yup.string().required('Campo obrigatório').email('Formato inválido'),
    password: Yup.string().required("Campo obrigatório").min(8, "senha curta"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), undefined], "A senha deve corresponder")
        .required("Campo obrigatório"),
});

export const loggedUser = Yup.object().shape({
    email: Yup.string().required('Campo obrigatório').email('Formato inválido'),
    password: Yup.string().required("Campo obrigatório")})