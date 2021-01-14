import React from "react"
import Helmet from "react-helmet"
import { withPrefix } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import Lace from "./../images/creamLace.svg"
import ImageGrid from "../components/masonry"

const IndexPage = (props) => (
  <Layout>
  <Helmet>
      <script src={withPrefix('scripts.js')} type="text/javascript" />
  </Helmet>
  <SEO title="Home" />
    <section className="hero">
      <p>Together with their parents</p>
      <h1>
        <span>Angela Jean Ivy <sub>&</sub></span> 
        <span>Terry Jay Wilson</span>
      </h1>
      <div className="intro">
        <div className="image">
          <Image />
        </div>
        <div className="details">
          <h2>Request the pleasure of your company to celebrate their marriage</h2>
          <span className="infin">&infin;</span>
          <h3>June 12, 2021</h3>
          <h4>#WilsonUponAStar</h4>
          <p>4:00 pm</p>
          <p>Dusty Spur Ranch<br/>21731 N Wenas Rd.<br/>Selah, WA 98942</p>
        </div>
      </div>
    </section>
    <div className="lace"><img src={Lace} alt=""/></div>
    <section className="mainContent">
      <h4>A Note for Guests</h4>
      <p>Hi Everyone! Thank you so much for visiting our wedding website! We are very excited to celebrate our day with our closest family & friends.</p>
      <p>We are monitoring the COVID-19 situation closely. We will keep this page updated if plans change, however at this time we are still planning on moving forward with the full wedding. We are hopeful with vaccines being rolled out and the wedding being held outdoors that it will allow for a safe space to celebrate!</p>
      <p>Make sure to tag us #WilsonUponAStar in your social media posts so we have a compilation of photos from our day! Since we've met, Terry & I have always made a wish at 11:11 when we catch it, especially when we were long distance.</p>
      <div className="lace"><img src={Lace} alt=""/></div>
      <h4>Our Story <small>(as told by Angela)</small></h4>
      <p>We met at a mutual friends house several years ago, around 2012, right as I was about to move to Seattle. We hit it off right away but we both had big things going on in our lives and the timing just wasn't right. We kept in touch over the years, including dating long distance a couple of times, but the universe had other plans and lessons for us at that time. Terry was focused on his son, and I was building my career in the city.</p>
      <p>Terry & I have come to realize our lives are full of synchronicities and parallels. It's fate. Over the years, our paths kept crossing and in February 2019 we decided to give it one more go at a relationship. By this time, I had a solid career, and the ability to work remotely occasionally. Although we were long distance, this time it just felt like we could finally make it work. It wasn't always easy, but it all was so worth it. In March of 2020, I made the move temporarily to Yakima, to be with Terry and his son, Justin.</p>
      <p>Terry proposed to me on Mother's Day - May 10, 2020 at one of my favorite and most important places, my family cabin over on Hood Canal. He was very sneaky and I was not expecting it. He had asked my dad the week or so before, and even had the ring delivered to the house. Due to the pandemic, this took planning! I didn't expect a thing. It was perfect.</p>
      <p>After our wedding, we plan on moving back over to the west side of Washington. We hope to buy a house this year, and get Justin started in middle school! We are so grateful for our family and the love and support they have always unconditionally shown us. The love and gratitude we have for them is endless.</p>
      <ImageGrid />
    </section>
    
  </Layout>
)

export default IndexPage;