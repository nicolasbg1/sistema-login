import styled from 'styled-components';

export const DataContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 600px;
  margin: 2rem auto;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Result = styled.div`
  margin-top: 1rem;
  width: 100%;
  max-width: 440px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
`;

export const Data = styled.ul`
  border: 1px solid #ccc;
  background-color: #f0f8ff; /* Alice Blue */
  height: 100%;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  list-style: none;
  border-bottom: 1px solid #ccc;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:last-child {
    border-bottom: none;
  }
`;
