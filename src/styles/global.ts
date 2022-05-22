import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    transition: all 0.8s ease-in;
  }

  :root{
    --Purple-1: #5C257F;
    --Purple-2: #D697FF;
    --Purple-3: #B84BFF;
    --Purple-4: #6B4C7F;
    --Purple-5: #933CCC;
  }

  html,body{
    height: 100vh;
  }

  body{
    background-color: var(--Purple-1);
    font-family: sans-serif;
  }
`