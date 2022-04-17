import { FC } from 'react';
import { Formik, Field } from 'formik';

import { StyledForm } from '../styles';
import Button from '../../button';
import TextField from '../inputs/textField';

interface FormValues {
  username: string;
  password: string;
}

interface Props {
  onSubmit: (values: FormValues) => void;
}

const LoginForm: FC<Props> = ({ onSubmit }) => {
  const initialValues: FormValues = {
    username: '',
    password: '',
  };

  const validate = (values: FormValues) => {
    const errors: { [field: string]: string } = {};
    if (!values.username) {
      errors.username = 'required';
    }
    if (!values.password) {
      errors.password = 'required';
    }
    return errors;
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validate={validate}
      validateOnMount
    >
      {({ isValid, dirty }) => {
        return (
          <StyledForm>
            <Field
              label="Username"
              placeholder="Username"
              name="username"
              component={TextField}
            />

            <Field
              label="Password"
              placeholder="Password"
              name="password"
              password
              component={TextField}
            />

            <Button type="submit" disabled={!dirty || !isValid}>
              Sign in
            </Button>
          </StyledForm>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
