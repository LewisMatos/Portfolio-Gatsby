import React, { Component } from "react"
import Resume from "../../static/resume/Resume"
import styled from "styled-components"
import { GlobalStyle } from "../styles/GlobalStyle"
import Profile from "./SideBar"
import Education from './Education';


const Section = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
export default class index extends Component {
  render() {
    return (
        <>
        <GlobalStyle/>
      <Section>
        <Profile resumeBasics={Resume.basics} />
        <Education resumeEdu={Resume.education}></Education>
      </Section>
      </>
    )
  }
}
