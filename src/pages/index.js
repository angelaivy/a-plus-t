import React from "react"
import Helmet from "react-helmet"
import { withPrefix } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import ImageRose from "../components/imageRose"

const IndexPage = (props) => (
  <Layout>
  <Helmet>
      <script src={withPrefix('scripts.js')} type="text/javascript" />
  </Helmet>
  <SEO title="Home" />
    <section className="hero">
      <p className="showFullscreen">Save the Date!</p>
      <h1>
        <span>Angela Jean Ivy</span>    
        <span className="infin">&infin;</span>
        <span>Terry Jay Wilson</span>
      </h1>
      <div className="intro">
      <div className="image">
          <Image />
        </div>
        <h2>TIE THE KNOT</h2>
        <h3>June 12, 2021</h3>
        <p><strong>Where the desert meets the trees ~ Wenas,&nbsp;WA</strong></p>
      </div>
    </section>
    <hr></hr>
    <section className="mainContent">
      <p>Hi Everyone! Thank you so much for visiting our wedding website! We are very excited to celebrate our day with our closest family & friends.</p>
      <p>At this time, we are planning on moving ahead with the full wedding and as the date gets closer, we will be updating plans as needed for COVID restrictions.</p>
      <p>Our wedding will be held on private property in Wenas, WA. It is a semi-destination for most folks, so we are looking at different options for lodging and/or transportation as we have guests coming from all over. It's about a 45 minute drive NW from Yakima. Our ceremony will be held on on a hill, overlooking the valley up to the Cascades, followed by a dinner and celebration.</p>
      <p>More details to come regarding lodging options, directions, RSVP, time, etc. following the formal invitations. Feel free to <a href="mailto: angelaivy1111@gmail.com">email us</a> if you have any questions.</p>
      <ImageRose />
      <div className="signOff">
        <p>Cheers!</p>
        <p>Angela & Terry</p>
      </div>
    </section>
  </Layout>
)

export default IndexPage;