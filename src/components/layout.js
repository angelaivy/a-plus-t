import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"
import "./styles.scss"

const Layout = ({ children }) => {
  return (
    <div>
      <div className="unsupported-browser"></div>
      <div className="pageContainer">
        <div className="innerContainer">
          <Header/>
            <main className="container">{children}</main>
        </div>
      </div>
      <Footer />
    </div>
    )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
