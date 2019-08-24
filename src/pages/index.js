import React, { Component } from "react"
import Resume from "../../static/resume/Resume"
import styled from "styled-components"
import { GlobalStyle } from "../styles/GlobalStyle"
import HeadSection from "./HeadSection"
import LeftSection from "./LeftSection"
import RightSection from "./RightSection"

const Section = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap:wrap;
  width: 100%;
`
export default class index extends Component {
  render() {
    return (
      <>
        <HeadSection />
        <GlobalStyle />
        <Section>
          <LeftSection basics={Resume.basics} />
          <RightSection resume={Resume} />
        </Section>
      </>
    )
  }
}
