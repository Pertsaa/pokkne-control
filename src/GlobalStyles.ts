import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    font-family: sans-serif;
  }

  body {
    background-color: ${({ theme }) => theme.colors.body};
    font-size: 0.8rem;
  }

  h1 {
      font-size: 2rem;
  }

  h2 {
    font-size: 1.6rem;
  }

  h3 {
    font-size: 1.2rem;
  }

  ul, ol {
    list-style: none;
  }
`;
