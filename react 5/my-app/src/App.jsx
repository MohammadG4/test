import React from 'react'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./Home"
import Docs from "./components/Docs"

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/group/:id' element={<Docs />}/>


    </Routes>
    
    </BrowserRouter>
  )
}

export default App