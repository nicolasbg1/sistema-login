'use client';


import { UserExist } from '@/components/data/schema';
import { FormBox, FormContainer, FormStyle, IconSend, ProxPage, SendEmail, SignUpButton, Subtitle, Title } from '@/components/layout/form/Form';
import { InputComponent } from '@/components/layout/form/Input';
import { useFormik } from 'formik';
import { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { IoSend } from 'react-icons/io5';
// import axios from 'axios'
import Link from 'next/link';

export default function newUser() {

    const [clicked, setClicked] = useState(false);

    type InputDataProps = {
        email: string,  
    }



    const handleSubmit = async (data: InputDataProps) => {
        console.log(data);
    };
     

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: UserExist,
    
        onSubmit: handleSubmit,
    


    });

    return (

        <FormBox>
      
            <FormStyle onSubmit={formik.handleSubmit}>
                <ProxPage>
                    <Link href={'/users/auth'}>
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
                    <SignUpButton type='submit' onClick={() => {setClicked(!clicked);}}>enviar email</SignUpButton>
                </FormContainer>
                {clicked && !formik.errors.email && (
                    <SendEmail>email enviado
                        <IconSend>
                            <IoSend/>
                        </IconSend>
                    </SendEmail>
                )}
            </FormStyle>

        </FormBox>
   
    );
}