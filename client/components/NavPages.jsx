import React from 'react'

function NavPages(){
  return (
    <nav className = 'nav-pages'>
      <ul className = "nav__list-pages">
        <li className = "nav__item-pages" id="training-pages"><a href = "/mentaltraining" className = "nav__link-pages">Mentaltraining</a></li>
        <li className = "nav__item-pages" id="about-pages"><a href = "/about" className = "nav__link-pages">Über mich</a></li>
        <li className = "nav__item-pages" id="kontakt-pages"><a href = "/kontakt" className = "nav__link-pages">Kontakt</a></li>
        <li className = "nav__item-pages" id="infos-pages"><a href = "/infos" className = "nav__link-pages">Weitere Infos</a></li>
      </ul>
    </nav>
  )
}

export default NavPages