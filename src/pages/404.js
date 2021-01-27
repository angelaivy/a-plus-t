import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section>
    <h1>OOPS!</h1>
    <p>This page doesn't exsist!</p>
    <p>Try going to the <Link to="/">home page</Link>.</p>
    </section>
   
  </Layout>
)

export default NotFoundPage
