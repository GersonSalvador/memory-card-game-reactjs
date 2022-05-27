import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    transition: all 0.8s ease-in;
  }

  :root{
    --main-1: #5C257F;
    --main-2: #D697FF;
    --main-3: #B84BFF;
    --main-4: #6B4C7F;
    --main-5: #933CCC;
  }

  html,body{
    height: 100vh;
  }

  body{
    background-color: var(--main-1);
    font-family: sans-serif;
  }
`;