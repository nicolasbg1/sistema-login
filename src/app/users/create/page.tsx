'use client';


import { createUser } from '@/components/data/schema';
import { InputComponent } from '@/components/layout/form/Input';
import { FormBox, FormContainer, FormSection, FormStyle, SignUpButton, Subtitle, Title } from '@/components/layout/form/Form';
import {useFormik } from 'formik'
import axios from 'axios'
import Link from 'next/link';

export default function newUser() {

    type InputDataProps = {
        email: string,  
        password: string,
        confirmPassword: string
    }



    const handleSubmit = async (data: InputDataProps) => {
     
        try {
          const { confirmPassword: _, ...dataSend } = data;
          console.log('Dados a serem enviados:', dataSend);
          const response = await axios.post('http://localhost:9000/users/auth', dataSend);
          console.log(response)
          formik.resetForm()
        //   const myToken = response.data.token;
        //   localStorage.setItem('token', myToken)
        //   console.log(localStorage.getItem('token'))
       

        } catch (error) {
          console.error('Erro ao enviar a solicitação:', error);
        }
      };


  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: createUser,
    
    onSubmit: handleSubmit,
    


  })

  return (

    <FormBox>
      <FormStyle onSubmit={formik.handleSubmit}>
        <Title>Nova Conta</Title>
        <Subtitle>Crie um novo usuário para ter acesso ao conteúdo</Subtitle>

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

            <InputComponent 
                  name={'confirmPassword'}
                  type={'password'}
                  placeholder={'confirme sua senha'}
                  value={formik.values.confirmPassword}
                  error={formik.errors.confirmPassword}
                  onChange={formik.handleChange}
              
            />
            <SignUpButton type='submit'>Cadastrar</SignUpButton>
        </FormContainer>
      </FormStyle>

    <FormSection>
        <p>Tem uma conta ? <Link href={"/users/auth"}>Logue aqui</Link></p>
    </FormSection>
</FormBox>
   
  )
}