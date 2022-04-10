import { ButtonHTMLAttributes, FC } from 'react';
import { Link, To } from 'react-router-dom';
import styled from 'styled-components';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  to?: To;
}

export const StyledButton = styled.button<Props>`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 6px;
  border: none;
  color: white;
  padding: 0.5em 1em;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background: #555;
  }

  &:focus {
    outline: none;
  }
`;

export const Button: FC<Props> = (props) => {
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
