import React from "react"
import PropTypes from "prop-types"
import Footer from "./footer"
import "./styles.scss"

const Layout = ({ children }) => {
  return (
   <div className="pageContainer">
     <div className="heroImage"><p>Save the Date!</p></div>
    <div className="container">
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
