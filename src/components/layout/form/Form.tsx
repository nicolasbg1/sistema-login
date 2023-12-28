'use client';

import styled from 'styled-components';
import 'animate.css';



export const FormBox = styled.div `
  max-width: 570px;
  width: 440px;
  background: #f1f7fe;
  height: auto;
  overflow: hidden;
  border-radius: 16px;
  color: #010101;


`;

export const FormStyle = styled.form `
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 32px 24px 24px;
  gap: 19px;
  text-align: center;
  
`;


export const Title = styled.span `
    font-weight: bold;
    font-size: 1.6rem;
`;

export const Subtitle = styled.span `
    font-size: 1rem;
    color: #666;
`;



export const FormContainer = styled.div `
    overflow: hidden;
    border-radius: 8px;
    background-color: #ffffff;
    margin: 1rem 0 .8rem;
    position: relative;
    width: 100%;
    
`;

export const Input = styled.input `
    background: none;
    border: 0;
    outline: 0;
   
    height: 40px;
    width: 100%;
    border-bottom: 4px solid #f1f7fe ;
    font-size: .9rem;
    padding: 6px 15px
`;
export const InputErros = styled.div `
    width: 100%;
    font-size: .8rem;
    position: relative;
    color:red;
    height: 0;
    bottom:30px;
    z-index: 100;
    left: 95px;
`;

export const FormSection = styled.div `
    padding: 16px;
    font-size: .85rem;
    text-align: center;
    background-color: #c9d6eb;
    box-shadow: rgb(0 0 0 / 8%) 0 -1px;

    a {
    font-weight: bold;
    color: #0066ff;
    transition: color .3s ease;

     &:hover {
    color: #005ce6;
    text-decoration: underline;
     }
    }

`;
export const SignUpButton = styled.button `
    background-color: #0066ff;
    color: #fff;
    border: 0;
    width: 100%;
    height: 45px;
    padding: 10px 16px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color .3s ease;

    &:hover {
        background-color: #005ce6;
    }
`;

export const ProxPage = styled.button `
    background-color: transparent ;
    border: none ;
    font-size: 1.1rem;
    display: flex;
    width: 100%;

`;

export const SendEmail = styled.span `
    /* background-color: #188e06; */
    padding: 0.3rem;
    border-radius: 5px 5px;
    display: flex;
    color: #000000;
    justify-content: center;
    height: 30px;
    font-weight: 600;
    align-items: center;
    gap: 10px;
    animation: slideInLeft;
    animation-duration: 1s;

`;

export const IconSend = styled.span `
    display: flex;
`;