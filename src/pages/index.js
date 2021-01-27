import React from "react"
import Helmet from "react-helmet"
import { withPrefix } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import Lace from "./../images/hr-ornament.svg"
import ImageGrid from "../components/masonry"
import Us3 from "../images/us/t-a_3.jpg"
import Us7 from "../images/us/t-a_7.jpg"
import { Link } from 'gatsby'


const IndexPage = (props) => (
  <Layout>
  <Helmet>
      <script src={withPrefix('scripts.js')} type="text/javascript" />
  </Helmet>
  <SEO title="Home" />
    <section className="hero">
      <p>Together with their parents</p>
      <h1>
        <span>Terry Jay Wilson <sub>&</sub></span> 
        <span>Angela Jean Ivy</span>
      </h1>
      <div className="intro">
        <div className="image">
          <Image />
        </div>
        <div className="details">
          <h2>Request the pleasure of your company to celebrate their&nbsp;marriage<br/>June 12, 2021</h2>
          <p>Ceremony 4:00 pm</p>
          <p>Dusty Spur Ranch<br/>21731 N Wenas Rd. Selah,&nbsp;WA&nbsp;98942</p>

          <span className="infin">&infin;</span>
          <h3>#WilsonUponAStar</h3>
        </div>
      </div>
    </section>
    <div className="lace"><img src={Lace} alt=""/></div>
    <section className="mainContent">
      <h3>A Note for Guests</h3>
      <p>Hi Everyone! Thank you so much for visiting our wedding website! We are very excited to celebrate our day with our closest family & friends.</p>
      <p>If you are planning on coming to the ceremony, please arrive with enough time to be transported to the lookout. Last wagon/pickup leaves at 3:45pm. There will be drinks provided at the dropoff/lookout spot, as well as an outhouse. Ceremony is scheduled to start at 4:00pm. You can refer to the <Link to="/location">map</Link> to get an idea of the layout.</p>
      <p>We are monitoring the COVID-19 situation, and we will keep this page updated if plans change. At this time we are still planning on moving forward with the wedding. Along with being held outdoors, we will have more space at dinner tables, hand sanitizer stationed at yard game areas and dinner tables, as well as individual props for the photo booth. We have backup plans for weather (tents, heaters) so we hope guests can be comfortable in the unknown spring weather. It's going to be a fun time! <span role="img" aria-label="heart">❤️</span></p>
      <p>Don't forget to fill out the <Link to="/rsvp">RSVP form</Link> so we know what to plan for! Please note, the invitation sent in the mail does have the wrong zip code, sadly. <span role="img" aria-label="Face with Hand Over Mouth">🤭</span> Correction in address above! </p>
      <h3 className="mT50">Our Story <small>(as&nbsp;told&nbsp;by&nbsp;Angie)</small></h3>
      <div className="storyGrid">
        <p>We met at a mutual friends house several years ago, around 2012, right as I was about to move to Seattle. We hit it off right away but we both had big things going on in our lives and the timing just wasn't right. We kept in touch over the years, including dating long distance a couple of times, but the universe had other plans and lessons for us at that time. Terry was focused on his son, and I was building my career in the city.</p>
        <p>Terry & I have come to realize our lives are full of synchronicity and parallels. It's fate. Over the years, our paths kept crossing and in February 2019 we decided to give it one more go at a relationship. By this time, I had a solid career, and the ability to work remotely occasionally. Although we were long distance, this time it just felt like we could finally make it work. It wasn't always easy, but it all was so worth it. In March of 2020, I made the move temporarily to Yakima, to be with Terry and his son, Justin.</p>
        <img src={Us7} alt="Angela, Terry, & Justin at the beach in Seattle."/>
        <p>Terry proposed to me on Mother's Day - May 10, 2020 at one of my favorite and most important places, my family cabin over on Hood Canal. He was very sneaky! He had talked to my parents the week or so before, and even had the ring delivered to the house with me there and working. Due to the pandemic, this took planning! I didn't expect a thing. It was perfect.</p>
        <img src={Us3} alt="Angela showing off her ring"/>
        <p>After our wedding, we plan on moving back over to the west side of Washington. We hope to buy a house this year, and get Justin started in middle school! We are so grateful for our family and the love and support they have always unconditionally shown us. The love and gratitude we have for them is endless.</p>
        <div className="mandala m1">&nbsp;</div>
        <div className="mandala m2">&nbsp;</div>
      </div>
    </section>
    <div className="lace"><img src={Lace} alt=""/></div>
    <section className="imageGrid">
      <ImageGrid />
    </section>
  </Layout>
)

export default IndexPage;