import React from "react"
import styled from "styled-components"
import media from "styled-media-query"
import Education from "./Education.js"
import Skills from "./Skills.js"
import Experience from "./Experience.js"
import Projects from "./Projects.js"

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
  max-height: "100%";
`

let RightSection = props => {
  return (
    <Section>
      <Row>
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
