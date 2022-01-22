import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Provider from './context/Provider'
import Home from './page/Home'
import Single from './page/Single'

function App() {
  useEffect(() => {})
  return (
    <BrowserRouter>
      <Provider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id/:title" element={<Single />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  )
}

export default App
