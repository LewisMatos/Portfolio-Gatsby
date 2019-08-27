import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import { HeaderGradient } from "../styles/HeaderGradient"
import { Header } from "../styles/Header"


const Section = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 2rem;
  flex: 1 0 60%;
`

const Company = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.4em;
  font-weight: 500;
`
const Position = styled.div`
  text-align: left;
  font-size: 1.2rem;
`
const Description = styled.li`
  font-size: 1.2rem;
  text-align: left;
`

function renderJson(data) {
  const { work } = data.dataJson
  return work.map(work => {
    return (
      <div key={work.company}>
        <Company>
          <span>{work.company}</span>
          <span>{`${work.startDate} - ${work.endDate}`}</span>
        </Company>
        <Position>{work.position}</Position>
        <ul>
          {work.summary.map((summary, index) => {
            return (
              <Description key={index}>
                {summary.header}
                <ul>
                  {summary.bullet.map((bullet, index) => {
                    return <Description key={index}>{bullet}</Description>
                  })}
                </ul>
              </Description>
            )
          })}
        </ul>
        {/* <h6 className="resume-date text-md-right"> */}
        {/* <span className="">{`${work.startDate} - ${work.endDate}`}</span> */}
        {/* </h6> */}
      </div>
    )
  })
}

const Work = props => {
  return (
    <StaticQuery
      query={graphql`
        query {
          dataJson {
            work {
              company
              position
              website
              startDate
              endDate
              summary {
                header
                bullet
              }
            }
          }
        }
      `}
      render={data => renderJson(data)}
    />
  )
}

let Experience = () => {
  return (
    <Section>
      <HeaderGradient>
        <Header>Experience</Header>
      </HeaderGradient>

      <Work />
    </Section>
  )
}

export default Experience
