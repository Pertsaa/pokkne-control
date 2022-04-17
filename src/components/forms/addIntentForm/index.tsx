import { FC } from 'react';
import { Formik, Field } from 'formik';

import { NewIntent } from '../../../types';
import { FormButtons, StyledForm } from '../styles';
import { useIntents } from '../../../hooks/intents/useIntents';
import Button from '../../button';
import TextField from '../inputs/textField';

interface Props {
  onSubmit: (values: NewIntent) => void;
  onCancel: () => void;
}

const AddIntentForm: FC<Props> = ({ onSubmit, onCancel }) => {
  const { intents } = useIntents();

  const initialValues: NewIntent = {
    name: '',
  };

  const validate = (values: NewIntent) => {
    const errors: { [field: string]: string } = {};
    if (!values.name) {
      errors.name = 'required';
    }
    if (intents && intents.some((i) => i.name === values.name)) {
      errors.name = 'must be unique';
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
              label="Name"
              placeholder="Name"
              name="name"
              component={TextField}
            />

            <FormButtons>
              <Button type="button" onClick={onCancel}>
                Cancel
              </Button>
              <Button type="submit" disabled={!dirty || !isValid}>
                Add Intent
              </Button>
            </FormButtons>
          </StyledForm>
        );
      }}
    </Formik>
  );
};

export default AddIntentForm;
