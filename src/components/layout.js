/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
//import BackgroundSection from './BackgroundSection'

//import Header from "./header"
import Footer from "./footer"
import "./styles.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
      // <BackgroundSection className="siteBG">
      <div>
      {/* <Header /> */}
      <div>
      <main>{children}</main>
      </div>
      <Footer />
      </div>
     
      // </BackgroundSection>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
