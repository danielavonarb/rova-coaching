import React from 'react'

function Header(){
  return (
  <header>
    <div className = "logo">
      <img src = "./images/Logo_RGB.svg" id = "logo" alt=""></img>
    </div>
    <nav className = 'nav'>
      <ul className = "nav__list">
        <li className = "nav__item"><a href = "/mentaltraining" className = "nav__link">Mentaltraining</a></li>
        <li className = "nav__item"><a href = "/about" className = "nav__link">Über mich</a></li>
        <li className = "nav__item"><a href = "/kontakt" className = "nav__link">Kontakt</a></li>
        <li className = "nav__item"><a href = "/infos" className = "nav__link">Weitere Infos</a></li>
      </ul>
    </nav>
  </header>
  )
}

export default Header