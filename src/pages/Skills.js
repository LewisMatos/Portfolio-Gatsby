import React from "react"
import styled from "styled-components"
import DevIcon from "devicon-react-svg"
import { HeaderGradient } from "../styles/HeaderGradient"

const Section = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`
const Header = styled(HeaderGradient)``
const StyledIcon = styled(DevIcon)`
  fill: ${props => props.color || "black "};
  width: 6rem;
  margin-right: 0.5rem;
`
const ToolTipUl = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 40rem;
  justify-content: space-evenly;
  height: 30rem;
  list-style: none;
  margin: 0 auto;
  text-align: center;
`
const ToolTipLi = styled.li`
  &[aria-label]:hover:after {
    opacity: 1;
    transition: all 0.1s ease 0.5s;
    visibility: visible;
    font-size: 2rem;
    color: #21bdb7;
  }
  &[aria-label]:after {
    content: attr(aria-label);
    position: absolute;
    top: -1.5em;
    right: 2em;
    padding: auto;
    white-space: nowrap;
    border-radius: 5px;
    box-shadow: 0px 0px 4px #222;
    background-image: -moz-linear-gradient(top, #f8f8f8, #cccccc);
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(0, #f8f8f8),
      color-stop(1, #cccccc)
    );
    background-image: -webkit-linear-gradient(top, #f8f8f8, #cccccc);
    background-image: -moz-linear-gradient(top, #f8f8f8, #cccccc);
    background-image: -ms-linear-gradient(top, #f8f8f8, #cccccc);
    background-image: -o-linear-gradient(top, #f8f8f8, #cccccc);
    z-index: 99999;
    visibility: hidden;
  }
  &[aria-label] {
    position: relative;
  }
`

const SkillImg = styled.img`
  width: ${props => props.width || "5rem"};
  position: relative;
  top: 9px;
  background-color: ${props => props.backgroundColor || "black"};
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 2rem;
  width: 100%;
  border-bottom: 2px solid black;
  &:last-child {
    border-bottom: none;
    margin-bottom: 2rem;
  }
`
const Skills = props => {
  let skills = [
    { name: "html5", color: "#E44D26" },
    { name: "css3", color: "#1572B6" },
    { name: "bootstrap", color: "#5B4282" },
    { name: "react", color: "#61DAFB" },
    { name: "jquery", color: "#0868AC" },
    { name: "javascript", color: "#F0DB4F" },
    { name: "nodejs", color: "#83CD29" },
    { name: "mysql", color: "#00618A" },
    { name: "php", color: "#6181B6" },
    { name: "python", color: "#FFD845" },
    { name: "django", color: "#003A2B" },
    { name: "sass", color: "#B17B94" },
  ]
  let tools = [
    { name: "wordpress", color: "#E44D26" },
    { name: "visualstudio", color: "#5B4282" },
    { name: "vim", color: "#61DAFB" },
    { name: "ubuntu", color: "#0868AC" },
    { name: "aws", color: "#F0DB4F" },
    { name: "github", color: "#83CD29" },
    { name: "redis", color: "#6181B6" },
    { name: "styled-component", color: "#DA8876" },
    { name: "amazonwebservices", color: "#FFD845" },
  ]
  return (
    <Section>
      <Column>
        <Header>{"Languages & Frameworks"}</Header>
        <ToolTipUl>
          {skills.map(skill => {
            return (
              <ToolTipLi key={skill.name} aria-label={skill.name}>
                <StyledIcon color={skill.color} icon={skill.name} />
              </ToolTipLi>
            )
          })}
        </ToolTipUl>
      </Column>
      <Column>
        <Header>Tools</Header>
        <ToolTipUl className="">
          {tools.map(tool => {
            if (tool.name === "styled-component") {
              return (
                <ToolTipLi key={tool.name} aria-label={tool.name}>
                  <SkillImg
                    backgroundColor={tool.color}
                    src="../img/styled-components.png"
                    alt=""
                  />
                </ToolTipLi>
              )
            } else if (tool.name === "amazonwebservices") {
              return (
                <ToolTipLi key={tool.name} aria-label={tool.name}>
                  <a href="https://www.certmetrics.com/amazon/public/badge.aspx?i=1&t=c&d=2018-04-10&ci=AWS00382630">
                    <SkillImg
                      width="24rem"
                      backgroundColor={tool.color}
                      src="https://virtualbrakeman.files.wordpress.com/2017/01/amazon-web-services-certified-solutions-architect-associate.png?w=588"
                    />
                  </a>
                </ToolTipLi>
              )
            }
            return (
              <ToolTipLi key={tool.name} aria-label={tool.name}>
                <StyledIcon color={tool.color} icon={tool.name} />
              </ToolTipLi>
            )
          })}
        </ToolTipUl>
      </Column>
    </Section>
  )
}

export default Skills
