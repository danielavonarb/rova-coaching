import React from 'react'

import NavAbout from './NavAbout'
import Header from './Header'
import Footer from './Footer'

function About(){
  return (
    <section id="body-about">
      <Header />
      <NavAbout />
      <div className="hero">
        <h1 className="hero-title">Über Mich</h1>
      </div>
      <div className="hero-img">
        <div id="image-about"></div>
	    </div>
      <div className='about-container'>
        <div className='aboutcontainer'>
        <h4 className="about-title">Hallo, ich bin Roman!</h4>
        <p className='about-text'>Ich bin zertifizierter Mentalcoach und Psychosozialer Berater. Ich liebe es, mich ständig weiterzuentwickeln und ein
          abenteuerliches Leben zu führen. Zielstrebig und mit viel Freude gehe ich meinen Weg und trotze
          meinen eigenen Zweifeln.</p>
        <p className='about-text'>Bestrebt führe ich ein gesundes Leben, da ein glückliches Leben mit der Gesundheit
          zusammenhängt. Ein gesunder Geist mit wohltuenden Gedanken ist dabei das A und O. Es macht mir
          Freude, diese Erfahrungen und dieses Wissen weiterzugeben.</p>
        <p className='about-text'>Meinen Ausgleich und das Tanken von Energie und Zuversicht
          bewerkstellige ich mit meinen Hobbys Kung Fu, segeln auf meinem
          eigenen Segelboot und das Bewegen in der freien Natur.</p>
        <p className='about-text'>Ich freue mich auf deine Kontaktaufnahme.</p>
        <p className='about-text'>Roman von Arb</p>
        <a className='button-link' href="/kontakt"><button className="button-kontakt-about">Kontakt</button></a>
        </div>
        <div className='about-image'>
          <img className='roman' src='images/about.jpeg'></img>
        </div>
      </div>
      <Footer />
    </section>


  )
}

export default About