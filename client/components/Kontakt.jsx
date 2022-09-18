import React from 'react'

import NavKontakt from './NavKontakt'
import Header from './Header'

function Kontakt(){
  return (
    <section id="body-kontakt">
      <Header />
      <NavKontakt />
      <div className="hero">
        <h1 className="hero-title">Kontakt</h1>
      </div>
      <div className="hero-img">
        <div id="image-kontakt"></div>
	    </div>
      <div className='kontakt-container'>
        <h4 className="kontakt-title">Ich freue mich, dich kennen zu lernen!</h4>
        <ul className="icons">
        <li className="icon-item" id="email"><i className="fa-regular fa-envelope"></i><a href="mailto:roman.vonarb@gmail.com" className="email">roman.vonarb@gmail.com</a></li>
        <li className="icon-item"><i className="fa-solid fa-phone"></i><a className="phone">+41 79 609 70 36</a></li>
        <li className="icon-item"><i className="fa-brands fa-instagram"></i><a className="insta">rova_coaching</a></li>
        </ul>
      </div>
    </section>


  )
}

export default Kontakt