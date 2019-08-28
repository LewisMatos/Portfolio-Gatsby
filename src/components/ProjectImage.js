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

  .box-item {
    position: relative;
    -webkit-backface-visibility: hidden;
    width: 30vw;
    margin-bottom: 35px;
    max-width: 100%;
  }

  .flip-box {
    -ms-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
    perspective: 1000px;
    -webkit-perspective: 1000px;
  }

  .flip-box-front,
  .flip-box-back {
    background-size: cover;
    background-position: center;
    border-radius: 8px;
    min-height: 475px;
    -ms-transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
    transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
    -webkit-transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .flip-box-front {
    -ms-transform: rotateY(0deg);
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
    -webkit-transform-style: preserve-3d;
    -ms-transform-style: preserve-3d;
    transform-style: preserve-3d;
  }

  .flip-box:hover .flip-box-front {
    -ms-transform: rotateY(-180deg);
    -webkit-transform: rotateY(-180deg);
    transform: rotateY(-180deg);
    -webkit-transform-style: preserve-3d;
    -ms-transform-style: preserve-3d;
    transform-style: preserve-3d;
  }

  .flip-box-back {
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
  }

  .flip-box:hover .flip-box-back {
    -ms-transform: rotateY(0deg);
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
    -webkit-transform-style: preserve-3d;
    -ms-transform-style: preserve-3d;
    transform-style: preserve-3d;
  }

  .flip-box .inner {
    position: absolute;
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
  }

  .flip-box-header {
    font-size: 34px;
  }

  .flip-box p {
    font-size: 20px;
    line-height: 1.5em;
  }

  .flip-box-img {
    margin-top: 25px;
  }

  .flip-box-button {
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
  }
`

const FlipBox = styled.div``

const FlipBox__Front = styled.div``

const FlipBox__Back = styled.div``

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
const renderImage = (value, props) => {
  const { node } = value
  const { childImageSharp } = node
  console.log(props)
  return (
    <BoxContainer className="box-container">
      <div className="box-item">
        <div className="flip-box">
          <BackgroundImage
            fluid={childImageSharp.fluid}
            className="flip-box-front text-center filter-"
          >
            <div className="inner color-white">
              <img
                src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png"
                alt=""
                className="flip-box-img"
              />
            </div>
          </BackgroundImage>
          <div className="flip-box-back text-center">
            <div className="inner color-white">
              <h3 className="flip-box-header">Links</h3>
              <a
                key={props.name}
                href={props.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={props.name}
              >
                <button className="flip-box-button">Website</button>{" "}
              </a>
              <button className="flip-box-button">Github</button>
            </div>
          </div>
        </div>
      </div>
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
          props
        )
      }
    />
  )
}

export default ProjectImage
