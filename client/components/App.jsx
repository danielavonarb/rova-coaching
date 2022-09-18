import React, { useState, useEffect } from 'react'
// import { getGreeting } from '../apiClient'
import { Routes, Route } from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import Coaching from './Coaching'
import About from './About'
import Kontakt from './Kontakt'
import Workshops from './Workshops'
import Footer from './Footer'

const App = () => {


  return (
    <>
      {/* <Header /> */}
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/coaching' element={<Coaching />} />
          <Route path='/about' element={<About />} />
          <Route path='/kontakt' element={<Kontakt />} />
          <Route path='/workshops' element={<Workshops />} />
        </Routes>
      {/* <Footer /> */}
    </>
  )
}

export default App
