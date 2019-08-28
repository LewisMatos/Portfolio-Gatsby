import styled from "styled-components"

export const Label = styled.div`
transition: all 0.2s ease-in-out;
&:hover {
  transform: scale(1.5);
}
&[aria-label]:hover:after {
  opacity: 1;
  transition: all 0.1s ease 0.5s;
  visibility: visible;
  font-size: 2rem;
  color: #21bdb7;
}
&[aria-label]:after {
  content: attr(aria-label);
  position: absolute;
  top: -1.5em;
  right: 2em;
  padding: auto;
  white-space: nowrap;
  border-radius: 5px;
  box-shadow: 0px 0px 4px #222;
  background-image: -moz-linear-gradient(top, #f8f8f8, #cccccc);
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0, #f8f8f8),
    color-stop(1, #cccccc)
  );
  background-image: -webkit-linear-gradient(top, #f8f8f8, #cccccc);
  background-image: -moz-linear-gradient(top, #f8f8f8, #cccccc);
  background-image: -ms-linear-gradient(top, #f8f8f8, #cccccc);
  background-image: -o-linear-gradient(top, #f8f8f8, #cccccc);
  z-index: 99999;
  visibility: hidden;
}
&[aria-label] {
  position: relative;
}
`