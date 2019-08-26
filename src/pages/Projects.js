import React from "react"
import styled from "styled-components"
import { HeaderGradient } from "../styles/HeaderGradient"
import ProjectImage from "../components/ProjectImage"

const Section = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: 100%;
  padding: 2rem;
  border-top: 2px solid black;
`
const Header = styled(HeaderGradient)`
  text-align: left;
`
const Container = styled.div`
  width: 100%;
  height: 100%;
`
let Projects = ({ projects }) => {
  console.log(projects)
  return (
    <Section>
      <Header>Projects</Header>
      <Container>
        {projects.map(project => {
          return (
            <a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ProjectImage file={`${project.name}.png`} />
            </a>
          )
        })}
      </Container>
    </Section>
  )
}

export default Projects
