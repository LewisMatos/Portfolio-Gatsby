import React, { Component } from "react"
import styled from "styled-components"
import GlobalStyle from "../styles/GlobalStyle"
import media from "styled-media-query"
import LeftSection from "./LeftSection"
import RightSection from "./RightSection"
import Metatag from "./MetaTag";

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
        <GlobalStyle/>
        <Section>
          <LeftSection />
          <RightSection />
        </Section>
      </>
    )
  }
}
