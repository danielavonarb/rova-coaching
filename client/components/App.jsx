import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './Home'
import Coaching from './Coaching'
import About from './About'
import Kontakt from './Kontakt'
import Workshops from './Workshops'

const App = () => {

  return (
    <>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/coaching' element={<Coaching />} />
          <Route path='/about' element={<About />} />
          <Route path='/kontakt' element={<Kontakt />} />
          <Route path='/workshops' element={<Workshops />} />
        </Routes>
    </>
  )
}

export default App
