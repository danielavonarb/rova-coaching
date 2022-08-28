import React from 'react'

import Nav from './Nav'
import Header from './Header'

function Home(){
  return (
    <section id="body-home">
      <Header />
      <div className="hero">
        <h1 className="hero-title">Mutig und gelassen durchs Leben - ich helfe dir dabei</h1>
      </div>
      <div className="hero-img">
		    <img className="image" src = "./images/home-pano02.jpg"></img>
	    </div>
      <Nav />
    </section>
  )
}

export default Home