import React, { useState } from 'react'

function NavPages(props){
  const body = props
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [about, setAbout] = useState('Über mich')
  const [kontakt, setKontakt] = useState('Kontakt')
  const [workshops, setWorkshops] = useState('Workshops')

  if (about = 'Über mich'){
    setAbout('Beratung')
  }

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
        <li className = "nav__item-pages" id="about-pages"><a onClick={handleClick} href = "/about" className = "nav__link-pages">{about}</a></li>
        <li className = "nav__item-pages" id="kontakt-pages"><a onClick={handleClick} href = "/kontakt" className = "nav__link-pages">{kontakt}</a></li>
        <li className = "nav__item-pages" id="workshops-pages"><a onClick={handleClick} href = "/workshops" className = "nav__link-pages">{workshops}</a></li>
      </ul>
    </nav>
    </div>
  )
}

export default NavPages