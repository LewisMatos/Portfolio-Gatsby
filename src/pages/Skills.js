import React from "react"
import styled from "styled-components"
import Languages from "../components/Languages"
import Tools from "../components/Tools"

const Section = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 2rem;
  width: 100%;
  border-bottom: 2px solid black;
  &:last-child {
    border-bottom: none;
    margin-bottom: 2rem;
  }
`
const Skills = props => {
  return (
    <Section>
      <Column>
        <Languages />
      </Column>
      <Column>
        <Tools />
      </Column>
    </Section>
  )
}

export default Skills
