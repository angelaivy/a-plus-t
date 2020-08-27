import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Location = () => (
  <Layout>
    <SEO title="Location" />
    <h1>Location & Event Details</h1>
    <Link to="/">Go back to the homepage</Link>
    <Link to="/rsvp">RSVP & Regsistry</Link>
  </Layout>
)

export default Location
