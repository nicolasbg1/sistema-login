'use client';


import { createUser } from '@/components/data/schema';
import { FormBox, FormContainer, FormSection, FormStyle, ProxPage, SignUpButton, Subtitle, Title } from '@/components/layout/form/Form';
import { InputComponent } from '@/components/layout/form/Input';
import axios from 'axios';
import { useFormik } from 'formik';
import { FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
export default function newUser() {

    const [msg, setMsg] = useState('');

    type InputDataProps = {
        name: string,
        email: string,  
        password: string,
        confirmPassword: string
    }

    const {push} = useRouter();



    const handleSubmit = async (data: InputDataProps) => {
     
        try {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { confirmPassword: _, ...dataSend } = data;
            const response = await axios.post('http://localhost:9000/users/create', dataSend);
            setMsg(response.statusText);
            push('/users/auth');
       

        } catch (error) {
            console.log(`Erro da vez : ${error}`);
            formik.errors.email = 'O Email já está cadastrado';
        }
    };


    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: createUser,
    
        onSubmit: handleSubmit,

    });

    return (

        <FormBox>
            <FormStyle onSubmit={formik.handleSubmit}>
                <ProxPage>
                    <Link href={'/'}>
                        <FaArrowLeft />
                    </Link>
                </ProxPage>
                <Title>Nova Conta</Title>
                <Subtitle>{msg ? msg : 'Crie um novo usuário para ter acesso ao conteúdo'}</Subtitle>
                <FormContainer>

                    <InputComponent 
                        name={'name'}
                        type={'name'}
                        placeholder={'Digite seu name'}
                        value={formik.values.name}
                        error={formik.errors.name}
                        onChange={formik.handleChange}
                    />

                    <InputComponent 
                        name={'email'}
                        type={'email'}
                        placeholder={'Digite seu email'}
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

                    <InputComponent 
                        name={'confirmPassword'}
                        type={'password'}
                        placeholder={'Confirme sua senha'}
                        value={formik.values.confirmPassword}
                        error={formik.errors.confirmPassword}
                        onChange={formik.handleChange}
              
                    />
                    <SignUpButton type='submit'>Cadastrar</SignUpButton>
                </FormContainer>
            </FormStyle>

            <FormSection>
                <p>Tem uma conta ? <Link href={'/users/auth'}>Logue aqui</Link></p>
            </FormSection>
        </FormBox>
   
    );
}