import { ButtonHTMLAttributes, FC } from 'react';
import { Link, To } from 'react-router-dom';

import { StyledButton } from './styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  to?: To;
}

const Button: FC<ButtonProps> = (props) => {
  // Link styled as button
  if (props.href) {
    return (
      <StyledButton as="a" href={props.href}>
        {props.children}
      </StyledButton>
    );
  }

  // Router link styled as button
  if (props.to) {
    return (
      <StyledButton as={Link} to={props.to}>
        {props.children}
      </StyledButton>
    );
  }

  // Regular button
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default Button;
