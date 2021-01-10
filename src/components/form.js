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
    const confirm = document.getElementById('confirm');
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => form.setAttribute('hidden', ""))
      .then(() => confirm.removeAttribute('hidden'))
      // .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

return (
    <form 
      id="wedding-rsvp" 
      name="wedding-rsvp" 
      method="POST" 
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
      <input required type="text" id="name" name="name" onChange={handleChange}>Name</input>
    </label>
    </p>
    <fieldset>
      <legend>Will you be able to attend?</legend>
      <p>
        <label>
          <input required type="radio" id="attending" name="attending" onChange={handleChange}>Accepts with pleasure</input>
        </label>
      </p>
      <p>
        <label>
          <input required type="radio" id="not-attending" name="attending" onChange={handleChange}>Declines with regret</input>
        </label>
      </p>
    </fieldset>
    <p>
      <label>
        <input required type="number" id="how-many" name="how-many" min="1" max="10" onChange={handleChange}>Number in party</input>
      </label>
    </p>
    <fieldset>
      <legend>Will you need accomodations?</legend>
      <p>
        <label>
          <input required type="radio" id="hotel" name="accomodations" onChange={handleChange}>Hotel</input>
        </label>
      </p>
      <p>
        <label>
          <input required type="radio" id="rv" name="accomodations" onChange={handleChange}>On site RVing</input>
        </label>
      </p>
      <p>
        <label>
          <input required type="radio" id="camping" name="accomodations" onChange={handleChange}>On site camping</input>
        </label>
      </p>
      <p>
        <label>
          <input required type="radio" id="no-accom" name="accomodations" onChange={handleChange}>No accomodations needed</input>
        </label>
      </p>
    </fieldset>
    
    <p>
      <label>
        <input id="song" type="text" name="song">What song would bring you out on the dance floor?</input>
      </label>
    </p>
    <p>
      <button type="submit">Submit</button>
    </p>
  </form> 
  )
}

