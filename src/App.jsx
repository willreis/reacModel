import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css'
import Menu from './components/Menu'
import Home from './pages/Home/Home'
import Artistas from './pages/Artistas/Artistas'
import Contato from './pages/Contato/Contato'

export default function App() {
  
  return (
    <div className="App">
      <Router>
      <Menu />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/artistas" element={<Artistas />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </Router>
    </div>
  )
}
