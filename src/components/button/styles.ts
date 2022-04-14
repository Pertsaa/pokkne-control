import styled from 'styled-components';
import { ButtonProps } from '../../types';

export const StyledButton = styled.button<ButtonProps>`
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

  &:disabled {
    opacity: 0.6;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
