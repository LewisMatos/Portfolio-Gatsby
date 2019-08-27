import React from "react"
import {
  StyledIcon,
  ToolTip,
  ToolTips,
  SkillImg,
} from "../styles/LanguagesTools"
import styledcomponents from "../images/styledcomponent.png"
import { HeaderGradient } from "../styles/HeaderGradient"
import { Header } from "../styles/Header"

export default function Languages() {
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
    { name: "redis", color: "#6181B6" },
    { name: "django", color: "#003A2B" },
    { name: "sass", color: "#B17B94" },
    { name: "styled-component", color: "#DA8876" },
  ]
  return (
    <>
      <HeaderGradient>
        <Header>Languages & Frameworks</Header>
      </HeaderGradient>
      <ToolTip>
        {skills.map(skill => {
          if (skill.name === "styled-component") {
            return (
              <ToolTips key={skill.name} aria-label={skill.name}>
                <SkillImg
                  backgroundColor={skill.color}
                  src={styledcomponents}
                  alt={skill.name}
                />
              </ToolTips>
            )
          }
          return (
            <ToolTips key={skill.name} aria-label={skill.name}>
              <StyledIcon color={skill.color} icon={skill.name} />
            </ToolTips>
          )
        })}
      </ToolTip>
    </>
  )
}
