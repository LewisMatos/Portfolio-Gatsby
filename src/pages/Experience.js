import React from "react";
import styled from "styled-components"

const Section = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 2rem;
`

let Experience = ({work}) => {
  return (
    <Section className="" id="">
    <div className="">
      <div className="">
        <h2 className="">Experience</h2>
        {work.map(work => {
          return (
            <div className="" key={work.position}>
              <div className="">
                <div className="">
                  <div className=" ">{work.company}</div>
                  <div className="">{`${work.startDate} - ${work.endDate}`}</div>
                </div>
                <h6 className="">{work.position}</h6>
                <ul>
                  {work.summary.map((summary, index) => {
                    return (
                      <li className="" key={index}>
                        {summary.header}
                        <div className="">
                          <ul className="">
                            {summary.bullet.map((bullet, index) => {
                              return <li key={index}>{bullet}</li>;
                            })}
                          </ul>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <h6 className="resume-date text-md-right">
                {/* <span className="">{`${work.startDate} - ${work.endDate}`}</span> */}
              </h6>
            </div>
          );
        })}
      </div>
    </div>
  </Section>
  )
}

export default Experience;
