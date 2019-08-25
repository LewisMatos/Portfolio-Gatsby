import React, { Component } from "react"
import styled from "styled-components"

import Resume from "../../static/resume/Resume"
import { GlobalStyle } from "../styles/GlobalStyle"
import HeadSection from "./HeadSection"
import LeftSection from "./LeftSection"
import RightSection from "./RightSection"
import { fluidImage } from "../graphql/FluidImage";

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
    const {imageOne,imageTwo,imageThree,imageFour,imageFive} = this.props.data;
    console.log(fluidImage)
    return (
      <>
        <HeadSection />
        <GlobalStyle />
        <Section>
          <LeftSection
            headerImage={this.props.data.profileimage.childImageSharp.fluid}
            basics={Resume.basics}
          />
          <RightSection resume={Resume}
            ImageOne={imageOne.childImageSharp.fluid}
            ImageTwo={imageTwo.childImageSharp.fluid}
            ImageThree={imageThree.childImageSharp.fluid}
            ImageFour={imageFour.childImageSharp.fluid}
            ImageFive={imageFive.childImageSharp.fluid}/>
        </Section>
      </>
    )
  }
}
