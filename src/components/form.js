import React from "react"
import { navigate } from 'gatsby-link'

function encode(data) {
  return Object.keys(data).map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&')
}

export default function Form() {
  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

return (
    <form 
      id="wedding-rsvp" 
      name="wedding-rsvp" 
      method="POST" 
      action="/thank-you/" 
      data-netlify="true" 
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
    <input type="hidden" name="form-name" value="wedding-rsvp" />
    <p hidden>
      <label>
        Don’t fill this out: 
        <input name="bot-field" onChange={handleChange} />
      </label>
    </p>
    <p>
    <label>
      Name
      <input type="text" id="name" name="name" onChange={handleChange} />
    </label>
    </p>
    <p>Will you be able to attend?</p>
    <p>
      <label>
        Accepts with pleasure
        <input type="radio" id="attending" name="attending" onChange={handleChange} />
      </label>
    </p>
    <p>
      <label>
        Declines with regret
        <input type="radio" id="not-attending" name="attending" onChange={handleChange} />
      </label>
    </p>
    <p>
      <label>
        Number in party
        <input type="number" id="how-many" name="how-many" min="0" max="10" onChange={handleChange} />
      </label>
    </p>
    <p>Will you need accomodations?</p>
    <p>
      <label>
        Hotel
        <input type="radio" id="hotel" name="accomodations" onChange={handleChange} />
      </label>
    </p>
    <p>
      <label>
        On site RVing
        <input type="radio" id="rv" name="accomodations" onChange={handleChange} />
      </label>
    </p>
    <p>
      <label>
        On site camping
        <input type="radio" id="camping" name="accomodations" onChange={handleChange} />
      </label>
    </p>
    <p>
      <label>
        No accomodations needed
        <input type="radio" id="no-accom" name="accomodations" onChange={handleChange} />
      </label>
    </p>
    <p>
      <label>
        What song would bring you out on the dance floor?
        <input id="song" type="text" name="song"/>
      </label>
    </p>
    <p>
      <button type="submit">Submit</button>
    </p>
    
  </form> 
)
}

