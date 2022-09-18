import React from 'react'

import NavAbout from './NavAbout'
import Header from './Header'

function Workshops(){
  return (
    <section id="body-workshops">
      <Header />
      <NavAbout />
      <div className="hero">
        <h1 className="hero-title">Workshops</h1>
      </div>
      <div className="hero-img">
        <div id="image-workshops"></div>
	    </div>
      <div className='workshops-container'>
        <h4 className="workshops-title">Hallo, ich bin Roman!</h4>
      </div>
    </section>


  )
}

export default Workshops