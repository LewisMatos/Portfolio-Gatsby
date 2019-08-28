import styled from "styled-components"

export const HeaderGradient = styled.div`
  text-align: left;
  margin-bottom: 2rem;
  background: linear-gradient(
    270deg,
    #6fba82,
    #f79533,
    #f37055,
    #ef4e7b,
    #a166ab,
    #5073b8,
    #1098ad,
    #07b39b,
    #6fba82
  );
  background-size: 1000%;
  -webkit-animation: GradientAnimation 14s ease infinite;
  -moz-animation: GradientAnimation 14s ease infinite;
  animation: GradientAnimation 14s ease infinite;

  @-webkit-keyframes GradientAnimation {
    0% {
      background-position: 69% 0%;
    }
    50% {
      background-position: 32% 100%;
    }
    100% {
      background-position: 69% 0%;
    }
  }
  @-moz-keyframes GradientAnimation {
    0% {
      background-position: 69% 0%;
    }
    50% {
      background-position: 32% 100%;
    }
    100% {
      background-position: 69% 0%;
    }
  }
  @keyframes GradientAnimation {
    0% {
      background-position: 69% 0%;
    }
    50% {
      background-position: 32% 100%;
    }
    100% {
      background-position: 69% 0%;
    }
  }
`
