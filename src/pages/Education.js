import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import { HeaderGradient } from "../styles/HeaderGradient"

const Section = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 2rem;
  border-bottom: 2px solid black;
`

const School = styled.div`
  display: flex;
  justify-content: space-between;
  & > span {
    margin-right: 0.5rem;
    line-height: 2rem;
    font-weight: 500;
  }
`
const Edu = styled.div`
  font-size: 1rem;
`

function renderJson(data) {
  const { education } = data.dataJson
  return education.map(edu => {
    return (
      <Edu key={edu.institution}>
        <School>
          <span>{edu.institution}</span>
          <span>{`${edu.startDate} - ${edu.endDate}`}</span>
        </School>
        <div>{edu.area}</div>
      </Edu>
    )
  })
}

const Basics = props => {
  return (
    <StaticQuery
      query={graphql`
        query {
          dataJson {
            education {
              institution
              area
              studyType
              startDate
              endDate
              gpa
            }
          }
        }
      `}
      render={data => renderJson(data)}
    />
  )
}

const Header = styled(HeaderGradient)``
let Education = ({ education }) => {
  return (
    <Section>
      <Header>Education</Header>
      <Basics />
    </Section>
  )
}

export default Education
