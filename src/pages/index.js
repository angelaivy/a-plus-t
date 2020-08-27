import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="hero">
      <h1>Angela & Terry</h1>
      <p>June 12, 2021 ~ Wenas, WA</p>
      <p>Countdown TImer</p>
      {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div> */}
      <Link to="/rsvp/">RSVP & Details</Link>
      <Link to="/photos/">Photos</Link>
    </section>

    <section className="wedding">
      
    </section>
    


  </Layout>
)

export default IndexPage
