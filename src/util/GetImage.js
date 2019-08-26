import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import BackgroundImage from "gatsby-background-image"


const renderImage=value=>{
  /* console.log('====================================');
  console.log(`value=>${JSON.stringify(value,null,2)}`);
  console.log('===================================='); */
  const {node}= value
  const {childImageSharp}= node
    return (
        <BackgroundImage
          fluid={childImageSharp.fluid}/>
    )
}

const ImageTwo = props => {
  console.log(props);
  const { file} = props
  return (
    <StaticQuery
      query={graphql`
        query {
          images: allFile(
            filter: { extension: { regex: "/jpeg|jpg|png|gif/" } }
          ) {
            edges {
              node {
                extension
                relativePath
                childImageSharp {
                  fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      `}
      render={({images})=>renderImage(images.edges.find(image=>image.node.relativePath===file))}
    />
  )
}

export default ImageTwo