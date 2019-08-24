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

const Section = styled.div`
  position: sticky;
  top: 0px;
  height: 100vh;
  flex: 1 0 30%;
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

let LeftSection = ({basics}) => {
  return (
      <Section>
        <Content>
          <div>
            <h2>
              <strong>
                <span>{`${basics.firstname} ${basics.middleinitial}`}</span>
              </strong>
            </h2>
            <h3>
              <strong className="lastname-animation">
                {basics.lastname}
              </strong>
            </h3>
          </div>
          <h4>{basics.label}</h4>
          <p />
          <div>
            <h5>{`${basics.location.address}, ${basics.location.region}`}</h5>
            <h5 className="text-address">
              <Anchor href={`tel: ${basics.phone}`}>
                {basics.phone}
              </Anchor>
            </h5>
            <h5 className="text-address">
              <Anchor href={`mailto: ${basics.email}`}>
                {basics.email}
              </Anchor>
            </h5>
          </div>
          <ul className="list-inline">
            {basics.profiles.map(profile => {
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
      </Section>
  )
}

export default LeftSection
