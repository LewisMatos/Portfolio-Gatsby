import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import media from "styled-media-query"
import ctaarrow from '../../images/ctaarrow.png';

const BoxContainer = styled.div`
  width: 20vw;
  padding: 35px 15px;
  margin-bottom: 35px;
  -webkit-backface-visibility: hidden;
  ${media.lessThan("medium")`
   width: 100%;
  `}
`

const FlipBoxFrontBack = styled.div`
  border-radius: 30px;
  min-height: 40vh;
  -ms-transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  -webkit-transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  box-shadow: 0px 5px 17px 0px grey;
`

const FlipBoxFront = styled(FlipBoxFrontBack)`
  -ms-transform: rotateY(0deg);
  -webkit-transform: rotateY(0deg);
  transform: rotateY(0deg);
  -webkit-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  transform-style: preserve-3d;
`

const FlipBoxBack = styled(FlipBoxFrontBack)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: grey;
  -ms-transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
  -webkit-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  transform-style: preserve-3d;
`

const FlipBox = styled.div`
  -ms-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
  perspective: 1000px;
  -webkit-perspective: 1000px;

  :hover ${FlipBoxFront} {
    -ms-transform: rotateY(-180deg);
    -webkit-transform: rotateY(-180deg);
    transform: rotateY(-180deg);
    -webkit-transform-style: preserve-3d;
    -ms-transform-style: preserve-3d;
    transform-style: preserve-3d;
  }

  :hover ${FlipBoxBack} {
    -ms-transform: rotateY(0deg);
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
    -webkit-transform-style: preserve-3d;
    -ms-transform-style: preserve-3d;
    transform-style: preserve-3d;
  }


`

const Inner = styled.div`
  position: absolute;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  left: 0;
  width: 100%;
  padding: 60px;
  outline: 1px solid transparent;
  -webkit-perspective: inherit;
  perspective: inherit;
  z-index: 2;

  transform: translateY(-50%) translateZ(60px) scale(0.94);
  top: 50%;
  ${media.lessThan("large")`
    flex-direction:column;
  `}
`

const FlipBoxButton = styled.button`
    background-color: transparent;
    border: 2px solid #fff;
    border-radius: 2px;
    color: #fff;
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
    margin-top: 25px;
    padding: 15px 20px;
    text-transform: uppercase;
`

const Anchor = styled.a`
  margin-right: 1rem;
`

const Project = styled(BackgroundImage)`
  filter: contrast(55%);
  &::after,::before{
  border-radius: 30px;
  }
`
const renderImage = (value, props) => {
  const { node } = value
  const { childImageSharp } = node
  return (
    <BoxContainer >
        <FlipBox>
          <FlipBoxFront>
            <Project
              style={{ position: "absolute", width: "100%", height: "100%" }}
              fluid={childImageSharp.fluid}
            />
              <Inner>
                <img
                  src={ctaarrow}
                  alt="cta arrow"
                  className="flip-box-img"
                />
              </Inner>
          </FlipBoxFront>
          <FlipBoxBack>
            <Inner>
              <Anchor
                href={props.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={props.name}
              >
                <FlipBoxButton className="flip-box-button">Website</FlipBoxButton>{" "}
              </Anchor>
              <Anchor
                href={props.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={props.name}
              >
                <FlipBoxButton className="flip-box-button">GitHub</FlipBoxButton>{" "}
              </Anchor>
            </Inner>
          </FlipBoxBack>
        </FlipBox>
    </BoxContainer>
  )
}

const ProjectCards = props => {
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
          images.edges.find(image => image.node.relativePath === file),
          props
        )
      }
    />
  )
}

export default ProjectCards
