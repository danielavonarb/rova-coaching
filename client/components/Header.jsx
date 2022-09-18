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
		    Werkhofstrasse 6a<br />
		    4562 Biberist<br />
		    +41 79 609 70 36<br />
		    rova.coaching@gmail.com
		  </p>
    </div>
  </header>
  )
}

export default Header