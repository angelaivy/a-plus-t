import React from "react"
import imageRose from "./../images/flowerRed.png"

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
        <label htmlFor="fullName"><strong>Name&nbsp;&nbsp;&nbsp;</strong><span className="required">(required)</span></label>
        <input required type="text" id="fullName" name="fullName" onChange={handleChange} />
      </p>
      <p>
        <label htmlFor="how-many"><strong>Number in party</strong><span className="required">(required)</span></label>
        <input required type="number" id="how-many" name="how-many" min="1" max="10" onChange={handleChange} />
      </p>
    <fieldset>
        <legend><strong>Will you be able to attend?</strong></legend>
        <span className="required">(required)</span>
        <p>
          <input required type="radio" id="attending" name="attending" value="Accepts with pleasure" onChange={handleChange} />
          <label htmlFor="attending"><strong>Accepts with pleasure</strong></label>
        </p>
        <p>
          <input required type="radio" id="not-attending" name="attending" value="Declines with regret" onChange={handleChange} />
          <label htmlFor="not-attending"><strong>Declines with regret</strong></label>
        </p>
    </fieldset>
    <fieldset>
      <legend>Will you need accomodations?</legend>
      <p>
        <input type="radio" id="hotel" name="accomodations" value="Hotel" onChange={handleChange} /> 
        <label htmlFor="hotel">Hotel</label>
      </p>
      <p>
        <input type="radio" id="rv" name="accomodations" value="RV / Trailer" onChange={handleChange} />  
        <label htmlFor="rv">On site RVing / Trailer</label>
      </p>
      <p>
        <input type="radio" id="camping" name="accomodations" value="Camping (No Rv-Trailer)" onChange={handleChange} />
        <label htmlFor="camping">On site camping (No RV-Trailer)</label>
      </p>
      <p>
        <input type="radio" id="no-accom" name="accomodations" value="None" onChange={handleChange} />
        <label htmlFor="no-accom">No accomodations needed</label>
      </p>
    </fieldset>
    <p>
    <label htmlFor="song">What song would bring you out on the dance floor?</label>    
    <input id="song" type="text" name="song" onChange={handleChange} />
    </p>
    <p>
      <button type="submit">Submit <img src={imageRose} alt=""/></button>
    </p>
  </form> 
  )
}

