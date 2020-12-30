import React from "react"


const Form = () => (
    <form name="wedding-rsvp" method="POST" data-netlify="true">
      <label for="name">Name</label>
      <input id="name" type="text" required></input>

      <p>Will you be able to attend?</p>
      <label for="attending">Attending</label>
      <input type="radio" id="attending" name="attending"></input>

      <label for="not-attending">Not Attending</label>
      <input type="radio" id="not-attending" name="attending"></input>

      <label for="how-many">Number in party</label>
      <input type="number" id="how-many" name="how-many" min="0" max="8"></input>


      <p>Will you need accomodations?</p>
      <label for="hotel">Hotel</label>
      <input type="radio" id="hotel" name="accomodations"></input>

      <label for="camping">On Site Camping</label>
      <input type="radio" id="camping" name="accomodations"></input>

      <label for="no-accom">No accomodations needed</label>
      <input type="radio" id="no-accom" name="accomodations"></input>
      
      <label for="song">What song would bring you out on the dance floor?</label>
      <input id="song" type="text"></input>

      <button type="submit">Submit</button>
    </form>
)

export default Form

