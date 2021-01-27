import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../images/heroMobile.jpg"
import Lace from "./../images/hr-ornament.svg"


const Location = () => (
  <Layout>
    <SEO title="Location" />
    <section className="hero">
      <h1>The Details</h1>
      <img src={Hero} alt="Wenas Valley" />
      <h2>What to expect</h2>
      <p>Our wedding is located in the Wenas Valley at the Grooms parents ranch located about 30 minutes Northwest from Selah. The ceremony will be held on a hill overlooking the valley up to the Cascades; the reception will be held by the house in a grassy field. We want guests to be aware that parking will be at the reception area and we will be transporting folks on a fun little adventure up to the ceremony via wagon ride and pickup trucks. If this seems like too much of an adventure, feel free to arrive later for the reception only.</p>
      <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1PMW9Ted_qTx3gMlpvquPFG7r8FZAmcQC" title="A map of the ceremony and reception points on the property."></iframe>
    </section>
    <div className="lace"><img src={Lace} alt=""/></div>
    <section>
      <h3>Attire</h3>
      <p>Dressy Casual - We are out in the desert sagebrush for the ceremony and a grassy field for reception so keep that in mind when picking out your footwear.</p>
      <h3>Celebration</h3>
      <p>Along with dancing the night away on the dance floor, we will also have a photo booth, croquet, corn hole, and horseshoes set up. Personal goodie bags will be provided for photobooth props and sanitizer will be stationed at each game.</p>
      <h3>Accommodations</h3>
      <p>For overnight accomodations we have a couple different options:</p>
        <ul>
          <li>
            <p>
              <strong>Hotel</strong><br/>
              The <a href="https://www.choicehotels.com/washington/selah/quality-inn-hotels/wa310?source=gyxt" target="_blank" rel="noreferrer">Quality Inn Selah North Park</a> has rooms blocked out for our party. Please mention Ivy-Wilson wedding for a discounted rate for June 11 - 13th. Book one or both nights. Book before Friday, May 21, 2021 to get the group rate. 
            </p>
          </li>
          <li>
            <p>
              <strong>On Site Camping!</strong><br/>
              We have room for RV's and camping. Come party and camp! Let us know on the RSVP form if you plan on staying, and if you have an RV or not. We just need to know how many to plan for. No hookups, but there will be an outhouse. We have an area cleared out for campers & tents, with plenty of room for trucks and trailers. You can check out the map to see where the camping spot will be.
            </p>
          </li>
        </ul>
      <h3>Menu</h3>
      <h4>Drinks</h4>
      <p>Beer & Wine, Mojito mocktail and other non-alcoholic options</p>
      <h4>Dinner</h4>
      <p>Light munchies will be provided during reception hour & BBQ fare for dinner. Father of the Bride will be providing smoked meats (TBD) for main dish. Sides will include crab stuffed mushrooms, mac & cheese, baked beans, fruit plate.</p>
      <h4>Dessert</h4>
      <p>S'more bar, cake, cupcakes</p>
      </section>
      <div className="lace"><img src={Lace} alt=""/></div>
      <section className="schedule">
      <h2>Schedule</h2>
      <ul>
        <li>
          <span className="time">3:00-4:00 pm</span>
          <span className="info">Guest arrivals</span>
        </li>
        <li>
          <span className="time">3:45 pm</span>
          <span className="info">Last call for a ride to the Ceremony!</span>
        </li>
        <li>
          <span className="time">4:00 pm</span>
          <span className="info">Ceremony at Lookout</span>
        </li>
        <li>
          <span className="time">4:30-5:30 pm</span>
          <span className="info">Wedding party photos</span>
          <span className="info">Pickups/wagon (priority lesser abled, younger children) start taking guests down, light snacks/munchies on tables, bar opens</span>
        </li>
        <li>
          <span className="time">5:30-6:30 pm</span>
          <span className="info">Meal service / Cake / Speeches</span>
        </li>
        <li>
          <span className="time">6:30 pm</span>
          <span className="info">~Celebration~</span>
          <span className="info">Bride & Grooms First Dance</span>
          <span className="info">Father of the Bride Dance</span>
          <span className="info">Bouquet / Garter Toss</span>
          <span className="info">Party / Dancing / Photo Booth / Yard Games</span>
        </li>
      </ul>
    </section>
    
  </Layout>
)

export default Location
