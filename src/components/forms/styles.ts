import styled from 'styled-components';
import { Form } from 'formik';

export const StyledForm = styled(Form)`
  background-color: #333;
  padding: 2em;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
`;

export const StyledField = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: white;
  margin-bottom: 0.5em;
`;

export const TextInput = styled.input`
  margin-bottom: 1em;
  background-color: #222;
  border: none;
  outline: none;
  padding: 0.5em 1em;
  border-radius: 6px;
  color: white;
`;

export const Select = styled.select`
  background-color: #222;
  border-radius: 6px;
  padding: 0.5em 1em;
  margin-bottom: 1em;
  color: white;
  outline: none;
`;

export const StyledError = styled.span`
  color: red;
  margin-left: 1em;
`;

export const FormButtons = styled.div`
  & > button:not(:first-child) {
    margin-left: 1em;
  }
`;
