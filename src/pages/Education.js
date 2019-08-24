import React from "react"
import styled from "styled-components"
import { HeaderGradient } from "../styles/HeaderGradient"

const Section = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 2rem;
  border-bottom: 2px solid black;
`
const Header = styled(HeaderGradient)``
let Education = ({ education }) => {
  return (
    <Section>
      <div>
        <Header>Education</Header>

        {education.map(edu => {
          return (
            <div key={edu.institution}>
              <div className="resume-content">
                <h5 className="mb-0">{edu.institution}</h5>
                <div className="subheading mr-5">{edu.area}</div>
              </div>
              <div className="resume-date text-md-right ml-5">
                <span className="">{`${edu.startDate} - ${edu.endDate}`}</span>
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}

export default Education
