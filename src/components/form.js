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

  const handleTY = (e) => {
    let attend = document.querySelector('input#attending');
    let noAttend = document.querySelector('input#not-attending')
    const form = document.querySelector('form');
    if (attend.checked) {
      form.action = `/thank-you/`;
      console.log('attend')
    } else if (noAttend.checked) {
      form.action = `/not-attending/`
      console.log('no attend')
    }
  }

return (
    <form 
      id="wedding-rsvp" 
      name="wedding-rsvp" 
      method="POST" 
      action={handleTY}
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
      <input required type="text" id="name" name="name" onChange={handleChange} />
    </label>
    </p>
    <p>Will you be able to attend?</p>
    <p>
      <label>
        Accepts with pleasure
        <input required type="radio" id="attending" name="attending" onChange={handleChange} />
      </label>
    </p>
    <p>
      <label>
        Declines with regret
        <input required type="radio" id="not-attending" name="attending" onChange={handleChange} />
      </label>
    </p>
    <p>
      <label>
        Number in party
        <input required type="number" id="how-many" name="how-many" min="1" max="10" onChange={handleChange} />
      </label>
    </p>
    <p>Will you need accomodations?</p>
    <p>
      <label>
        Hotel
        <input required type="radio" id="hotel" name="accomodations" onChange={handleChange} />
      </label>
    </p>
    <p>
      <label>
        On site RVing
        <input required type="radio" id="rv" name="accomodations" onChange={handleChange} />
      </label>
    </p>
    <p>
      <label>
        On site camping
        <input required type="radio" id="camping" name="accomodations" onChange={handleChange} />
      </label>
    </p>
    <p>
      <label>
        No accomodations needed
        <input required type="radio" id="no-accom" name="accomodations" onChange={handleChange} />
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

