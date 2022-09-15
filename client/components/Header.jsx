import React from 'react'
import { Link } from 'react-router-dom'

function Header(){
  return (
  <header className="header">
    <div className = "logo">
      <Link to='/'>
      <img src = "./images/Logo_RGB.svg" id = "logo" alt=""></img>
      </Link>
    </div>
    <div className = "header-info">	
		  <p>ROVA Coaching<br />
		    Musterstrasse 5<br />
		    5000 Biberist<br />
		    +41 76 000 00 00<br />
		    kontakt@rova-coaching.ch
		  </p>
    </div>
  </header>
  )
}

export default Header