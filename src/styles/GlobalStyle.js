import "bootstrap/dist/css/bootstrap.css"
import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
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
      font-family: 'Jost', serif;
      box-sizing: inherit;
    }

    h1{
      font-size: 5rem !important;
    }

    @media screen and (min-width: 80rem) {
    :root {
      font-size: calc(0.675rem + 0.25 * (100vw - 80rem) / 40);
    }
`
