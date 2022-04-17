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
  example: string;
}

const AddExampleForm: FC<Props> = ({ onSubmit, onCancel }) => {
  const initialValues: FormValues = {
    example: '',
  };

  const validate = (values: FormValues) => {
    const errors: { [field: string]: string } = {};
    if (!values.example) {
      errors.example = 'required';
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
              label="Example"
              placeholder="Example"
              name="example"
              component={TextField}
            />

            <FormButtons>
              <Button type="button" onClick={onCancel}>
                Cancel
              </Button>
              <Button type="submit" disabled={!dirty || !isValid}>
                Add Example
              </Button>
            </FormButtons>
          </StyledForm>
        );
      }}
    </Formik>
  );
};

export default AddExampleForm;
