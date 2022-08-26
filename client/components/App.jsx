import React, { useState, useEffect } from 'react'
// import { getGreeting } from '../apiClient'
import { Routes, Route } from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import Mentaltraining from './Mentaltraining'
import About from './About'
import Kontakt from './Kontakt'
import Infos from './Infos'
import Footer from './Footer'

const App = () => {


  return (
    <>
      <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/mentaltraining' element={<Mentaltraining />} />
          <Route path='/about' element={<About />} />
          <Route path='/kontakt' element={<Kontakt />} />
          <Route path='/infos' element={<Infos />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App
