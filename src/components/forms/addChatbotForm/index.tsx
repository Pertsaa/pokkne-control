import { FC } from 'react';
import { Formik, Field } from 'formik';

import { NewChatbot } from '../../../types';
import { FormButtons, StyledForm } from '../styles';
import { useChatbots } from '../../../hooks/chatbots/useChatbots';
import Button from '../../button';
import TextField from '../inputs/textField';

interface Props {
  onSubmit: (values: NewChatbot) => void;
  onCancel: () => void;
}

const AddChatbotForm: FC<Props> = ({ onSubmit, onCancel }) => {
  const { chatbots } = useChatbots();

  const initialValues: NewChatbot = {
    title: '',
    name: '',
  };

  const validate = (values: NewChatbot) => {
    const errors: { [field: string]: string } = {};
    if (!values.title) {
      errors.title = 'required';
    }
    if (chatbots && chatbots.some((c) => c.title === values.title)) {
      errors.title = 'must be unique';
    }
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
    >
      {({ isValid, dirty }) => {
        return (
          <StyledForm>
            <Field
              label="Title"
              placeholder="Title"
              name="title"
              component={TextField}
            />
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
                Add Chatbot
              </Button>
            </FormButtons>
          </StyledForm>
        );
      }}
    </Formik>
  );
};

export default AddChatbotForm;
