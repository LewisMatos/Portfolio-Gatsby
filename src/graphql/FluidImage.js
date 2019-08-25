import { graphql } from "gatsby"

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1500) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
export const pageQuery = graphql`
  query profileImage{
    profileimage: file(relativePath: { eq: "profileimage.jpg" }) {
      ...fluidImage
    }
    imageOne: file(relativePath: { eq: "911autodr.png" }) {
      ...fluidImage
    }
    imageTwo: file(relativePath: { eq: "vidup.png" }) {
      ...fluidImage
    }
    imageThree: file(relativePath: { eq: "iartist.png" }) {
      ...fluidImage
    }
    imageFour: file(relativePath: { eq: "birdgame.png" }) {
      ...fluidImage
    }
    imageFive: file(relativePath: { eq: "minimaxtictactoe.png" }) {
      ...fluidImage
    }
  }
`;