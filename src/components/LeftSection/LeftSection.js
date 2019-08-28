import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import ProfileImage from "./ProfileImage"
import media from "styled-media-query"
import uuid from "uuid"
import { Label } from "../../styles/Label"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { faFilePdf } from "@fortawesome/free-solid-svg-icons"

library.add(faGithub, faLinkedin, faTwitter, faFilePdf)

const Section = styled.section`
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
  z-index:20;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #rgba(117, 19, 93, 0.73);
    background-image: linear-gradient(
      to bottom,
      rgba(245, 246, 252, 0.52),
      rgba(117, 19, 93, 0.73)
    );
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
const UL = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  text-align: center;
`

const LabelLI = styled(Label)`
  list-style: none;
  align-self: center;
  margin: 0 1rem;
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
            linkedin: {icon: faLinkedin, color: '#007BB5'},
            github: {icon: faGithub,color: '#000' },
            twitter: {icon: faTwitter, color: '#007EC4'},
            resume: {icon: faFilePdf, color: '#FF0000'},
          }
          return (
            <LabelLI key={uuid.v4()} aria-label={profile.network}>
              <Anchor href={profile.url} aria-label={profile.network}>
                <FontAwesomeIcon
                  icon={fontAwesomeIcons[profile.network].icon}
                  color={fontAwesomeIcons[profile.network].color}
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
              label
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
