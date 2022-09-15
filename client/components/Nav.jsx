import React from 'react'

function Nav(){
  return (
    <nav className = 'nav'>
      <ul className = "nav__list">
        <li className = "nav__item" id="training"><a href = "/mentaltraining" className = "nav__link">Mentaltraining</a></li>
        <li className = "nav__item" id="about"><a href = "/about" className = "nav__link">Über mich</a></li>
        <li className = "nav__item" id="kontakt"><a href = "/kontakt" className = "nav__link">Kontakt</a></li>
        <li className = "nav__item" id="infos"><a href = "/infos" className = "nav__link">Weitere Infos</a></li>
      </ul>
    </nav>
  )
}

export default Nav