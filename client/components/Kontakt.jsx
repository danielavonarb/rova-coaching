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
        <div className='kontaktcontainer'>
        <h4 className="kontakt-title">Hallo, ich bin Roman!</h4>
        <p className='kontakt-text'>Ich bin zertifizierter Mentalcoach. Ich liebe es, mich ständig weiterzuentwickeln und ein
          abenteuerliches Leben zu führen. Zielstrebig und mit viel Freude gehe ich meinen Weg und trotze
          meinen eigenen Zweifeln.</p>
        </div>
      </div>
    </section>


  )
}

export default Kontakt