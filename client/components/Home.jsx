import React from 'react'

import Nav from './Nav'

function Home(){
  return (
    <body id="body-home">
      <div className="hero">
        <h1 className="hero-title">Mutig und gelassen durchs Leben - ich helfe dir dabei</h1>
		    <img src = "./images/home.jpg" className="hero-img"></img>
	    </div>
      <Nav />
    </body>
  )
}

export default Home