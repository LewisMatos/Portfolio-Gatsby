import React from "react"
import styled from "styled-components"
import { HeaderGradient } from "../styles/HeaderGradient"

const Section = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 2rem;
  flex: 1 0 30%;
`
const Header = styled(HeaderGradient)`
  text-align: left;
`
const Company = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.4rem;
  font-weight:500;
`
const Position = styled.div`
text-align:left;
font-size:1.2rem;
`
const Description = styled.li`
font-size:1.2rem;
text-align:left;
`
let Experience = ({ work }) => {
  return (
    <Section>
      <Header>Experience</Header>
      {work.map(work => {
        return (
          <div key={work.position}>
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
      })}
    </Section>
  )
}

export default Experience
