import { FC } from 'react';
import { Formik, Field } from 'formik';

import { FormButtons, StyledForm } from '../styles';
import Button from '../../button';
import TextField from '../inputs/textField';

interface Props {
  onSubmit: (values: FormValues) => void;
  onCancel: () => void;
}

interface FormValues {
  response: string;
}

const AddResponseForm: FC<Props> = ({ onSubmit, onCancel }) => {
  const initialValues: FormValues = {
    response: '',
  };

  const validate = (values: FormValues) => {
    const errors: { [field: string]: string } = {};
    if (!values.response) {
      errors.response = 'required';
    }
    return errors;
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validate={validate}
    >
      {({ isValid, dirty }) => {
        return (
          <StyledForm>
            <Field
              label="Response"
              placeholder="Response"
              name="response"
              component={TextField}
            />

            <FormButtons>
              <Button type="button" onClick={onCancel}>
                Cancel
              </Button>
              <Button type="submit" disabled={!dirty || !isValid}>
                Add Response
              </Button>
            </FormButtons>
          </StyledForm>
        );
      }}
    </Formik>
  );
};

export default AddResponseForm;
