import { createGlobalStyle } from "styled-components"
import "bootstrap/dist/css/bootstrap.css"

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
    font-size: 1.8rem;
    font-family: 'Vollkorn', serif;
  }

  a{
    color:white;
  }

  @media screen and (min-width: 80rem) {
  :root {
    /* font-size: calc(0.675rem + 0.25 * (100vw - 80rem) / 40); */
    font-size: .875rem;

  }

  @media screen and (min-width: 120rem) {
    :root{
      font-size: .875rem;
    }
}
`
