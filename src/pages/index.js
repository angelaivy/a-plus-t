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
      <Link to="/rsvp/">RSVP & Registry</Link>
      <Link to="/location/">Location Details</Link>
    </section>

    <section>
      <h2>Formal Details</h2>
      <p>Time, location, map, what to wear</p>
      <p>Details (Link to page)</p>
    </section>

    <section>
      <h2>Our Story & Wedding Party</h2>
    </section>

    <section>
      <h2>A few photos</h2>
    </section>
  </Layout>
)

export default IndexPage
