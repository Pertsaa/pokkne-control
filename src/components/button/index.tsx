import { FC } from 'react';
import { Link } from 'react-router-dom';
import { StyledButton } from './styles';
import { ButtonProps } from '../../types';

export const Button: FC<ButtonProps> = (props) => {
  if (props.href) {
    return (
      <StyledButton as="a" href={props.href}>
        {props.children}
      </StyledButton>
    );
  }

  if (props.to) {
    return (
      <StyledButton as={Link} to={props.to}>
        {props.children}
      </StyledButton>
    );
  }

  return <StyledButton {...props}>{props.children}</StyledButton>;
};
