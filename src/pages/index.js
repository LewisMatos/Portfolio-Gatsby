import React, { Component } from "react"
import styled from "styled-components"
import GlobalStyle from "../styles/GlobalStyle"
import media from "styled-media-query"
import LeftSection from "../components/LeftSection/LeftSection"
import RightSection from "../components/RightSection/RightSection"
import Metatag from "../components/MetaTag"
import Canvas from "../components/MouseTrail";

const Section = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  ${media.lessThan("medium")`
    flex-direction: column;
  `}
`

export default class index extends Component {
  render() {
    return (
      <>
        <Metatag />
        <Section>
          <Canvas/>
          <LeftSection />
          <RightSection />
        </Section>
        <GlobalStyle />
      </>
    )
  }
}
