import { createGlobalStyle } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';

export const GlobalStyle = createGlobalStyle`
  :root {
    box-sizing: border-box;
    font-size: 62.5%;
    margin: 0;
  }

  body{
    margin: 0;
    padding: 0;
  }

  *,
  ::before,
  ::after {
    box-sizing: inherit;
  }

  h1, h2, h3{
    font-size: 1.6rem;
    font-family: 'Vollkorn', serif;
  }

  a{
    color:white;
  }

  @media (min-width: 800px) {
    :root {
      font-size: .875em;
    }
  }

  @media (min-width: 1200px) {
    :root {
      font-size: 1em;
    }
  }
`;