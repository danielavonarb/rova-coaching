import React from 'react'

import NavPages from './NavPages'
import Header from './Header'

function About(){
  return (
    <section id="body-about">
      <Header />
      <NavPages />
      <div className="hero">
        <h1 className="hero-title">Über Mich</h1>
      </div>
      <div className="hero-img">
        <div id="image-about"></div>
	    </div>
      <div className='about-container'>
        <div className='aboutcontainer'>
        <h4 className="about-title">Hallo, ich bin Roman!</h4>
        <p className='about-text'>Ich bin zertifizierter Mentalcoach. Ich liebe es, mich ständig weiterzuentwickeln und ein
          abenteuerliches Leben zu führen. Zielstrebig und mit viel Freude gehe ich meinen Weg und trotze
          meinen eigenen Zweifeln.</p>
        <p className='about-text'>Bestrebt führe ich ein gesundes Leben, da ein glückliches Leben mit der Gesundheit
          zusammenhängt. Ein gesunder Geist mit wohltuenden Gedanken ist dabei das A und O. Es macht mir
          Freude, diese Erfahrungen und Wissen weiterzugeben.</p>
        <p className='about-text'>Meinen Ausgleich finde ich, indem ich Kung Fu lerne und praktiziere. Ausserdem liebe ich das Segeln
          auf meinem Segelboot, woraus ich viel Kraft schöpfen kann.</p>
        <p className='about-text'>Ich freue mich auf deine Kontaktaufnahme.</p>
        <a className='button-link' href="/kontakt"><button className="button-kontakt-about">Kontakt</button></a>
        </div>
        <div className='about-image'>
          <img className='roman' src='images/about.jpeg'></img>
        </div>
      </div>
    </section>


  )
}

export default About