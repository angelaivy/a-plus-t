import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Link from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>OOPS!</h1>
    <p>This page doesn't exsist! Try going back to <Link to="/">home</Link></p>
  </Layout>
)

export default NotFoundPage
