import styled from "styled-components"

export const HeaderGradient = styled.div`
  font-size: 2rem;
  padding: 0 0 1rem 0;
  background-image: -webkit-linear-gradient(
    left,
    #21bdb7,
    #585858,
    #fff
  ); /* For Chrome and Safari */
  background-image: -moz-linear-gradient(
    left,
    #21bdb7,
    #585858,
    #fff
  ); /* For old Fx (3.6 to 15) */
  background-image: -ms-linear-gradient(
    left,
    #21bdb7,
    #585858,
    #fff
  ); /* For pre-releases of IE 10*/
  background-image: -o-linear-gradient(
    left,
    #21bdb7,
    #585858,
    #fff
  ); /* For old Opera (11.1 to 12.0) */
  background-image: linear-gradient(
    to right,
    #21bdb7,
    #585858,
    #fff
  ); /* Standard syntax; must be last */
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
`
