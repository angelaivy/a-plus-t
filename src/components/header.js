import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Icon from '../images/heartInfinity.png'

const Header = ({ siteTitle }) => (
  <header>
    <nav>
      <ul>
        {/* <li><Link to="/location">Location & Event Details</Link></li> */}
        <li><Link to="/"><img src={Icon} alt="Heart Infinity"/></Link></li>
        {/* <li><Link to="/rsvp">RSVP & Regsistry</Link></li> */}
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
