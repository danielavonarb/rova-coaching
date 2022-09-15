import React from 'react'
import { Link } from 'react-router-dom'

import NavPages from './NavPages'
import Header from './Header'

function Mentaltraining(){
  return (
    <section id="body-mentaltraining">
      <Header />
      <NavPages />
      <div className="hero">
        <h1 className="hero-title">Meine Beratung</h1>
      </div>
      <div className="hero-img">
        <div id="image-mental"></div>
	    </div>
      <div className="text-box-container">
        <div className="text-box-1">
          <p className="text-box-p">Du wünschst dir ein ausgeglichenes und aktives Leben?</p>
        </div>
        <div className="text-box-2">
          <p className="text-box-p">Du hast eine schwierige Situation, die du verändern möchtest?</p>
        </div>
        <div className="text-box-3">
          <p className="text-box-p">Du möchtest lernen, wie du dich effektiv entspannen kannst?</p>
        </div>
        <div className="text-box-4">
          <p className="text-box-p">Du sehnst dich nach mehr Selbstvertrauen?</p>
        </div>
      </div>
      <div className="subtitle-container">
        <h3 className="subtitle">Dann hilft dir mein Coaching</h3>
      </div>
      <div className="youtube">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/3zYFWDJ26vM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div className="beratung-content">
        <div className="beratung-container">
        <h4 className="beratung-title">Ablauf der Beratung</h4>
        <p className="beratung-text">Gemeinsam untersuchen wir dein Thema und kommen so zu einer objektiven, klaren Sichtweise.
          Zusammen finden wir Lösungen, um deine Wünsche und Ziele zu erreichen. Systematisch und
          akribisch arbeiten wir dann auf deine Ziele hin.</p>
        <p className="beratung-text">Dabei unterstütze und motiviere ich dich tatkräftig und falls du einen Rückzug brauchst, biete ich dir
          einen sicheren Hafen.</p>
        </div>
        <div className="beratung-container">
        <h4 className="beratung-title">Die Art der Beratung</h4>
        <p className="beratung-text">In meiner Beratung kannst du sein, wie du bist. Ich schenke dir bedingungslose Wertschätzung und
          bin empathisch. Ich sehe nicht die Unzulänglichkeiten der Menschen, sondern deren Stärken. Aktiv
          höre ich dir zu und du hast die Möglichkeit, alles, was dich beschäftigt, zu teilen und loszuwerden.</p>
        <p className="beratung-text">Ich gestalte meine Beratung kreativ und passe sie individuell auf dich an. So machen wir zusammen
          interessante Übungen, die dir helfen, dein Leben so zu kreieren, wie du es dir wünschst.</p>
        </div>
      </div>
        <div className="beratung-beispiele">
        <h4 className="beratung-title-beispiele">Beispiele in der meine Beratung helfen kann</h4>
        <div className='list'>
        <ul className="beratung-beispiele-list">
          <li className="beratung-beispiele-item">Aus dem alten Schema ausbrechen und eine gedeihliche Zukunft antreten</li>
          <li className="beratung-beispiele-item">Träume und Ziele angehen</li>
          <li className="beratung-beispiele-item">Tiefliegende Wünsche aufdecken und diese fördern</li>
          <li className="beratung-beispiele-item">Schwierige Entscheidungen treffen</li>
          <li className="beratung-beispiele-item">Blockaden aufdecken und diese lösen</li>
        </ul>
        <ul className="beratung-beispiele-list">
        <li className="beratung-beispiele-item">Herausforderungen mutig und entspannt anpacken</li>
          <li className="beratung-beispiele-item">Zweifel ablegen und Selbstvertrauen gewinnen</li>
          <li className="beratung-beispiele-item">Lernen, wie man sich entspannt und gelassener wird</li>
          <li className="beratung-beispiele-item">Den Zugang zu deinen Ressourcen finden</li>
        </ul>
        </div>
        </div>
        <div className="text-container">
        <h4 className="beratung-title-gespraech">Erstgespräch</h4>
        <p className="beratung-text">Bei einem unverbindlichen Erstgespräch können wir uns gegenseitig kennenlernen und gerne stelle
          ich dir meine Beratung und meine Vorgehensweise vor, welche ich auf dich auslegen werde.<br></br><br></br> Bei einem Telefonat oder E-Mail gebe ich gerne weitere Auskunft.</p>
          
          <a className='button-link' href="/kontakt"><button className="button-kontakt">Kontakt</button></a>
       
      </div>
    </section>
  )
}

export default Mentaltraining