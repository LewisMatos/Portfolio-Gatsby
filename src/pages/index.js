import React, { Component } from "react"
import styled from "styled-components"
import { GlobalStyle } from "../styles/GlobalStyle"
import HeadSection from "./HeadSection"
import LeftSection from "./LeftSection"
import RightSection from "./RightSection"

const Section = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`

export default class index extends Component {
  render() {
    return (
      <>
        <HeadSection />
        <GlobalStyle />
        <Section>
          <LeftSection />
          <RightSection/>
        </Section>
      </>
    )
  }
}
