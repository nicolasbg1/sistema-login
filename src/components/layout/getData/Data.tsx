import styled from 'styled-components';

export const DataContainer = styled.section `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 600px;
    height: auto;
`;

export const Result = styled.div `
    margin-top: 1rem;
    width: 440px;
    border: 1px solid;
    height: 90px;
    background-color: #ccc;


`;

export const Data = styled.ul ` 
    border: 1px solid;
    background-color: aliceblue;
    height: 100%;

`;

export const Item = styled.li `
    list-style: none;
    border-bottom: 1px solid;
`;