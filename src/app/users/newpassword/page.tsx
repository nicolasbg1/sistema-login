'use client';


import { loggedUser } from '@/components/data/schema';
import { InputComponent } from '@/components/layout/form/Input';
import { FormBox, FormContainer, FormSection, FormStyle, ProxPage, SignUpButton, Subtitle, Title, SendEmail } from '@/components/layout/form/Form';
import {useFormik } from 'formik'
import { FaArrowLeft } from "react-icons/fa";
import { useState } from 'react';
// import axios from 'axios'
import Link from 'next/link';

export default function newUser() {

  const [clicked, setClicked] = useState(false)

    type InputDataProps = {
        email: string,  
    }



    const handleSubmit = async (data: InputDataProps) => {
      console.log(data)
    }
     

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: loggedUser,
    
    onSubmit: handleSubmit,
    


  })

  return (

    <FormBox>
      
      <FormStyle onSubmit={formik.handleSubmit}>
      <ProxPage>
      <Link href={"/users/auth"}>
       <FaArrowLeft />
      </Link>
      </ProxPage>
        <Title>New password</Title>
        <Subtitle>Verifique sua caixa de email</Subtitle>

        <FormContainer>

            <InputComponent 
              name={'email'}
              type={'email'}
              placeholder={'digite seu email'}
              value={formik.values.email}
              error={formik.errors.email}
              onChange={formik.handleChange}
            />
            <SignUpButton type='submit' onClick={() => {setClicked(!clicked)}}>enviar email</SignUpButton>
        </FormContainer>
        {clicked && !formik.errors.email && (
          <SendEmail>email enviado</SendEmail>
        )}
      </FormStyle>

    <FormSection>
        <p> Esqueceu a senha ? <Link href={"/users/newpassword"}>clique aqui</Link></p>
    </FormSection>
</FormBox>
   
  )
}