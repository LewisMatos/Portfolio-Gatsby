import React from "react"
import styled from "styled-components"
import { HeaderGradient } from "../styles/HeaderGradient"
import { Link } from "../../.cache/gatsby-browser-entry"

const Section = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: auto;
  padding:2rem;
  border-top: 2px solid black;
`
const Header = styled(HeaderGradient)`
  text-align: left;
`
const Project = styled.div`
  margin: 0 .2rem 2rem 0;
  background: url(${props => props.url});
  height: 30rem;
  background-size: cover;
  background-position: center center;
  box-shadow: 3px 3px 5px 6px #ccc;
`

let Projects = () => {
  return (
    <Section>
      <Header>Projects</Header>
      <a href="https://911autodr.com/" target="_blank">
        <Project url="../img/911AutoDrImage.PNG" />
      </a>
      <a href="https://d26yj69bke7qnx.cloudfront.net/login" target="_blank">
        <Project url="../img/VidUpImage.PNG"  />
      </a>
      <a href="https://iartist.lewismatos.com/" target="_blank">
        <Project url="../img/iArtistImage.PNG"  />
      </a>
      <a href="http://lewismatos.github.io/MiniMaxTicTacToe/" target="_blank">
        <Project url="../img/MiniMaxImage.PNG"  />
      </a>
      <a href="https://lewismatos.github.io/birdGame/" target="_blank">
        <Project url="../img/birdGameImage.PNG"  />
      </a>
    </Section>
  )
}

export default Projects
