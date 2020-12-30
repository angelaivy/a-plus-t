import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"
import "./styles.scss"

const Layout = ({ children }) => {
  return (
    <div>
      <div class="unsupported-browser"></div>
      <div className="pageContainer">
        <Header/>
        <div className="heroImage"><p>Save the Date!</p></div>
        <div className="container">
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </div>
    )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
