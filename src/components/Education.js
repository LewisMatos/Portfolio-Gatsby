import React from "react"
import styled from "styled-components"
import media from "styled-media-query"
import { StaticQuery, graphql } from "gatsby"
import { HeaderGradient } from "../styles/HeaderGradient"
import { Header } from "../styles/Header"

const Section = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 2rem;
  border-bottom: 2px solid black;
  ${media.lessThan("large")`
  border-top: 2px solid black;
`}
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  & > span {
    font-size: 1em;
    margin-right: 0.5rem;
    line-height: 2.2em;
    font-weight: 500;
    &:last-child {
      font-size: 0.9em;
    }
  }
`
const Edu = styled.div`
  font-size: 1em;
  & > div:last-child {
    font-size: 1.2em;
  }
`

function renderJson(data) {
  const { education } = data.dataJson
  return education.map(edu => {
    return (
      <Edu key={edu.institution}>
        <Row>
          <span>{edu.institution}</span>
          <span>{`${edu.startDate} - ${edu.endDate}`}</span>
        </Row>
        <div>{edu.area}</div>
      </Edu>
    )
  })
}

const Content = props => {
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

let Education = () => {
  return (
    <Section>
      <HeaderGradient>
        <Header> Education</Header>
      </HeaderGradient>
      <Content />
    </Section>
  )
}

export default Education
