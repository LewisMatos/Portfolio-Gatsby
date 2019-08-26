import  "bootstrap/dist/css/bootstrap.css"
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
      box-sizing: inherit;
    }

    h1, h2, h3{
      font-family: 'Vollkorn', serif;
    }
    h1{
      font-size: 3rem !important;
    }

    a{
      color:white;
    }

    @media screen and (min-width: 80rem) {
    :root {
      font-size: calc(0.675rem + 0.25 * (100vw - 80rem) / 40);
    }
`
