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
        Name
        <input required type="text" id="fullName" name="fullName" onChange={handleChange} />
      </label>
    </p>
    <fieldset>
      <legend>Will you be able to attend?</legend>
      <p>
        <label>  
          Accepts with pleasure
          <input required type="radio" id="attending" name="attending" value="attending"/>
        </label>
      </p>
      <p>
        <label>
          Declines with regret
          <input required type="radio" id="not-attending" name="attending" value="not attending"/>
        </label>
      </p>
    </fieldset>
    <p>
      <label>
        Number in party
        <input required type="number" id="how-many" name="how-many" min="1" max="10" onChange={handleChange} />
      </label>
    </p>
    <fieldset>
      <legend>Will you need accomodations?</legend>
      <p>
        <label>
          Hotel
          <input required type="radio" id="hotel" name="accomodations" value="hotel" onChange={handleChange} />
        </label>
      </p>
      <p>
        <label>
          On site RVing
          <input required type="radio" id="rv" name="accomodations" value="rv" onChange={handleChange} />
        </label>
      </p>
      <p>
        <label>
          On site camping
          <input required type="radio" id="camping" name="accomodations" value="camp" onChange={handleChange} />
        </label>
      </p>
      <p>
        <label>
          No accomodations needed
          <input required type="radio" id="no-accom" name="accomodations" value="none" onChange={handleChange} />
        </label>
      </p>
    </fieldset>
    <p>
      <label>
        What song would bring you out on the dance floor?
        <input id="song" type="text" name="song" onChange={handleChange} />
      </label>
    </p>
    <p>
      <button type="submit">Submit</button>
    </p>
  </form> 
  )
}

