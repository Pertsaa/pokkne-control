import { FC } from 'react';
import { Field, Formik } from 'formik';
import { Button } from '../../button';
import { StyledForm, FormButtons } from '../styles';
import SelectField from '../inputs/selectField';

interface FormValues {
  name: string;
}

interface Props {
  options: string[];
  onSubmit: (values: FormValues) => void;
  onCancel: () => void;
}

const AssignIntentForm: FC<Props> = ({ options, onSubmit, onCancel }) => {
  const initialValues: FormValues = {
    name: options[0] || '',
  };

  const validate = (values: FormValues) => {
    const errors: { [field: string]: string } = {};
    if (!values.name) {
      errors.name = 'required';
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
              label="Intent"
              name="name"
              options={options}
              component={SelectField}
            />

            <FormButtons>
              <Button type="button" onClick={onCancel}>
                Cancel
              </Button>
              <Button type="submit" disabled={!isValid}>
                Assign Intent
              </Button>
            </FormButtons>
          </StyledForm>
        );
      }}
    </Formik>
  );
};

export default AssignIntentForm;
