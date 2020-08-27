import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Rsvp = () => (
  <Layout>
    <SEO title="RSVP & Registry" />
    <h1>RSVP & Registery</h1>
    <Link to="/">Go back to the homepage</Link>
    <Link to="/location">Location & Event Details</Link>
  </Layout>
)

export default Rsvp
