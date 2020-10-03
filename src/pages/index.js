import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
//import Image from "../components/image"

const IndexPage = (props) => (
  <Layout>
  <SEO title="Home" />
    
   <section className="hero">
      <h1>Angela Jean Ivy & Terry Jay Wilson</h1>
      <p>June 12, 2021 ~ Wenas, WA</p>
      <p>Check back on this website for more information as the date gets closer. We are planning the full wedding now and will change plans as needed with COVID.</p>
    </section>
  </Layout>
)

export default IndexPage;