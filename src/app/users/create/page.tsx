'use client';



import { createUser } from '@/components/data/schema';
import {
    FormBox,
    FormContainer,
    FormSection,
    FormStyle,
    ProxPage,
    SignUpButton,
    Subtitle,
    Title,
} from '@/components/layout/form/Form';
import { InputComponent } from '@/components/layout/form/Input';
import axios from 'axios';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';

export type dataProps = {
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
}

export default function NewUser()  {
    const [msg, setMsg] = useState('');
    const [loading, setLoading] = useState(false);
    const {push} = useRouter();

    const handleFormSubmit = async (data:dataProps) => {
        try {
            setLoading(true);
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { confirmPassword: _, ...dataSend } = data;
            const response = await axios.post('http://localhost:9000/users/create', dataSend);
            setMsg(response.statusText);
            push('/users/auth');
        } catch (error) {
            console.error('Erro durante o envio do formulário:', error);
            setMsg('Erro ao enviar o formulário. Por favor, tente novamente.');
            formik.setFieldError('email', 'O e-mail já está cadastrado');
        } finally {
            setLoading(false);
        }
    };

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: createUser,
        onSubmit: handleFormSubmit,
    });

    return (
        <FormBox>
            <FormStyle onSubmit={formik.handleSubmit}>
                <ProxPage>
                    <Link href="/">
                        <FaArrowLeft />
                    </Link>
                </ProxPage>
                <Title>Nova Conta</Title>
                <Subtitle>{msg ? msg : 'Crie um novo usuário para ter acesso ao conteúdo'}</Subtitle>
                <FormContainer>
                    <InputComponent
                        name="name"
                        type="text"
                        placeholder="Digite seu nome"
                        value={formik.values.name}
                        error={formik.errors.name}
                        onChange={formik.handleChange}
                    />

                    <InputComponent
                        name="email"
                        type="email"
                        placeholder="Digite seu e-mail"
                        value={formik.values.email}
                        error={formik.errors.email}
                        onChange={formik.handleChange}
                    />

                    <InputComponent
                        name="password"
                        type="password"
                        placeholder="Digite sua senha"
                        value={formik.values.password}
                        error={formik.errors.password}
                        onChange={formik.handleChange}
                    />

                    <InputComponent
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirme sua senha"
                        value={formik.values.confirmPassword}
                        error={formik.errors.confirmPassword}
                        onChange={formik.handleChange}
                    />

                    <SignUpButton type="submit" disabled={loading}>
                        {loading ? 'Cadastrando...' : 'Cadastrar'}
                    </SignUpButton>
                </FormContainer>
            </FormStyle>

            <FormSection>
                <p>
          Tem uma conta? <Link href="/users/auth">Logue aqui</Link>
                </p>
            </FormSection>
        </FormBox>
    );
}

