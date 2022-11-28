import React from 'react'

function Nav(){
  return (
    <nav className = 'nav'>
      <ul className = "nav__list">
        <li className = "nav__item" id="training"><a href = "/coaching" className = "nav__link">Mentaltraining</a></li>
        <li className = "nav__item" id="about"><a href = "/about" className = "nav__link">Über mich</a></li>
        <li className = "nav__item" id="kontakt"><a href = "/kontakt" className = "nav__link">Kontakt</a></li>
        <li className = "nav__item" id="workshops"><a href = "/workshops" className = "nav__link">Workshops</a></li>
      </ul>
    </nav>
  )
}

export default Nav