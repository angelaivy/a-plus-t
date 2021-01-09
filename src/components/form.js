import React from "react"

const Form = () => (
  <form id="wedding-rsvp" name="wedding-rsvp" method="post" action="/thank-you/" data-netlify="true" data-netlify-recaptcha="true">
    <input name="form-name" value="wedding-rsvp" type="hidden" />

    <label htmlFor="name">Name</label>
    <input type="text" name="name"></input>

    <p>Will you be able to attend?</p>
    <label htmlFor="attending">Attending</label>
    <input type="radio" id="attending" name="attending"></input>

    <label htmlFor="not-attending">Not Attending</label>
    <input type="radio" id="not-attending" name="attending"></input>

    <label htmlFor="how-many">Number in party</label>
    <input type="number" id="how-many" name="how-many" min="0" max="8"></input>

    <p>Will you need accomodations?</p>
    <label htmlFor="hotel">Hotel</label>
    <input type="radio" id="hotel" name="accomodations"></input>

    <label htmlFor="camping">On Site Camping</label>
    <input type="radio" id="camping" name="accomodations"></input>

    <label htmlFor="no-accom">No accomodations needed</label>
    <input type="radio" id="no-accom" name="accomodations"></input>
    
    <label htmlFor="song">What song would bring you out on the dance floor?</label>
    <input id="song" type="text" name="song"></input>

    <button type="submit">Submit</button>
    <div data-netlify-recaptcha="true"></div>
  </form> 
)

export default Form

