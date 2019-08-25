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
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #185a9d;
    background-image: radial-gradient(circle 100rem at center, #16d9e3 0%, #30c7ec 47%, #46aef7 100%);
    opacity: 0.45;
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
    color: rgb(233, 80, 101);
  }
`
const UL = styled.ul`
  & > li:last-child {
    & > a{
      & > svg{
      color:#F44F4F;
      }
    }
    animation: flicker 4s linear infinite;
    @keyframes flicker {
      0%,
      13%,
      15%,
      18%,
      20%,
      40%,
      86%,
      100% {
        opacity: 1;
      }

      14%,
      19%,
      42%,
      85% {
        opacity: 0.15;
      }
    }
  }
  & > svg:last-child{
    color:red;
  }
`

const LabelLI = styled.li`
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
    right:2em;
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

let LeftSection = ({ basics }) => {
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
            <strong className="lastname-animation">{basics.lastname}</strong>
          </h3>
        </div>
        <h4>{basics.label}</h4>
        <p />
        <div>
          <h5>{`${basics.location.address}, ${basics.location.region}`}</h5>
          <h5 className="text-address">
            <Anchor href={`tel: ${basics.phone}`}>{basics.phone}</Anchor>
          </h5>
          <h5 className="text-address">
            <Anchor href={`mailto: ${basics.email}`}>{basics.email}</Anchor>
          </h5>
        </div>
        <UL>
          {basics.profiles.map(profile => {
            let fontAwesomeIcons = {
              github: faGithub,
              linkedin: faLinkedin,
              twitter: faTwitter,
              resume: faFilePdf,
            }
            return (
              <LabelLI key={profile.network} aria-label={profile.network} className="list-inline-item mr-4 hover">
                <Anchor id="faIcon" href={profile.url}>
                  <FontAwesomeIcon
                    icon={fontAwesomeIcons[profile.network]}
                    size="5x"
                  />
                </Anchor>
              </LabelLI>
            )
          })}
        </UL>
      </Content>
    </Section>
  )
}

export default LeftSection
