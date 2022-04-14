import { FieldProps } from 'formik';
import { FC } from 'react';
import { Label, Select, StyledField } from '../../styles';

interface TextProps extends FieldProps {
  label: string;
  placeholder: string;
  options: string[];
}

export const SelectField: FC<TextProps> = ({
  field,
  label,
  options,
}: TextProps) => (
  <StyledField>
    <Label htmlFor={field.name}>{label}</Label>
    <Select {...field}>
      {options.map((o) => (
        <option key={o}>{o}</option>
      ))}
    </Select>
  </StyledField>
);

export default SelectField;
