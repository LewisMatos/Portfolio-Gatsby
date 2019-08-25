import React from "react"
import styled from "styled-components"
import { HeaderGradient } from "../styles/HeaderGradient"

const Section = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 2rem;
  border-bottom: 2px solid black;
`

const School = styled.div`
display:flex;
justify-content:space-between;
& > span{
  margin-right:.5rem;
  line-height:2rem;
  font-weight:500;
}
`
const Edu = styled.div`
font-size:1rem;
`

const Header = styled(HeaderGradient)``
let Education = ({ education }) => {
  return (
    <Section>
      <Header>Education</Header>
      {education.map(edu => {
        return (
          <Edu key={edu.institution}>
            <School>
              <span>{edu.institution}</span>
              <span>{`${edu.startDate} - ${edu.endDate}`}</span>
            </School>
              <div>{edu.area}</div>
          </Edu>
        )
      })}
    </Section>
  )
}

export default Education
