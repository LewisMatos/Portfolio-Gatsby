import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const BoxContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 35px 15px;
`

const BoxItem = styled.div`
  position: relative;
  -webkit-backface-visibility: hidden;
  width: 30vw;
  margin-bottom: 35px;
  max-width: 100%;
  filter: contrast(75%);
`
const FlipBox__FrontBack = styled.div`
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  min-height: 475px;
  -ms-transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  -webkit-transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  box-shadow: 0px 5px 17px 0px grey;
`

const FlipBox__Front = styled(FlipBox__FrontBack)`
  -ms-transform: rotateY(0deg);
  -webkit-transform: rotateY(0deg);
  transform: rotateY(0deg);
  -webkit-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  transform-style: preserve-3d;
`

const FlipBox__Back = styled(FlipBox__FrontBack)`
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

  :hover ${FlipBox__Front} {
    -ms-transform: rotateY(-180deg);
    -webkit-transform: rotateY(-180deg);
    transform: rotateY(-180deg);
    -webkit-transform-style: preserve-3d;
    -ms-transform-style: preserve-3d;
    transform-style: preserve-3d;
  }

  :hover ${FlipBox__Back} {
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
  -webkit-transform: translateY(-50%) translateZ(60px) scale(0.94);
  -ms-transform: translateY(-50%) translateZ(60px) scale(0.94);
  top: 50%;
`

const FlipBox__Button = styled.button`
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
  transition-duration: 0.1s;
  box-shadow: 0px 5px 17px 0px grey;
  /* &:hover {
    cursor: pointer;
    filter: contrast(100%);
    margin-top: 0px;
    opacity: 0.7;
  } */
`
const renderImage = (value, file) => {
  const { node } = value
  const { childImageSharp } = node
  return (
    <BoxContainer >
      <BoxItem>
        <FlipBox>
          <FlipBox__Front>
            <BackgroundImage
              style={{ position: "absolute", width: "100%", height: "100%" }}
              fluid={childImageSharp.fluid}
            >
              <Inner>
                <img
                  src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png"
                  alt="cta arrow"
                  className="flip-box-img"
                />
              </Inner>
            </BackgroundImage>
          </FlipBox__Front>
          <FlipBox__Back>
            <Inner>
              <Anchor
                href={file.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={file.name}
              >
                <FlipBox__Button className="flip-box-button">Website</FlipBox__Button>{" "}
              </Anchor>
              <Anchor
                href={file.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={file.name}
              >
                <FlipBox__Button className="flip-box-button">GitHub</FlipBox__Button>{" "}
              </Anchor>
            </Inner>
          </FlipBox__Back>
        </FlipBox>
      </BoxItem>
    </BoxContainer>
  )
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
          images.edges.find(image => image.node.relativePath === file),
          file
        )
      }
    />
  )
}

export default ProjectImage
