import React from 'react'

function Header(){
  return (
  <header>
    <div className = "logo">
      <img src = "./images/Logo_RGB.svg" id = "logo" alt=""></img>
    </div>
    <div class = "header-info">	
		  <h3>ROVA Coaching</h3>
		  <p>Roman von Arb<br />
		    Musterstrasse 5<br />
		    5000 Biberist<br />
		    <br />
		    +41 76 000 00 00<br />
		    kontakt@rova-coaching.ch
		  </p>
    </div>
  </header>
  )
}

export default Header