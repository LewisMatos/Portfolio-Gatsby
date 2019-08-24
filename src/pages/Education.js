import React, { Component } from "react"
import styled from "styled-components"
import { HeaderGradient } from '../styles/HeaderGradient';

const EduSection = styled.div`
  padding: 4rem;
`
const Header = styled(HeaderGradient)`

`


let Education = props => {
  const resumeEdu = props.resumeEdu
  return (
    <EduSection>
      <div>
        <Header>Education</Header>

        {resumeEdu.map(edu => {
          return (
            <div
              className="d-flex flex-column flex-md-row mb-3"
              key={edu.institution}
            >
              <div className="resume-content mr-auto">
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
    </EduSection>
  )
}

export default Education
