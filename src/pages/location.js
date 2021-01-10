import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Location = () => (
  <Layout>
    <SEO title="Location" />
    <h1>Location & Event Details</h1>
    <h2>What to expect</h2>
    <p>Our wedding is located in the Wenas Valley at the Grooms parents ranch located about 30 minutes Northwest from Selah. The ceremony will be held on a hill overlooking the valley up to the Cascades; the reception will be held by the house in a grassy field. We want guests to be aware that parking will be at the reception area and we will be transporting folks on a fun little adventure up to the ceremony via wagon ride and pickup trucks. If this seems like too much of an adventure, feel free to arrive later for the reception only.</p>
    <h3>Attire</h3>
    <p>Dressy Casual - We are out in the desert sagebrush for the ceremony and a grassy field for reception so keep that in mind when picking out your footwear.</p>
    <h3>Accommodations</h3>
    <p>For overnight accomodations we have a few different options:</p>
      <ul>
        <li>
          <p>
            <strong>Hotel</strong><br/>
            The Quality Inn in Selah has rooms blocked out for our party.
          </p>
        </li>
        <li>
          <p>
            <strong>On Site Camping</strong><br/>
            We have room for RV's and camping. Let us know on the RSVP form if you plan on staying, and if you have an RV or not. We just need to know how many to plan for. No hookups. There will be an outhouse. 
          </p>
        </li>
      </ul>
    <h3>Menu</h3>
    <h4>Drinks</h4>
    <p>Beer & Wine, Non Alcoholic options</p>
    <h4>Dinner</h4>
    <p>Light munchies will be provided during reception hour & BBQ fare for dinner. Father of the Bride will be providing smoked meats for main dish. Sides will include crab stuffed mushrooms, mac & cheese, baked beans, fruit plate.</p>
    <hr/>
    <h2>Schedule</h2>
    <ul>
      <li>
        <span className="time">4pm</span>
        <span className="info">Ceremony</span>
      </li>
      <li>
        <span className="time">4:30-5:30</span>
        <span className="info">Wedding party photos</span>
        <span className="info">Pickups/wagon(priority grandparents, younger children) start taking guests down, light snacks/munchies on tables, beer wine service starts</span>
      </li>
      <li>
        <span className="time">5:30-6:30</span>
        <span className="info">Meal service / Cake</span>
      </li>
      <li>
        <span className="time">6:30</span>
        <span className="info">~Celebration~</span>
        <span className="info">Bride & Grooms First Dance</span>
        <span className="info">Father of the Bride Dance</span>
        <span className="info">Bouquet / Garter Toss</span>
        <span className="info">Party / Dancing / Photo Booth</span>
      </li>
    </ul>
  </Layout>
)

export default Location
