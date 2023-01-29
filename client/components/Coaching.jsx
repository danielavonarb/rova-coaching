import React from 'react'
import { Link } from 'react-router-dom'


import NavPages from './NavPages'
import Header from './Header'
import Footer from './Footer'


function Coaching(){
  return (
    <section id="body-mentaltraining">
      <Header />
      <NavPages />
      <div className="hero">
        <h1 className="hero-title">Psychosoziale Beratung
          und Mentaltraining</h1>
      </div>
      <div className="hero-img">
        <div id="image-mental"></div>
	    </div>
      <div className="text-box-container">
        <div className="text-box-1">
          <p className="text-box-p">Du wünschst dir ein ausgeglichenes und aktives Leben?</p>
        </div>
        <div className="text-box-2">
          <p className="text-box-p">Du hast eine Krise zu überwinden?</p>
        </div>
        <div className="text-box-3">
          <p className="text-box-p">Du möchtest lernen, wie du dich effektiv entspannen kannst?</p>
        </div>
        <div className="text-box-4">
          <p className="text-box-p">Du sehnst dich nach mehr Selbstvertrauen?</p>
        </div>
      </div>
      <div className="subtitle-container">
        <h3 className="subtitle">Dann hilft dir meine Psychosoziale Beratung und mein Mentaltraining</h3>
      </div>
      <div className="youtube">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/9pEvDWimbbU" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
      </div>
      <div className="beratung-content">
        <div className="beratung-container">
        <h4 className="beratung-title">Ablauf der Beratung und des Trainings</h4>
        <p className="beratung-text">Gemeinsam erforschen wir dein Thema und kommen so zu einer
          objektiven und klaren Sichtweise. Zusammen finden wir Lösungen, um
          deine Wünsche und Ziele zu erreichen. Systematisch und akribisch
          arbeiten wir dann auf deine Ziele hin. Sehr gerne begleite ich dich auf
          deinem Weg.</p>
        <p className="beratung-text">Dabei unterstütze und motiviere ich dich tatkräftig. Falls du eine Phase des
          Innehaltens benötigst, biete ich dir die Gelegenheit, durchzuatmen.</p>
        </div>
        <div className="beratung-container">
        <h4 className="beratung-title">Die Art der Beratung und des Trainings</h4>
        <p className="beratung-text">In meiner Beratung darfst du authentisch, offen und hemmungslos sein
          und dich frei und entspannt fühlen. Ich schenke dir bedingungslose
          Wertschätzung und bin empathisch. Aktives Zuhören ist eine
          Kernkompetenz von mir und du hast die Möglichkeit, alles was dich
          beschäftigt, zu teilen und loszuwerden.</p>
        <p className="beratung-text">Ich gestalte die Beratung kreativ und passe sie deinen Bedürfnissen
          individuell auf dich an. So machen wir zusammen interessante Übungen,
          die dir helfen, dein Leben in herausfordernden Situationen zu meistern.<br></br><br></br>
          
          Der Geist und Körper wirken wechselseitig aufeinander, darum arbeiten
          wir auf kognitiver- und körperlicher Ebene. So erreichen wir ein
          ganzheitliches und optimales Programm.<br></br><br></br>
          
          Die Beratungen finden nicht nur in meiner Praxis, sondern auch draussen
          in der Natur statt. So machen wir Übungen an einem Strand an der Emme
          oder im Wald und so kannst du die inspirierende Wirkung der Natur auf
          dich wirken lassen.</p>
        </div>
      </div>
        <div className="beratung-beispiele">
        <h4 className="beratung-title-beispiele">Beispiele in der meine Beratung helfen kann</h4>
        <div className='list'>
        <ul className="beratung-beispiele-list">
          <li className="beratung-beispiele-item">Kriesenbewältigung</li>
          <li className="beratung-beispiele-item">Aus dem alten Schema ausbrechen und eine gedeihliche Zukunft antreten</li>
          <li className="beratung-beispiele-item">Träume und Ziele verwirklichen</li>
          <li className="beratung-beispiele-item">Tiefliegende Wünsche aufdecken und diese fördern</li>
          <li className="beratung-beispiele-item">Schwierige Entscheidungen treffen</li>
          <li className="beratung-beispiele-item">Blockaden aufdecken und diese lösen</li>
          <li className="beratung-beispiele-item">Negative Gedanken loswerden</li>
          <li className="beratung-beispiele-item">Resilienz aufbauen</li>
        </ul>
        <ul className="beratung-beispiele-list">
        <li className="beratung-beispiele-item">Herausforderungen mutig und entspannt anpacken</li>
          <li className="beratung-beispiele-item">Selbstvertrauen gewinnen</li>
          <li className="beratung-beispiele-item">Individuelles, angepasstes Stressmanagement</li>
          <li className="beratung-beispiele-item">Entspannung und Gelassenheit</li>
          <li className="beratung-beispiele-item">Den Zugang zu deinen Ressourcen finden und diese fördern</li>
          <li className="beratung-beispiele-item">Tiefliegende Wünsche aufdecken und diese realisieren</li>
        </ul>
        </div>
        </div>
        <div className="text-container">
        <h4 className="beratung-title-gespraech">Erstgespräch</h4>
        <p className="beratung-text-gespraech">Bei einem unverbindlichen Erstgespräch können wir uns gegenseitig kennenlernen und gerne stelle
          ich dir meine Beratung und meine Vorgehensweise vor, welche ich auf dich auslegen werde.<br></br><br></br> Bei einem Telefonat oder E-Mail gebe ich gerne weitere Auskunft.</p>
          
          <a className='button-link' href="/kontakt"><button className="button-kontakt">Kontakt</button></a>
       
      </div>
      <Footer />
    </section>
  )
}



export default Coaching