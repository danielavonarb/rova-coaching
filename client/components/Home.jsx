import React from 'react'

import Nav from './Nav'

function Home(){
  return (
    <>
      <div className="hero">
        <h1>Mutig und gelassen durchs Leben - ich helfe dir dabei</h1>
		    <img src = "./images/home.jpg" className="hero-img"></img>
	    </div>
      <Nav />
    </>
  )
}

export default Home