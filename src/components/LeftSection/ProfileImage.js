import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const Image = styled(BackgroundImage)`
  height: 100vh;
  width: 100%;
  top: 0px;
  position: sticky !important;
  position: -webkit-sticky !important;
  &:before{
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #185a9d;
    background-image: radial-gradient(
      circle 100rem at center,
      #16d9e3 0%,
      #30c7ec 47%,
      #46aef7 100%
    );
    opacity: 0.45;
  }

  @media (max-width: 1200px) {
    position: relative;
  }
}
`
const GetImage = props => {
  return (
    <StaticQuery
      query={graphql`
        query {
          imageOne: file(relativePath: { eq: "profileimage.jpg" }) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <Image
          id="Profile__Image"
          fluid={data.imageOne.childImageSharp.fluid}
          alt={"headshot image"}
        />
      )}
    />
  )
}

export default GetImage
