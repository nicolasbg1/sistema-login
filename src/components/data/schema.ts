'use client';


import * as Yup from 'yup';

export const createUser = Yup.object().shape({
    name: Yup.string().required('Campo obrigatório').min(4, 'No mínimo 4 caracteres '),
    email: Yup.string().required('Campo obrigatório').email('Formato inválido'),
    password: Yup.string().required('Campo obrigatório').min(8, 'Senha curta').max(26, 'limite atingido'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), undefined], 'A senha deve corresponder')
        .required('Campo obrigatório'),
});

export const UserExist = Yup.object().shape({
    email: Yup.string().required('Campo obrigatório').email('Formato inválido'),
    password: Yup.string().required('Campo obrigatório')});

    