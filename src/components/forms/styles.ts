import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #333;
  border-radius: 6px;
  padding: 2em;
  width: 300px;
`;

export const Label = styled.label`
  color: white;
  margin-bottom: 0.5em;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  padding: 0.5em 1em;
  border-radius: 6px;
  background-color: #222;
  margin-bottom: 1em;
  color: white;
`;

export const Select = styled.select`
  background-color: #222;
  color: white;
  padding: 0.5em 1em;
  margin-bottom: 1em;
  border-radius: 6px;
`;
