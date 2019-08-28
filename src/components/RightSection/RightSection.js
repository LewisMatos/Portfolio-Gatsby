import React, { useState } from "react"
import styled from "styled-components"
import media from "styled-media-query"
import Education from "./Education.js"
import Skills from "./Skills.js"
import Experience from "./Experience.js"
import Projects from "./Projects.js/index.js"

const Section = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: center;
  flex: 1 0 70%;
  z-index:20;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  border-left: 2px solid black;
  flex: 1 0 40%;
  ${media.lessThan("medium")`
  border:none;
  `}
}
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow-y: hidden;
  transition-property: all;
  transition-duration: 0.9s;
  transition-timing-function: cubic-bezier(0, 0.2, 0.5, 1);
  max-height: ${props => (props.hide ? 0 : "100%")};
`
const Button = styled.button`
  position: absolute;
  width:2rem;
  height:2rem;
  margin:0 auto
  cursor: pointer;
  outline: none;
  border: 0;
  text-decoration: none;
  & {
    @include transition(all, 0.5s, cubic-bezier(0.65,-0.25,0.25,1.95));
    font-weight: 900;
    color: white;
    background: black;
    text-transform: uppercase;
    &:hover, &:focus, &:active {
      letter-spacing: 0.125rem;
    }
  }
  ${media.lessThan("medium")`
    display:none;
  `}
`

let RightSection = props => {
  const [hidden, setHidden] = useState(0)
  const onClick = event => {
    let temp
    if (hidden) {
      temp = 0
    } else {
      temp = 1
    }
    setHidden(temp)
  }
  return (
    <Section>
      <Button onClick={onClick}> {hidden ? "+" : "-"} </Button>
      <Row hide={hidden}>
        <Experience />
        <Column>
          <Education />
          <Skills />
        </Column>
      </Row>
      <Row>
        <Projects />
      </Row>
    </Section>
  )
}

export default RightSection
