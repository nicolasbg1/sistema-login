import styled from 'styled-components';

export const Button = styled.button `
border: 2px solid #24b4fb;
 background-color: #24b4fb;
 border-radius: 0.9em;
 padding: 0.8em 1.2em 0.8em 1em;
 transition: all ease-in-out 0.2s;
 font-size: 16px;

 &:hover{
    background-color: #0071e2;
 }

 span{
 display: flex;
 justify-content: center;
 align-items: center;
 color: #fff;
 font-weight: 600;
 }

`;