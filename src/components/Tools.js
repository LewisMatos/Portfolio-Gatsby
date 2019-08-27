import React from "react"
import {
  StyledIcon,
  Header,
  ToolTip,
  ToolTips,
  SkillImg,
} from "../styles/LanguagesTools"

export default function Tools() {
  let tools = [
    { name: "wordpress", color: "#E44D26" },
    { name: "visualstudio", color: "#5B4282" },
    { name: "vim", color: "#61DAFB" },
    { name: "ubuntu", color: "#0868AC" },
    { name: "aws", color: "#F0DB4F" },
    { name: "github", color: "#83CD29" },
    { name: "amazonwebservices", color: "#FFD845" },
  ]

  return (
    <>
      <Header>Tools</Header>
      <ToolTip className="">
        {tools.map(tool => {
          if (tool.name === "amazonwebservices") {
            return (
              <ToolTips key={tool.name} aria-label={tool.name}>
                <a href="https://www.certmetrics.com/amazon/public/badge.aspx?i=1&t=c&d=2018-04-10&ci=AWS00382630">
                  <SkillImg
                    width="24rem"
                    backgroundColor={tool.color}
                    alt="amazon web service certification"
                    src="https://virtualbrakeman.files.wordpress.com/2017/01/amazon-web-services-certified-solutions-architect-associate.png?w=588"
                  />
                </a>
              </ToolTips>
            )
          }
          return (
            <ToolTips key={tool.name} aria-label={tool.name}>
              <StyledIcon color={tool.color} icon={tool.name} />
            </ToolTips>
          )
        })}
      </ToolTip>
    </>
  )
}
