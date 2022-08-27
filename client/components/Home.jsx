import React from 'react'

import Nav from './Nav'

function Home(){
  return (
    <body id="body-home">
      <div className="hero">
        <h1 className="hero-title">Mutig und gelassen durchs Leben - ich helfe dir dabei</h1>
      </div>
      <div className="hero-img">
		    <img className="image" src = "./images/wasser01.jpeg"></img>
	    </div>
      <Nav />
    </body>
  )
}

export default Home