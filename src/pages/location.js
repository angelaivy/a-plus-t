import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Location = () => (
  <Layout>
    <SEO title="Location" />
    <h1>Location & Event Details</h1>
    <h2>What to expect</h2>
    <p>Our wedding is located at the Grooms parents private property in the Wenas valley located about 30 minutes northwest from Selah. The ceremony will be held on a hill overlooking the valley up to the cascades, and the reception will be held by the house in a grassy field. We want guests to be aware that we will be parking at the reception area and we will be transporting folks on a fun little adventure up to the ceremony via wagon ride and pickup trucks. If this seems like too much of an adventure, feel free to arrive later for the reception only. </p>
    <h3>Attire</h3>
    <p>Dressy Casual - We are out in the desert sagebrush for the ceremony and a grassy field for reception so keep that in mind when picking out your footwear. </p>
    <h3>Accommodations</h3>
    <p>For guests arriving out of town, the Quality Inn in Selah, WA has rooms blocked. We also have options for camping/RVing on site as well, no hookups. Please mark on the RSVP what type of accommodations you will need, as this will determine space & shuttle services needed. </p>

    <h2>Schedule</h2>
    <ul>
      <li>
        <span className="time">4pm</span>
        <span className="info">Ceremony</span>
      </li>
      <li>
        <span className="time">4:30-5:30</span>
        <span className="info">Wedding party photos</span>
        <span className="info">Pickups/wagon(priority grandparents, younger children) start taking guests down, people can walk if able, light snacks/munchies on tables, beer wine service starts</span>
      </li>
      <li>
        <span className="time">5:30-6:30</span>
        <span className="info">Meal service / Cake</span>
      </li>
      <li>
        <span className="time">6:30</span>
        <span className="info">~Celebration</span>
        <span className="info">First Dance with Groom</span>
        <span className="info">Father of the Bride Dance</span>
        <span className="info">Bouquet / Garter Toss</span>
        <span className="info">Party / Dancing / Photo Booth</span>
      </li>
      <li>
        <span className="time"></span>
        <span className="info"></span>
      </li>
    </ul>
  </Layout>
)

export default Location
