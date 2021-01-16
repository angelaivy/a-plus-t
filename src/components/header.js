import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import Icon from '../images/heartInfinity.png'

export default function Header({ siteTitle }) {

  // const handleClick = () => {
  //   document.querySelector('header nav ul').className = "showMenu";
  // }

  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);  
  }

  Header.propTypes = {
    siteTitle: PropTypes.string,
  }
  
  Header.defaultProps = {
    siteTitle: ``,
  }

  return (
    <header>
      <nav>
        <button id="menu" onClick={handleToggle}><img src={Icon} alt=""/>Menu</button>

        <ul id="mobileMenu" className={isActive ? null : "showMenu"}>
          <li><Link to="/">Home Page</Link></li> 
          <li><Link to="/location">Location & Event Details</Link></li>
          <li><Link to="/rsvp">RSVP & Regsistry</Link></li>
        </ul>
        <ul className="desktopMenu">
          <li><Link to="/location">Location & Event Details</Link></li>
          <li><Link to="/"><img src={Icon} alt=""/> Home Page</Link></li> 
          <li><Link to="/rsvp">RSVP & Regsistry</Link></li>
        </ul>
      </nav>
    </header>
  )
}

// const Header = ({ siteTitle }) => (
//   <header>
//     <nav>
//       <ul>
//         <li><Link to="/location">Location & Event Details</Link></li>
//         <li><Link to="/"><img src={Icon} alt="Heart Infinity"/><span>#WilsonUponAStar</span></Link></li> 
//         <li><Link to="/rsvp">RSVP & Regsistry</Link></li>
//       </ul>
//     </nav>
//   </header>
// )

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

// export default Header
