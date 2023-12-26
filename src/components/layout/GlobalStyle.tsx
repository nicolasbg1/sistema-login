"use client"

import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle` 
  * {    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: #e9e9f4;
    display: flex;
    justify-content: center;
    height: 100vh;
    align-items: center;
    width: 100vw;
    overflow-y: hidden;
  }
`;
export default GlobalStyle;