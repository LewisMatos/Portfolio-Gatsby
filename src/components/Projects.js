import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import { HeaderGradient } from "../styles/HeaderGradient"
import { Header } from "../styles/Header"
import ProjectImage from "./ProjectImage"

const Section = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: 100%;
  padding: 2rem;
  border-top: 2px solid black;
`

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`

function renderJson(data) {
  const { projects } = data.dataJson
  return projects.map(project => {
    return (
      <ProjectImage
        file={`${project.name}.png`}
        alt={project.name}
        name={project.name}
        href={project.href}
      />
    )
  })
}

const Project = props => {
  return (
    <StaticQuery
      query={graphql`
        query {
          dataJson {
            projects {
              name
              href
            }
          }
        }
      `}
      render={data => renderJson(data)}
    />
  )
}

let Projects = ({ projects }) => {
  return (
    <Section>
      <HeaderGradient>
        <Header>Projects</Header>
      </HeaderGradient>
      <Container>
        <Project />
      </Container>
    </Section>
  )
}

export default Projects
