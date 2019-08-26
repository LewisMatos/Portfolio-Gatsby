import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const Project = styled(BackgroundImage)`
  margin: 0 0.2rem 2rem 0;
  width: 100%;
  height: 50vh;
  background-size: cover;
  background-position: center center;
  background-position: center;
  background-size: cover;
  filter: contrast(75%);
  border-radius: 7px;
  margin-top: 5px;
  transition-property: box-shadow margin-top filter;
  transition-duration: .1s;
  box-shadow: 0px 5px 17px 0px grey;
  &:hover{
    cursor: pointer;
    filter: contrast(100%);
    margin-top: 0px;
    opacity: .7;
  }
`
const renderImage = value => {
  const { node } = value
  const { childImageSharp } = node
  return <Project fluid={childImageSharp.fluid} />
}

const ProjectImage = props => {
  const { file } = props
  return (
    <StaticQuery
      query={graphql`
        query {
          images: allFile(
            filter: { extension: { regex: "/jpeg|jpg|png|gif/" } }
          ) {
            edges {
              node {
                extension
                relativePath
                childImageSharp {
                  fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      `}
      render={({ images }) =>
        renderImage(
          images.edges.find(image => image.node.relativePath === file)
        )
      }
    />
  )
}

export default ProjectImage
