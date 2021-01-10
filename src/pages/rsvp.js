import React from "react"
import Layout from "../components/layout"
import Form from "../components/form"
import SEO from "../components/seo"

const Rsvp = () => (
  <Layout>
    <SEO title="RSVP & Registry" />
    <h1>RSVP & Registery</h1>
    <h2>RSVP</h2>

    <Form />
    <div hidden id="confirm">
      <p>Thank you! Your response has been confirmed.</p>
    </div>

    <h2>Registry</h2>
    <p>We are honored you will share in our special day. Your presence is our gift!</p>
    <p>If you were thinking of giving a gift to help us on our way, a gift of cash toward our house would really make our day. However, if you prefer a gift, feel free to surprise us in your own special way. Visit our registry for options at <a href="https://www.honeyfund.com/wedding/ivy-wilson">Ivy-Wilson Registry</a>.</p>
  </Layout>
)

export default Rsvp

