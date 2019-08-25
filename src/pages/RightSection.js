import React from "react"
import styled from "styled-components"
import Education from "./Education.js"
import Skills from "./Skills.js"
import Experience from "./Experience.js"
import Projects from "./Projects.js"

const Section = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: center;
  flex: 1 0 60%;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  border-left: 2px solid black;
  flex: 1 0 20%;
}


`
const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: center;
`

let RightSection = ({ resume }) => {
  return (
    <Section>
      <Row>
        <Experience work={resume.work} />
        <Column>
          <Education education={resume.education} />
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
