'use client';


import { UserExist } from '@/components/data/schema';
import { InputComponent } from '@/components/layout/form/Input';
import { FormBox, FormContainer, FormSection, FormStyle, ProxPage, SignUpButton, Subtitle, Title } from '@/components/layout/form/Form';
import {useFormik } from 'formik';
import { FaArrowLeft } from 'react-icons/fa';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


export default function newUser() {

    type InputDataProps = {
        email: string,  
        password: string,
    }



    const {push} = useRouter();

    const SubmitButton = () => {
        if(!formik.errors){
            push('/users/auth');
        }
        else{
            alert('verifique suas informações');
        }
    };

    const handleSubmit = async (data: InputDataProps) => {


        try {
            const response = await axios.post('http://localhost:9000/users/auth', data);
            console.log(response);
            const myToken = response.data.token;
            axios.defaults.headers.Authorization = `Bearer ${myToken}`;
            localStorage.setItem('token', myToken);

            console.log(localStorage.getItem('token'));

        }
      
        
        catch(error) {
            console.error('Erro ao enviar a solicitação:', error);
            alert('Erro');
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
                <Subtitle>Logue na sua conta para obter acesso ao conteúdo</Subtitle>

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
                    <SignUpButton type='submit' onClick={SubmitButton}>
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