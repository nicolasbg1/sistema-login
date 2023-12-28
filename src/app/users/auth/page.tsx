'use client';


import { UserExist } from '@/components/data/schema';
import { InputComponent } from '@/components/layout/form/Input';
import { FormBox, FormContainer, FormSection, FormStyle, ProxPage, SignUpButton, Subtitle, Title } from '@/components/layout/form/Form';
import {useFormik } from 'formik';
import { FaArrowLeft } from 'react-icons/fa';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';



export default function newUser() {
    const [msg, setMsg] = useState(' ');

    type InputDataProps = {
        email: string,  
        password: string,
    }



    const {push} = useRouter();


    const handleSubmit = async (data: InputDataProps) => {


        try {
            const response = await axios.post('http://localhost:9000/users/auth', data);
            console.log(response);
            const myToken = response.data.token;
            axios.defaults.headers.Authorization = `Bearer ${myToken}`;
            localStorage.setItem('token', myToken);
            console.log(response.statusText);
            setMsg('Bem vindo');
            push('/users/getprofile');

        }
      
        
        catch(error) {
            console.error('Erro ao enviar a solicitação:', error);
            formik.errors.email = 'Email ou senha inválidos';
            formik.errors.password = 'Email ou senha inválidos';

            // tentiva de pegar as mensagens de erro direto do backend

            // const axiosError = axios.AxiosError.prototype.message;
            // console.log(axiosError);
            // formik.errors.email = 'Senha ou email inválidos';
            // formik.errors.password = 'Senha ou email inválidos';
            
            
        }
    };
     

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: UserExist,
    
        onSubmit: handleSubmit,
    


    });

    return (

        <FormBox>
      
            <FormStyle onSubmit={formik.handleSubmit}>
                <ProxPage>
                    <Link href={'/users/create'}>
                        <FaArrowLeft />
                    </Link>
                </ProxPage>
                <Title>Login</Title>
                <Subtitle>{msg ? msg : 'Logue na sua conta para obter acesso ao conteúdo'}</Subtitle>

                <FormContainer>

                    <InputComponent 
                        name={'email'}
                        type={'email'}
                        placeholder={'digite seu email'}
                        value={formik.values.email}
                        error={formik.errors.email}
                        onChange={formik.handleChange}
                    />

                    <InputComponent 
                        name={'password'}
                        type={'password'}
                        placeholder={'Digite sua senha'}
                        value={formik.values.password}
                        error={formik.errors.password}
                        onChange={formik.handleChange}
                    />
                    <SignUpButton type='submit'>
                        Entrar
                    </SignUpButton>
                </FormContainer>
            </FormStyle>

            <FormSection>
                <p> Esqueceu a senha ? <Link href={'/users/newpassword'}>clique aqui</Link></p>
            </FormSection>
        </FormBox>
   
    );
}