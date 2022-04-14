import { FC } from 'react';
import { ErrorMessage, FieldProps } from 'formik';
import { Label, StyledError, StyledField, TextInput } from '../../styles';

interface TextProps extends FieldProps {
  label: string;
  placeholder: string;
}

export const TextField: FC<TextProps> = ({
  field,
  label,
  placeholder,
}: TextProps) => (
  <StyledField>
    <Label htmlFor={field.name}>
      {label} <ErrorMessage component={StyledError} name={field.name} />
    </Label>
    <TextInput placeholder={placeholder} {...field} />
  </StyledField>
);

export default TextField;
