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
        <p className='text-kontakt'>Meine Praxis befindet sich an der <strong>Werkhofstrasse 6a, Biberist</strong>.</p>
        {/* <div className='iconsmap'> */}
        <ul className="icons">
        <li className="icon-item" id="email"><i className="fa-regular fa-envelope"></i><a href="mailto:roman.vonarb@gmail.com" className="email">rova.coaching@gmail.com</a></li>
        <li className="icon-item"><i className="fa-solid fa-phone"></i><a className="phone" href="tel:0041796097036">+41 79 609 70 36</a></li>
        <li className="icon-item"><i className="fa-brands fa-instagram"></i><a className="insta">rova_coaching</a></li>
        </ul>
        {/* <div class="map-responsive">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2711.8759313016467!2d7.552967615669368!3d47.179865679158716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e2840a2d610d1%3A0xa4aef5e2fb9ed4c3!2sWerkhofstrasse%206A%2C%204562%20Biberist%2C%20Switzerland!5e0!3m2!1sen!2snz!4v1663532408854!5m2!1sen!2snz" width="600" height="450" style={{border: '0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div> */}
        {/* </div> */}
      </div>
    </section>


  )
}

export default Kontakt