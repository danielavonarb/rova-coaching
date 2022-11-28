import React, { useState } from 'react'

function NavKontakt(){
  const [navbarOpen, setNavbarOpen] = useState(false)

  function handleToggle(){
    setNavbarOpen(!navbarOpen)
    document.body.classList.toggle('nav-open')   
  }

  function handleClick(){
    setNavbarOpen(!navbarOpen)
    document.body.classList.remove('nav-open')  
  }


  return (
    <div id="nav-header" className = {navbarOpen ? 'non_sticky' : null}>
      <button onClick={handleToggle} className = "nav-toggle" aria-label = "toggle navigation">
      <span className = "hamburger"></span>
      </button>
    <nav className = 'nav-pages'>
      <ul className = "nav__list-pages">
        <li className = "nav__item-pages" id="home-pages"><a onClick={handleClick} href = "/" className = "nav__link-pages">Home</a></li>
        <li className = "nav__item-pages" id="about-pages"><a onClick={handleClick} href = "/coaching" className = "nav__link-pages">Mentaltraining</a></li>
        <li className = "nav__item-pages" id="kontakt-pages"><a onClick={handleClick} href = "/about" className = "nav__link-pages">Über mich</a></li>
        <li className = "nav__item-pages" id="workshops-pages"><a onClick={handleClick} href = "/workshops" className = "nav__link-pages">Workshops</a></li>
      </ul>
    </nav>
    </div>
  )
}

export default NavKontakt