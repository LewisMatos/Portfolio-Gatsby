import React from "react"
import styled from "styled-components"
import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { faFilePdf } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

library.add(faGithub, faLinkedin, faTwitter, faFilePdf)

const Picture = styled.div`
  position: sticky;
  top: 0px;
  height: 100vh;
  flex-basis: 30%; /* default value */
  flex-grow: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-image: url(https://s3.amazonaws.com/lewismatos.com/images/_71A6572.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #185a9d;
    background-image: linear-gradient(to left top, #20262d, #185a9d);
    opacity: 0.75;
  }
`
const Content = styled.div`
    color: white;
    position: absolute;
    max-width:inherit;
}
`

const Anchor = styled.a`
  color: white !important;
  &:hover {
    color: rgb(233, 80, 101) !important;
  }
`

let SideBar = props => {
  const resumeBasics = props.resumeBasics
  return (
      <Picture>
        <Content>
          <div>
            <h2>
              <strong>
                <span>{`${resumeBasics.firstname} ${resumeBasics.middleinitial}`}</span>
              </strong>
            </h2>
            <h3>
              <strong className="lastname-animation">
                {resumeBasics.lastname}
              </strong>
            </h3>
          </div>
          <h4>{resumeBasics.label}</h4>
          <p />
          <div>
            <h5>{`${resumeBasics.location.address}, ${resumeBasics.location.region}`}</h5>
            <h5 className="text-address">
              <Anchor href={`tel: ${resumeBasics.phone}`}>
                {resumeBasics.phone}
              </Anchor>
            </h5>
            <h5 className="text-address">
              <Anchor href={`mailto: ${resumeBasics.email}`}>
                {resumeBasics.email}
              </Anchor>
            </h5>
          </div>
          <ul className="list-inline">
            {resumeBasics.profiles.map(profile => {
              let fontAwesomeIcons = {
                github: faGithub,
                linkedin: faLinkedin,
                twitter: faTwitter,
                resume: faFilePdf,
              }
              return (
                <li
                  key={profile.network}
                  className="list-inline-item mr-4 hover"
                >
                  <Anchor id="faIcon" href={profile.url}>
                    <FontAwesomeIcon
                      icon={fontAwesomeIcons[profile.network]}
                      size="5x"
                      title={profile.network}
                    />
                  </Anchor>
                </li>
              )
            })}
          </ul>
        </Content>
      </Picture>
  )
}

export default SideBar
