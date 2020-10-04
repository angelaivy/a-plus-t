import React from "react"
import PropTypes from "prop-types"
import Footer from "./footer"
import "./styles.scss"

const Layout = ({ children }) => {
  return (
      <div className="container">
        <div className="inner">
          <main>{children}</main>
        </div>
          <Footer />
      </div>
    )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
