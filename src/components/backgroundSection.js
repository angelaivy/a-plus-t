import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className, children }) => (
  <StaticQuery
    query={graphql`
      query {
        siteBG: file(relativePath: { eq: "backgroundScenery.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 2040) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.siteBG.childImageSharp.fluid
      return (
        <BackgroundImage
          className={className}
          fluid={imageData}
        >
          <div>{children}</div>
        </BackgroundImage>
      )
    }}
  />
)


  export default BackgroundSection
