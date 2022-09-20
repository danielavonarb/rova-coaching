import React, { useState, useEffect } from 'react'

import Nav from './Nav'
import Header from './Header'
import Footer from './Footer'

function Home(){

  return (
    <section id="body-home">
      <Header />
      <div className="hero">
        <h1 className="hero-title">Mutig und gelassen durchs Leben - ich helfe dir dabei</h1>
      </div>
      <div className="hero-img">
        <div id="image-home"></div>
        {/* <picture className="image">
          <source media="(min-width: 900px)" srcSet="./images/home-pano02.jpg"></source>
          <source media="(min-width: 375px)" srcSet="./images/IMG_4906.jpg"></source>
        </picture> */}
	    </div>
      <Nav />
      <Footer />
    </section>
  )
}

export default Home

