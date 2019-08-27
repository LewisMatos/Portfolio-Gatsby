import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import ProfileImage from "../components/ProfileImage"
import media from "styled-media-query"
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
  display: flex;
  justify-content: center;
  flex: 1 0 30%;
`

const Content = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  color: white;
  font-size: 2rem;
  height: 100vh;
  width: 30%;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #rgba(117, 19, 93, 0.73);
    background-image: linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73));
    opacity: 0.95;
  }
  ${media.lessThan("medium")`
    position: absolute;
    width: 100%;
  `}
`

const Details = styled.div`
  z-index: 100;
`

const Anchor = styled.a`
  color: white !important;
  &:hover {
    color: rgb(233, 80, 101);
  }
`
const UL = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  text-align: center;
  & > li:last-child {
    & > a {
      & > svg {
        color: #f44f4f;
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
  & > svg:last-child {
    color: red;
  }
`

const LabelLI = styled.li`
  list-style: none;
  align-self: center;
  margin: 0 1rem;
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

function renderJson(data) {
  const { basics } = data.dataJson
  return (
    <Details>
      <div>
        <h1>
          <strong>
            <span>{`${basics.firstname} ${basics.middleinitial}`}</span>
          </strong>
        </h1>
        <h1>
          <strong className="lastname-animation">{basics.lastname}</strong>
        </h1>
      </div>
      <h2>{basics.label}</h2>
      <p />
      <div>
        <h3>{`${basics.location.address}, ${basics.location.region}`}</h3>
        <h3>
          <Anchor href={`tel: ${basics.phone}`}>{basics.phone}</Anchor>
        </h3>
        <h3>
          <Anchor href={`mailto: ${basics.email}`}>{basics.email}</Anchor>
        </h3>
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
            <LabelLI key={profile.network} aria-label={profile.network}>
              <Anchor href={profile.url} aria-label={profile.network}>
                <FontAwesomeIcon
                  icon={fontAwesomeIcons[profile.network]}
                  size="2x"
                />
              </Anchor>
            </LabelLI>
          )
        })}
      </UL>
    </Details>
  )
}

const Basics = props => {
  return (
    <StaticQuery
      query={graphql`
        query {
          dataJson {
            basics {
              firstname
              middleinitial
              lastname
              email
              phone
              location {
                address
                region
              }
              profiles {
                network
                username
                url
              }
            }
          }
        }
      `}
      render={data => renderJson(data)}
    />
  )
}

let LeftSection = () => {
  return (
    <Section>
      <ProfileImage />
      <Content>
        <Basics />
      </Content>
    </Section>
  )
}

export default LeftSection
